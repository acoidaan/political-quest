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
    positionCycle: "2026 (29N)",
  },
  {
    id: "psoe",
    name: "PSOE",
    fullName: "Partido Socialista Obrero Español",
    color: "#d13a3a",
    active: true,
    positionCycle: "2026 (29N)",
  },
  {
    id: "vox",
    name: "VOX",
    fullName: "VOX",
    color: "#5aa831",
    active: true,
    positionCycle: "2026 (29N)",
  },
  {
    id: "sumar",
    name: "SUMAR",
    fullName: "Sumar",
    color: "#c8386f",
    active: false,
    positionCycle: "2023-2026",
    notes:
      "Concurre al 29N dentro de Frente Amplio, que lo sustituye en la comparación desde la incorporación de su programa (2026-11-17). Sus posiciones del 23J-2023 se conservan como historial.",
  },
  {
    id: "frente-amplio",
    name: "Frente Amplio",
    fullName: "Frente Amplio (Movimiento Sumar, IU, Más Madrid y Comuns)",
    // Mismos colores ya validados para Sumar, que deja de mostrarse.
    color: "#c8386f",
    active: true,
    positionCycle: "2026 (29N)",
  },
  // Preparados para fases posteriores (inactivos hasta tener posiciones
  // verificadas): podemos, erc, junts, ehbildu, pnv, bng, cc, upn.
];

export const ACTIVE_PARTIES = PARTIES.filter((p) => p.active);

export const PARTY_BY_ID: Record<PartyId, Party> = Object.fromEntries(
  PARTIES.map((p) => [p.id, p])
);
