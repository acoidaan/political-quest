import type { Question } from "@/lib/types";
import { dq, pos } from "./helpers";

/**
 * DEMO — Economía, impuestos, bienestar, pensiones, trabajo, vivienda.
 * Posiciones de partidos NO verificadas (ver helpers.ts).
 */
export const DEMO_ECONOMIA: Question[] = [
  dq({
    id: "eco_001",
    statement:
      "El Estado debería mantener participación pública en empresas de sectores estratégicos como la energía o las telecomunicaciones, aunque ello reduzca el espacio de la iniciativa privada.",
    category: "economia",
    subcategory: "empresa_publica",
    weights: { economic: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "oppose"),
      pos("vox", "neutral_or_unclear", "Posición heterogénea según el sector."),
    ],
    methodNotes:
      "Eje económico nuclear: propiedad pública vs. mercado. Peso -0.8 (rúbrica: banda alta, tema troncal).",
  }),
  dq({
    id: "eco_002",
    statement:
      "Deberían reducirse las cotizaciones sociales que pagan las empresas por sus trabajadores, aunque implique menos ingresos para la Seguridad Social.",
    category: "economia",
    subcategory: "cotizaciones",
    weights: { economic: 0.8 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "support"),
      pos("vox", "support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Coste laboral vs. financiación del sistema. Peso +0.8.",
  }),
  dq({
    id: "eco_003",
    statement:
      "Los beneficios extraordinarios de bancos y grandes energéticas deberían gravarse con un impuesto específico.",
    category: "economia",
    subcategory: "impuestos_sectoriales",
    weights: { economic: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "strongly_support"),
      pos("sumar", "strongly_support"),
      pos("pp", "oppose"),
      pos("vox", "oppose"),
    ],
    methodNotes:
      "Gravamen sectorial extraordinario: redistribución vs. neutralidad fiscal. Peso -0.8.",
  }),
  dq({
    id: "imp_001",
    statement:
      "Deberían aumentarse los impuestos a las rentas más altas, aunque una parte de los afectados pudiera trasladar su residencia fiscal o reducir su inversión.",
    category: "impuestos",
    subcategory: "progresividad",
    weights: { economic: -0.8 },
    importance: 3,
    polarity: "negative",
    relatedTo: [{ id: "imp_002", expected: "inverse" }],
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Progresividad fiscal, tema troncal. Par de consistencia con imp_002 (formulación inversa).",
  }),
  dq({
    id: "imp_002",
    statement:
      "Debería reducirse el IRPF de forma generalizada, aunque implicara disponer de menos recursos para el gasto público.",
    category: "impuestos",
    subcategory: "bajada_general",
    weights: { economic: 0.8 },
    importance: 3,
    polarity: "positive",
    relatedTo: [{ id: "imp_001", expected: "inverse" }],
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "strongly_support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Par inverso de imp_001. El trade-off (menos gasto) es explícito.",
  }),
  dq({
    id: "imp_003",
    statement:
      "El impuesto de sucesiones y donaciones debería suprimirse o reducirse a un tipo simbólico.",
    category: "impuestos",
    subcategory: "sucesiones",
    weights: { economic: 0.7 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "support"),
      pos("vox", "strongly_support"),
      pos("psoe", "oppose"),
      pos("sumar", "oppose"),
    ],
    methodNotes: "Fiscalidad patrimonial. Peso +0.7 (banda alta, no troncal).",
  }),
  dq({
    id: "imp_004",
    statement:
      "Debería mantenerse un impuesto estatal a las grandes fortunas, aunque parte de su recaudación se solape con impuestos autonómicos.",
    category: "impuestos",
    subcategory: "patrimonio",
    weights: { economic: -0.7, territorial: 0.2 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "strongly_oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Impuesto estatal que armoniza sobre competencias autonómicas: leve componente centralizador (+0.2 territorial).",
  }),
  dq({
    id: "bie_001",
    statement:
      "Debería ampliarse la prestación estatal de ingreso mínimo para llegar a más hogares, aunque exigiera aumentar el gasto público de forma permanente.",
    category: "bienestar",
    subcategory: "ingreso_minimo",
    weights: { economic: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_opposition", "Crítico con el diseño, no necesariamente con la existencia."),
      pos("vox", "oppose"),
    ],
    methodNotes: "Redistribución directa, tema troncal del eje económico.",
  }),
  dq({
    id: "bie_002",
    statement:
      "El cobro de determinadas prestaciones sociales debería condicionarse de forma más estricta a la búsqueda activa de empleo o a la formación.",
    category: "bienestar",
    subcategory: "condicionalidad",
    weights: { economic: 0.5, authority: 0.3 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "support"),
      pos("vox", "support"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "oppose"),
    ],
    methodNotes:
      "Condicionalidad: componente económico (+0.5) y de control administrativo (+0.3 autoridad).",
  }),
  dq({
    id: "pen_001",
    statement:
      "Las pensiones deberían seguir revalorizándose por ley conforme al IPC, aunque ello exija aumentar cotizaciones u otros impuestos.",
    category: "pensiones",
    subcategory: "revalorizacion",
    weights: { economic: -0.6 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "strongly_support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support", "Apoyo con matices de sostenibilidad."),
      pos("vox", "conditional_support"),
    ],
    methodNotes:
      "Alto consenso declarado → discriminación baja esperada; se mantiene por relevancia social.",
  }),
  dq({
    id: "pen_002",
    statement:
      "Debería incentivarse fiscalmente el ahorro privado para la jubilación como complemento del sistema público de pensiones.",
    category: "pensiones",
    subcategory: "planes_privados",
    weights: { economic: 0.6 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "support"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "oppose"),
    ],
    methodNotes: "Capitalización complementaria vs. reparto puro.",
  }),
  dq({
    id: "tra_001",
    statement:
      "Deberían elevarse las indemnizaciones por despido improcedente, aunque pudiera desincentivar la contratación indefinida en algunas empresas.",
    category: "trabajo",
    subcategory: "despido",
    weights: { economic: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "conditional_support"),
      pos("pp", "oppose"),
      pos("vox", "oppose"),
    ],
    methodNotes: "Protección del empleo vs. flexibilidad. Peso -0.7.",
  }),
  dq({
    id: "tra_002",
    statement:
      "La jornada laboral máxima legal debería reducirse (por ejemplo a 37,5 horas semanales) sin reducción de salario, aunque aumente los costes de las empresas.",
    category: "trabajo",
    subcategory: "jornada",
    weights: { economic: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "support"),
      pos("pp", "oppose"),
      pos("vox", "oppose"),
    ],
    methodNotes: "Regulación laboral directa con trade-off explícito de costes.",
  }),
  dq({
    id: "smi_001",
    statement:
      "El salario mínimo debería seguir subiendo por encima de la inflación, aunque pudiera afectar al empleo en algunos sectores o territorios.",
    category: "salario_minimo",
    weights: { economic: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "support"),
      pos("pp", "conditional_opposition", "Apoya subidas pactadas con empresas, no automáticas."),
      pos("vox", "conditional_opposition"),
    ],
    methodNotes: "Intervención en el mercado laboral, tema troncal.",
  }),
  dq({
    id: "viv_001",
    statement:
      "Deberían limitarse por ley los precios del alquiler en zonas donde hayan subido muy por encima de los ingresos de los residentes.",
    category: "vivienda",
    subcategory: "control_alquiler",
    weights: { economic: -0.8 },
    importance: 3,
    polarity: "negative",
    relatedTo: [{ id: "viv_002", expected: "inverse" }],
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "support"),
      pos("pp", "strongly_oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Control de precios: intervención directa de mercado. Par de consistencia con viv_002.",
  }),
  dq({
    id: "viv_002",
    statement:
      "Los propietarios deberían poder fijar libremente el precio de sus alquileres, sin límites administrativos.",
    category: "vivienda",
    subcategory: "libertad_precios",
    weights: { economic: 0.8 },
    importance: 3,
    polarity: "positive",
    relatedTo: [{ id: "viv_001", expected: "inverse" }],
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "strongly_support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Par inverso de viv_001; formulación desde el polo contrario.",
  }),
  dq({
    id: "viv_003",
    statement:
      "Deberían reforzarse los instrumentos legales para desalojar en pocos días las viviendas ocupadas ilegalmente.",
    category: "vivienda",
    subcategory: "ocupacion",
    weights: { authority: 0.7, economic: 0.3 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "strongly_support"),
      pos("psoe", "conditional_support", "Apoya agilizar con salvaguardas de vulnerabilidad."),
      pos("sumar", "conditional_opposition"),
    ],
    methodNotes:
      "Principalmente orden/propiedad (autoridad +0.7) con componente económico de derecho de propiedad (+0.3).",
  }),
  dq({
    id: "viv_004",
    statement:
      "El suelo público disponible debería destinarse principalmente a vivienda pública en alquiler, en lugar de venderse a promotores privados.",
    category: "vivienda",
    subcategory: "parque_publico",
    weights: { economic: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_opposition", "Prefiere colaboración público-privada."),
      pos("vox", "insufficient_evidence"),
    ],
    methodNotes: "Provisión pública directa vs. mercado.",
  }),
  dq({
    id: "reg_001",
    statement:
      "Deberían reducirse los trámites y licencias necesarios para abrir o ampliar un negocio, aunque implique menos control administrativo previo.",
    category: "regulacion",
    weights: { economic: 0.7 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "strongly_support"),
      pos("psoe", "conditional_support"),
      pos("sumar", "conditional_opposition"),
    ],
    methodNotes: "Desregulación administrativa con trade-off explícito.",
  }),
  dq({
    id: "emp_001",
    statement:
      "Debería ampliarse la plantilla estructural de los servicios públicos (sanidad, educación, justicia), aunque suponga más gasto público permanente.",
    category: "empleo_publico",
    weights: { economic: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_opposition", "Prefiere reordenar antes que ampliar."),
      pos("vox", "oppose"),
    ],
    methodNotes: "Tamaño del sector público.",
  }),
];
