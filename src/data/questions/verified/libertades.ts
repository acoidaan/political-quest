import type { Question } from "@/lib/types";
import { axesOnly, ne, verify, vote, vp } from "./helpers";
import { baseQuestion as base } from "./base";


/** VERIFICADO — Inmigración, seguridad, justicia y libertades. */
export const VERIFIED_LIBERTADES: Question[] = [
  verify(base("inm_001"), [
    vp(
      "sumar",
      "strongly_support",
      104,
      "…reforma de la [Ley de Extranjería] que prime los criterios de reconocimiento de derechos y que introduzca un procedimiento de regularización permanente.",
      { confidence: 0.9 }
    ),
    vp(
      "vox",
      "strongly_oppose",
      100,
      "Inmediata expulsión de todos los inmigrantes que accedan ilegalmente a nuestro país.",
      { confidence: 0.8, explanation: "Posición derivada: la expulsión general es incompatible con la regularización por arraigo." }
    ),
    vp(
      "pp",
      "oppose",
      81,
      "Agilizaremos el cumplimiento de las órdenes de retorno de inmigrantes irregulares… para prevenir amenazas a la seguridad y evitar el efecto “llamada”.",
      { confidence: 0.6, explanation: "Posición derivada de su prioridad de retornos y de evitar el «efecto llamada»." }
    ),
    vp(
      "psoe",
      "neutral_or_unclear",
      255,
      "…abogamos por una migración regular, segura y ordenada… como han demostrado las dos reformas del reglamento de la ley de extranjería…",
      { confidence: 0.55, explanation: "Facilita el arraigo por vía reglamentaria; su programa no se pronuncia sobre una regularización extraordinaria." }
    ),
  ]),
  verify(base("inm_002"), [
    vp(
      "vox",
      "strongly_support",
      103,
      "…supresión del arraigo como forma de regular la inmigración ilegal y revocación de las pasarelas rápidas para adquirir la nacionalidad española.",
      { confidence: 0.9 }
    ),
    vp(
      "sumar",
      "strongly_oppose",
      104,
      "…reforma… que prime los criterios de reconocimiento de derechos…",
      { confidence: 0.8 }
    ),
    vp(
      "psoe",
      "oppose",
      256,
      "Habilitaremos mejores vías para la migración regular y ordenada que permitan una mejor inserción social y laboral de las personas migrantes…",
      { confidence: 0.65 }
    ),
    vp(
      "pp",
      "conditional_support",
      81,
      "…acuerdos mejorados con los países de origen o de tránsito para prevenir amenazas a la seguridad y evitar el efecto “llamada”.",
      { confidence: 0.55, explanation: "Endurecimiento del control migratorio general; los requisitos de residencia no se detallan." }
    ),
  ]),
  verify(base("inm_003"), [
    vp(
      "pp",
      "support",
      81,
      "Agilizaremos el cumplimiento de las órdenes de retorno de inmigrantes irregulares o expulsión de los que hayan cometido un delito…",
      { confidence: 0.8 }
    ),
    vp(
      "vox",
      "strongly_support",
      103,
      "…se eliminará la posibilidad de sustituir la expulsión por una multa.",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "conditional_opposition",
      104,
      "…que prime los criterios de reconocimiento de derechos…",
      { confidence: 0.55, explanation: "Posición derivada de su enfoque garantista de la extranjería." }
    ),
    ne("psoe"),
  ]),
  verify(base("inm_004"), [
    vp(
      "pp",
      "support",
      99,
      "Impulsaremos la consecución del Pacto Europeo de Migración y Asilo… y reforzar la solidaridad entre los Estados miembro.",
      { confidence: 0.7 }
    ),
    ne(
      "psoe",
      "Su programa aboga por una «migración regular, segura y ordenada» sin pronunciarse expresamente sobre cuotas obligatorias de reparto."
    ),
    vp(
      "vox",
      "oppose",
      102,
      "…reparto equitativo solo de los que tengan derecho en los 27 países miembros así como… la gestión eficaz del retorno…",
      { confidence: 0.65, explanation: "Rechaza cuotas obligatorias generales; solo admite repartos restringidos con retorno reforzado." }
    ),
    vp(
      "sumar",
      "conditional_support",
      149,
      "Un nuevo pacto de migración y asilo para que el Mediterráneo deje de ser una fosa común.",
      { confidence: 0.6, explanation: "Apoya un pacto europeo, pero con enfoque humanitario distinto del acordado." }
    ),
  ]),
  verify(base("inm_005"), [
    vote("psoe", "strongly_support", {
      type: "congress_vote",
      document:
        "Congreso, XII Leg., sesión 137 (06/09/2018), votación 3: convalidación del Real Decreto-ley 7/2018 sobre el acceso universal al Sistema Nacional de Salud",
      url: "https://www.congreso.es/webpublica/opendata/votaciones/Leg12/Sesion137/20180906/VOT_20201204113557.zip",
      date: "2018-09-06",
      record:
        "Convalidación: 177 a favor, 133 en contra, 31 abstenciones. Grupo Socialista: 83 sí.",
      confidence: 0.8,
      explanation:
        "El RDL 7/2018, aprobado por su Gobierno, restableció el acceso sanitario universal incluyendo a personas en situación irregular. Votación anterior al ciclo 23J; sin cambio de posición conocido.",
    }),
    vote("pp", "oppose", {
      type: "congress_vote",
      document:
        "Congreso, XII Leg., sesión 137 (06/09/2018), votación 3: convalidación del RDL 7/2018 (acceso universal al SNS)",
      url: "https://www.congreso.es/webpublica/opendata/votaciones/Leg12/Sesion137/20180906/VOT_20201204113557.zip",
      date: "2018-09-06",
      record: "Grupo Popular: 131 no (de 177 a favor, 133 en contra, 31 abstenciones).",
      confidence: 0.65,
      explanation:
        "Votó contra la convalidación del decreto que restableció la universalidad (que revertía su reforma de 2012). Votación anterior al ciclo 23J; su programa actual no aborda la cuestión.",
    }),
    ne("vox", "Sin representación parlamentaria en 2018; su programa 23J no aborda expresamente esta cuestión."),
    ne("sumar", "Constituido después de esa votación; su programa 23J no la aborda expresamente."),
  ]),
  verify(base("inm_006"), [
    vp(
      "pp",
      "support",
      81,
      "…fortaleceremos las capacidades en medios, tecnología y coordinación de la Policía Nacional y la Guardia Civil en la gestión integrada de fronteras…",
      { confidence: 0.75 }
    ),
    vp(
      "vox",
      "strongly_support",
      17,
      "Garantizaremos la protección de Ceuta y Melilla… Aumentaremos el número de miembros y dotaremos a las FCSE…",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "oppose",
      149,
      "…mecanismos de monitoreo independiente de los derechos humanos en la Frontera Sur para que masacres como la de Melilla en junio de 2022 no vuelvan a suceder…",
      { confidence: 0.65, explanation: "Posición derivada: prioriza garantías de derechos frente al refuerzo de la contención." }
    ),
    ne("psoe"),
  ]),
  verify(base("nac_001"), [
    vp(
      "vox",
      "strongly_oppose",
      103,
      "…revocación de las pasarelas rápidas para adquirir la nacionalidad española… reforma de la normativa sobre nacionalidad para impedir la adquisición fraudulenta o abusiva…",
      { confidence: 0.8 }
    ),
    vp(
      "psoe",
      "neutral_or_unclear",
      256,
      "El acceso a la nacionalidad española por residencia debe ser visto como corolario de un proceso de integración… A través de una Ley de nacionalidad…",
      { confidence: 0.5, explanation: "Anuncia una ley de nacionalidad sin concretar si reduce los plazos." }
    ),
    ne("pp", "Su programa aborda la nacionalidad de descendientes de españoles en el exterior, no los plazos generales de residencia."),
    ne("sumar"),
  ]),
  verify(base("seg_001"), [
    vp(
      "pp",
      "strongly_support",
      81,
      "Reformaremos el Código Penal en lo referente a la multirreincidencia en hurtos y estafas, de modo que la pena… no sea igual para quien comete un delito que para quien comete una sucesión continuada de ellos.",
      { confidence: 0.9 }
    ),
    vp(
      "psoe",
      "conditional_opposition",
      238,
      "Fortaleceremos las políticas resocializadoras de nuestro sistema penitenciario para evitar la reincidencia…",
      { confidence: 0.65, explanation: "Aborda la reincidencia desde la resocialización, no desde el endurecimiento penal." }
    ),
    vp(
      "sumar",
      "oppose",
      133,
      "Se garantizarán los programas de tratamiento rehabilitador para evitar la reincidencia… penas individualizadas que reduzcan la comisión de nuevos delitos.",
      { confidence: 0.7 }
    ),
    vp(
      "vox",
      "neutral_or_unclear",
      93,
      "Un nuevo Código Penal y Ley Penal del Menor elevarán las penas para los crímenes violentos… así como para los delitos más graves…",
      { confidence: 0.5, explanation: "Endurecimiento penal general; la reincidencia no se aborda específicamente." }
    ),
  ]),
  verify(base("seg_002"), [
    vp(
      "pp",
      "strongly_support",
      81,
      "Ampliaremos la prisión permanente revisable para los condenados por un delito de asesinato con ocultación de cadáver.",
      { confidence: 0.95 }
    ),
    vp(
      "vox",
      "strongly_support",
      174,
      "…una ley que aumente las penas a todos los violadores, incluyendo la prisión permanente.",
      { confidence: 0.8 }
    ),
    vp(
      "sumar",
      "strongly_oppose",
      133,
      "Se eliminará la prisión permanente revisable.",
      { confidence: 0.95 }
    ),
    vote("psoe", "oppose", {
      type: "boe",
      document:
        "STC 169/2021, de 6 de octubre (BOE-A-2021-18372): recurso de inconstitucionalidad 3866-2015 contra la prisión permanente revisable (LO 1/2015), interpuesto por más de cincuenta diputados, entre ellos del Grupo Parlamentario Socialista",
      url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2021-18372",
      date: "2021-11-19",
      record:
        "«…diputados… de los Grupos Parlamentarios Socialista; Catalán de Convergencia i de Unió; IU, ICV-EUiA, CHA: La Izquierda Plural; Unión Progreso y Democracia; Vasco (EAJ-PNV) y Mixto contra varios apartados del artículo único de la Ley Orgánica 1/2015…»",
      confidence: 0.75,
      explanation:
        "Recurrió la constitucionalidad de la pena en 2015 (recurso desestimado por el TC en 2021). Posición anterior al ciclo 23J; su programa actual no la menciona.",
    }),
  ]),
  verify(base("pol_001"), [
    vp(
      "sumar",
      "strongly_support",
      118,
      "…proponemos revisar los delitos de opinión y de odio, así como modificar o, en su caso, derogar parcialmente la ley de seguridad ciudadana.",
      { confidence: 0.85 }
    ),
    ne("psoe", "Intentó reformar la ley en la legislatura 2019-2023 sin acuerdo final; su programa 23J no la menciona."),
    ne("pp", "Defiende la ley en el debate público; su programa 23J no la aborda expresamente."),
    ne("vox"),
  ]),
  verify(base("jus_001"), [
    vp(
      "pp",
      "strongly_support",
      75,
      "…la modificación del sistema de elección de los miembros del Consejo de manera que sean los jueces y magistrados los que elijan a los 12 vocales de procedencia judicial.",
      { confidence: 0.95 }
    ),
    vp(
      "vox",
      "strongly_support",
      127,
      "…de manera que todos los miembros del CGPJ sean designados o propuestos por los propios jueces y magistrados, sin injerencia de partidos…",
      { confidence: 0.95 }
    ),
    vp(
      "psoe",
      "strongly_oppose",
      248,
      "…seguiremos exigiendo la inmediata renovación del Consejo General del Poder Judicial con el sistema actual de doble legitimación en su elección…",
      { confidence: 0.9 }
    ),
    vp(
      "sumar",
      "neutral_or_unclear",
      125,
      "Se debe articular la descentralización del CGPJ en determinadas materias…",
      { confidence: 0.5, explanation: "Propone descentralizar funciones; no se pronuncia sobre el sistema de elección de vocales." }
    ),
  ]),
  verify(base("jus_002"), [
    vp(
      "psoe",
      "strongly_support",
      238,
      "Fortaleceremos las políticas resocializadoras de nuestro sistema penitenciario…",
      { confidence: 0.8 }
    ),
    vp(
      "sumar",
      "strongly_support",
      133,
      "Se garantizarán los programas de tratamiento rehabilitador… penas individualizadas…",
      { confidence: 0.8 }
    ),
    vp(
      "pp",
      "oppose",
      81,
      "Reformaremos el Código Penal en lo referente a la multirreincidencia… Ampliaremos la prisión permanente revisable…",
      { confidence: 0.6, explanation: "Posición derivada de su agenda de endurecimiento penal." }
    ),
    vp(
      "vox",
      "strongly_oppose",
      93,
      "Un nuevo Código Penal y Ley Penal del Menor elevarán las penas para los crímenes violentos…",
      { confidence: 0.7, explanation: "Posición derivada de su agenda de endurecimiento penal generalizado." }
    ),
  ]),
  axesOnly(
    base("pri_001"),
    "Verificación 2026-08: los programas 23J no abordan expresamente los beneficios penitenciarios y el tercer grado."
  ),
  verify(base("lib_001"), [
    vp(
      "sumar",
      "support",
      118,
      "…proponemos revisar los delitos de opinión y de odio…",
      { confidence: 0.6, explanation: "Revisión general de los delitos de opinión; no cita expresamente injurias a la Corona ni sentimientos religiosos." }
    ),
    ne("pp"),
    ne("psoe"),
    ne("vox"),
  ]),
  axesOnly(
    base("prv_001"),
    "Verificación 2026-08: ningún programa 23J aborda el reconocimiento facial policial en espacios públicos (SUMAR solo lo trata en el ámbito laboral)."
  ),
];
