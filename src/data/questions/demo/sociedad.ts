import type { Question } from "@/lib/types";
import { dq, pos } from "./helpers";

/**
 * DEMO — Sanidad, educación, igualdad, derechos y sociedad.
 * Posiciones de partidos NO verificadas (ver helpers.ts).
 */
export const DEMO_SOCIEDAD: Question[] = [
  dq({
    id: "san_001",
    statement:
      "Debería aumentarse el gasto sanitario público, aunque para ello fuera necesario subir determinados impuestos.",
    category: "sanidad",
    subcategory: "gasto",
    weights: { economic: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support", "Apoya más gasto, no la subida de impuestos asociada."),
      pos("vox", "conditional_opposition"),
    ],
    methodNotes:
      "El trade-off fiscal explícito evita la pregunta trampa '¿quieres mejor sanidad?'.",
  }),
  dq({
    id: "san_002",
    statement:
      "La colaboración con la sanidad privada (conciertos) debería ampliarse para reducir listas de espera, aunque derive fondos públicos hacia proveedores privados.",
    category: "sanidad",
    subcategory: "conciertos",
    weights: { economic: 0.7 },
    importance: 3,
    polarity: "positive",
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "support"),
      pos("psoe", "oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Provisión pública vs. privada de un servicio público troncal.",
  }),
  dq({
    id: "san_003",
    statement:
      "La atención a la salud mental debería reforzarse con más profesionales en la sanidad pública, aunque requiera aumentar el gasto o reordenar otras partidas.",
    category: "sanidad",
    subcategory: "salud_mental",
    weights: { economic: -0.5 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "support"),
      pos("vox", "neutral_or_unclear"),
    ],
    methodNotes:
      "Consenso amplio esperado → baja discriminación; se mantiene por relevancia.",
  }),
  dq({
    id: "edu_001",
    statement:
      "La escuela concertada debería mantener o ampliar su financiación pública actual.",
    category: "educacion",
    subcategory: "concertada",
    weights: { economic: 0.5, social: 0.5 },
    importance: 3,
    polarity: "positive",
    partyPositions: [
      pos("pp", "strongly_support"),
      pos("vox", "strongly_support"),
      pos("psoe", "conditional_opposition", "Prioriza la red pública sin eliminar conciertos."),
      pos("sumar", "oppose"),
    ],
    methodNotes:
      "Doble carga: modelo de provisión (económico) y componente valórico-educativo (social).",
  }),
  dq({
    id: "edu_002",
    statement:
      "La asignatura de religión debería quedar fuera del horario lectivo evaluable en la escuela pública.",
    category: "educacion",
    subcategory: "religion_escuela",
    weights: { social: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Laicidad educativa: eje social.",
  }),
  dq({
    id: "edu_003",
    statement:
      "En comunidades con lengua cooficial, las familias deberían poder escolarizar a sus hijos con el castellano como lengua vehicular principal.",
    category: "educacion",
    subcategory: "lengua_vehicular",
    weights: { territorial: 0.7, social: 0.2 },
    importance: 3,
    polarity: "positive",
    partyPositions: [
      pos("pp", "support"),
      pos("vox", "strongly_support"),
      pos("psoe", "conditional_opposition"),
      pos("sumar", "oppose"),
    ],
    methodNotes:
      "Principalmente conflicto territorial-lingüístico (+0.7 hacia centralización de criterios).",
  }),
  dq({
    id: "uni_001",
    statement:
      "Deberían reducirse las tasas universitarias y ampliarse las becas, aunque exija más financiación pública para las universidades.",
    category: "universidades",
    weights: { economic: -0.6 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("vox", "neutral_or_unclear"),
    ],
    methodNotes: "Acceso vs. coste público.",
  }),
  dq({
    id: "igu_001",
    statement:
      "Las empresas grandes deberían estar obligadas a realizar auditorías salariales de género, con sanciones por incumplimiento.",
    category: "igualdad",
    weights: { social: -0.6, economic: -0.3 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes:
      "Igualdad de género con componente de regulación empresarial (-0.3 económico).",
  }),
  dq({
    id: "gen_001",
    statement:
      "La legislación penal debería mantener un tratamiento específico para la violencia de género, distinto del de la violencia doméstica general.",
    category: "genero",
    subcategory: "violencia_genero",
    weights: { social: -0.7 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "strongly_support"),
      pos("sumar", "strongly_support"),
      pos("pp", "support"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Alta capacidad discriminativa esperada en un partido concreto.",
  }),
  dq({
    id: "gen_002",
    statement:
      "Las personas deberían poder cambiar legalmente su sexo registral mediante declaración propia, sin requisitos médicos o judiciales.",
    category: "genero",
    subcategory: "autodeterminacion",
    weights: { social: -0.8 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "support", "Apoyo con debate interno documentado."),
      pos("pp", "oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Eje social, banda alta.",
  }),
  dq({
    id: "lgb_001",
    statement:
      "El matrimonio entre personas del mismo sexo debe seguir garantizado por ley, con los mismos derechos que el resto, incluida la adopción.",
    category: "lgbt",
    weights: { social: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "strongly_support"),
      pos("sumar", "strongly_support"),
      pos("pp", "support"),
      pos("vox", "conditional_opposition", "Ha propuesto modificaciones del marco vigente."),
    ],
    methodNotes: "Derechos consolidados: mide conservadurismo de reversión.",
  }),
  dq({
    id: "lgb_002",
    statement:
      "Deberían prohibirse por ley las llamadas «terapias de conversión» de la orientación sexual, con sanciones para quienes las practiquen.",
    category: "lgbt",
    weights: { social: -0.7, authority: 0.2 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("vox", "oppose"),
    ],
    methodNotes:
      "Progresismo social; leve +authority por tratarse de una prohibición sancionadora.",
  }),
  dq({
    id: "fam_001",
    statement:
      "Deberían aumentar de forma significativa las ayudas económicas directas por hijo a cargo, aunque suponga más gasto público permanente.",
    category: "familia",
    weights: { economic: -0.4, social: 0.2 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "support"),
      pos("psoe", "conditional_support"),
      pos("pp", "support"),
      pos("vox", "strongly_support", "Lo enmarca en política de natalidad."),
    ],
    methodNotes:
      "Transversal: gasto social (izquierda) y natalismo (derecha). Pesos pequeños en dos ejes; buena candidata a validación empírica en Fase 5.",
  }),
  dq({
    id: "abo_001",
    statement:
      "El aborto debería seguir siendo un derecho garantizado en la sanidad pública dentro de los plazos legales vigentes.",
    category: "aborto",
    weights: { social: -0.8 },
    importance: 3,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "strongly_support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support", "Acata el marco vigente con matices internos."),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Eje social troncal.",
  }),
  dq({
    id: "abo_002",
    statement:
      "Las jóvenes de 16 y 17 años deberían necesitar el consentimiento de sus padres o tutores para interrumpir el embarazo.",
    category: "aborto",
    subcategory: "menores",
    weights: { social: 0.7 },
    importance: 2,
    polarity: "positive",
    partyPositions: [
      pos("pp", "support"),
      pos("vox", "strongly_support"),
      pos("psoe", "strongly_oppose"),
      pos("sumar", "strongly_oppose"),
    ],
    methodNotes: "Formulada desde el polo conservador (balance de polaridad).",
  }),
  dq({
    id: "eut_001",
    statement:
      "La eutanasia debería seguir siendo legal y estar disponible en la sanidad pública en los supuestos regulados.",
    category: "eutanasia",
    weights: { social: -0.8 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "strongly_support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_opposition", "Votó en contra de la ley; propone cuidados paliativos."),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Derechos de final de vida: eje social.",
  }),
  dq({
    id: "rel_001",
    statement:
      "Deberían revisarse los acuerdos del Estado con la Santa Sede para reducir la presencia de la religión en instituciones y actos públicos.",
    category: "religion",
    weights: { social: -0.7 },
    importance: 2,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "conditional_support"),
      pos("pp", "oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Laicidad institucional.",
  }),
  dq({
    id: "cul_001",
    statement:
      "La tauromaquia debería dejar de recibir financiación y promoción con dinero público.",
    category: "cultura",
    weights: { social: -0.6 },
    importance: 1,
    polarity: "negative",
    partyPositions: [
      pos("sumar", "strongly_support"),
      pos("psoe", "neutral_or_unclear"),
      pos("pp", "strongly_oppose"),
      pos("vox", "strongly_oppose"),
    ],
    methodNotes: "Conflicto cultural clásico; importancia editorial baja.",
  }),
  dq({
    id: "mpu_001",
    statement:
      "RTVE debería mantener una financiación pública fuerte, aunque suponga un coste elevado y compita con medios privados.",
    category: "medios_publicos",
    weights: { economic: -0.5 },
    importance: 1,
    polarity: "negative",
    partyPositions: [
      pos("psoe", "support"),
      pos("sumar", "strongly_support"),
      pos("pp", "conditional_support"),
      pos("vox", "strongly_oppose", "Ha propuesto privatizar o cerrar medios públicos."),
    ],
    methodNotes: "Provisión pública de medios: clasificado como económico.",
  }),
];
