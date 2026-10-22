/**
 * Modelo de datos central.
 *
 * Principio estructural (ver docs/ARQUITECTURA.md §2):
 * `Question.weights` (qué significa ideológicamente una respuesta) y
 * `Question.partyPositions` (qué partidos la apoyan) son campos independientes
 * rellenados por procesos independientes. Nada en este código deriva uno del otro.
 */

// ---------------------------------------------------------------------------
// Ejes ideológicos
// ---------------------------------------------------------------------------

export type AxisId =
  | "economic"
  | "social"
  | "authority"
  | "territorial"
  | "europe"
  | "immigration"
  | "environment";

export interface AxisDefinition {
  id: AxisId;
  /** Nombre corto para UI, p. ej. "Economía" */
  label: string;
  /** Polo -1 (se muestra como 0) */
  negativePole: string;
  /** Polo +1 (se muestra como 100) */
  positivePole: string;
  description: string;
  /** Si el eje participa en el cálculo izquierda-derecha global */
  inLeftRight: boolean;
}

/**
 * Pesos de una pregunta sobre cada eje, en [-1, +1].
 * Signo: +1 empuja hacia el polo positivo del eje cuando el usuario está DE ACUERDO.
 * Los ejes ausentes cuentan como 0.
 */
export type IdeologicalWeights = Partial<Record<AxisId, number>>;

// ---------------------------------------------------------------------------
// Partidos
// ---------------------------------------------------------------------------

export type PartyId = string; // "pp" | "psoe" | "vox" | "sumar" | ... extensible

export interface Party {
  id: PartyId;
  name: string;
  fullName: string;
  /** Color identificativo. SOLO puede usarse tras la revelación explícita. */
  color: string;
  /** Partidos inactivos no aparecen en comparaciones nuevas */
  active: boolean;
  /** Ciclo electoral al que corresponden mayoritariamente sus posiciones */
  positionCycle: string; // p. ej. "2023-2026"
  notes?: string;
}

// ---------------------------------------------------------------------------
// Fuentes
// ---------------------------------------------------------------------------

export type SourceType =
  | "electoral_program"
  | "congress_initiative"
  | "congress_vote"
  | "senate_initiative"
  | "boe"
  | "party_official_website"
  | "party_official_document"
  | "institutional_statement"
  | "demo"; // dato de demostración, NO verificado

export interface Source {
  type: SourceType;
  /** Nombre del documento, p. ej. "Programa electoral 23J" */
  document: string;
  url?: string;
  /** Fecha del documento (ISO). */
  date: string;
  page?: string;
  section?: string;
  /** Fecha en que un humano verificó la fuente (ISO). Ausente ⇒ sin verificar. */
  verifiedAt?: string;
}

// ---------------------------------------------------------------------------
// Posiciones de partidos
// ---------------------------------------------------------------------------

export type PositionStatus =
  | "strongly_support"
  | "support"
  | "conditional_support"
  | "neutral_or_unclear"
  | "conditional_opposition"
  | "oppose"
  | "strongly_oppose"
  | "insufficient_evidence";

/** Valor numérico canónico de cada estado, en [-1, +1]. */
export const POSITION_VALUE: Record<
  Exclude<PositionStatus, "insufficient_evidence" | "neutral_or_unclear">,
  number
> = {
  strongly_support: 1,
  support: 0.66,
  conditional_support: 0.33,
  conditional_opposition: -0.33,
  oppose: -0.66,
  strongly_oppose: -1,
};

export interface PartyPosition {
  party: PartyId;
  status: PositionStatus;
  /**
   * Valor en [-1,+1]. Normalmente POSITION_VALUE[status]; puede afinarse
   * si la evidencia lo justifica. Ignorado si status es
   * insufficient_evidence o neutral_or_unclear.
   */
  value?: number;
  source: Source;
  /** Confianza en la atribución, [0,1]. */
  confidence: number;
  /** Vigencia temporal de la posición (ISO). */
  validFrom: string;
  validUntil?: string;
  /** Explicación: matices, condiciones, cambios de posición. */
  explanation?: string;
  /** Texto original literal de la propuesta en el documento fuente. */
  originalText?: string;
  /** true ⇒ no puede usarse en producción. */
  needsVerification: boolean;
}

// ---------------------------------------------------------------------------
// Preguntas
// ---------------------------------------------------------------------------

export type QuestionStatus =
  | "draft"
  | "needs_source"
  | "needs_neutrality_review"
  | "verified"
  | "published"
  | "archived";

export type CategoryId = string;

export interface Category {
  id: CategoryId;
  label: string;
  /** Agrupación temática para la UI y el informe de balance */
  group: string;
}

export interface RelatedQuestion {
  id: string;
  /** "inverse": acuerdo con una implica desacuerdo con la otra. */
  expected: "inverse" | "aligned";
}

export interface Question {
  id: string;
  /** Afirmación neutral mostrada al usuario. */
  statement: string;
  /**
   * Explicación en lenguaje cotidiano, accesible desde el botón ⓘ del test:
   * qué significa la propuesta, contexto y qué implica estar a favor o en
   * contra. MISMAS reglas de neutralidad que statement: explica ambas caras
   * del trade-off, sin pistas de procedencia ni lenguaje que incline.
   */
  explainer?: string;
  category: CategoryId;
  subcategory?: string;
  /** Pesos ideológicos por contenido (independientes de partidos). */
  weights: IdeologicalWeights;
  /**
   * Relevancia editorial 1-3 (1 menor, 3 troncal). Multiplica el peso de la
   * pregunta en ejes y similitud.
   */
  importance: 1 | 2 | 3;
  /**
   * Polaridad respecto al eje dominante: "positive" si "de acuerdo" empuja al
   * polo +, "negative" si empuja al polo -. Para balancear acquiescence bias.
   */
  polarity: "positive" | "negative";
  /** Posiciones de partidos con evidencia. Puede estar vacío. */
  partyPositions: PartyPosition[];
  /** Pares de consistencia. */
  relatedTo?: RelatedQuestion[];
  status: QuestionStatus;
  /** true ⇒ pregunta de demostración; jamás mezclar con datos verificados. */
  demo: boolean;
  needsVerification: boolean;
  /** Criterio de asignación de pesos, dudas, decisiones de reescritura. */
  methodNotes?: string;
  /** Fecha de creación / última revisión editorial (ISO). */
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Respuestas y sesión
// ---------------------------------------------------------------------------

/** -3..+3, o "skipped" = "no tengo suficiente información" (NO es 0). */
export type AnswerValue = -3 | -2 | -1 | 0 | 1 | 2 | 3;

export type PersonalImportance = "low" | "normal" | "high";

export interface UserAnswer {
  questionId: string;
  value: AnswerValue | "skipped";
  /** Control secundario opcional. */
  personalImportance?: PersonalImportance;
  answeredAt: string;
}

export type QuizMode = "quick" | "full" | "deep";

export interface QuizSession {
  /** Identificador aleatorio local, sin relación con identidad. */
  id: string;
  mode: QuizMode;
  /** Semilla de selección (reproducibilidad). */
  seed: number;
  questionIds: string[];
  answers: Record<string, UserAnswer>;
  /** Autopercepción 1-10 (1 izquierda, 10 derecha), opcional, descriptiva. */
  selfPlacement?: number;
  /**
   * Predicción del usuario, antes de la revelación, del partido cuyas
   * posiciones se parecerán más a sus respuestas ("none" = prefirió no
   * adivinar). Solo es un juego descriptivo: no altera ningún cálculo.
   */
  prediction?: string;
  startedAt: string;
  finishedAt?: string;
  /** true si la sesión usa el dataset demo. */
  demoData: boolean;
}

// ---------------------------------------------------------------------------
// Resultados
// ---------------------------------------------------------------------------

export interface AxisScore {
  axis: AxisId;
  /** Escala interna [-1, +1]. */
  raw: number;
  /** Escala presentación 0-100. */
  display: number;
  /** Semiamplitud del intervalo (~IC95) en escala 0-100. */
  uncertainty: number;
  /** Nº de preguntas que contribuyeron. */
  answered: number;
  /** Tamaño muestral efectivo (Kish). */
  effectiveN: number;
}

export interface LeftRightScore {
  /** 0 = izquierda fuerte, 100 = derecha fuerte. */
  display: number;
  uncertainty: number;
  /** Etiqueta descriptiva ("centroizquierda", …). */
  band: string;
  axesUsed: AxisId[];
}

export interface ConsistencyResult {
  /** [0,1]: 0 = perfectamente consistente. */
  inconsistency: number;
  pairsEvaluated: number;
  /** Pares con mayor tensión, para "contradicciones interesantes". */
  flaggedPairs: { a: string; b: string; tension: number }[];
}

export interface QuestionComparison {
  questionId: string;
  category: CategoryId;
  userValue: AnswerValue;
  partyStatus: PositionStatus;
  partyValue: number;
  /** [0,1]: 1 = coincidencia total. */
  agreement: number;
  source: Source;
  explanation?: string;
}

export interface CategoryAgreement {
  category: CategoryId;
  agreement: number; // [0,1]
  n: number;
}

export interface PartySimilarity {
  party: PartyId;
  /** % de coincidencia sobre cuestiones comparables, [0,100]. */
  similarity: number;
  uncertainty: number;
  comparableCount: number;
  totalAnswered: number;
  topAgreements: CategoryAgreement[];
  topDisagreements: CategoryAgreement[];
  perQuestion: QuestionComparison[];
}

export interface ConvictionItem {
  questionId: string;
  category: CategoryId;
  statement: string;
  /** Intensidad con signo en escala -100..+100 (dirección acuerdo/desacuerdo). */
  intensity: number;
}

export interface QuizResult {
  sessionId: string;
  mode: QuizMode;
  answeredCount: number;
  skippedCount: number;
  axes: AxisScore[];
  leftRight: LeftRightScore;
  consistency: ConsistencyResult;
  convictions: ConvictionItem[];
  centrist: ConvictionItem[];
  selfPlacement?: number;
  computedAt: string;
  demoData: boolean;
}
