import type { PartyId, PartyPosition, Question } from "@/lib/types";

/** Fecha ISO (YYYY-MM-DD) de hoy; las fechas ISO se comparan como texto. */
export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function isValidAt(p: PartyPosition, asOf: string): boolean {
  return p.validFrom <= asOf && (!p.validUntil || p.validUntil > asOf);
}

/**
 * Posición vigente de un partido en una pregunta (docs/ARQUITECTURA.md §8.6).
 *
 * Las posiciones se versionan, nunca se sobrescriben: cuando un partido publica
 * un programa nuevo se añade una posición con su `validFrom` y la anterior
 * recibe `validUntil`. Aquí se elige la vigente en `asOf`; si por error hubiera
 * varias vigentes, gana la más reciente.
 */
export function currentPosition(
  question: Question,
  partyId: PartyId,
  asOf: string = todayIso()
): PartyPosition | undefined {
  let best: PartyPosition | undefined;
  for (const p of question.partyPositions) {
    if (p.party !== partyId || !isValidAt(p, asOf)) continue;
    if (!best || p.validFrom > best.validFrom) best = p;
  }
  return best;
}

/** Una posición vigente por partido (la más reciente de cada uno). */
export function currentPositions(
  question: Question,
  asOf: string = todayIso()
): PartyPosition[] {
  const parties = new Set(question.partyPositions.map((p) => p.party));
  return Array.from(parties)
    .map((party) => currentPosition(question, party, asOf))
    .filter((p): p is PartyPosition => p !== undefined);
}
