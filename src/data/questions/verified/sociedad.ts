import type { Question } from "@/lib/types";
import { axesOnly, ne, verify, vote, vp } from "./helpers";
import { baseQuestion as base } from "./base";


/** VERIFICADO — Sanidad, educación, igualdad, derechos y sociedad. */
export const VERIFIED_SOCIEDAD: Question[] = [
  verify(base("san_001"), [
    vp(
      "psoe",
      "strongly_support",
      234,
      "…que la inversión del conjunto de Administraciones Públicas en Sanidad sea como mínimo del 7% del PIB…",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "strongly_support",
      89,
      "El gasto sanitario público aumentará anualmente medio punto del PIB hasta igualar el porcentaje promedio de los diez países europeos con mayor participación de gasto sanitario público…",
      { confidence: 0.9 }
    ),
    ne("pp", "Su programa refuerza el SNS sin comprometer objetivos cuantificados de gasto ni su financiación con impuestos."),
    ne("vox"),
  ]),
  verify(base("san_002"), [
    vp(
      "sumar",
      "strongly_oppose",
      89,
      "Se blindará el carácter público del Sistema Nacional de Salud, impidiendo las formas de gestión privatizadas. Promoveremos un plan de desprivatización…",
      { confidence: 0.9 }
    ),
    vp(
      "vox",
      "neutral_or_unclear",
      56,
      "Implementaremos todas las medidas precisas para asegurar la libertad de elección de médico y centro…",
      { confidence: 0.5, explanation: "Defiende libertad de elección sin concretar el papel de los conciertos con la privada." }
    ),
    ne("pp", "Su programa 23J no se pronuncia expresamente sobre la ampliación de conciertos sanitarios."),
    ne("psoe"),
  ]),
  verify(base("san_003"), [
    vp(
      "pp",
      "support",
      49,
      "…aprobando una nueva Estrategia Nacional en Salud Mental, centrada en la atención temprana…",
      { confidence: 0.8 }
    ),
    vp(
      "psoe",
      "support",
      197,
      "Pacto por la Salud Mental [con] nuevos planes, más derechos y mejoras en el sistema.",
      { confidence: 0.7 }
    ),
    vp(
      "vox",
      "support",
      58,
      "Reforzaremos la Estrategia Nacional de Salud Mental, reforzando la prevención.",
      { confidence: 0.8 }
    ),
    vp(
      "sumar",
      "strongly_support",
      89,
      "Proponemos incorporar a los servicios sanitarios públicos nuevas prestaciones, como… la psicoterapia…",
      { confidence: 0.8 }
    ),
  ]),
  axesOnly(
    base("san_004"),
    "Verificación 2026-08: ningún programa 23J aborda la desgravación del seguro sanitario privado."
  ),
  verify(base("edu_001"), [
    vp(
      "vox",
      "strongly_support",
      33,
      "Blindaremos la libre elección de centro educativo en todos los niveles a través de un cheque escolar…",
      { confidence: 0.8, explanation: "El cheque escolar va más allá del régimen actual de conciertos." }
    ),
    vp(
      "sumar",
      "oppose",
      155,
      "…revisar la normativa de conciertos educativos para que la red concertada sea realmente subsidiaria de la pública y… acabar con la cesión de suelo público…",
      { confidence: 0.85 }
    ),
    ne("pp", "Su programa 23J defiende la libertad educativa en términos generales sin pronunciarse expresamente sobre la financiación de la concertada."),
    ne("psoe"),
  ]),
  axesOnly(
    base("edu_002"),
    "Verificación 2026-08: ningún programa 23J aborda expresamente la asignatura de religión."
  ),
  verify(base("edu_003"), [
    vp(
      "pp",
      "support",
      51,
      "Garantizaremos que, en las comunidades autónomas con más de una lengua oficial, ambas tendrán la consideración de vehiculares…",
      { confidence: 0.7 }
    ),
    vp(
      "vox",
      "strongly_support",
      27,
      "…la protección del uso del español como lengua vehicular en todo el territorio nacional…",
      { confidence: 0.7, explanation: "Iniciativa propia citada en el anexo del programa (abril 2023)." }
    ),
    ne("psoe"),
    ne("sumar", "Su programa defiende la pluralidad lingüística sin pronunciarse sobre la elección de lengua vehicular."),
  ]),
  verify(base("edu_004"), [
    vp(
      "sumar",
      "strongly_oppose",
      113,
      "La negación de la violencia contra las mujeres, la introducción del pin parental o la eliminación de parte de la arquitectura institucional son algunos ejemplos [de discursos contrarios a los derechos].",
      { confidence: 0.8 }
    ),
    vp(
      "vox",
      "support",
      33,
      "…[frente a leyes educativas que] adoctrinan ideológicamente a los niños pasando por encima de la autoridad de sus padres.",
      { confidence: 0.65, explanation: "Posición derivada de su defensa de la autoridad parental en la escuela; el término «pin parental» no aparece literalmente." }
    ),
    ne("pp"),
    ne("psoe"),
  ]),
  verify(base("uni_001"), [
    vp(
      "pp",
      "support",
      51,
      "Garantizaremos un sistema nacional de becas y ayudas al estudio… Ampliaremos la política de becas en todas las etapas…",
      { confidence: 0.6, explanation: "Compromiso con la ampliación de becas; las tasas no se abordan expresamente." }
    ),
    vp(
      "psoe",
      "support",
      116,
      "…para asegurar la igualdad de oportunidades en el acceso a la universidad.",
      { confidence: 0.6, explanation: "Refuerzo de becas y acceso; las tasas no se abordan expresamente." }
    ),
    vp(
      "vox",
      "support",
      34,
      "Ningún español debe quedarse sin poder estudiar por falta de recursos económicos. Se mejorará el sistema de becas…",
      { confidence: 0.6, explanation: "Mejora de becas; las tasas no se abordan expresamente." }
    ),
    vp(
      "sumar",
      "support",
      103,
      "…la ampliación y la modernización de los sistemas de becas y ayudas al estudio, cuya partida presupuestaria se seguirá ampliando significativamente.",
      { confidence: 0.7 }
    ),
  ]),
  verify(base("igu_001"), [
    vp(
      "psoe",
      "support",
      136,
      "…obligaciones para las empresas en cuanto a la reducción de la brecha salarial…",
      { confidence: 0.75 }
    ),
    vp(
      "sumar",
      "support",
      10,
      "…reforzar el control horario… y crear un observatorio de la brecha salarial de género…",
      { confidence: 0.65 }
    ),
    vp(
      "pp",
      "conditional_support",
      21,
      "Impulsaremos planes de igualdad con horizontes temporales y objetivos concretos y evaluables… combatir… la brecha salarial entre hombres y mujeres…",
      { confidence: 0.6, explanation: "Apoya planes y objetivos; no menciona auditorías obligatorias con sanciones." }
    ),
    vp(
      "vox",
      "strongly_oppose",
      10,
      "En lugar de las “cuotas de género”, planes de igualdad u obligaciones de contratación, impulsaremos políticas que permitan la estabilidad familiar…",
      { confidence: 0.85 }
    ),
  ]),
  verify(base("gen_001"), [
    vp(
      "psoe",
      "strongly_support",
      146,
      "Ni un paso atrás contra la violencia machista… Defender el pacto de estado contra la violencia de género.",
      { confidence: 0.9 }
    ),
    vp(
      "pp",
      "support",
      42,
      "Vamos a seguir luchando contra la violencia machista, una lacra que en los últimos meses ha repuntado…",
      { confidence: 0.7 }
    ),
    vp(
      "vox",
      "strongly_oppose",
      128,
      "Derogaremos la Ley de violencia de género y de toda norma que derive de la teoría de género… Eliminaremos los Juzgados de Violencia sobre…",
      { confidence: 0.95 }
    ),
    vp(
      "sumar",
      "strongly_support",
      109,
      "La coeducación es una estrategia fundamental para erradicar estereotipos de género y prevenir la violencia machista.",
      { confidence: 0.7 }
    ),
  ]),
  verify(base("gen_002"), [
    vp(
      "vox",
      "strongly_oppose",
      173,
      "Derogaremos la ley Trans, Ley 4/2023, de 28 de febrero…",
      { confidence: 0.95 }
    ),
    vp(
      "sumar",
      "support",
      115,
      "…el acceso a tratamientos completos de atención a la identidad de género.",
      { confidence: 0.65, explanation: "Defiende el desarrollo de los derechos reconocidos en la ley vigente." }
    ),
    vp(
      "psoe",
      "support",
      138,
      "El compromiso del gobierno de Pedro Sánchez con la transversalidad de género se ha plasmado en muchas iniciativas legislativas…",
      { confidence: 0.55, explanation: "Su Gobierno impulsó la Ley 4/2023 como proyecto de ley; el programa no la menciona expresamente." }
    ),
    ne("pp"),
  ]),
  verify(base("lgb_001"), [
    vp(
      "psoe",
      "strongly_support",
      215,
      "…intensificando la firma de tratados de adopción internacional con aquellos países que permiten la adopción a las parejas del mismo sexo…",
      { confidence: 0.8 }
    ),
    vp(
      "pp",
      "support",
      64,
      "El Partido Popular defiende el pluralismo y la diversidad como valores intrínsecos de la democracia… [igualdad de las personas LGTBi].",
      { confidence: 0.6 }
    ),
    vp(
      "vox",
      "conditional_opposition",
      17,
      "Derogaremos las leyes… que atentan contra la igualdad… como la Ley de Memoria Democrática o la Ley LGTBI.",
      { confidence: 0.55, explanation: "Deroga la Ley LGTBI estatal; su programa no propone expresamente revertir el matrimonio igualitario." }
    ),
    vp(
      "sumar",
      "strongly_support",
      96,
      "…trabajar para eliminar las restricciones de terceros países a la adopción internacional por parte de familias LGTBI+.",
      { confidence: 0.75 }
    ),
  ]),
  verify(base("lgb_002"), [
    vote("psoe", "support", {
      type: "congress_vote",
      document:
        "Congreso, XIV Leg., sesión 229 (22/12/2022), votación 371: dictamen del Proyecto de Ley para la igualdad real y efectiva de las personas trans y garantía de los derechos de las personas LGTBI (Ley 4/2023, que prohíbe las terapias de conversión)",
      url: "https://www.congreso.es/webpublica/opendata/votaciones/Leg14/Sesion229/20221222/VOT_20230302132452.zip",
      date: "2022-12-22",
      record:
        "Votación de conjunto: 188 a favor, 150 en contra, 7 abstenciones. Grupo Socialista: 118 sí.",
      confidence: 0.8,
      explanation:
        "Proyecto de ley del Gobierno de coalición aprobado con sus votos; la Ley 4/2023 prohíbe y sanciona las terapias de conversión. Votación anterior al ciclo 23J.",
    }),
    vote("vox", "oppose", {
      type: "congress_vote",
      document:
        "Congreso, XIV Leg., sesión 229 (22/12/2022), votación 371: dictamen del Proyecto de Ley trans-LGTBI (Ley 4/2023)",
      url: "https://www.congreso.es/webpublica/opendata/votaciones/Leg14/Sesion229/20221222/VOT_20230302132452.zip",
      date: "2022-12-22",
      record: "Grupo VOX: 52 no (de 188 a favor, 150 en contra, 7 abstenciones).",
      confidence: 0.75,
      explanation:
        "Votó contra la ley que contiene la prohibición y su programa 23J (p. 173) se compromete a derogarla íntegramente, lo que eliminaría la prohibición de estas prácticas.",
    }),
    vote("pp", "neutral_or_unclear", {
      type: "congress_vote",
      document:
        "Congreso, XIV Leg., sesión 229 (22/12/2022), votación 371: dictamen del Proyecto de Ley trans-LGTBI (Ley 4/2023)",
      url: "https://www.congreso.es/webpublica/opendata/votaciones/Leg14/Sesion229/20221222/VOT_20230302132452.zip",
      date: "2022-12-22",
      record: "Grupo Popular: 86 no (y abstención en las enmiendas del Senado el 16/02/2023).",
      confidence: 0.5,
      explanation:
        "Votó contra la ley en su conjunto por otros motivos (autodeterminación registral); no consta posición específica sobre la prohibición de las terapias de conversión.",
    }),
    ne(
      "sumar",
      "La Ley 4/2023 se votó antes de la constitución de Sumar como grupo; su programa defiende los derechos LGTBI+ sin mencionar expresamente las terapias de conversión."
    ),
  ]),
  verify(base("fam_001"), [
    vp(
      "pp",
      "support",
      53,
      "Aumentaremos la cuantía y ampliaremos el alcance de la prestación por hijo a cargo, posibilitando su cobro desde el quinto mes de embarazo.",
      { confidence: 0.85 }
    ),
    vp(
      "psoe",
      "support",
      173,
      "Establecer una prestación por crianza para familias con personas menores a cargo.",
      { confidence: 0.85 }
    ),
    vp(
      "vox",
      "support",
      76,
      "Aprobaremos una nueva deducción por nacimiento o adopción en el IRPF, por un importe de 1.200 euros para el primer hijo…",
      { confidence: 0.7, explanation: "Apoyo vía deducciones fiscales más que prestación directa." }
    ),
    vp(
      "sumar",
      "strongly_support",
      15,
      "Impulso de una prestación por crianza, para luchar por la erradicación de la pobreza infantil. Se cobrará hasta los 18 años…",
      { confidence: 0.9 }
    ),
  ]),
  verify(base("abo_001"), [
    vp(
      "psoe",
      "strongly_support",
      138,
      "Con el gobierno de Pedro Sánchez hemos recuperado el derecho a la interrupción voluntaria del embarazo para las mujeres de 16 y 17 años y puesto fin a los tres días de reflexión.",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "strongly_support",
      111,
      "Será una prioridad garantizar el acceso efectivo al derecho al aborto desde los servicios públicos de salud en todo el territorio…",
      { confidence: 0.9 }
    ),
    vp(
      "vox",
      "strongly_oppose",
      58,
      "…la derogación de las leyes de eutanasia y del aborto… suprimiremos de la Sanidad Pública aquellas intervenciones… (cambio de sexo, aborto, eutanasia, etc.)…",
      { confidence: 0.95 }
    ),
    vp(
      "pp",
      "conditional_support",
      47,
      "…blindaremos la objeción de conciencia de los profesionales sanitarios.",
      { confidence: 0.55, explanation: "No cuestiona el marco general, pero introduce restricciones (objeción, consentimiento paterno en menores)." }
    ),
  ]),
  verify(base("abo_002"), [
    vp(
      "pp",
      "strongly_support",
      47,
      "Introduciremos en la legislación en materia de interrupción voluntaria del embarazo el consentimiento de los titulares de la patria potestad previo a la realización del aborto en las jóvenes menores de edad.",
      { confidence: 0.95 }
    ),
    vp(
      "psoe",
      "strongly_oppose",
      138,
      "…hemos recuperado el derecho a la interrupción voluntaria del embarazo para las mujeres de 16 y 17 años…",
      { confidence: 0.85 }
    ),
    vp(
      "vox",
      "strongly_support",
      58,
      "…la derogación de las leyes… del aborto.",
      { confidence: 0.65, explanation: "Posición derivada: es contrario al marco del aborto en su conjunto." }
    ),
    vp(
      "sumar",
      "strongly_oppose",
      111,
      "Será una prioridad garantizar el acceso efectivo al derecho al aborto…",
      { confidence: 0.7, explanation: "Posición derivada de su defensa del acceso efectivo al derecho." }
    ),
  ]),
  verify(base("eut_001"), [
    vp(
      "psoe",
      "support",
      14,
      "…reconociendo la eutanasia como un nuevo derecho de los ciudadanos.",
      { confidence: 0.8 }
    ),
    vp(
      "sumar",
      "support",
      99,
      "…reconociendo la necesidad de tener una muerte digna, en coherencia con lo establecido en la Ley de Regulación de la Eutanasia.",
      { confidence: 0.8 }
    ),
    vp(
      "pp",
      "conditional_opposition",
      48,
      "…revisaremos la Ley de Eutanasia tomando en consideración la opinión del Comité de Bioética.",
      { confidence: 0.7, explanation: "Prioriza los cuidados paliativos y somete la ley a revisión, sin comprometer su derogación." }
    ),
    vp(
      "vox",
      "strongly_oppose",
      58,
      "…la derogación de las leyes de eutanasia y del aborto.",
      { confidence: 0.95 }
    ),
  ]),
  verify(base("rel_001"), [
    vp(
      "psoe",
      "support",
      253,
      "Una España que avanza en laicidad… espacios de laicidad conquistados por y para la ciudadanía…",
      { confidence: 0.55, explanation: "Sección dedicada al avance en laicidad; los Acuerdos con la Santa Sede no se mencionan expresamente." }
    ),
    ne("pp"),
    ne("vox"),
    ne("sumar"),
  ]),
  verify(base("rel_002"), [
    vp(
      "vox",
      "strongly_support",
      151,
      "Protección de las tradiciones populares, eventos religiosos y festejos taurinos propios de la España rural…",
      { confidence: 0.75 }
    ),
    ne("pp"),
    ne("psoe"),
    ne("sumar"),
  ]),
  verify(base("cul_001"), [
    vp(
      "sumar",
      "strongly_support",
      56,
      "Derogación de la Ley 18/2013 de protección cultural y patrimonial de la tauromaquia… Supresión de la financiación pública de los espectáculos taurinos con muerte del animal.",
      { confidence: 0.95 }
    ),
    vp(
      "vox",
      "strongly_oppose",
      151,
      "Protección de las tradiciones populares, eventos religiosos y festejos taurinos… Impulsaremos la defensa y conservación de la raza autóctona del Toro de Lidia…",
      { confidence: 0.9 }
    ),
    ne("pp"),
    ne("psoe"),
  ]),
  verify(base("cul_002"), [
    vp(
      "vox",
      "strongly_support",
      150,
      "Defensa de la caza como actividad esencial… así como por su valor medioambiental y económico.",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "strongly_oppose",
      56,
      "…Supresión de la financiación pública de los espectáculos taurinos con muerte del animal.",
      { confidence: 0.8 }
    ),
    ne("pp", "Recupera la caza del lobo al norte del Duero, pero no plantea promoción general de tauromaquia o caza."),
    ne("psoe"),
  ]),
  verify(base("mpu_001"), [
    vp(
      "psoe",
      "support",
      127,
      "Promoveremos el papel de RTVE… como motor de la creación y producción audiovisual…",
      { confidence: 0.65 }
    ),
    vp(
      "vox",
      "neutral_or_unclear",
      84,
      "Pondremos a las delegaciones territoriales de RTVE al servicio de todos los españoles… primer paso para el cierre de las televisiones autonómicas.",
      { confidence: 0.6, explanation: "Propone cerrar las televisiones públicas autonómicas; sobre RTVE plantea reorientación, no cierre ni financiación fuerte." }
    ),
    ne("pp"),
    ne("sumar"),
  ]),
];
