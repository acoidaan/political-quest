import type { Question } from "@/lib/types";
import { dq, pos } from "./helpers";

/**
 * DEMO — Inmigración, seguridad, justicia y libertades.
 * Posiciones de partidos NO verificadas (ver helpers.ts).
 */
export const DEMO_LIBERTADES: Question[] = [
  dq({
    id: "inm_001",
    statement:
      "Debería facilitarse la regularización de inmigrantes que llevan años viviendo y trabajando en España sin papeles.",
    category: "inmigracion",
    subcategory: "regularizacion",
    weights: { immigration: -0.8 },
    importance: 3,
    polarity: "negative",
    relatedTo: [{ id: "inm_002", expected: "inverse" }],
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "conditional_support"),
      pos("pp", "conditional_opposition"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Basada en el tipo de medida de la ILP de regularización (pendiente de fuente primaria en Fase 2). Par con inm_002.",
  }),
  dq({
    id: "inm_002",
    statement:
      "Deberían endurecerse los requisitos para obtener y renovar los permisos de residencia y trabajo.",
    category: "inmigracion",
    subcategory: "requisitos",
    weights: { immigration: 0.8 },
    importance: 3,
    polarity: "positive",
    relatedTo: [{ id: "inm_001", expected: "inverse" }],
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Par inverso de inm_001, formulado desde el polo restrictivo.",
  }),
  dq({
    id: "inm_003",
    statement:
      "Los extranjeros en situación irregular que cometan delitos deberían ser expulsados con carácter general, incluso por delitos de gravedad media.",
    category: "inmigracion",
    subcategory: "expulsiones",
    weights: { immigration: 0.8, authority: 0.4 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "support"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Restricción migratoria con componente punitivo (autoridad +0.4).",
  }),
  dq({
    id: "inm_004",
    statement:
      "España debería aceptar cuotas obligatorias de reparto de solicitantes de asilo acordadas en la Unión Europea.",
    category: "inmigracion",
    subcategory: "asilo_ue",
    weights: { immigration: -0.6, europe: -0.5 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Doble carga: apertura migratoria y aceptación de gobernanza europea.",
  }),
  dq({
    id: "inm_005",
    statement:
      "Las personas en situación irregular deberían mantener acceso a la sanidad pública en las mismas condiciones que los residentes legales.",
    category: "inmigracion",
    subcategory: "sanidad_universal",
    weights: { immigration: -0.7, economic: -0.3 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "strongly_support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Universalidad de servicios y apertura migratoria.",
  }),
  dq({
    id: "nac_001",
    statement:
      "Deberían reducirse los años de residencia legal exigidos para solicitar la nacionalidad española.",
    category: "nacionalidad",
    weights: { immigration: -0.7 },
    importance: 1,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "support"),
      pos("psoe", "neutral_or_unclear"),
      pos("pp", "oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Acceso a la ciudadanía.",
  }),
  dq({
    id: "seg_001",
    statement:
      "Los delitos cometidos por reincidentes deberían conllevar penas considerablemente más severas.",
    category: "seguridad",
    subcategory: "reincidencia",
    weights: { authority: 0.8 },
    importance: 3,
    polarity: "positive",
    relatedTo: [{ id: "jus_002", expected: "inverse" }],
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "support"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "oppose"),
    ],
    methodNotes: "Punitivismo: eje autoridad troncal. Par con jus_002.",
  }),
  dq({
    id: "seg_002",
    statement:
      "La prisión permanente revisable debería mantenerse y ampliarse a más supuestos delictivos.",
    category: "seguridad",
    subcategory: "ppr",
    weights: { authority: 0.8 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "strongly_support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Máxima pena del ordenamiento: eje autoridad.",
  }),
  dq({
    id: "pol_001",
    statement:
      "Deberían suavizarse las sanciones administrativas por manifestaciones no comunicadas o por grabar a agentes de policía, revisando la ley de seguridad ciudadana.",
    category: "policia",
    weights: { authority: -0.8 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "conditional_support", "Intentos de reforma sin acuerdo final."),
      pos("pp", "strongly_oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Libertades públicas frente a potestad sancionadora.",
  }),
  dq({
    id: "jus_001",
    statement:
      "Los vocales judiciales del órgano de gobierno de los jueces (CGPJ) deberían ser elegidos por los propios jueces, y no por el Parlamento.",
    category: "justicia",
    subcategory: "cgpj",
    weights: { authority: -0.3 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "strongly_support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes:
      "Difícil de situar en ejes clásicos: se clasifica levemente como límite al poder político (-0.3 autoridad). Peso bajo deliberado; candidata a validación empírica (Fase 5). Su valor está en la discriminación entre partidos.",
  }),
  dq({
    id: "jus_002",
    statement:
      "El sistema penal debería priorizar la reinserción y las penas alternativas frente al endurecimiento generalizado de las penas de prisión.",
    category: "justicia",
    subcategory: "reinsercion",
    weights: { authority: -0.8 },
    importance: 3,
    polarity: "negative",
    relatedTo: [{ id: "seg_001", expected: "inverse" }],
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "support"),
      pos("pp", "oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Par inverso de seg_001.",
  }),
  dq({
    id: "pri_001",
    statement:
      "Los beneficios penitenciarios y el acceso al tercer grado deberían restringirse para los delitos graves, aunque alargue el tiempo efectivo en prisión.",
    category: "prisiones",
    weights: { authority: 0.7 },
    importance: 1,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "support"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "oppose"),
    ],
    methodNotes: "Política penitenciaria: eje autoridad.",
  }),
  dq({
    id: "lib_001",
    statement:
      "Deberían despenalizarse las ofensas a los sentimientos religiosos y las injurias a la Corona, dejando esos casos fuera del código penal.",
    category: "libertad_expresion",
    weights: { authority: -0.7, social: -0.4 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "conditional_support"),
      pos("pp", "oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Libertad de expresión (autoridad) con componente de secularización y modelo de Estado (social).",
  }),
  dq({
    id: "prv_001",
    statement:
      "La policía debería poder usar reconocimiento facial automatizado en espacios públicos para prevenir delitos, aunque implique vigilar a personas no sospechosas.",
    category: "privacidad",
    weights: { authority: 0.8 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("vox", "support"),
      pos("pp", "neutral_or_unclear"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Vigilancia estatal vs. privacidad: eje autoridad troncal.",
  }),
];
