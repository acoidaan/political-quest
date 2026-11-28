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

/**
 * Programas del 29N-2026 que sustituyen a los del 23J-2023
 * (docs/ACTUALIZACION.md §3). Al incorporar uno, TODAS las posiciones del
 * partido basadas en su programa anterior (vp/ne) se cierran con validUntil
 * en la fecha de publicación del nuevo, aunque este no aborde la medida; las
 * basadas en votaciones o en el BOE (vote) siguen vigentes.
 *
 * - PP: «Reconstrucción nacional» (82 pp.), presentado el 2026-11-10 y
 *   descargado de pp.es. El 2026-11-11 pp.es pasó a enlazar una maquetación
 *   de 64 pp. con el mismo texto; las páginas citadas son las del PDF de 82
 *   pp., que sigue publicado en la URL de abajo. Varias medidas (83, 109,
 *   132, 164, 167, 173, 200, 210) figuran como «Permanezca atento a la
 *   campaña para conocer esta nueva medida» y no tienen contenido todavía.
 * - VOX: «Es sentido común» (66 pp., 115 medidas), presentado el 2026-11-12.
 *   voxespana.es bloquea el acceso automatizado a sus páginas, pero no al
 *   PDF: el archivo descargado de la URL de abajo es idéntico byte a byte al
 *   que el mantenedor obtuvo manualmente.
 * - PSOE: «La fuerza de seguir avanzando» (114 pp., 500 compromisos),
 *   presentado el 2026-11-15. psoe.es filtra el acceso automatizado: el PDF se
 *   descargó de la URL de abajo con un navegador (Playwright) el 2026-11-16.
 *   Hay una captura de esa URL en Wayback Machine del mismo día.
 * - Frente Amplio (Movimiento Sumar, IU, Más Madrid y Comuns, sucesor de
 *   Sumar): «Un programa como una casa» (151 pp.), presentado el 2026-11-16 y
 *   descargado de frenteamplio.info (web enlazada desde movimientosumar.es) el
 *   2026-11-17. Al ser una coalición nueva, sus posiciones van con su propio
 *   id; las de Sumar se conservan como historial (docs/ACTUALIZACION.md §3).
 *   El 2026-11-17 publicó en la misma URL una versión revisada (cultura,
 *   autónomos); se citan sus páginas tras comprobar de nuevo todas las citas
 *   el 2026-11-18 (solo cambió de página la de tra_001). El 2026-11-23
 *   publicó otra versión (158 pp.) que añade un capítulo de deporte; las 67
 *   citas se comprobaron el 2026-11-24 y 49 cambian de página. El
 *   2026-11-24 publicó otra versión (158 pp.) que solo reescribe una frase
 *   de la p. 39; las 67 citas se comprobaron de nuevo el 2026-11-26 y
 *   ninguna cambia de página.
 * - Adelante Andalucía: «Un programa para frenar a las derechas» (134 pp.),
 *   presentado el 2026-11-10; se cita la versión revisada del 2026-11-16
 *   publicada en la misma URL, descargada el 2026-11-17.
 * - BNG: «Programa electoral. 29N. Xerais 2026» (91 pp., en gallego),
 *   presentado el 2026-11-03. bng.gal bloquea el acceso automatizado a sus
 *   páginas, pero no al PDF, que se descargó de la URL de abajo.
 * - ERC: «Eleccions al Congrés 2026. Programa electoral» (48 pp., en
 *   catalán), presentado el 2026-11-10 en esquerrarepublicana.cat. El
 *   2026-11-17 publicó en la misma URL una versión revisada (renumera
 *   medidas); todas las citas se comprobaron de nuevo el 2026-11-18.
 * - PNV: «Euskadi Zaindu» (43 pp.), presentado el 2026-11-09.
 * - EH Bildu: «Posible egin. Garantía y derechos» (30 pp., versión en
 *   castellano), publicado el 2026-11-16 en posibleegin.ehbildu.eus, su web
 *   de campaña (enlazada desde ehbildu.eus).
 * - Democracia 21: «La España que merecemos» (108 pp.), creado el
 *   2026-11-13 y publicado en mi.democracia21.es; descargado el 2026-11-20
 *   (idéntico a la copia del 2026-11-18).
 * - Podemos: «Así de básico: Paz, casa y trabajo» (141 pp., 442 medidas),
 *   PDF creado el 2026-11-17 y publicado en podemos.info. podemos.info
 *   bloquea el acceso automatizado (403) y Wayback Machine no es accesible
 *   desde el entorno de revisión, así que se cita la copia que aportó el
 *   mantenedor el 2026-11-24 (141 pp., mismo título, creada el 2026-11-17);
 *   no se ha podido comparar byte a byte con la URL oficial.
 * - Compromís: «Programa electoral 29N Compromís-Front Valencià» (57 pp., en
 *   valenciano), publicado en frontvalencia.org, la web de campaña de la
 *   coalición (aviso legal en compromis.net). El PDF no trae fecha de
 *   creación; la de modificación es el 2026-11-18. La copia aportada por el
 *   mantenedor es idéntica byte a byte a la descargada de la URL de abajo el
 *   2026-11-24.
 * - SALF: «Contrato electoral simplificado. Generales 2026» (40 pp.),
 *   enlazado como «Contrato electoral» en seacabolafiesta.com. La web sirve
 *   el PDF tras una protección anti-bots que bloquea la descarga desde el
 *   entorno de revisión; se cita la copia que aportó el mantenedor el
 *   2026-11-28, cuyo sha256 empieza por 073425b9522d, el mismo valor que la
 *   web añade como parámetro de versión al enlace (?v=073425b9522d). El PDF
 *   no trae fechas de creación ni de modificación; se toma la de sus
 *   metadatos XMP (2026-11-04). Las páginas impresas coinciden con las del PDF.
 * Las citas en gallego, catalán y valenciano se transcriben literalmente, sin traducir.
 */
export const VERIFIED_AT_2026 = "2026-11-11";

const PROGRAMS_2026: Record<PartyId, Omit<Source, "page">> = {
  pp: {
    type: "electoral_program",
    document: "Programa electoral PP 29N 2026 — «Reconstrucción nacional»",
    url: "https://www.pp.es/wp-content/uploads/2026/11/LA-RECONSTRUCCION-NACIONAL.pdf",
    date: "2026-11-10",
    verifiedAt: VERIFIED_AT_2026,
  },
  vox: {
    type: "electoral_program",
    document: "Programa electoral VOX 29N 2026 — «Es sentido común»",
    url: "https://www.voxespana.es/wp-content/uploads/2026/11/Programa-completo-A5-1.pdf",
    date: "2026-11-12",
    verifiedAt: "2026-11-13",
  },
  psoe: {
    type: "electoral_program",
    document: "Programa electoral PSOE 29N 2026 — «La fuerza de seguir avanzando»",
    url: "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26.pdf",
    date: "2026-11-15",
    verifiedAt: "2026-11-16",
  },
  "frente-amplio": {
    type: "electoral_program",
    document: "Programa electoral Frente Amplio 29N 2026 — «Un programa como una casa»",
    url: "https://frenteamplio.info/pdf/ProgramaFrenteAmplio.pdf",
    date: "2026-11-24",
    verifiedAt: "2026-11-26",
  },
  "adelante-andalucia": {
    type: "electoral_program",
    document: "Programa electoral Adelante Andalucía 29N 2026 — «Un programa para frenar a las derechas»",
    url: "https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf",
    date: "2026-11-16",
    verifiedAt: "2026-11-17",
  },
  bng: {
    type: "electoral_program",
    document: "Programa electoral BNG 29N 2026 — «Xerais 2026»",
    url: "https://www.bng.gal/media/bnggaliza/files/2026/11/03/26_bng_xerais_documentos_programa_electoral.pdf",
    date: "2026-11-03",
    verifiedAt: "2026-11-17",
  },
  erc: {
    type: "electoral_program",
    document: "Programa electoral ERC 29N 2026 — «Eleccions al Congrés 2026»",
    url: "https://esquerrarepublicana.cat/documents/e2026-programa.pdf",
    date: "2026-11-17",
    verifiedAt: "2026-11-18",
  },
  ehbildu: {
    type: "electoral_program",
    document: "Programa electoral EH Bildu 29N 2026 — «Posible egin. Garantía y derechos»",
    url: "https://posibleegin.ehbildu.eus/wp-content/uploads/2026/11/PROGRAMA-CAS.pdf",
    date: "2026-11-16",
    verifiedAt: "2026-11-19",
  },
  pnv: {
    type: "electoral_program",
    document: "Programa electoral PNV 29N 2026 — «Euskadi Zaindu»",
    url: "https://www.eaj-pnv.eus/es/adjuntos-documentos/21765/pdf/programa-electoral-29n",
    date: "2026-11-09",
    verifiedAt: "2026-11-17",
  },
  democracia21: {
    type: "electoral_program",
    document: "Programa electoral Democracia 21 29N 2026 — «La España que merecemos»",
    url: "https://mi.democracia21.es/docs/programa/programa-democracia21.pdf",
    date: "2026-11-13",
    verifiedAt: "2026-11-20",
  },
  podemos: {
    type: "electoral_program",
    document: "Programa electoral Podemos 29N 2026 — «Así de básico: Paz, casa y trabajo»",
    url: "https://podemos.info/wp-content/uploads/2026/11/29N-programa-Podemos.-Paz-casa-y-trabajo.pdf",
    date: "2026-11-17",
    verifiedAt: "2026-11-24",
  },
  compromis: {
    type: "electoral_program",
    document: "Programa electoral Compromís-Front Valencià 29N 2026",
    url: "https://frontvalencia.org/programa-compromis-front-valencia.pdf",
    date: "2026-11-18",
    verifiedAt: "2026-11-24",
  },
  salf: {
    type: "electoral_program",
    document: "Contrato electoral SALF (Se Acabó La Fiesta) — Generales 29N 2026",
    url: "https://www.seacabolafiesta.com/SALF_Contrato_Electoral_29N.pdf",
    date: "2026-11-04",
    verifiedAt: "2026-11-28",
  },
};

/** Fecha de publicación del programa del 29N, por partido (= validFrom). */
const PROGRAM_2026_FROM: Record<PartyId, string> = {
  pp: "2026-11-10",
  vox: "2026-11-12",
  psoe: "2026-11-15",
  "frente-amplio": "2026-11-16",
  "adelante-andalucia": "2026-11-16",
  bng: "2026-11-03",
  erc: "2026-11-10",
  pnv: "2026-11-09",
  ehbildu: "2026-11-16",
  democracia21: "2026-11-13",
  podemos: "2026-11-17",
  compromis: "2026-11-18",
  salf: "2026-11-04",
};

function program2026(party: PartyId): Omit<Source, "page"> {
  const program = PROGRAMS_2026[party];
  if (!program) throw new Error(`Sin programa del 29N incorporado: ${party}`);
  return program;
}

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
    validUntil: PROGRAM_2026_FROM[party],
    explanation: opts.explanation,
    originalText,
    needsVerification: false,
  };
}

/**
 * Posición verificada en el programa del 29N-2026: página del PDF (o rango,
 * p. ej. "42-43", si la cita salta de página) + cita literal.
 */
export function vp26(
  party: PartyId,
  status: PositionStatus,
  page: number | string,
  originalText: string,
  opts: VpOptions = {}
): PartyPosition {
  return {
    party,
    status,
    value: opts.value,
    source: { ...program2026(party), page: `${page} (PDF)` },
    confidence: opts.confidence ?? 0.8,
    validFrom: PROGRAM_2026_FROM[party],
    explanation: opts.explanation,
    originalText,
    needsVerification: false,
  };
}

/** Evidencia insuficiente en el programa del 29N-2026 (análogo a ne()). */
export function ne26(party: PartyId, note?: string): PartyPosition {
  return {
    party,
    status: "insufficient_evidence",
    source: { ...program2026(party) },
    confidence: 0,
    validFrom: PROGRAM_2026_FROM[party],
    explanation:
      note ??
      `Su programa electoral del 29N-2026 no aborda expresamente esta propuesta.${PROGRAM_2026_PENDING[party] ?? ""}`,
    needsVerification: false,
  };
}

/** Advertencia para los programas con medidas aún sin publicar. */
const PROGRAM_2026_PENDING: Partial<Record<PartyId, string>> = {
  pp: " Algunas medidas del programa están pendientes de anunciarse durante la campaña.",
};

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
    validUntil: PROGRAM_2026_FROM[party],
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

/**
 * Pregunta verificada editorialmente sin posiciones atribuibles en los
 * programas del 23J: solo ejes. `newer` recoge las posiciones de los
 * programas del 29N ya incorporados (vp26/ne26), que pueden no ser vacías.
 */
export function axesOnly(
  base: Question,
  note: string,
  newer: PartyPosition[]
): Question {
  return verify(
    { ...base, methodNotes: `${base.methodNotes ?? ""} ${note}`.trim() },
    [ne("pp"), ne("psoe"), ne("vox"), ne("sumar"), ...newer]
  );
}
