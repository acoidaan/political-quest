import type { AxisScore, PartyId, Question, UserAnswer } from "@/lib/types";
import { POSITION_VALUE } from "@/lib/types";
import { calculateAxisScores } from "./axes";

/**
 * "Los partidos también hacen el test" (§46): construye el vector de
 * respuestas de un partido a partir EXCLUSIVAMENTE de sus posiciones con
 * evidencia (posición p ∈ [-1,1] → respuesta equivalente p·3) y lo puntúa con
 * el mismo motor que al usuario. Donde no hay evidencia, no hay respuesta.
 *
 * Se usa únicamente en la capa de comparación, tras la revelación explícita.
 */
export function calculatePartyAxisScores(
  questions: Question[],
  partyId: PartyId,
  options: { allowUnverified?: boolean } = {}
): AxisScore[] {
  const answers: Record<string, UserAnswer> = {};
  for (const q of questions) {
    const position = q.partyPositions.find((p) => p.party === partyId);
    if (!position) continue;
    if (
      position.status === "insufficient_evidence" ||
      position.status === "neutral_or_unclear"
    )
      continue;
    if (position.needsVerification && !options.allowUnverified) continue;

    const value =
      position.value ??
      POSITION_VALUE[position.status as keyof typeof POSITION_VALUE];
    const scaled = Math.round(value * 3);
    answers[q.id] = {
      questionId: q.id,
      value: Math.max(-3, Math.min(3, scaled)) as UserAnswer["value"] & number,
      answeredAt: position.validFrom,
    };
  }
  return calculateAxisScores(questions, answers);
}
