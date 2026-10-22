import type { AxisId, PartyId, Question } from "@/lib/types";
import { AXIS_IDS } from "./axes";
import { discriminationScore } from "@/lib/scoring/discrimination";
import { POSITION_VALUE } from "@/lib/types";

/**
 * Informe de balance del dataset (§24 del briefing): comprobaciones
 * automáticas de que ningún partido ni polo ideológico domina artificialmente
 * el cuestionario.
 */

export interface BalanceReport {
  totalQuestions: number;
  demoCount: number;
  verifiedCount: number;
  /** Nº de preguntas donde cada partido tiene posición clara. */
  partyPositionCounts: Record<PartyId, number>;
  /** Nº de posiciones favorables (>0) por partido: detección de sesgo de formulación. */
  partySupportCounts: Record<PartyId, number>;
  /** Distribución de polaridad de las preguntas (acquiescence bias). */
  polarity: { positive: number; negative: number };
  /** Cobertura de ejes: preguntas con |peso| ≥ 0.3 por eje. */
  axisCoverage: Record<AxisId, number>;
  /** Categorías con nº de preguntas. */
  categoryCoverage: Record<string, number>;
  /** Media del discriminationScore del pool. */
  meanDiscrimination: number;
  /** Preguntas con discriminación < 0.2 (todos los partidos casi coinciden). */
  lowDiscriminationIds: string[];
  /** Suma de pesos firmados por eje: un valor muy alejado de 0 indica sesgo de formulación. */
  signedWeightBalance: Record<AxisId, number>;
  warnings: string[];
}

export function generateBalanceReport(questions: Question[]): BalanceReport {
  const partyPositionCounts: Record<string, number> = {};
  const partySupportCounts: Record<string, number> = {};
  const polarity = { positive: 0, negative: 0 };
  const axisCoverage = Object.fromEntries(AXIS_IDS.map((a) => [a, 0])) as Record<
    AxisId,
    number
  >;
  const signedWeightBalance = Object.fromEntries(
    AXIS_IDS.map((a) => [a, 0])
  ) as Record<AxisId, number>;
  const categoryCoverage: Record<string, number> = {};
  const lowDiscriminationIds: string[] = [];
  let discSum = 0;

  for (const q of questions) {
    polarity[q.polarity]++;
    categoryCoverage[q.category] = (categoryCoverage[q.category] ?? 0) + 1;
    for (const axis of AXIS_IDS) {
      const w = q.weights[axis] ?? 0;
      if (Math.abs(w) >= 0.3) axisCoverage[axis]++;
      signedWeightBalance[axis] += w;
    }
    for (const p of q.partyPositions) {
      if (p.status === "insufficient_evidence" || p.status === "neutral_or_unclear")
        continue;
      partyPositionCounts[p.party] = (partyPositionCounts[p.party] ?? 0) + 1;
      const v = p.value ?? POSITION_VALUE[p.status as keyof typeof POSITION_VALUE];
      if (v > 0) partySupportCounts[p.party] = (partySupportCounts[p.party] ?? 0) + 1;
    }
    const d = discriminationScore(q, { allowUnverified: true });
    discSum += d;
    if (d < 0.2) lowDiscriminationIds.push(q.id);
  }

  const warnings: string[] = [];
  const counts = Object.values(partyPositionCounts);
  if (counts.length > 0) {
    const max = Math.max(...counts);
    const min = Math.min(...counts);
    if (min < max * 0.6)
      warnings.push(
        "Desequilibrio de cobertura entre partidos: el menos cubierto tiene menos del 60% de posiciones que el más cubierto."
      );
  }
  const polRatio =
    polarity.positive / Math.max(1, polarity.positive + polarity.negative);
  if (polRatio < 0.35 || polRatio > 0.65)
    warnings.push(
      `Desequilibrio de polaridad (${Math.round(polRatio * 100)}% positivas): riesgo de acquiescence bias.`
    );
  for (const axis of AXIS_IDS) {
    if (axisCoverage[axis] < 5)
      warnings.push(`Eje ${axis} con cobertura baja (${axisCoverage[axis]} preguntas).`);
    const norm = signedWeightBalance[axis] / Math.max(1, axisCoverage[axis]);
    if (Math.abs(norm) > 0.35)
      warnings.push(
        `Eje ${axis}: las preguntas se formulan mayoritariamente desde un mismo polo (balance ${norm.toFixed(2)}).`
      );
  }

  return {
    totalQuestions: questions.length,
    demoCount: questions.filter((q) => q.demo).length,
    verifiedCount: questions.filter((q) => !q.demo).length,
    partyPositionCounts,
    partySupportCounts,
    polarity,
    axisCoverage,
    categoryCoverage,
    meanDiscrimination: questions.length > 0 ? discSum / questions.length : 0,
    lowDiscriminationIds,
    signedWeightBalance,
    warnings,
  };
}
