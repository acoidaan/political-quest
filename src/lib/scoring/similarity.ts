import type {
  CategoryAgreement,
  PartyId,
  PartySimilarity,
  PositionStatus,
  Question,
  QuestionComparison,
  UserAnswer,
} from "@/lib/types";
import { POSITION_VALUE } from "@/lib/types";
import { MAX_ANSWER, PERSONAL_IMPORTANCE_MULT, uncertaintyFloor } from "./constants";
import { weightedStats } from "./uncertainty";
import { currentPosition } from "./positions";

export interface SimilarityOptions {
  /**
   * true ⇒ acepta posiciones con needsVerification (SOLO para dataset demo,
   * con aviso visible en la UI). En producción debe ser false.
   */
  allowUnverified?: boolean;
  /** Fecha (ISO) en la que se evalúan las posiciones vigentes. Por defecto, hoy. */
  asOf?: string;
}

const NON_COMPARABLE: PositionStatus[] = [
  "insufficient_evidence",
  "neutral_or_unclear",
];

/**
 * Similitud usuario-partido (docs/ARQUITECTURA.md §3.6).
 *
 * Método: coincidencia media ponderada por pregunta.
 *   agreement_q = 1 − |r/3 − p| / 2  ∈ [0,1]
 *   weight_q    = importancia_editorial · importancia_personal · confianza_fuente
 *
 * Solo cuentan las preguntas COMPARABLES: el usuario respondió con la escala
 * (no "sin información") Y el partido tiene posición distinta de
 * insufficient_evidence / neutral_or_unclear. Un partido sin posición en una
 * pregunta no compite en ella: no se le penaliza (§15 del briefing).
 *
 * Elegido frente a cosine similarity (ignora el desplazamiento absoluto) y
 * distancia euclídea global (dominada por los ejes con más preguntas); la
 * justificación completa está en /metodologia.
 */
export function calculatePartySimilarity(
  questions: Question[],
  answers: Record<string, UserAnswer>,
  partyId: PartyId,
  options: SimilarityOptions = {}
): PartySimilarity {
  const comparisons: QuestionComparison[] = [];
  const agreements: number[] = [];
  const weights: number[] = [];
  let totalAnswered = 0;

  for (const q of questions) {
    const answer = answers[q.id];
    if (!answer || answer.value === "skipped") continue;
    totalAnswered++;

    const position = currentPosition(q, partyId, options.asOf);
    if (!position) continue;
    if (NON_COMPARABLE.includes(position.status)) continue;
    if (position.needsVerification && !options.allowUnverified) continue;

    const partyValue =
      position.value ??
      POSITION_VALUE[position.status as keyof typeof POSITION_VALUE];
    const userValue = answer.value / MAX_ANSWER;
    const agreement = 1 - Math.abs(userValue - partyValue) / 2;
    const weight =
      q.importance *
      PERSONAL_IMPORTANCE_MULT[answer.personalImportance ?? "normal"] *
      position.confidence;

    agreements.push(agreement);
    weights.push(weight);
    comparisons.push({
      questionId: q.id,
      category: q.category,
      userValue: answer.value,
      partyStatus: position.status,
      partyValue,
      agreement,
      source: position.source,
      explanation: position.explanation,
    });
  }

  if (comparisons.length === 0) {
    return {
      party: partyId,
      similarity: 0,
      uncertainty: 50,
      comparableCount: 0,
      totalAnswered,
      topAgreements: [],
      topDisagreements: [],
      perQuestion: [],
    };
  }

  const stats = weightedStats(agreements, weights);
  const similarity = Math.round(stats.mean * 1000) / 10;
  const floor = uncertaintyFloor(stats.effectiveN) / 2; // escala [0,100] de agreement
  const uncertainty = Math.min(
    25,
    Math.max(floor, Number.isFinite(stats.se) ? 1.96 * stats.se * 100 : 25)
  );

  const byCategory = aggregateByCategory(comparisons);

  return {
    party: partyId,
    similarity,
    uncertainty: Math.round(uncertainty * 10) / 10,
    comparableCount: comparisons.length,
    totalAnswered,
    topAgreements: byCategory
      .filter((c) => c.agreement >= 0.6)
      .sort((a, b) => b.agreement - a.agreement)
      .slice(0, 4),
    topDisagreements: byCategory
      .filter((c) => c.agreement <= 0.45)
      .sort((a, b) => a.agreement - b.agreement)
      .slice(0, 4),
    perQuestion: comparisons.sort((a, b) => b.agreement - a.agreement),
  };
}

function aggregateByCategory(comparisons: QuestionComparison[]): CategoryAgreement[] {
  const groups = new Map<string, number[]>();
  for (const c of comparisons) {
    const list = groups.get(c.category) ?? [];
    list.push(c.agreement);
    groups.set(c.category, list);
  }
  return Array.from(groups.entries()).map(([category, values]) => ({
    category,
    agreement: values.reduce((s, v) => s + v, 0) / values.length,
    n: values.length,
  }));
}
