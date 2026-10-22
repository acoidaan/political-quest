import type { Party, PartyId } from "@/lib/types";

/**
 * Partidos configurables. Añadir un partido = añadir una entrada aquí y
 * posiciones (con fuente) en las preguntas donde exista evidencia.
 * Los colores identificativos SOLO se usan tras la revelación explícita
 * (nunca durante el test) y como elemento secundario.
 */
export const PARTIES: Party[] = [
  {
    id: "pp",
    name: "PP",
    fullName: "Partido Popular",
    color: "#1e6bb8",
    active: true,
    positionCycle: "2023-2026",
  },
  {
    id: "psoe",
    name: "PSOE",
    fullName: "Partido Socialista Obrero Español",
    color: "#d13a3a",
    active: true,
    positionCycle: "2023-2026",
  },
  {
    id: "vox",
    name: "VOX",
    fullName: "VOX",
    color: "#5aa831",
    active: true,
    positionCycle: "2023-2026",
  },
  {
    id: "sumar",
    name: "SUMAR",
    fullName: "Sumar",
    color: "#c8386f",
    active: true,
    positionCycle: "2023-2026",
  },
  // Preparados para fases posteriores (inactivos hasta tener posiciones
  // verificadas): podemos, erc, junts, ehbildu, pnv, bng, cc, upn.
];

export const ACTIVE_PARTIES = PARTIES.filter((p) => p.active);

export const PARTY_BY_ID: Record<PartyId, Party> = Object.fromEntries(
  PARTIES.map((p) => [p.id, p])
);
