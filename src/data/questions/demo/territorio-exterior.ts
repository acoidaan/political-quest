import type { Question } from "@/lib/types";
import { dq, pos } from "./helpers";

/**
 * DEMO — Territorio, modelo de Estado, Europa, exterior, energía, tecnología.
 * Posiciones de partidos NO verificadas (ver helpers.ts).
 */
export const DEMO_TERRITORIO_EXTERIOR: Question[] = [
  dq({
    id: "ter_001",
    statement:
      "Las comunidades autónomas deberían disponer de mayor capacidad para recaudar y gestionar sus propios impuestos.",
    category: "autonomias",
    subcategory: "financiacion",
    weights: { territorial: -0.8 },
    importance: 3,
    polarity: "negative",
    relatedTo: [{ id: "ter_002", expected: "inverse" }],
    partyPositions: [
      pos("psoe", "conditional_support"),
      pos("sumar", "support"),
      pos("pp", "conditional_opposition", "Posición variable según territorio."),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Eje territorial troncal. Par con ter_002.",
  }),
  dq({
    id: "ter_002",
    statement:
      "El Estado debería recuperar competencias hoy transferidas a las comunidades autónomas, como educación o sanidad.",
    category: "autonomias",
    subcategory: "devolucion",
    weights: { territorial: 0.8 },
    importance: 3,
    polarity: "positive",
    relatedTo: [{ id: "ter_001", expected: "inverse" }],
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "conditional_opposition"),
      pos("psoe", "strongly_oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Par inverso de ter_001, desde el polo centralizador.",
  }),
  dq({
    id: "cat_001",
    statement:
      "Instrumentos como los indultos o la amnistía son aceptables para reconducir conflictos políticos territoriales como el catalán.",
    category: "cataluna",
    weights: { territorial: -0.6, authority: -0.4 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "strongly_oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Acomodación territorial (-0.6) y menor punitivismo político (-0.4 autoridad).",
  }),
  dq({
    id: "cat_002",
    statement:
      "Debería poder celebrarse en Cataluña un referéndum de autodeterminación pactado con el Estado.",
    category: "cataluna",
    subcategory: "referendum",
    weights: { territorial: -0.8 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "strongly_oppose"),
      pos("sumar", "neutral_or_unclear", "Sensibilidades internas divergentes."),
      pos("pp", "strongly_oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Poca discriminación entre partidos estatales, pero será clave al añadir ERC/Junts/Bildu (Fase 3).",
  }),
  dq({
    id: "pv_001",
    statement:
      "El régimen de concierto económico del País Vasco y Navarra debería mantenerse en sus términos actuales.",
    category: "pais_vasco",
    weights: { territorial: -0.5 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("pp", "support"),
      pos("sumar", "support"),
      pos("vox", "oppose", "Ha cuestionado el régimen foral."),
    ],
    methodNotes: "Asimetría territorial consolidada.",
  }),
  dq({
    id: "mon_001",
    statement:
      "España debería abrir un proceso hacia un modelo de Estado republicano, sometiéndolo a consulta ciudadana.",
    category: "monarquia",
    weights: { social: -0.5, territorial: -0.2 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "conditional_opposition", "Republicanismo declarativo sin impulso de reforma."),
      pos("pp", "strongly_oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Modelo de Estado: clasificado principalmente como cambio vs. statu quo institucional (social).",
  }),
  dq({
    id: "con_001",
    statement:
      "La Constitución debería reformarse para blindar derechos sociales como la vivienda o la sanidad, haciéndolos directamente exigibles ante los tribunales.",
    category: "constitucion",
    weights: { economic: -0.6, social: -0.3 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "support"),
      pos("pp", "oppose"),
      pos("vox", "oppose"),
    ],
    methodNotes: "Constitucionalización del gasto social.",
  }),
  dq({
    id: "ue_001",
    statement:
      "España debería apoyar una mayor integración fiscal europea, con impuestos y deuda comunes, aunque implique ceder soberanía presupuestaria.",
    category: "ue",
    subcategory: "integracion_fiscal",
    weights: { europe: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "strongly_support"),
      pos("sumar", "support"),
      pos("pp", "conditional_support"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Eje europeo troncal con trade-off de soberanía explícito.",
  }),
  dq({
    id: "ue_002",
    statement:
      "España debería recuperar competencias actualmente ejercidas por instituciones de la Unión Europea.",
    category: "ue",
    subcategory: "soberania",
    weights: { europe: 0.8 },
    importance: 3,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "oppose"),
      pos("psoe", "strongly_oppose"),
      pos("sumar", "oppose"),
    ],
    methodNotes:
      "Ejemplo canónico de reescritura neutral del briefing (§4). Polo soberanista.",
  }),
  dq({
    id: "ue_003",
    statement:
      "Las decisiones sobre política migratoria deberían tomarse principalmente a nivel nacional y no en el marco de la Unión Europea.",
    category: "ue",
    subcategory: "migracion_ue",
    weights: { europe: 0.7, immigration: 0.3 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "conditional_opposition"),
      pos("psoe", "oppose"),
      pos("sumar", "oppose"),
    ],
    methodNotes: "Soberanismo competencial con carga migratoria secundaria.",
  }),
  dq({
    id: "ota_001",
    statement:
      "España debería mantener su pertenencia a la OTAN y cumplir los compromisos militares adquiridos con la Alianza.",
    category: "otan",
    weights: { authority: 0.5 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("psoe", "support"),
      pos("vox", "support"),
      pos("sumar", "conditional_opposition", "Corrientes internas críticas con la OTAN."),
    ],
    methodNotes:
      "Defensa y alianzas militares se proyectan sobre el eje autoridad (+0.5); no existe eje exterior propio. Revisar en Fase 5 si los datos justifican un eje adicional.",
  }),
  dq({
    id: "def_001",
    statement:
      "El gasto en defensa debería aumentar hasta el entorno del 2% del PIB o más, aunque detraiga recursos de otras partidas públicas.",
    category: "defensa",
    weights: { authority: 0.6, economic: 0.2 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "support"),
      pos("vox", "strongly_support"),
      pos("psoe", "conditional_support"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Prioridad militar con trade-off presupuestario explícito.",
  }),
  dq({
    id: "def_002",
    statement:
      "España debería suspender el comercio de armas con países en conflicto o que vulneren derechos humanos, aunque afecte a la industria y al empleo nacional.",
    category: "defensa",
    subcategory: "comercio_armas",
    weights: { social: -0.5, authority: -0.4 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "conditional_support"),
      pos("pp", "oppose"),
      pos("vox", "oppose"),
    ],
    methodNotes: "Ética exterior vs. interés industrial.",
  }),
  dq({
    id: "ext_001",
    statement:
      "España debería apoyar activamente la celebración de un referéndum de autodeterminación en el Sáhara Occidental, aunque tensione la relación con Marruecos.",
    category: "exterior",
    weights: { social: -0.4 },
    importance: 1,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "oppose", "Giro documentado de la posición gubernamental en 2022."),
      pos("pp", "neutral_or_unclear"),
      pos("vox", "neutral_or_unclear"),
    ],
    methodNotes:
      "Difícil de proyectar en ejes; peso bajo. Valor principalmente discriminativo.",
  }),
  dq({
    id: "ene_001",
    statement:
      "Debería existir una empresa pública de energía que participe en el mercado eléctrico y module los precios.",
    category: "energia",
    subcategory: "empresa_publica",
    weights: { economic: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "conditional_support"),
      pos("pp", "oppose"),
      pos("vox", "oppose"),
    ],
    methodNotes: "Intervención pública en un mercado clave.",
  }),
  dq({
    id: "nuc_001",
    statement:
      "España debería prolongar la vida de sus centrales nucleares e incluso considerar construir nuevas como parte de su estrategia energética.",
    category: "nuclear",
    weights: { environment: 0.5, economic: 0.3 },
    importance: 3,
    polarity: "positive",
    relatedTo: [{ id: "nuc_002", expected: "inverse" }],
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "strongly_support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes:
      "En el debate español la energía nuclear se alinea con menor intervención ambiental (+0.5) y lógica de mercado (+0.3). Par con nuc_002. Nota: la relación nuclear-clima es discutida; documentado como decisión de rúbrica revisable en Fase 5.",
  }),
  dq({
    id: "nuc_002",
    statement:
      "Debería mantenerse el calendario de cierre progresivo de las centrales nucleares existentes.",
    category: "nuclear",
    subcategory: "cierre",
    weights: { environment: -0.5 },
    importance: 2,
    polarity: "negative",
    relatedTo: [{ id: "nuc_001", expected: "inverse" }],
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "strongly_oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Par inverso de nuc_001.",
  }),
  dq({
    id: "cli_001",
    statement:
      "Los objetivos de reducción de emisiones deberían endurecerse, aunque encarezcan a corto plazo la energía y algunos productos.",
    category: "clima",
    weights: { environment: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "support"),
      pos("pp", "conditional_opposition"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Eje ambiental troncal con coste explícito.",
  }),
  dq({
    id: "cli_002",
    statement:
      "Las zonas de bajas emisiones de las ciudades deberían mantenerse y ampliarse, aunque restrinjan el uso del coche privado.",
    category: "clima",
    subcategory: "zbe",
    weights: { environment: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_opposition"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Política ambiental urbana con restricción tangible.",
  }),
  dq({
    id: "agr_001",
    statement:
      "Las exigencias ambientales de la política agraria deberían flexibilizarse para reducir costes a agricultores y ganaderos, aunque se relajen objetivos ecológicos.",
    category: "agricultura",
    weights: { environment: 0.7 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("vox", "strongly_support"),
      pos("pp", "support"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "oppose"),
    ],
    methodNotes: "Formulada desde el polo desregulador (balance de polaridad).",
  }),
  dq({
    id: "med_001",
    statement:
      "Deberían restringirse los regadíos en zonas con acuíferos sobreexplotados, aunque afecte a explotaciones agrícolas existentes.",
    category: "medioambiente",
    weights: { environment: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_opposition"),
      pos("vox", "oppose"),
    ],
    methodNotes: "Conservación vs. actividad económica local.",
  }),
  dq({
    id: "tpt_001",
    statement:
      "El transporte público debería mantener subvenciones fuertes, como abonos gratuitos o muy reducidos, aunque supongan gasto público permanente.",
    category: "transporte",
    weights: { economic: -0.5, environment: -0.3 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("vox", "oppose"),
    ],
    methodNotes: "Gasto social con co-beneficio ambiental.",
  }),
  dq({
    id: "fis_001",
    statement:
      "Deberían subir los impuestos a los combustibles fósiles para acelerar la transición energética, compensando a las rentas más bajas.",
    category: "fiscalidad_verde",
    weights: { environment: -0.8, economic: -0.2 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "conditional_support"),
      pos("pp", "oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Fiscalidad ambiental con mecanismo compensatorio explícito.",
  }),
  dq({
    id: "dig_001",
    statement:
      "Las administraciones públicas deberían estar obligadas a mantener atención presencial completa junto a la digital, aunque suponga más coste.",
    category: "digitalizacion",
    weights: { economic: -0.4 },
    importance: 1,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "support"),
      pos("pp", "support"),
      pos("vox", "neutral_or_unclear"),
    ],
    methodNotes: "Baja discriminación esperada; incluida por cobertura temática.",
  }),
  dq({
    id: "ia_001",
    statement:
      "El uso de algoritmos e inteligencia artificial por parte de las administraciones públicas debería someterse a auditorías públicas obligatorias e independientes.",
    category: "ia",
    weights: { authority: -0.5 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "support"),
      pos("pp", "neutral_or_unclear"),
      pos("vox", "insufficient_evidence"),
    ],
    methodNotes:
      "Transparencia frente al poder del Estado: autoridad -0.5. Incluye un ejemplo de insufficient_evidence.",
  }),
  dq({
    id: "ia_002",
    statement:
      "España debería aplicar la regulación de la inteligencia artificial de forma estricta, aunque pueda ralentizar la adopción de estas tecnologías por las empresas.",
    category: "ia",
    subcategory: "regulacion",
    weights: { economic: -0.4, authority: 0.2 },
    importance: 1,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "support"),
      pos("pp", "conditional_opposition"),
      pos("vox", "insufficient_evidence"),
    ],
    methodNotes:
      "Regulación económica de tecnología (+ leve autoridad por capacidad supervisora).",
  }),
];
