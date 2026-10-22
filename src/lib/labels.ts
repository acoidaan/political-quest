import type { AnswerValue, PositionStatus, QuizMode, SourceType } from "@/lib/types";

/** Escala de respuesta (§6 del briefing). El orden importa para la UI. */
export const ANSWER_SCALE: { value: AnswerValue; label: string }[] = [
  { value: -3, label: "Totalmente en desacuerdo" },
  { value: -2, label: "En desacuerdo" },
  { value: -1, label: "Algo en desacuerdo" },
  { value: 0, label: "Neutral / depende" },
  { value: 1, label: "Algo de acuerdo" },
  { value: 2, label: "De acuerdo" },
  { value: 3, label: "Totalmente de acuerdo" },
];

export const SKIP_LABEL = "No tengo suficiente información";

export function answerLabel(value: AnswerValue | "skipped"): string {
  if (value === "skipped") return SKIP_LABEL;
  return ANSWER_SCALE.find((a) => a.value === value)?.label ?? String(value);
}

export const POSITION_LABELS: Record<PositionStatus, string> = {
  strongly_support: "Muy a favor",
  support: "A favor",
  conditional_support: "A favor, con condiciones",
  neutral_or_unclear: "Sin posición clara",
  conditional_opposition: "En contra, con condiciones",
  oppose: "En contra",
  strongly_oppose: "Muy en contra",
  insufficient_evidence: "Evidencia insuficiente",
};

export const SOURCE_TYPE_LABELS: Record<SourceType, string> = {
  electoral_program: "Programa electoral",
  congress_initiative: "Iniciativa en el Congreso",
  congress_vote: "Votación en el Congreso",
  senate_initiative: "Iniciativa en el Senado",
  boe: "BOE",
  party_official_website: "Web oficial del partido",
  party_official_document: "Documento oficial del partido",
  institutional_statement: "Declaración institucional",
  demo: "Demostración (sin verificar)",
};

export const MODE_INFO: Record<
  QuizMode,
  { label: string; count: number; duration: string; blurb: string }
> = {
  quick: {
    label: "Test rápido",
    count: 25,
    duration: "≈ 5 min",
    blurb: "Cubre las dimensiones principales.",
  },
  full: {
    label: "Test completo",
    count: 75,
    duration: "≈ 15 min",
    blurb: "Mayor precisión en todos los ejes.",
  },
  deep: {
    label: "Test exhaustivo",
    count: 150,
    duration: "≈ 30 min",
    blurb: "Análisis en profundidad, tema a tema.",
  },
};

export const PERSONAL_IMPORTANCE_LABELS = {
  low: "Poca",
  normal: "Normal",
  high: "Mucha",
} as const;
