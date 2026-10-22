import type {
  PartyId,
  PartyPosition,
  PositionStatus,
  Question,
  Source,
} from "@/lib/types";

/**
 * DATASET VERIFICADO — Fase 2.
 *
 * Corpus de fuentes primarias verificado el 2026-08-09:
 * - PP: «Programa Electoral. Un proyecto al servicio de un gran país» (23J-2023,
 *   112 pp.), descargado de pp.es.
 * - PSOE: «Programa Electoral. Elecciones Generales 23 de julio de 2023»
 *   (272 pp.), URL oficial de psoe.es; contenido obtenido vía snapshot de
 *   Wayback Machine (2023-07-09) por bloqueo anti-bots del sitio.
 * - VOX: «Programa electoral para las Elecciones Generales del 23J de 2023»
 *   (178 pp.), URL oficial de voxespana.es; contenido vía snapshot de Wayback
 *   Machine (2023-11-16).
 * - SUMAR: «Un programa para ti» (23J-2023, 182 pp.), URL oficial de
 *   movimientosumar.es; contenido vía snapshot de Wayback Machine (2023-07-12).
 *
 * Reglas:
 * - Cada posición cita PÁGINA DEL PDF y un fragmento literal (con guiones de
 *   salto de línea normalizados).
 * - Posición no localizada en el corpus ⇒ insufficient_evidence explícito
 *   (ne()); JAMÁS se rellena con conocimiento general.
 * - Posiciones derivadas (p. ej. la inversa de una derogación) llevan
 *   explanation y confianza reducida.
 * - Ciclo de validez: 2023-2026 (validFrom 2023-07-23, fecha electoral).
 */

export const VERIFIED_AT = "2026-08-09";

const PROGRAMS: Record<PartyId, Omit<Source, "page">> = {
  pp: {
    type: "electoral_program",
    document: "Programa Electoral PP 23J 2023 — «Un proyecto al servicio de un gran país»",
    url: "https://www.pp.es/storage/2023/07/programa_electoral_pp_23j_feijoo_2023.pdf",
    date: "2023-07-04",
    verifiedAt: VERIFIED_AT,
  },
  psoe: {
    type: "electoral_program",
    document: "Programa Electoral PSOE Elecciones Generales 23 de julio de 2023",
    url: "https://www.psoe.es/media-content/2023/07/PROGRAMA_ELECTORAL-GENERALES-2023.pdf",
    date: "2023-07-07",
    verifiedAt: VERIFIED_AT,
  },
  vox: {
    type: "electoral_program",
    document: "Programa electoral VOX para las Elecciones Generales del 23J de 2023",
    url: "https://www.voxespana.es/wp-content/uploads/2023/07/Programa-VOX-2023-con-menos-peso.pdf",
    date: "2023-07-01",
    verifiedAt: VERIFIED_AT,
  },
  sumar: {
    type: "electoral_program",
    document: "Programa electoral SUMAR 23J 2023 — «Un programa para ti»",
    url: "https://movimientosumar.es/wp-content/uploads/2023/07/Un-Programa-para-ti.pdf",
    date: "2023-07-07",
    verifiedAt: VERIFIED_AT,
  },
};

export interface VpOptions {
  confidence?: number;
  explanation?: string;
  value?: number;
}

/** Posición verificada: página del PDF + cita literal del programa. */
export function vp(
  party: PartyId,
  status: PositionStatus,
  page: number,
  originalText: string,
  opts: VpOptions = {}
): PartyPosition {
  return {
    party,
    status,
    value: opts.value,
    source: { ...PROGRAMS[party], page: `${page} (PDF)` },
    confidence: opts.confidence ?? 0.8,
    validFrom: "2023-07-23",
    explanation: opts.explanation,
    originalText,
    needsVerification: false,
  };
}

export interface VoteSourceInput {
  type: "congress_vote" | "boe";
  document: string;
  url: string;
  /** Fecha del documento/votación (ISO). */
  date: string;
  page?: string;
  /** Registro literal del resultado (del JSON de votaciones, DS o BOE). */
  record: string;
  confidence?: number;
  explanation?: string;
  /** Por defecto, la fecha de la votación. */
  validFrom?: string;
}

/**
 * Posición verificada mediante votación del Congreso o documento del BOE.
 * `record` reproduce el resultado registrado en la fuente primaria.
 * Ojo temporal (§21): validFrom = fecha del acto; si es anterior al ciclo
 * 2023-2026, la explicación debe decirlo.
 */
export function vote(
  party: PartyId,
  status: PositionStatus,
  src: VoteSourceInput
): PartyPosition {
  return {
    party,
    status,
    source: {
      type: src.type,
      document: src.document,
      url: src.url,
      date: src.date,
      page: src.page,
      verifiedAt: VERIFIED_AT,
    },
    confidence: src.confidence ?? 0.85,
    validFrom: src.validFrom ?? src.date,
    explanation: src.explanation,
    originalText: src.record,
    needsVerification: false,
  };
}

/**
 * Evidencia insuficiente documentada: el programa del partido fue revisado y
 * no aborda la propuesta. No puntúa en la comparación (§20-22 del briefing).
 */
export function ne(party: PartyId, note?: string): PartyPosition {
  return {
    party,
    status: "insufficient_evidence",
    source: { ...PROGRAMS[party] },
    confidence: 0,
    validFrom: "2023-07-23",
    explanation:
      note ??
      "Su programa electoral del 23J-2023 no aborda expresamente esta propuesta; sin otra fuente primaria verificada en el corpus actual.",
    needsVerification: false,
  };
}

/**
 * Promociona una pregunta editorial (redacción, pesos, categoría) del pool
 * base al dataset verificado, sustituyendo TODAS las posiciones por las
 * verificadas. El contenido editorial (statement, pesos, polaridad) es común;
 * las atribuciones a partidos son exclusivamente las aquí aportadas.
 */
export function verify(base: Question, positions: PartyPosition[]): Question {
  return {
    ...base,
    partyPositions: positions,
    status: "published",
    demo: false,
    needsVerification: false,
    updatedAt: VERIFIED_AT,
  };
}

/** Pregunta verificada editorialmente pero sin posiciones atribuibles: solo ejes. */
export function axesOnly(base: Question, note: string): Question {
  return verify(
    { ...base, methodNotes: `${base.methodNotes ?? ""} ${note}`.trim() },
    [ne("pp"), ne("psoe"), ne("vox"), ne("sumar")]
  );
}
