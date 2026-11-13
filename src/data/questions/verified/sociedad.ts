import type { Question } from "@/lib/types";
import { axesOnly, ne, ne26, verify, vote, vp, vp26 } from "./helpers";
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
    vp26(
      "pp",
      "neutral_or_unclear",
      69,
      "garantizará recursos suficientes para asegurar la sostenibilidad de la sanidad pública",
      { confidence: 0.5, explanation: "Garantiza recursos para la sanidad a través de la financiación autonómica, pero el programa propone bajar impuestos y no plantea subirlos para financiarla." }
    ),
    vp26(
      "vox",
      "neutral_or_unclear",
      19,
      "Garantizar la sostenibilidad del sistema sanitario dotándolo de los medios necesarios para atender las necesidades de los españoles",
      { confidence: 0.5, explanation: "Promete dotar de medios a la sanidad, pero el programa propone una rebaja masiva de impuestos y no plantea subirlos para financiarla." }
    ),
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
    ne26("pp", "Su programa del 29N anuncia un plan urgente de reducción de listas de espera (medida 219) sin mencionar conciertos con la sanidad privada."),
    vp26(
      "vox",
      "conditional_support",
      37,
      "Fomento de la colaboración público-privada cuando ayude efectivamente a reducir demoras, con transparencia, evaluación de calidad y control del gasto.",
      { confidence: 0.75 }
    ),
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
    vp26(
      "pp",
      "support",
      70,
      "Aumentaremos el número de profesionales dedicados a la salud mental",
      { confidence: 0.85 }
    ),
    vp26(
      "vox",
      "conditional_support",
      38,
      "Refuerzo de la Estrategia Nacional de Salud Mental.",
      { confidence: 0.55, explanation: "Refuerza la estrategia de salud mental sin concretar más profesionales." }
    ),
  ]),
  axesOnly(
    base("san_004"),
    "Verificación 2026-08: ningún programa 23J aborda la desgravación del seguro sanitario privado.",
    [
      ne26("pp", "Su programa del 29N no aborda la desgravación del seguro sanitario privado."),
      ne26("vox"),
    ]
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
    vp26(
      "pp",
      "strongly_support",
      67,
      "Los conciertos durarán al menos seis años en todas las etapas, con módulos que cubran el coste real, para que la plaza concertada sea gratuita de verdad.",
      { confidence: 0.9 }
    ),
    vp26(
      "vox",
      "support",
      41,
      "Garantizar la libre elección de centro educativo en todos los niveles para que las familias elijan libremente el modelo educativo que desean, sin que su situación económica o social sea un impedimento para ello.",
      { confidence: 0.6, explanation: "Posición derivada: la libre elección de centro sin barreras económicas implica sostener la financiación de la concertada; no la menciona expresamente." }
    ),
  ]),
  axesOnly(
    base("edu_002"),
    "Verificación 2026-08: ningún programa 23J aborda expresamente la asignatura de religión.",
    [
      ne26("pp", "Su programa del 29N no aborda la asignatura de religión."),
      ne26("vox"),
    ]
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
    vp26(
      "pp",
      "support",
      39,
      "Garantizaremos el derecho constitucional de recibir enseñanza en castellano en todas las etapas del sistema educativo y en toda la Nación",
      { confidence: 0.7, explanation: "Garantiza la enseñanza en castellano «desde el respeto a las lenguas cooficiales»; no concreta que sea la lengua vehicular principal a elección de las familias." }
    ),
    vp26(
      "vox",
      "support",
      41,
      "Se garantizará la educación en español en todo el territorio nacional.",
      { confidence: 0.75, explanation: "Garantiza la educación en español en todo el territorio; no lo plantea como elección de las familias." }
    ),
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
    ne26("pp"),
    vp26(
      "vox",
      "conditional_support",
      41,
      "Eliminación de contenidos ideológicos ajenos a las materias académicas.",
      { confidence: 0.5, explanation: "Posición derivada: propone eliminar los contenidos ideológicos, sin mencionar la autorización previa de los padres." }
    ),
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
    vp26(
      "pp",
      "conditional_support",
      68,
      "La beca será un derecho por ley para quien la necesite y apruebe, con los mismos umbrales en la universidad que en la FP.",
      { confidence: 0.6, explanation: "Amplía las becas y elimina la matrícula en los ciclos de FP de alta demanda, pero no propone reducir las tasas universitarias." }
    ),
    vp26(
      "vox",
      "conditional_support",
      41,
      "Mejorar el sistema de becas en las etapas universitaria y preuniversitaria",
      { confidence: 0.6, explanation: "Mejora las becas, pero no propone reducir las tasas universitarias." }
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
    ne26("pp"),
    ne26("vox"),
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
    vp26(
      "pp",
      "support",
      19,
      "Cada año rendiremos cuentas del cumplimiento del Pacto de Estado contra la Violencia de Género. Dotaremos de más medios y mayor especialización a las secciones de violencia sobre la mujer de los tribunales.",
      { confidence: 0.5, explanation: "Posición derivada: mantiene y refuerza el marco específico de violencia de género (VioGen, Pacto de Estado, secciones especializadas) sin pronunciarse expresamente sobre el Código Penal." }
    ),
    vp26(
      "vox",
      "strongly_oppose",
      30,
      "Derogar las leyes que han criminalizado a los hombres y desprotegido a las mujeres. Las leyes de género no han contribuido a proteger a las mujeres o reducir el número de víctimas",
      { confidence: 0.85, explanation: "Propone sustituirlas por normas «que protejan de verdad a las mujeres víctimas de violencia»." }
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
    vp26(
      "pp",
      "strongly_oppose",
      44,
      "Revisaremos las normas que hayan generado inseguridad jurídica en nombre de la igualdad, como la Ley Trans, y eliminaremos la libre autodeterminación registral del sexo",
      { confidence: 0.95 }
    ),
    ne26("vox", "Su programa del 29N exige criterios biológicos en el deporte femenino (pág. 43), pero no aborda el cambio de sexo registral."),
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
    ne26("pp", "Su programa del 29N se compromete a seguir luchando contra la LGTBIfobia (medida 111), pero no menciona el matrimonio ni la adopción."),
    ne26("vox"),
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
    vp26(
      "pp",
      "support",
      56,
      "Refundiremos las deducciones familiares del IRPF en una sola, reembolsable, con un único trámite y abono mensual. Ampliaremos su acceso para que llegue a todas las familias, también a las que no tengan cuota suficiente en el IRPF.",
      { confidence: 0.75, explanation: "La ayuda se canaliza como deducción reembolsable de cobro mensual, que funciona como un pago directo; no cuantifica el aumento." }
    ),
    vp26(
      "vox",
      "strongly_support",
      51,
      "Todos los beneficios que ahora existen para las familias numerosas se aumentarán y se extenderán a todas las familias de manera progresiva desde el primer hijo, intensificando las ayudas y bonificaciones en función del número de hijos.",
      { confidence: 0.8 }
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
    ne26("pp", "Su programa del 29N no menciona el aborto."),
    vp26(
      "vox",
      "strongly_oppose",
      52,
      "Defensa del derecho a la vida desde su concepción hasta la muerte natural y fin de la cultura de la muerte.",
      { confidence: 0.7, explanation: "Posición derivada: defiende el derecho a la vida «desde su concepción»; no menciona expresamente el aborto." }
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
    ne26("pp", "Su programa del 29N no menciona el aborto."),
    ne26("vox"),
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
    vp26(
      "pp",
      "neutral_or_unclear",
      "70-71",
      "aprobaremos una ley nacional de cuidados paliativos con el fin de que nadie se vea empujado a la aceleración de la muerte por falta de alternativas",
      { confidence: 0.5, explanation: "Prioriza los cuidados paliativos frente a la eutanasia, pero no propone modificar ni derogar la ley vigente." }
    ),
    vp26(
      "vox",
      "strongly_oppose",
      52,
      "Defensa del derecho a la vida desde su concepción hasta la muerte natural y fin de la cultura de la muerte.",
      { confidence: 0.7, explanation: "Posición derivada: defiende la vida «hasta la muerte natural» y potenciar los cuidados paliativos; no menciona expresamente la eutanasia." }
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
    ne26("pp"),
    ne26("vox"),
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
    ne26("pp", "Su programa del 29N protege fiestas y tradiciones populares (medida 136), pero no menciona los símbolos religiosos en instituciones."),
    vp26(
      "vox",
      "support",
      56,
      "Protección de nuestros usos y costumbres y de las tradiciones religiosas y populares de España, frente a cualquier intento de imposición ideológica o de oposición extranjera.",
      { confidence: 0.65, explanation: "Protege las tradiciones religiosas, sin referirse expresamente a símbolos en instituciones públicas." }
    ),
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
    vp26(
      "pp",
      "strongly_oppose",
      "48-49",
      "Recuperaremos el respeto y la promoción de las expresiones que mejor combinan tradición y futuro, empezando por la restitución del Premio Nacional de Tauromaquia",
      { confidence: 0.85, explanation: "Posición derivada: propone restituir el Premio Nacional de Tauromaquia y reforzar su promoción, lo contrario de retirarle el apoyo público." }
    ),
    vp26(
      "vox",
      "strongly_oppose",
      43,
      "Defensa de la Tauromaquia y promoción de la difusión del arte taurino y potenciación del conjunto de actividades alrededor de esta tradición.",
      { confidence: 0.8, explanation: "Posición derivada: propone promover la tauromaquia, lo contrario de retirarle el apoyo público." }
    ),
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
    vp26(
      "pp",
      "strongly_support",
      66,
      "DEFENDEREMOS LA CAZA Y SU PAPEL EN EL MEDIO RURAL. Reduciremos las trabas a la caza sostenible y respaldaremos su contribución a la economía de los pueblos y al mantenimiento de la biodiversidad.",
      { confidence: 0.9, explanation: "También restituye el Premio Nacional de Tauromaquia (medida 136, págs. 48-49)." }
    ),
    vp26(
      "vox",
      "strongly_support",
      43,
      "Defensa de la Tauromaquia y promoción de la difusión del arte taurino y potenciación del conjunto de actividades alrededor de esta tradición.",
      { confidence: 0.9, explanation: "También defiende la caza «como actividad esencial» (pág. 35)." }
    ),
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
    ne26("pp", "Su programa del 29N plantea reformar RTVE para recuperar su independencia (medida 76), sin pronunciarse sobre su financiación."),
    vp26(
      "vox",
      "conditional_opposition",
      58,
      "Limpiar RTVE de comisarios políticos, acabar con el despilfarro y ponerla al servicio de los españoles.",
      { confidence: 0.5, explanation: "Posición derivada: propone reformar RTVE y «acabar con el despilfarro», sin pronunciarse sobre su modelo de financiación." }
    ),
  ]),
];
