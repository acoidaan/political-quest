import type { ConsistencyResult, Question, UserAnswer } from "@/lib/types";
import { MAX_ANSWER } from "./constants";

/**
 * Consistencia (docs/ARQUITECTURA.md §3.5).
 *
 * Sobre pares declarados en `relatedTo`:
 * - "inverse": lo esperable es r_A ≈ −r_B → tensión = |u_A + u_B| / 2
 * - "aligned": lo esperable es r_A ≈ r_B  → tensión = |u_A − u_B| / 2
 * con u = r/3 ∈ [-1,1], tensión ∈ [0,1].
 *
 * El índice de inconsistencia es la media de tensiones. Se usa ÚNICAMENTE
 * para ampliar la incertidumbre de los resultados, nunca para penalizar la
 * puntuación del usuario.
 */
export function calculateConsistency(
  questions: Question[],
  answers: Record<string, UserAnswer>
): ConsistencyResult {
  const byId = new Map(questions.map((q) => [q.id, q]));
  const seen = new Set<string>();
  const tensions: { a: string; b: string; tension: number }[] = [];

  for (const q of questions) {
    for (const rel of q.relatedTo ?? []) {
      const key = [q.id, rel.id].sort().join("::");
      if (seen.has(key)) continue;
      seen.add(key);

      const partner = byId.get(rel.id);
      if (!partner) continue;
      const ansA = answers[q.id];
      const ansB = answers[rel.id];
      if (!ansA || !ansB || ansA.value === "skipped" || ansB.value === "skipped")
        continue;

      const uA = ansA.value / MAX_ANSWER;
      const uB = ansB.value / MAX_ANSWER;
      const tension =
        rel.expected === "inverse" ? Math.abs(uA + uB) / 2 : Math.abs(uA - uB) / 2;
      tensions.push({ a: q.id, b: rel.id, tension });
    }
  }

  if (tensions.length === 0) {
    return { inconsistency: 0, pairsEvaluated: 0, flaggedPairs: [] };
  }

  const inconsistency =
    tensions.reduce((s, t) => s + t.tension, 0) / tensions.length;

  return {
    inconsistency,
    pairsEvaluated: tensions.length,
    flaggedPairs: tensions
      .filter((t) => t.tension >= 0.5)
      .sort((a, b) => b.tension - a.tension),
  };
}

/**
 * Factor multiplicador de incertidumbre derivado de la inconsistencia.
 * Acotado a +50% para que no explote.
 */
export function inconsistencyMultiplier(inconsistency: number): number {
  return 1 + Math.min(0.5, inconsistency);
}
