import type {
  PartyId,
  PartyPosition,
  PositionStatus,
  Question,
} from "@/lib/types";

/**
 * Helpers del dataset DEMO.
 *
 * TODO EL CONTENIDO DE ESTA CARPETA ES DE DEMOSTRACIÓN (§63 del briefing):
 * las preguntas están redactadas con la metodología real (propuestas
 * concretas, trade-offs, lenguaje neutral) y las posiciones de partidos son
 * PROVISIONALES Y NO VERIFICADAS: aproximaciones de trabajo pendientes de
 * contraste con fuentes primarias en la Fase 2. Ninguna posición de esta
 * carpeta puede mostrarse como real: todas llevan needsVerification: true y
 * la UI muestra un aviso permanente donde aparecen partidos o fuentes.
 */

export const DEMO_SOURCE = {
  type: "demo" as const,
  document:
    "Dato de demostración — pendiente de verificación con fuente primaria (Fase 2)",
  date: "2026-01-01",
};

/** Posición demo de un partido: SIEMPRE needsVerification: true. */
export function pos(
  party: PartyId,
  status: PositionStatus,
  explanation?: string,
  confidence = 0.6
): PartyPosition {
  return {
    party,
    status,
    source: DEMO_SOURCE,
    confidence,
    validFrom: "2023-07-23",
    explanation,
    needsVerification: true,
  };
}

type DemoQuestionInput = Omit<
  Question,
  "status" | "demo" | "needsVerification" | "updatedAt" | "partyPositions"
> & { partyPositions?: PartyPosition[] };

/** Pregunta demo: estado needs_source, flags demo/needsVerification fijados. */
export function dq(input: DemoQuestionInput): Question {
  return {
    partyPositions: [],
    ...input,
    status: "needs_source",
    demo: true,
    needsVerification: true,
    updatedAt: "2026-08-09",
  };
}
