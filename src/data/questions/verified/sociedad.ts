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
    vp26(
      "psoe",
      "support",
      49,
      "consolidando una financiación pública de la sanidad en torno al 7% del PIB",
      { confidence: 0.7, explanation: "Fija un objetivo de gasto sanitario y lo vincula a una fiscalidad progresiva (pág. 47), sin concretar subidas de impuestos para la sanidad." }
    ),
    vp26(
      "frente-amplio",
      "support",
      26,
      "Compromiso desde los Presupuestos Generales del Estado del 8 % del PIB estatal para la sanidad pública.",
      { confidence: 0.75, explanation: "Fija un objetivo de gasto sanitario; su reforma fiscal (págs. 44-47) no se vincula expresamente a la sanidad." }
    ),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "support",
      37,
      "Aumentar o financiamento da sanidade pública, até como mínimo a media de investimento por habitante da UE",
      { confidence: 0.75, explanation: "Fija un objetivo de gasto, sin vincularlo a subidas de impuestos." }
    ),
    vp26(
      "erc",
      "support",
      42,
      "Incorporar l’atenció odontològica integral a la sanitat pública.",
      { confidence: 0.6, explanation: "Posición derivada: amplía la cartera pública (dental, visual y psicológica) a cargo del Estado, sin hablar de impuestos." }
    ),
    ne26("pnv"),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "neutral_or_unclear",
      68,
      "Defender nuestra sanidad pública no es gastar a ciegas",
      { confidence: 0.5, explanation: "Propone financiar mejoras de la sanidad pública reinvirtiendo lo que se ahorre con mejor gestión, sin plantear subir impuestos." }
    ),
    vp26(
      "podemos",
      "strongly_support",
      89,
      "Incrementaremos progresivamente la financiación del Sistema Nacional de Salud hasta alcanzar una dotación mínima de 2.900 euros por habitante y año",
      { confidence: 0.85 }
    ),
    vp26(
      "compromis",
      "support",
      9,
      "Reforçarem l’atenció primària, la salut comunitària i la prevenció, fixant per llei bàsica un finançament mínim",
      { confidence: 0.7 }
    ),
    vp26(
      "salf",
      "support",
      23,
      "10.000 camas y 1.500 UCI más.",
      { confidence: 0.55, explanation: "Más camas, plantillas y sueldos sanitarios financiados con el ahorro de una central de compras única, no con subidas de impuestos." }
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
    vp26(
      "psoe",
      "oppose",
      49,
      "Limitar la privatización de la sanidad estableciendo la gestión directa como modalidad preferente en la prestación sanitaria.",
      { confidence: 0.8 }
    ),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      26,
      "Derogaremos expresamente la Ley 15/1997, sobre habilitación de nuevas formas de gestión del SNS, que había abierto la puerta a la colaboración con entidades privadas",
      { confidence: 0.9 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      14,
      "fin de los conciertos y externalizaciones: el dinero público, para la sanidad pública.",
      { confidence: 0.9 }
    ),
    vp26(
      "bng",
      "strongly_oppose",
      37,
      "a titularidade, o financiamento, a xestión e a provisión de servizos sanitarios se fará con entidades exclusivamente públicas",
      { confidence: 0.9 }
    ),
    ne26("erc"),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_oppose",
      11,
      "Derogar la Ley 15/1997 de 25 de abril, sobre habilitación de nuevas formas de gestión del Sistema Nacional de Salud, aprobada por el PP que permite la privatización y externalización de los servicios sanitarios.",
      { confidence: 0.85 }
    ),
    ne26("democracia21", "Propone abrir los quirófanos públicos por la tarde y alquilar sus horas vacantes a mutuas, sin pronunciarse sobre los conciertos con la sanidad privada."),
    vp26(
      "podemos",
      "strongly_oppose",
      88,
      "Prohibiremos la externalización y privatización de centros y servicios sanitarios, tanto existentes como de nueva creación",
      { confidence: 0.9 }
    ),
    vp26(
      "compromis",
      "strongly_oppose",
      9,
      "Blindarem la gestió pública de la sanitat i impedirem la mercantilització de l’atenció sanitària i la privatització de la gestió dels serveis públics a través de la derogació de la Llei 15/1997.",
      { confidence: 0.85 }
    ),
    vp26(
      "salf",
      "support",
      22,
      "Superado el plazo, eliges centro, público o privado, y lo paga la sanidad pública.",
      { confidence: 0.8 }
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
    vp26(
      "psoe",
      "strongly_support",
      50,
      "reforzaremos la presencia de profesionales de psicología clínica en el Sistema Nacional de Salud, especialmente en atención primaria",
      { confidence: 0.9 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      28,
      "aumentaremos las ratios de profesionales (psiquiatría, psicología clínica, enfermería especializada",
      { confidence: 0.9 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      16,
      "Psicología en atención primaria y cita en salud mental en un máximo de 15 días",
      { confidence: 0.85 }
    ),
    vp26(
      "bng",
      "support",
      86,
      "Impulso dun plan de prevención e actuación para a saúde mental dirixido á mocidade, destinando recursos económicos e materiais suficientes para o seu tratamento.",
      { confidence: 0.65, explanation: "Se centra en la juventud." }
    ),
    vp26(
      "erc",
      "strongly_support",
      42,
      "Garantir l’accés universal i gratuït a l’atenció psicològica i a la salut mental",
      { confidence: 0.85 }
    ),
    ne26("pnv"),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "support",
      77,
      "crearemos Unidades de Enlace (psiquiatra infantil, psicólogo clínico y enfermera especialista en salud mental)",
      { confidence: 0.7, explanation: "Se centra en la salud mental infantil y juvenil en los centros educativos y en el seguimiento tras conductas suicidas." }
    ),
    vp26(
      "podemos",
      "strongly_support",
      91,
      "Aprobaremos la Ley General de Salud Mental que establecerá ratios mínimas de 18 psiquiatras, 18 psicólogos y psicólogas clínicas y 23 enfermeros y enfermeras especialistas por cada 100.000 habitantes",
      { confidence: 0.95 }
    ),
    vp26(
      "compromis",
      "strongly_support",
      9,
      "Aprovarem un Pacte estatal per la salut mental amb finançament suficient per a ampliar les plantilles de professionals",
      { confidence: 0.9 }
    ),
    vp26(
      "salf",
      "strongly_support",
      24,
      "Un psicólogo clínico por cada 10.000 habitantes en los centros de salud y atención en 15 días.",
      { confidence: 0.9 }
    ),
  ]),
  axesOnly(
    base("san_004"),
    "Verificación 2026-08: ningún programa 23J aborda la desgravación del seguro sanitario privado.",
    [
      ne26("pp", "Su programa del 29N no aborda la desgravación del seguro sanitario privado."),
      ne26("vox"),
      ne26("psoe"),
      vp26(
        "frente-amplio",
        "oppose",
        54,
        "Eliminaremos la exención del IVA a la enseñanza privada y la del Impuesto sobre las Primas de Seguros a los seguros sanitarios privados.",
        { confidence: 0.6, explanation: "Posición derivada: suprime el beneficio fiscal de los seguros sanitarios privados en el impuesto sobre primas; no se refiere al IRPF." }
      ),
      ne26("adelante-andalucia"),
      ne26("bng"),
      ne26("erc"),
      ne26("pnv"),
      ne26("ehbildu"),
      ne26("democracia21"),
      ne26("podemos"),
      ne26("compromis"),
      ne26("salf"),
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
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      31,
      "El objetivo es que el 100 % de los fondos públicos vayan destinados a la educación pública.",
      { confidence: 0.85 }
    ),
    vp26(
      "adelante-andalucia",
      "oppose",
      42,
      "prohibido cerrar líneas públicas mientras haya unidades privadas-concertadas en la misma zona",
      { confidence: 0.65, explanation: "Posición derivada: prioriza la red pública frente a la concertada." }
    ),
    vp26(
      "bng",
      "strongly_oppose",
      35,
      "mentres non se suprimiren, os concertos educativos",
      { confidence: 0.85 }
    ),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_oppose",
      79,
      "Estableceremos una moratoria indefinida a la concesión de nuevos conciertos y a la apertura de nuevos centros privados en todas las etapas educativas",
      { confidence: 0.9 }
    ),
    vp26(
      "compromis",
      "oppose",
      10,
      "Modificarem la normativa bàsica de concerts educatius perquè la xarxa concertada siga realment subsidiària de la pública.",
      { confidence: 0.75 }
    ),
    vp26(
      "salf",
      "strongly_support",
      34,
      "Cheque escolar válido en pública, concertada y privada, con el mismo importe por alumno",
      { confidence: 0.8 }
    ),
  ]),
  axesOnly(
    base("edu_002"),
    "Verificación 2026-08: ningún programa 23J aborda expresamente la asignatura de religión.",
    [
      ne26("pp", "Su programa del 29N no aborda la asignatura de religión."),
      ne26("vox"),
      ne26("psoe"),
      ne26("frente-amplio"),
      vp26(
        "adelante-andalucia",
        "strongly_support",
        42,
        "La religión confesional, fuera del horario lectivo y del currículo.",
        { confidence: 0.95 }
      ),
      vp26(
        "bng",
        "strongly_support",
        35,
        "A materia de Relixión non formará parte do currículo escolar",
        { confidence: 0.95 }
      ),
      ne26("erc"),
      ne26("pnv"),
      ne26("ehbildu"),
      ne26("democracia21"),
      vp26(
        "podemos",
        "strongly_support",
        83,
        "Suprimiremos la enseñanza de cualquier religión en cualquier colegio.",
        { confidence: 0.85, explanation: "Va más allá del enunciado: suprime la enseñanza de religión en todos los centros." }
      ),
      vp26(
        "compromis",
        "strongly_support",
        39,
        "Garantirem mitjançant les reformes legals oportunes el caràcter laic que ha de revestir l'escola pública, tot deixant l'educació confessional fora del currículum i de l'àmbit escolar.",
        { confidence: 0.9 }
      ),
      ne26("salf"),
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
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      32,
      "garantizando la inmersión lingüística en catalán como lengua vehicular en Cataluña",
      { confidence: 0.75, explanation: "Posición derivada: defiende la inmersión en catalán como lengua vehicular en Cataluña." }
    ),
    ne26("adelante-andalucia"),
    ne26("bng"),
    vp26(
      "erc",
      "strongly_oppose",
      10,
      "El català com a llengua vehicular i la immersió lingüística són pilars del nostre model educatiu.",
      { confidence: 0.85, explanation: "Posición derivada: defiende la inmersión en catalán en Cataluña." }
    ),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21"),
    ne26("podemos"),
    ne26("compromis"),
    vp26(
      "salf",
      "strongly_support",
      33,
      "Derecho a la enseñanza en castellano en toda España, exigible por la familia, con Alta Inspección estatal que sanciona.",
      { confidence: 0.9 }
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
    vp26(
      "psoe",
      "oppose",
      83,
      "Garantizar la coeducación y la educación afectivo-sexual obligatorias en todas las etapas educativas",
      { confidence: 0.6, explanation: "Posición derivada: hace obligatoria la educación afectivo-sexual en todas las etapas, sin prever una autorización previa de los padres." }
    ),
    ne26("frente-amplio", "Su programa del 29N propone la coeducación y la educación sexoafectiva en las aulas (pág. 37), sin pronunciarse sobre la autorización previa de las familias."),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    vp26(
      "pnv",
      "oppose",
      10,
      "Reforzar la coeducación y la educación afectivo-sexual en igualdad",
      { confidence: 0.5, explanation: "Posición derivada: no se refiere expresamente a la autorización previa de las familias." }
    ),
    ne26("ehbildu"),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_oppose",
      83,
      "Impediremos la aplicación del denominado Pin Parental",
      { confidence: 0.9 }
    ),
    ne26("compromis"),
    ne26("salf"),
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
    vp26(
      "psoe",
      "strongly_support",
      54,
      "Impulsar la gratuidad de la matrícula del primer curso de grado en las universidades públicas de todo el país.",
      { confidence: 0.85, explanation: "Además propone un nuevo modelo de becas (pág. 54)." }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      7,
      "gratuidad desde los 0 años hasta la universidad",
      { confidence: 0.85, explanation: "Propone además elevar las becas al 0,44% del PIB (pág. 32)." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      47,
      "Matrícula gratuita de forma progresiva, empezando por el grado; mientras tanto, tasas congeladas y pruebas de acceso gratuitas.",
      { confidence: 0.9 }
    ),
    ne26("bng"),
    vp26(
      "erc",
      "support",
      45,
      "Cal reforçar les polítiques de beques i ajuts, eliminar les barreres econòmiques",
      { confidence: 0.7 }
    ),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21", "Propone pagar las becas al inicio del curso, sin pronunciarse sobre su cuantía ni sobre las tasas universitarias."),
    vp26(
      "podemos",
      "strongly_support",
      85,
      "Alcanzaremos progresivamente, durante la próxima legislatura, la gratuidad total de las tasas de grado, máster y doctorado en las universidades públicas",
      { confidence: 0.95 }
    ),
    vp26(
      "compromis",
      "support",
      16,
      "Posarem en marxa un nou sistema de taxes universitàries perquè qui menys recursos té pague menys.",
      { confidence: 0.7, explanation: "También propone mejorar el sistema estatal de becas." }
    ),
    ne26("salf", "Propone una beca-salario para FP superior y matrícula gratuita para quien complete la mili voluntaria; no se pronuncia sobre las tasas universitarias en general."),
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
    vp26(
      "psoe",
      "support",
      78,
      "Reforzar la transparencia retributiva y la igualdad salarial, revisando categorías profesionales y complementos que infravaloran los trabajos feminizados",
      { confidence: 0.6, explanation: "Refuerza la transparencia retributiva y la Inspección de Trabajo, sin mencionar expresamente las auditorías salariales." }
    ),
    vp26(
      "frente-amplio",
      "support",
      130,
      "evaluaciones salariales conjuntas cuando la brecha supere el 5 % sin justificación",
      { confidence: 0.75, explanation: "Dentro de la transposición de la Directiva (UE) 2023/970 de transparencia retributiva; no menciona sanciones." }
    ),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "strongly_support",
      17,
      "Realizar auditorías retributivas e plans de igualdade de obrigado cumprimento, con reforzo da Inspección de Traballo.",
      { confidence: 0.85 }
    ),
    ne26("erc"),
    vp26(
      "pnv",
      "support",
      9,
      "Asegurar la aplicación de la normativa europea sobre transparencia retributiva, para detectar y corregir las desigualdades salariales entre mujeres y hombres.",
      { confidence: 0.65, explanation: "No menciona expresamente auditorías ni sanciones." }
    ),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "conditional_support",
      99,
      "Reafirmamos nuestro compromiso inquebrantable con la erradicación de la brecha salarial",
      { confidence: 0.5, explanation: "No concreta auditorías salariales obligatorias ni sanciones." }
    ),
    vp26(
      "podemos",
      "support",
      44,
      "reforzaremos la transparencia salarial para garantizar la igualdad retributiva por trabajos de igual valor",
      { confidence: 0.6, explanation: "Propone una Inspección de Igualdad para hacer cumplir los RD 901 y 902/2021 (planes de igualdad y política salarial); no menciona auditorías ni sanciones específicas." }
    ),
    vp26(
      "compromis",
      "support",
      46,
      "Reforçarem la inspecció laboral i les polítiques contra la bretxa salarial",
      { confidence: 0.55, explanation: "No menciona auditorías salariales obligatorias ni sanciones específicas." }
    ),
    ne26("salf"),
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
    vp26(
      "psoe",
      "strongly_support",
      84,
      "Incorporar las violencias digitales a la Ley Integral contra la Violencia de Género",
      { confidence: 0.85, explanation: "Además propone una Ley Orgánica contra la Violencia Vicaria «como manifestación de la violencia de género» (pág. 82)." }
    ),
    vp26(
      "frente-amplio",
      "support",
      38,
      "blindaremos con carácter plurianual las partidas estructurales del Pacto de Estado contra la Violencia de Género",
      { confidence: 0.6, explanation: "Posición derivada: refuerza el marco específico contra la violencia de género; no se refiere expresamente al tratamiento penal." }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      27,
      "Pacto de Estado contra la violencia machista con presupuesto",
      { confidence: 0.6, explanation: "Posición derivada: refuerza el marco específico contra la violencia machista; no se refiere expresamente al tratamiento penal." }
    ),
    vp26(
      "bng",
      "support",
      25,
      "impulsar un Estatuto de Vítima de Feminicidio para unha abordaxe integral da violencia machista",
      { confidence: 0.6, explanation: "Posición derivada: amplía el marco específico contra la violencia machista." }
    ),
    vp26(
      "erc",
      "support",
      24,
      "Reformar la Llei orgànica 1/2004 i la resta de legislació estatal per garantir la prevenció, detecció, protecció i reparació davant totes les violències masclistes",
      { confidence: 0.75, explanation: "Mantiene y amplía el marco de la ley integral de violencia de género." }
    ),
    vp26(
      "pnv",
      "support",
      26,
      "Asegurar el cumplimiento íntegro de las medidas estatales del Pacto de Estado contra la Violencia de Género renovado en 2025",
      { confidence: 0.6, explanation: "Posición derivada: refuerza el marco específico contra la violencia de género." }
    ),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "support",
      99,
      "no permitiremos, bajo ninguna circunstancia ni acuerdo político, que se cuestione la existencia de la violencia de género",
      { confidence: 0.75, explanation: "Se compromete también a bloquear cualquier iniciativa para desmantelar o desfinanciar la red pública de protección a las víctimas." }
    ),
    vp26(
      "podemos",
      "support",
      56,
      "se actualizará esta definición conforme a lo que exige el Convenio de Estambul",
      { confidence: 0.7, explanation: "Posición derivada: amplía la definición legal de violencia machista más allá de la pareja, manteniendo su tratamiento específico." }
    ),
    vp26(
      "compromis",
      "support",
      47,
      "Reforçarem les unitats policials especialitzades, els jutjats de violència sobre la dona, els serveis forenses i l’assistència jurídica gratuïta.",
      { confidence: 0.7, explanation: "Posición derivada: refuerza la jurisdicción específica de violencia sobre la mujer." }
    ),
    ne26("salf"),
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
    vp26(
      "psoe",
      "support",
      97,
      "Garantizar que la Ley 4/2023 sea el suelo común de derechos de las personas LGTBI en toda España",
      { confidence: 0.65, explanation: "Posición derivada: blinda la Ley 4/2023, que regula la rectificación registral del sexo por declaración propia; no menciona expresamente ese procedimiento." }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      130,
      "Desplegaremos de forma efectiva la Ley Trans, reconoceremos a las personas no binarias",
      { confidence: 0.7, explanation: "Posición derivada: despliega la Ley 4/2023, que regula la rectificación registral del sexo por declaración propia, y amplía el reconocimiento a las personas no binarias." }
    ),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "strongly_support",
      29,
      "Protección das persoas trans menores de 12 anos, respectando o seu dereito á autodeterminación de xénero.",
      { confidence: 0.8 }
    ),
    ne26("erc"),
    vp26(
      "pnv",
      "support",
      27,
      "Asegurar el desarrollo reglamentario del artículo 50 de la Ley 4/2023",
      { confidence: 0.55, explanation: "Posición derivada: pide desarrollar la Ley 4/2023, que regula la rectificación registral por declaración propia; no se pronuncia sobre ese procedimiento." }
    ),
    vp26(
      "ehbildu",
      "support",
      19,
      "no aceptaremos retrocesos en los derechos adquiridos, especialmente en la despatologización de las personas Trans",
      { confidence: 0.75, explanation: "Posición derivada: defiende la despatologización vigente." }
    ),
    vp26(
      "democracia21",
      "support",
      100,
      "Frenaremos cualquier ofensiva que pretenda recortar libertades, patologizar identidades, derogar normas que aseguran la no-discriminación",
      { confidence: 0.6, explanation: "Posición derivada: defiende la no discriminación trans y rechaza patologizar identidades, sin mencionar expresamente la autodeterminación registral." }
    ),
    vp26(
      "podemos",
      "strongly_support",
      52,
      "Eliminación de obstáculos para la libre determinación de género en las infancias trans menores de 14 años.",
      { confidence: 0.8, explanation: "Posición derivada: extiende la libre determinación de género a menores de 14 años." }
    ),
    vp26(
      "compromis",
      "support",
      49,
      "Blindarem els avanços en matèria de drets LGTBIQ+, com ara la Llei per la igualtat real i efectiva de les persones trans",
      { confidence: 0.75, explanation: "Posición derivada: blinda la Ley trans de 2023, que regula la autodeterminación del sexo registral." }
    ),
    ne26("salf"),
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
    vp26(
      "psoe",
      "strongly_support",
      89,
      "garantizando la máxima protección jurídica del matrimonio igualitario",
      { confidence: 0.9, explanation: "También impulsa la adopción internacional para familias LGTBI (pág. 97)." }
    ),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "support",
      77,
      "basados solo en el interés del menor y en la capacidad real de cuidado, nunca en el modelo de familia",
      { confidence: 0.75, explanation: "Se refiere a los criterios de idoneidad para adoptar; el programa reivindica también la ley de matrimonio igualitario y propone reforzar los derechos de las parejas de mujeres." }
    ),
    vp26(
      "podemos",
      "support",
      52,
      "Reconocimiento de la diversidad familiar y protección social de las familias LGTBIQA+ con medidas de apoyo a la adopción a familias LGTBIQA+",
      { confidence: 0.65, explanation: "No menciona el matrimonio; apoya la adopción por familias LGTBIQA+." }
    ),
    vp26(
      "compromis",
      "strongly_support",
      49,
      "Blindarem els avanços en matèria de drets LGTBIQ+, com ara la Llei per la igualtat real i efectiva de les persones trans i per a la garantia dels drets de les persones LGTBI, i el matrimoni igualitari.",
      { confidence: 0.9 }
    ),
    ne26("salf"),
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
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    vp26(
      "erc",
      "strongly_support",
      24,
      "Tipificar penalment els casos greus o coercitius",
      { confidence: 0.85, explanation: "Se refiere a las prácticas que pretenden modificar la orientación sexual o la identidad de género." }
    ),
    vp26(
      "pnv",
      "strongly_support",
      27,
      "Favorecer la tipificación penal específica de las prácticas de conversión o aversión dirigidas a modificar la orientación sexual, la identidad sexual o la expresión de género.",
      { confidence: 0.9 }
    ),
    vp26(
      "ehbildu",
      "strongly_support",
      19,
      "Prohibir las terapias de conversión",
      { confidence: 0.95 }
    ),
    vp26(
      "democracia21",
      "support",
      100,
      "Exigiremos y apoyaremos la aplicación de la ley contra quienes promuevan agresiones, discursos de odio o terapias de conversión",
      { confidence: 0.8 }
    ),
    ne26("podemos"),
    vp26(
      "compromis",
      "strongly_support",
      49,
      "Tipificarem específicament les teràpies de conversió com a delicte",
      { confidence: 0.95 }
    ),
    ne26("salf"),
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
    vp26(
      "psoe",
      "strongly_support",
      56,
      "Prestación estatal por crianza para todos los hogares con menores de edad",
      { confidence: 0.85 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      7,
      "Implantaremos una Prestación Universal por Crianza de 200 euros mensuales por menor para erradicar la pobreza infantil",
      { confidence: 0.95 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      54,
      "Entre 100 y 200 euros al mes por hijo o hija hasta los 18 años, para todas las familias.",
      { confidence: 0.95 }
    ),
    ne26("bng"),
    vp26(
      "erc",
      "strongly_support",
      21,
      "Traspassar els recursos necessaris per a la creació d’una prestació universal per criança adaptada a cada territori.",
      { confidence: 0.85 }
    ),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "support",
      13,
      "Proponemos que se oriente a las CCAA a desarrollar prestaciones económicas de apoyo a la crianza acordes con índices de gasto de crianza territoriales.",
      { confidence: 0.6, explanation: "Propone que las desarrollen las comunidades autónomas." }
    ),
    vp26(
      "democracia21",
      "conditional_support",
      73,
      "Las convertiremos en una cantidad mensual por cada hijo que se activará automáticamente al inscribir al recién nacido",
      { confidence: 0.6, explanation: "El Bono Crianza es mayor en los hogares con menos renta, desaparece en las rentas altas y se financia en buena parte reordenando deducciones y ayudas ya existentes." }
    ),
    vp26(
      "podemos",
      "strongly_support",
      60,
      "Establecer una prestación mensual por cada hija o hijo, desde el nacimiento hasta los 21 años, equivalente al 15 % del Salario Mínimo Interprofesional (SMI).",
      { confidence: 0.95 }
    ),
    vp26(
      "compromis",
      "strongly_support",
      41,
      "Implementarem una prestació universal per criança de 200 euros mensuals per fill o filla",
      { confidence: 0.95 }
    ),
    ne26("salf", "Propone 5.000 euros más de mínimo exento en el IRPF por cada hijo y progenitor, una ventaja fiscal, no ayudas económicas directas."),
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
    vp26(
      "psoe",
      "strongly_support",
      81,
      "Blindar constitucionalmente el derecho a la interrupción voluntaria del embarazo.",
      { confidence: 0.95 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      28,
      "Reformaremos el artículo 43 de la Constitución para incluir el derecho al aborto",
      { confidence: 0.95 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      40,
      "El derecho al aborto se garantizará en la sanidad pública de todas las provincias, sin conciertos ni copagos, y quedará blindado en la Constitución.",
      { confidence: 0.95 }
    ),
    ne26("bng"),
    vp26(
      "erc",
      "support",
      23,
      "garantir els drets sexuals i reproductius",
      { confidence: 0.55, explanation: "Posición derivada: no menciona expresamente el aborto." }
    ),
    vp26(
      "pnv",
      "support",
      26,
      "Proteger el ejercicio efectivo de los derechos sexuales y reproductivos de las mujeres, garantizando el acceso libre y seguro a los servicios sanitarios.",
      { confidence: 0.75, explanation: "Propone además perímetros de protección alrededor de las clínicas que practican abortos (pág. 26)." }
    ),
    vp26(
      "ehbildu",
      "strongly_support",
      19,
      "Blindar el derecho al aborto.",
      { confidence: 0.95 }
    ),
    vp26(
      "democracia21",
      "strongly_support",
      99,
      "defenderemos que el acceso a la interrupción voluntaria del embarazo esté plenamente garantizado en la red sanitaria pública",
      { confidence: 0.95 }
    ),
    vp26(
      "podemos",
      "strongly_support",
      51,
      "Incorporar expresamente el derecho al aborto en la Constitución",
      { confidence: 0.95 }
    ),
    vp26(
      "compromis",
      "strongly_support",
      46,
      "Garantirem la interrupció voluntària de l’embaràs gratuïta, segura i accessible dins de la xarxa sanitària pública, en els termes previstos legalment",
      { confidence: 0.95 }
    ),
    ne26("salf"),
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
    vp26(
      "psoe",
      "strongly_oppose",
      77,
      "Hemos reformado la legislación para garantizar el acceso al aborto de las jóvenes de 16 y 17 años sin consentimiento paterno",
      { confidence: 0.75, explanation: "Lo presenta como un logro propio y propone blindar el derecho al aborto (pág. 81)." }
    ),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "oppose",
      99,
      "nos opondremos a cualquier intento de derogar, limitar o entorpecer la actual ley de plazos",
      { confidence: 0.6, explanation: "Posición derivada: la ley vigente no exige el consentimiento paterno a las jóvenes de 16 y 17 años." }
    ),
    ne26("podemos"),
    ne26("compromis"),
    ne26("salf"),
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
    vp26(
      "psoe",
      "strongly_support",
      50,
      "Garantizar la muerte digna y el ejercicio efectivo del derecho a la eutanasia, de acuerdo con la legislación vigente.",
      { confidence: 0.95 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      157,
      "Derecho a la interrupción voluntaria del embarazo, a la eutanasia y al suicidio asistido.",
      { confidence: 0.85 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      38,
      "plazos más ágiles por ley para la eutanasia, sin recurso de familiares o allegados",
      { confidence: 0.9 }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_support",
      10,
      "Con el objetivo de blindar el derecho a morir dignamente frente a la intromisión judicial de terceros.",
      { confidence: 0.9 }
    ),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_support",
      94,
      "Garantizaremos el ejercicio efectivo del derecho a una muerte digna.",
      { confidence: 0.9 }
    ),
    ne26("compromis"),
    ne26("salf"),
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
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_support",
      157,
      "Revisaremos los Acuerdos de 1979 con la Santa Sede, así como con las otras confesiones religiosas, incluyendo la legislación de privilegio que se deriva de los mismos.",
      { confidence: 0.9 }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      96,
      "Ninguna confesión con privilegios fiscales ni simbólicos en un Estado laico.",
      { confidence: 0.75, explanation: "No menciona expresamente los acuerdos con la Santa Sede." }
    ),
    vp26(
      "bng",
      "strongly_support",
      32,
      "Denunciar e revogar o Concordato coa Igrexa católica e, nomeadamente, os Acordos vixentes coa Santa Sé",
      { confidence: 0.95 }
    ),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_support",
      134,
      "Denunciaremos el Concordato con la Santa Sede y los acuerdos de 1979",
      { confidence: 0.95 }
    ),
    vp26(
      "compromis",
      "strongly_support",
      39,
      "Eliminarem els privilegis atorgats mitjançant els diferents acords particulars entre l'Estat i les diferents confessions religioses, com ara el cas del tractat signat amb la Santa Seu el 3 de gener de 1979",
      { confidence: 0.9 }
    ),
    ne26("salf"),
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
    ne26("psoe"),
    ne26("frente-amplio"),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      96,
      "Ninguna confesión con privilegios fiscales ni simbólicos en un Estado laico.",
      { confidence: 0.7, explanation: "Posición derivada: rechaza los privilegios simbólicos de las confesiones." }
    ),
    vp26(
      "bng",
      "strongly_oppose",
      32,
      "Isto suporá a eliminación dos privilexios da Igrexa e a presenza da relixión nas institucións e servizos públicos.",
      { confidence: 0.8 }
    ),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21"),
    vp26(
      "podemos",
      "oppose",
      134,
      "Las instituciones públicas deberán mantener una posición de neutralidad respecto a todas las confesiones",
      { confidence: 0.6, explanation: "Posición derivada de la neutralidad religiosa de las instituciones que propone." }
    ),
    vp26(
      "compromis",
      "oppose",
      40,
      "Impulsarem reformes legislatives que tendisquen a assegurar la neutralitat dels poders públics estatals davant del fet religiós",
      { confidence: 0.55, explanation: "Posición derivada de la neutralidad religiosa de los poderes públicos que propone." }
    ),
    ne26("salf"),
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
    ne26("psoe", "Su programa del 29N propone retirar la financiación pública a prácticas que amparen el maltrato animal (pág. 73), sin mencionar la tauromaquia."),
    vp26(
      "frente-amplio",
      "strongly_support",
      83,
      "Derogaremos la Ley 18/2013 de protección cultural y patrimonial de la tauromaquia, como paso imprescindible para acabar con la financiación pública de la tauromaquia",
      { confidence: 0.95 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      120,
      "con la tauromaquia en transición hasta su abolición",
      { confidence: 0.85 }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_support",
      124,
      "eliminaremos las ayudas y la promoción institucional de espectáculos que impliquen maltrato animal",
      { confidence: 0.95 }
    ),
    vp26(
      "compromis",
      "strongly_support",
      40,
      "eliminarem tot tipus de subvencions i ajudes públiques a manifestacions o espectacles que impliquen patiment animal",
      { confidence: 0.95 }
    ),
    ne26("salf"),
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
    ne26("psoe", "Su programa del 29N propone retirar la financiación pública a prácticas que amparen el maltrato animal (pág. 73), sin mencionar la tauromaquia ni la caza."),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      83,
      "Derogaremos la Ley 18/2013 de protección cultural y patrimonial de la tauromaquia, como paso imprescindible para acabar con la financiación pública de la tauromaquia",
      { confidence: 0.8, explanation: "Posición derivada: deroga la protección de la tauromaquia; sobre la caza, pide vincularla a la mejora de los recursos (pág. 87)." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      120,
      "con la tauromaquia en transición hasta su abolición",
      { confidence: 0.8, explanation: "Posición derivada: no se pronuncia sobre la caza como actividad." }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_oppose",
      124,
      "Acabar con la tauromaquia y las fiestas basadas en el maltrato animal.",
      { confidence: 0.85, explanation: "Posición inversa en la tauromaquia; no se pronuncia sobre la caza." }
    ),
    vp26(
      "compromis",
      "strongly_oppose",
      40,
      "Prohibirem la cacera amb gossos i els espectacles que facen servir animals.",
      { confidence: 0.85 }
    ),
    ne26("salf"),
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
    ne26("psoe"),
    ne26("frente-amplio"),
    vp26(
      "adelante-andalucia",
      "support",
      95,
      "Nombramientos por mérito y mayorías amplias, y financiación plurianual estable.",
      { confidence: 0.7, explanation: "Se refiere a RTVE." }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "support",
      102,
      "un contrato-programa plurianual y vinculante garantizará su financiación",
      { confidence: 0.65, explanation: "Se refiere a RTVE, cuyo consejo propone elegir por concurso y mayoría de dos tercios." }
    ),
    vp26(
      "podemos",
      "support",
      138,
      "La ley garantizará también una distribución plural del espacio audiovisual que reserve un tercio a los medios públicos",
      { confidence: 0.55, explanation: "Posición derivada: refuerza el peso de los medios públicos; no menciona expresamente RTVE ni su financiación." }
    ),
    ne26("compromis", "Propone más programación en valenciano en el centro territorial de RTVE, pero no se pronuncia sobre su financiación."),
    ne26("salf"),
  ]),
];
