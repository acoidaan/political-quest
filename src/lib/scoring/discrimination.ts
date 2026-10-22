import type { Question } from "@/lib/types";
import { POSITION_VALUE } from "@/lib/types";

/**
 * Capacidad discriminativa de una pregunta (§47 del briefing): dispersión de
 * las posiciones de los partidos con posición clara. Si todos los partidos
 * coinciden, la pregunta distingue poco (score → 0); posiciones enfrentadas
 * dan score → 1.
 *
 * IMPORTANTE: este score solo se usa para SELECCIONAR preguntas, jamás para
 * puntuar ideológicamente al usuario (separación §67-68).
 */
export function discriminationScore(
  question: Question,
  opts: { allowUnverified?: boolean } = {}
): number {
  const values = question.partyPositions
    .filter(
      (p) =>
        p.status !== "insufficient_evidence" &&
        p.status !== "neutral_or_unclear" &&
        (!p.needsVerification || opts.allowUnverified)
    )
    .map((p) => p.value ?? POSITION_VALUE[p.status as keyof typeof POSITION_VALUE]);

  // Sin datos suficientes: valor neutro para no premiar ni castigar.
  if (values.length < 2) return 0.5;

  const mean = values.reduce((s, v) => s + v, 0) / values.length;
  const variance =
    values.reduce((s, v) => s + (v - mean) * (v - mean), 0) / values.length;
  // sd máxima posible con valores en [-1,1] es 1 → sd ya está en [0,1].
  return Math.min(1, Math.sqrt(variance));
}
