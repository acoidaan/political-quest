import type { Question } from "@/lib/types";
import { dq, pos } from "./helpers";

/**
 * DEMO — Preguntas añadidas tras el primer informe de balance (npm run
 * balance) para corregir tres desequilibrios detectados automáticamente:
 * 1) exceso de formulaciones desde el polo negativo (acquiescence bias);
 * 2) eje social formulado casi siempre desde el polo progresista;
 * 3) cobertura insuficiente del eje europeo.
 * Posiciones de partidos NO verificadas (ver helpers.ts).
 */
export const DEMO_EQUILIBRIO: Question[] = [
  dq({
    id: "edu_004",
    statement:
      "Los padres deberían poder autorizar previamente la participación de sus hijos en actividades escolares complementarias con contenido afectivo-sexual o moral.",
    category: "educacion",
    subcategory: "pin_parental",
    weights: { social: 0.7 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("psoe", "strongly_oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Formulada desde el polo conservador (equilibrio de polaridad).",
  }),
  dq({
    id: "rel_002",
    statement:
      "Los símbolos y celebraciones religiosas tradicionales deberían poder mantenerse en instituciones y espacios públicos.",
    category: "religion",
    weights: { social: 0.6 },
    importance: 1,
    polarity: "positive",
    partyPositions: [
      pos("pp", "support"),
      pos("vox", "strongly_support"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "oppose"),
    ],
    methodNotes: "Polo conservador del eje social.",
  }),
  dq({
    id: "mon_002",
    statement:
      "La monarquía parlamentaria debería mantenerse como forma de Estado, sin abrir procesos de reforma constitucional al respecto.",
    category: "monarquia",
    weights: { social: 0.5 },
    importance: 2,
    polarity: "positive",
    relatedTo: [{ id: "mon_001", expected: "inverse" }],
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "strongly_support"),
      pos("psoe", "support", "Defensa práctica del marco constitucional vigente."),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Par inverso de mon_001 (equilibrio de polaridad).",
  }),
  dq({
    id: "cul_002",
    statement:
      "Las administraciones públicas deberían proteger y promover activamente tradiciones como la tauromaquia o la caza.",
    category: "cultura",
    weights: { social: 0.6 },
    importance: 1,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Polo tradicionalista del conflicto cultural.",
  }),
  dq({
    id: "eco_004",
    statement:
      "Deberían venderse las participaciones públicas en empresas donde ya exista oferta privada suficiente.",
    category: "economia",
    subcategory: "privatizaciones",
    weights: { economic: 0.7 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("vox", "support"),
      pos("pp", "conditional_support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Polo de mercado (equilibrio de polaridad).",
  }),
  dq({
    id: "san_004",
    statement:
      "El seguro sanitario privado debería poder desgravarse en el IRPF, aunque suponga menos recaudación y favorezca a quien puede pagarlo.",
    category: "sanidad",
    subcategory: "desgravacion_privada",
    weights: { economic: 0.7 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "support"),
      pos("vox", "strongly_support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Incentivo fiscal a la provisión privada.",
  }),
  dq({
    id: "inm_006",
    statement:
      "Deberían reforzarse los perímetros y controles fronterizos en Ceuta y Melilla, aunque suponga más gasto y medidas más duras de contención.",
    category: "inmigracion",
    subcategory: "frontera",
    weights: { immigration: 0.7, authority: 0.2 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "support"),
      pos("psoe", "conditional_support"),
      pos("sumar", "oppose"),
    ],
    methodNotes: "Polo restrictivo con trade-off explícito.",
  }),
  dq({
    id: "ter_003",
    statement:
      "Deberían suprimirse o fusionarse entidades administrativas como diputaciones provinciales y municipios muy pequeños para reducir estructuras.",
    category: "territorio",
    weights: { territorial: 0.6 },
    importance: 1,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "neutral_or_unclear"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "insufficient_evidence"),
    ],
    methodNotes: "Simplificación administrativa como centralización de estructuras.",
  }),
  dq({
    id: "ene_002",
    statement:
      "Deberían eliminarse trabas a la exploración y aprovechamiento de recursos energéticos y mineros propios, aunque tenga impacto ambiental local.",
    category: "energia",
    subcategory: "recursos_propios",
    weights: { environment: 0.7, economic: 0.2 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Polo desregulador del eje ambiental.",
  }),
  dq({
    id: "ue_004",
    statement:
      "España debería apoyar que más decisiones europeas de política exterior se tomen por mayoría, eliminando el veto nacional, aunque a veces pierda votaciones.",
    category: "ue",
    subcategory: "mayoria_cualificada",
    weights: { europe: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "support"),
      pos("pp", "conditional_support"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Cobertura adicional del eje europeo.",
  }),
  dq({
    id: "ue_005",
    statement:
      "La defensa española debería integrarse más en estructuras militares europeas comunes, aunque reduzca la autonomía de decisión nacional.",
    category: "ue",
    subcategory: "defensa_europea",
    weights: { europe: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("pp", "conditional_support"),
      pos("sumar", "conditional_support", "Favorable a autonomía estratégica europea, crítico con el gasto militar."),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Cobertura adicional del eje europeo.",
  }),
];
