import type { Question } from "@/lib/types";
import { axesOnly, ne, ne26, verify, vote, vp, vp26 } from "./helpers";
import { baseQuestion as base } from "./base";

/** VERIFICADO — Territorio, modelo de Estado, Europa, energía, tecnología. */
export const VERIFIED_TERRITORIO_EXTERIOR: Question[] = [
  verify(base("ter_001"), [
    vp(
      "vox",
      "strongly_oppose",
      8,
      "…proponemos la devolución inmediata al Estado de las competencias en Educación, Sanidad, Seguridad y Justicia. Limitaremos en todo lo posible la capacidad legislativa autonómica…",
      { confidence: 0.85 }
    ),
    vp(
      "psoe",
      "conditional_opposition",
      39,
      "…avanzaremos en el debate sobre la tributación de la riqueza en el marco del modelo de financiación autonómica para acabar con la competencia fiscal desleal entre territorios.",
      { confidence: 0.6, explanation: "Busca armonizar y limitar la competencia fiscal entre territorios, no ampliar la capacidad fiscal autonómica." }
    ),
    ne("pp", "Su programa aborda la autonomía tributaria local, no la capacidad fiscal de las comunidades autónomas."),
    ne("sumar"),
    vp26(
      "pp",
      "neutral_or_unclear",
      41,
      "Las autonomías podrán definir sus propias políticas tributarias dentro de sus competencias y responderán de sus gastos.",
      { confidence: 0.5, explanation: "Mantiene la autonomía tributaria dentro de las competencias actuales y rechaza fragmentar la gestión de los tributos del Estado (medida 18); no amplía su capacidad recaudatoria." }
    ),
    ne26("vox"),
  ]),
  verify(base("ter_002"), [
    vp(
      "vox",
      "strongly_support",
      13,
      "…la devolución al Estado de las competencias en materia de educación, sanidad, seguridad y justicia, así como de todas aquellas competencias que estén siendo utilizadas para menoscabar la unidad de la Nación…",
      { confidence: 0.95 }
    ),
    vp(
      "sumar",
      "strongly_oppose",
      120,
      "España es una realidad plurinacional, un país de países, en el que todas las naciones y comunidades políticas deben desarrollarse en un marco igualitario y solidario.",
      { confidence: 0.8 }
    ),
    ne("pp"),
    ne("psoe", "Defiende el Estado autonómico en su conjunto; su programa no aborda expresamente la devolución de competencias."),
    vp26(
      "pp",
      "oppose",
      16,
      "Defendemos el Estado de las Autonomías y el autogobierno de las Comunidades Autónomas en el marco de la Constitución.",
      { confidence: 0.65, explanation: "No propone recuperar competencias transferidas: en las que gestionan las comunidades autónomas plantea estándares comunes y sistemas interoperables." }
    ),
    vp26(
      "vox",
      "conditional_support",
      41,
      "Igualar las oportunidades para todos los alumnos españoles: unificar currículo, evaluaciones nacionales e inspección.",
      { confidence: 0.5, explanation: "Posición derivada: unifica currículo, evaluaciones e inspección educativas y garantiza servicios iguales en toda España, sin plantear expresamente la devolución de competencias al Estado." }
    ),
  ]),
  verify(base("cat_001"), [
    vp(
      "pp",
      "strongly_oppose",
      67,
      "Frente al uso partidista de los instrumentos del Estado… (indultos a los líderes del procés, eliminación del delito de sedición y reducción de las penas por malversación)… reiteramos nuestro compromiso firme con el respeto al principio de legalidad…",
      { confidence: 0.85 }
    ),
    vp(
      "vox",
      "strongly_oppose",
      127,
      "Prohibiremos los indultos para delitos relacionados con la corrupción política, la forma política del Estado o la integridad territorial…",
      { confidence: 0.95 }
    ),
    vp(
      "sumar",
      "support",
      121,
      "La relación entre el Govern de la Generalitat y el Gobierno de España ha mejorado notablemente gracias a la política del diálogo, la negociación, la desjudicialización y la construcción de acuerdos…",
      { confidence: 0.7 }
    ),
    vote("psoe", "strongly_support", {
      type: "congress_vote",
      document:
        "Diario de Sesiones del Congreso, XV Leg., núm. 45 — Pleno 30/05/2024: levantamiento del veto del Senado a la Proposición de Ley Orgánica de amnistía (exp. 122/000019)",
      url: "https://www.congreso.es/public_oficiales/L15/CONG/DS/PL/DSCD-15-PL-45.PDF",
      date: "2024-05-30",
      page: "32 (PDF)",
      record:
        "«El resultado de la votación ha sido el siguiente: votos emitidos, 349; votos a favor, 177; votos en contra, 172… queda levantado el veto del Senado».",
      confidence: 0.9,
      explanation:
        "Proposición de ley presentada por el Grupo Parlamentario Socialista (BOCG serie B, núm. 32-1) y aprobada con sus votos en votación pública por llamamiento.",
    }),
    vp26(
      "pp",
      "strongly_oppose",
      29,
      "Derogaremos la Ley de Amnistía y prohibiremos que el derecho de gracia se utilice como contraprestación política para formar o mantener un Gobierno.",
      { confidence: 0.9, explanation: "Rechaza la amnistía y el indulto como contrapartida política; mantiene el indulto con criterios objetivos en una nueva ley." }
    ),
    vp26(
      "vox",
      "strongly_oppose",
      "55-56",
      "Recuperar el delito de sedición, agravar el tipo delictivo de la malversación de caudales públicos y prohibir los indultos para delitos relacionados con la corrupción política, la forma política del Estado o la integridad territorial.",
      { confidence: 0.9 }
    ),
  ]),
  axesOnly(
    base("cat_002"),
    "Verificación 2026-08: ningún programa 23J plantea un referéndum de autodeterminación (será relevante al incorporar partidos de ámbito no estatal en la Fase 3).",
    [
      vp26(
        "pp",
        "oppose",
        16,
        "Recuperaremos en el Código Penal el delito de sedición, adaptado a la legislación contemporánea, y el de convocatoria de referéndum ilegal.",
        { confidence: 0.6, explanation: "Posición derivada: tipifica la convocatoria de referéndum ilegal y defiende la unidad de España; no se pronuncia expresamente sobre un referéndum pactado." }
      ),
      vp26(
        "vox",
        "strongly_oppose",
        56,
        "Ilegalización de los partidos políticos, asociaciones u organizaciones de cualquier tipo que atenten contra la soberanía e independencia de España, su unidad e integridad territorial.",
        { confidence: 0.7, explanation: "Posición derivada: no menciona un referéndum pactado, pero propone ilegalizar a quien atente contra la unidad de España." }
      ),
    ]
  ),
  axesOnly(
    base("pv_001"),
    "Verificación 2026-08: ningún programa 23J aborda expresamente el concierto económico vasco-navarro.",
    [
      ne26("pp", "Su programa del 29N no menciona el concierto económico vasco-navarro; la medida 101 se refiere a las comunidades del régimen común."),
      ne26("vox"),
    ]
  ),
  axesOnly(
    base("mon_001"),
    "Verificación 2026-08: ningún programa 23J aborda la forma de Estado.",
    [
      ne26("pp", "Su programa del 29N no aborda la forma de Estado más allá de una mención genérica a la monarquía parlamentaria en la introducción (pág. 8)."),
      ne26("vox", "Su programa del 29N protege la Corona como símbolo (pág. 56), pero no aborda la forma de Estado."),
    ]
  ),
  axesOnly(
    base("mon_002"),
    "Verificación 2026-08: ningún programa 23J aborda la forma de Estado.",
    [
      ne26("pp", "Su programa del 29N no aborda la forma de Estado más allá de una mención genérica a la monarquía parlamentaria en la introducción (pág. 8)."),
      ne26("vox", "Su programa del 29N protege la Corona como símbolo (pág. 56), pero no aborda la forma de Estado."),
    ]
  ),
  axesOnly(
    base("con_001"),
    "Verificación 2026-08: los programas 23J no concretan el blindaje constitucional de derechos sociales con exigibilidad judicial directa.",
    [
      ne26("pp"),
      ne26("vox"),
    ]
  ),
  verify(base("ter_003"), [
    vp(
      "sumar",
      "oppose",
      75,
      "…se actuará con el fin de reforzar la capacidad administrativa y técnica de los ayuntamientos y de las diputaciones provinciales.",
      { confidence: 0.6, explanation: "Refuerza las diputaciones en lugar de suprimirlas." }
    ),
    ne("pp"),
    ne("psoe"),
    ne("vox", "Su programa 23J no menciona expresamente la supresión de diputaciones."),
    vp26(
      "pp",
      "oppose",
      41,
      "Aumentaremos el apoyo de las diputaciones en la gestión y la prestación de servicios.",
      { confidence: 0.7, explanation: "Refuerza las diputaciones y crea un Estatuto de los Pequeños Municipios en lugar de suprimirlos o fusionarlos." }
    ),
    ne26("vox"),
  ]),
  verify(base("ue_001"), [
    vp(
      "psoe",
      "support",
      34,
      "…apoyando las iniciativas dirigidas a reforzar la integración económica y social, la autonomía estratégica de la UE… Impulsaremos una reforma de las reglas fiscales europeas…",
      { confidence: 0.65 }
    ),
    vp(
      "sumar",
      "support",
      145,
      "Apostaremos por abandonar el requisito de la unanimidad en materia de política fiscal.",
      { confidence: 0.7 }
    ),
    vp(
      "vox",
      "oppose",
      137,
      "…recuperando la regla de la unanimidad allí donde sea precisa para asegurar el respeto a la soberanía nacional.",
      { confidence: 0.65, explanation: "Posición derivada de su defensa de la soberanía nacional frente a la integración." }
    ),
    ne("pp"),
    ne26("pp", "Su programa del 29N defiende compras conjuntas de defensa (medida 236), pero no aborda impuestos ni deuda europeos comunes."),
    ne26("vox"),
  ]),
  verify(base("ue_002"), [
    vp(
      "vox",
      "support",
      137,
      "…recuperando la regla de la unanimidad allí donde sea precisa para asegurar el respeto a la soberanía nacional.",
      { confidence: 0.7 }
    ),
    vp(
      "psoe",
      "strongly_oppose",
      259,
      "Seguiremos acompañándola en su camino hacia la integración europea… Apostamos por una Europa tecnológicamente avanzada, competitiva…",
      { confidence: 0.7, explanation: "Posición derivada de su europeísmo integrador constante en el programa." }
    ),
    vp(
      "pp",
      "oppose",
      99,
      "Impulsaremos una autonomía estratégica abierta que desarrolle una Europa de la seguridad y la defensa…",
      { confidence: 0.6, explanation: "Posición derivada: apuesta por más construcción europea, no por recuperar competencias." }
    ),
    vp(
      "sumar",
      "oppose",
      145,
      "…que este decida a través de una mayoría cualificada.",
      { confidence: 0.65, explanation: "Posición derivada: propone profundizar la integración decisoria europea." }
    ),
    ne26("pp", "Su programa del 29N no propone recuperar competencias de la UE; solo pide una pausa de un año en la aprobación de normas europeas (medida 7)."),
    ne26("vox", "Su programa del 29N propone revertir normativas inspiradas en el Pacto Verde Europeo (págs. 11-12, 29 y 33), sin plantear expresamente recuperar competencias de la UE."),
  ]),
  verify(base("ue_003"), [
    vp(
      "vox",
      "support",
      100,
      "…consultaremos a los españoles sobre las políticas migratorias y la expulsión de inmigrantes ilegales.",
      { confidence: 0.6, explanation: "Prioriza la decisión nacional (incluso por referéndum) sobre la política migratoria." }
    ),
    vp(
      "pp",
      "oppose",
      99,
      "Apoyaremos una política común europea para afrontar las crisis migratorias en el Mediterráneo.",
      { confidence: 0.7 }
    ),
    ne(
      "psoe",
      "Su programa remite a la gestión ordenada de la migración sin pronunciarse expresamente sobre el reparto competencial nacional/europeo."
    ),
    vp(
      "sumar",
      "oppose",
      149,
      "Un nuevo pacto de migración y asilo…",
      { confidence: 0.6, explanation: "Apuesta por el marco europeo, aunque con otro contenido." }
    ),
    vp26(
      "pp",
      "oppose",
      21,
      "En situaciones de emergencia migratoria, y de la mano del nuevo mecanismo europeo, reduciremos los plazos y trámites al máximo",
      { confidence: 0.6, explanation: "Posición derivada: articula su política migratoria con los instrumentos europeos (Pacto Europeo, Reglamento Europeo de Retornos, Frontex)." }
    ),
    ne26("vox"),
  ]),
  verify(base("ue_004"), [
    vp(
      "psoe",
      "strongly_support",
      260,
      "Impulsaremos la toma de decisiones en política exterior y de seguridad común por mayoría cualificada.",
      { confidence: 0.9 }
    ),
    vp(
      "sumar",
      "strongly_support",
      140,
      "Apostaremos por abandonar el requisito de la unanimidad en materia de política exterior y de seguridad común.",
      { confidence: 0.9 }
    ),
    vp(
      "vox",
      "strongly_oppose",
      137,
      "…recuperando la regla de la unanimidad allí donde sea precisa para asegurar el respeto a la soberanía nacional.",
      { confidence: 0.85 }
    ),
    ne("pp"),
    ne26("pp"),
    ne26("vox"),
  ]),
  verify(base("ue_005"), [
    vp(
      "pp",
      "support",
      99,
      "Impulsaremos una autonomía estratégica abierta que desarrolle una Europa de la seguridad y la defensa, así como una base industrial y tecnológica europea, complementaria de la Alianza Atlántica.",
      { confidence: 0.7 }
    ),
    vp(
      "sumar",
      "conditional_support",
      139,
      "…un espacio europeo de seguridad sujeto a control democrático…",
      { confidence: 0.6, explanation: "Apoya estructuras europeas de seguridad, pero desvinculadas de la lógica OTAN y del gasto militar." }
    ),
    vp(
      "vox",
      "oppose",
      137,
      "…asegurar el respeto a la soberanía nacional.",
      { confidence: 0.6, explanation: "Posición derivada de su rechazo a ceder soberanía, también militar." }
    ),
    ne("psoe"),
    vp26(
      "pp",
      "conditional_support",
      26,
      "contribuiremos a reforzar el pilar europeo en la OTAN",
      { confidence: 0.5, explanation: "Refuerza el pilar europeo dentro de la OTAN y las compras conjuntas de defensa (medida 236), sin integrar la defensa en estructuras militares europeas comunes." }
    ),
    ne26("vox"),
  ]),
  verify(base("ota_001"), [
    vp(
      "psoe",
      "support",
      264,
      "Continuaremos trabajando en el seno de la OTAN por la defensa de la paz y la seguridad, del orden internacional y de los valores democráticos.",
      { confidence: 0.85 }
    ),
    vp(
      "pp",
      "support",
      95,
      "…los acuerdos con Estados Unidos y la pertenencia a la OTAN [como pilares de nuestra política exterior].",
      { confidence: 0.7 }
    ),
    vp(
      "vox",
      "support",
      92,
      "…para que este recoja e incluya, de forma explícita, a las ciudades españolas de Ceuta y Melilla bajo la protección de la OTAN.",
      { confidence: 0.7, explanation: "Asume la pertenencia y pide ampliar su cobertura a Ceuta y Melilla." }
    ),
    vp(
      "sumar",
      "conditional_opposition",
      139,
      "Promoveremos el desplazamiento progresivo de las garantías de seguridad de la OTAN hacia una autonomía estratégica integral…",
      { confidence: 0.75 }
    ),
    vp26(
      "pp",
      "strongly_support",
      26,
      "Reforzaremos cuando sea necesario los contingentes españoles de la OTAN y contribuiremos a proteger las rutas marítimas de las que depende nuestra economía.",
      { confidence: 0.85 }
    ),
    ne26("vox", "Su programa del 29N no menciona la OTAN."),
  ]),
  verify(base("def_001"), [
    vp(
      "pp",
      "strongly_support",
      103,
      "Cumpliremos el compromiso adquirido por los aliados de destinar un 2% del PIB nacional en seguridad y defensa.",
      { confidence: 0.95 }
    ),
    vp(
      "psoe",
      "support",
      269,
      "…hemos doblado el presupuesto que la derecha destinaba a la Defensa, con el objetivo de lograr unas Fuerzas Armadas modernas…",
      { confidence: 0.7, explanation: "Senda de aumento del gasto en defensa asumida por su Gobierno; el 2% no se cita expresamente." }
    ),
    vp(
      "vox",
      "support",
      93,
      "Aumentaremos la inversión en Defensa y aseguraremos sueldos dignos…",
      { confidence: 0.75 }
    ),
    vp(
      "sumar",
      "strongly_oppose",
      139,
      "…una autonomía estratégica integral al servicio de la ciudadanía europea y no de la industria armamentística…",
      { confidence: 0.7, explanation: "Posición derivada de su rechazo al incremento del gasto militar." }
    ),
    vp26(
      "pp",
      "support",
      26,
      "La Defensa será una verdadera política de Estado y contará con una inversión plurianual que permita conocer fehacientemente y cumplir nuestros compromisos internacionales.",
      { confidence: 0.55, explanation: "Posición derivada: se compromete a cumplir los compromisos internacionales de defensa con inversión plurianual, sin fijar una cifra sobre el PIB." }
    ),
    vp26(
      "vox",
      "support",
      47,
      "Aumento de la inversión en Defensa",
      { confidence: 0.7, explanation: "Aumenta la inversión en defensa sin fijar una cifra sobre el PIB." }
    ),
  ]),
  verify(base("def_002"), [
    vp(
      "sumar",
      "conditional_support",
      139,
      "…al servicio de la ciudadanía europea y no de la industria armamentística…",
      { confidence: 0.55, explanation: "Coherente con su crítica a la industria armamentística; el veto a exportaciones no se formula expresamente." }
    ),
    ne("pp"),
    ne("psoe"),
    ne("vox"),
    ne26("pp"),
    ne26("vox"),
  ]),
  axesOnly(
    base("ext_001"),
    "Verificación 2026-08: los programas 23J no fijan posición expresa sobre el referéndum del Sáhara Occidental.",
    [
      vp26(
        "pp",
        "neutral_or_unclear",
        74,
        "Apoyaremos los esfuerzos de Naciones Unidas en el Sáhara Occidental para alcanzar una solución política justa, duradera y mutuamente aceptable para las partes.",
        { confidence: 0.6, explanation: "Apoya una solución en el marco de Naciones Unidas sin mencionar el referéndum de autodeterminación." }
      ),
      ne26("vox"),
    ]
  ),
  verify(base("ene_001"), [
    vp(
      "sumar",
      "strongly_support",
      13,
      "Se creará una empresa pública de energía que incluya la gestión de las centrales hidroeléctricas, propiedad del Estado, según vayan finalizando las concesiones…",
      { confidence: 0.9 }
    ),
    ne("pp"),
    ne("psoe"),
    ne("vox"),
    ne26("pp"),
    ne26("vox"),
  ]),
  verify(base("ene_002"), [
    vp(
      "vox",
      "strongly_support",
      119,
      "Derogación inmediata de la ley de cambio climático y transición energética a fin de poder explorar e investigar y explotar los recursos naturales y yacimientos minerales…",
      { confidence: 0.9 }
    ),
    ne("pp"),
    ne("psoe"),
    ne("sumar", "Su apuesta por la descarbonización apunta en contra, pero el programa no aborda expresamente las prospecciones."),
    vp26(
      "pp",
      "support",
      63,
      "Identificaremos las dependencias críticas y apoyaremos la extracción, transformación y reciclaje de materias primas.",
      { confidence: 0.55, explanation: "Posición derivada: apoya la extracción de materias primas y retirar obligaciones ambientales que perjudiquen a la industria (medida 232), sin mencionar los recursos energéticos propios." }
    ),
    vp26(
      "vox",
      "strongly_support",
      12,
      "Fin a las restricciones para poder explorar, investigar y explotar nuestros recursos naturales y yacimientos minerales.",
      { confidence: 0.9 }
    ),
  ]),
  verify(base("nuc_001"), [
    vp(
      "pp",
      "support",
      38,
      "Propondremos, con el visto bueno del Consejo de Seguridad Nuclear, la extensión de la vida útil de las centrales nucleares existentes…",
      { confidence: 0.8, explanation: "Prolonga la vida de las existentes; no compromete la construcción de nuevas." }
    ),
    vp(
      "vox",
      "strongly_support",
      117,
      "…implantar en dichas localizaciones mini reactores nucleares (SMR)… promoveremos la extensión de la vida útil de las centrales nucleares existentes.",
      { confidence: 0.9 }
    ),
    vp(
      "psoe",
      "oppose",
      75,
      "…necesidades en el desmantelamiento ordenado y progresivo de las centrales nucleares.",
      { confidence: 0.7 }
    ),
    vp(
      "sumar",
      "strongly_oppose",
      48,
      "Sumar se compromete a mantener el calendario de cierre del parque nuclear español, aplicando una moratoria a cualquier nueva iniciativa nuclear…",
      { confidence: 0.95 }
    ),
    vp26(
      "pp",
      "strongly_support",
      71,
      "ELIMINAREMOS EL CALENDARIO DE CIERRE DE ALMARAZ, ASCÓ, VANDELLÓS, COFRENTES Y TRILLO.",
      { confidence: 0.9, explanation: "Además, participará en las iniciativas europeas de reactores avanzados y de pequeños reactores modulares." }
    ),
    vp26(
      "vox",
      "strongly_support",
      12,
      "Recuperar urgentemente el plan nuclear nacional. Se garantizará la supervivencia de las centrales nucleares actuales, derogando el calendario de cierre.",
      { confidence: 0.95, explanation: "Además propone estudiar nuevas centrales en los emplazamientos adyacentes a las actuales." }
    ),
  ]),
  verify(base("nuc_002"), [
    vp(
      "psoe",
      "support",
      75,
      "…el desmantelamiento ordenado y progresivo de las centrales nucleares.",
      { confidence: 0.75 }
    ),
    vp(
      "sumar",
      "strongly_support",
      48,
      "Sumar se compromete a mantener el calendario de cierre del parque nuclear español…",
      { confidence: 0.95 }
    ),
    vp(
      "pp",
      "oppose",
      38,
      "…la extensión de la vida útil de las centrales nucleares existentes…",
      { confidence: 0.7, explanation: "Posición inversa derivada de su compromiso de prolongar las centrales." }
    ),
    vp(
      "vox",
      "strongly_oppose",
      117,
      "…promoveremos la extensión de la vida útil de las centrales nucleares existentes.",
      { confidence: 0.75, explanation: "Posición inversa derivada; además propone nuevos reactores SMR." }
    ),
    vp26(
      "pp",
      "strongly_oppose",
      71,
      "ELIMINAREMOS EL CALENDARIO DE CIERRE DE ALMARAZ, ASCÓ, VANDELLÓS, COFRENTES Y TRILLO.",
      { confidence: 0.95 }
    ),
    vp26(
      "vox",
      "strongly_oppose",
      12,
      "Recuperar urgentemente el plan nuclear nacional. Se garantizará la supervivencia de las centrales nucleares actuales, derogando el calendario de cierre.",
      { confidence: 0.95 }
    ),
  ]),
  verify(base("cli_001"), [
    vp(
      "sumar",
      "strongly_support",
      10,
      "Implementaremos un plan nacional de transición energética, para reducir drásticamente las emisiones de CO2…",
      { confidence: 0.85 }
    ),
    vp(
      "psoe",
      "support",
      12,
      "…el compromiso con una transición ecológica justa, para combatir la contaminación y el cambio climático… Los y las socialistas consideramos el cambio climático como un desafío ético…",
      { confidence: 0.7 }
    ),
    vp(
      "pp",
      "conditional_support",
      27,
      "Vamos a ser muy ambiciosos en lo que se refiere a… la mitigación de emisiones… bajo la premisa de una transición ecológica justa…",
      { confidence: 0.55, explanation: "Apoya la mitigación, condicionada a no dañar la actividad económica; no propone endurecer objetivos." }
    ),
    vp(
      "vox",
      "strongly_oppose",
      108,
      "Derogación de la Ley de cambio climático que impide que exploremos nuestros recursos…",
      { confidence: 0.95 }
    ),
    vp26(
      "pp",
      "oppose",
      72,
      "Pondremos freno a la imposición de calendarios imposibles.",
      { confidence: 0.7, explanation: "Mantiene la descarbonización como objetivo irrenunciable, pero propone revisar los ritmos por sectores y evitar un encarecimiento desproporcionado." }
    ),
    vp26(
      "vox",
      "strongly_oppose",
      29,
      "Acabar con todas las imposiciones climáticas como el Pacto Verde que castigan nuestra industria, nuestro campo o que coartan la libertad de circulación de los españoles, como la imposición de ZBE.",
      { confidence: 0.85 }
    ),
  ]),
  verify(base("cli_002"), [
    vp(
      "psoe",
      "support",
      93,
      "Favoreceremos la extensión de las zonas de bajas emisiones.",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "support",
      11,
      "…avanzar en una movilidad sostenible que reduzca el uso del vehículo privado (especialmente en las ciudades)…",
      { confidence: 0.6 }
    ),
    vp(
      "vox",
      "oppose",
      107,
      "…imponiendo restricciones a la movilidad en las ciudades…",
      { confidence: 0.65, explanation: "Posición derivada de su crítica a las restricciones urbanas a la movilidad." }
    ),
    ne("pp"),
    ne26("pp"),
    vp26(
      "vox",
      "strongly_oppose",
      29,
      "Acabar con todas las imposiciones climáticas como el Pacto Verde que castigan nuestra industria, nuestro campo o que coartan la libertad de circulación de los españoles, como la imposición de ZBE.",
      { confidence: 0.9 }
    ),
  ]),
  verify(base("agr_001"), [
    vp(
      "vox",
      "strongly_support",
      107,
      "…ha asfixiado a nuestro campo con impuestos verdes que han encarecido costes hasta hacer inviable que nuestros agricultores y ganaderos salgan adelante.",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "oppose",
      49,
      "Programa nacional de adaptación climática agropecuaria: reconversión del regadío ultraintensivo y del plan estratégico de secano.",
      { confidence: 0.65, explanation: "Apuesta por mantener y reforzar la ambición ambiental en el campo." }
    ),
    ne("pp"),
    ne("psoe"),
    ne26("pp", "Su programa del 29N propone evaluar el impacto rural de las normas (medida 196) y retirar obligaciones climáticas que perjudiquen la competitividad (medida 232), pero no aborda expresamente las exigencias ambientales de la PAC."),
    vp26(
      "vox",
      "strongly_support",
      34,
      "Garantizar su autonomía presupuestaria y el fin de las exigencias burocráticas y medioambientales derivadas del fanatismo climático.",
      { confidence: 0.9, explanation: "Se refiere a la PAC." }
    ),
  ]),
  verify(base("med_001"), [
    vp(
      "vox",
      "strongly_oppose",
      149,
      "Defensa de los agricultores frente a la criminalización del uso de regadíos. Fomento del aumento de la superficie de riego.",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "support",
      49,
      "…reconversión del regadío ultraintensivo… En España, el regadío consume el 80% del agua del país…",
      { confidence: 0.7 }
    ),
    vp(
      "pp",
      "conditional_opposition",
      30,
      "En el caso de las transformaciones de nuevos regadíos, se impulsarán aquellos proyectos que sean sostenibles…",
      { confidence: 0.5, explanation: "Promueve nuevos regadíos «sostenibles»; no plantea restricciones sobre los existentes." }
    ),
    vp(
      "psoe",
      "neutral_or_unclear",
      63,
      "…para la modernización y nuevos regadíos ha comprometido más de 2.130 millones de euros…",
      { confidence: 0.5, explanation: "Invierte en modernización de regadíos; las restricciones en acuíferos sobreexplotados no se abordan en el programa." }
    ),
    vp26(
      "pp",
      "conditional_opposition",
      65,
      "renovaremos los regadíos para reducir su consumo de agua y energía, definiremos nuevos regadíos",
      { confidence: 0.5, explanation: "Posición derivada: plantea nuevos regadíos y su modernización, sin mencionar restricciones en acuíferos sobreexplotados." }
    ),
    vp26(
      "vox",
      "conditional_opposition",
      62,
      "así como para impulsar y modernizar los regadíos y la producción de energía.",
      { confidence: 0.5, explanation: "Posición derivada: plantea impulsar los regadíos con un Plan Nacional del Agua que interconecte las cuencas, sin mencionar restricciones en acuíferos sobreexplotados." }
    ),
  ]),
  verify(base("tpt_001"), [
    vp(
      "sumar",
      "strongly_support",
      9,
      "Transformaremos en una política de transporte permanente la reducción del precio de los abonos de transporte para desplazamientos recurrentes…",
      { confidence: 0.9 }
    ),
    vp(
      "psoe",
      "support",
      78,
      "Ampliaremos los descuentos al uso del transporte público con la gratuidad total del transporte público urbano para niños y estudiantes hasta los 24 años.",
      { confidence: 0.8 }
    ),
    ne("pp"),
    ne("vox"),
    ne26("pp"),
    ne26("vox"),
  ]),
  verify(base("fis_001"), [
    vp(
      "psoe",
      "strongly_support",
      39,
      "Avanzaremos en la fiscalidad verde… bajo la premisa de “quien contamina paga”, que irá acompañada de medidas compensatorias… para incentivar los cambios necesarios entre las clases media y trabajadora…",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "support",
      17,
      "España va muy rezagada en el ámbito de la llamada «fiscalidad verde»… No podemos permitirnos seguir rezagados.",
      { confidence: 0.75 }
    ),
    vp(
      "vox",
      "strongly_oppose",
      108,
      "…carga sobre los hombros de los españoles el peso de la transición ecológica en forma de “impuestos verdes”…",
      { confidence: 0.85 }
    ),
    ne("pp"),
    ne26("pp"),
    vp26(
      "vox",
      "strongly_oppose",
      "11-12",
      "Revertir las normativas que atacan frontalmente a la industria nacional (prohibición de motores de combustión, impuestos a las emisiones de CO2)",
      { confidence: 0.75, explanation: "Posición derivada: propone revertir los impuestos a las emisiones de CO2, lo contrario de subir los de los combustibles fósiles." }
    ),
  ]),
  verify(base("dig_001"), [
    vp(
      "vox",
      "strongly_support",
      9,
      "Exigiremos que todas las Administraciones Públicas, de cualquier nivel territorial, presten atención presencial, sin cita previa y, al menos, en español.",
      { confidence: 0.9 }
    ),
    vp(
      "sumar",
      "strongly_support",
      18,
      "Mejora de la gestión de las prestaciones sociales y vuelta a la atención presencial plena.",
      { confidence: 0.85 }
    ),
    vp(
      "pp",
      "neutral_or_unclear",
      87,
      "Generalizaremos el sistema de ventanilla única…",
      { confidence: 0.5, explanation: "Apuesta por simplificación y digitalización; la garantía presencial no se aborda expresamente." }
    ),
    ne("psoe"),
    vp26(
      "pp",
      "support",
      15,
      "Garantizaremos atención presencial, telefónica y digital.",
      { confidence: 0.85, explanation: "También asegura «el derecho a la atención presencial» de los mayores (medida 110)." }
    ),
    vp26(
      "vox",
      "strongly_support",
      27,
      "Fin de la cita previa. Derecho a ser atendido presencialmente en cualquier oficina pública de forma inmediata sin necesidad de solicitar turno por internet.",
      { confidence: 0.9 }
    ),
  ]),
  verify(base("ia_001"), [
    vp(
      "pp",
      "support",
      90,
      "Garantizaremos los derechos individuales mediante la transparencia de los algoritmos públicos.",
      { confidence: 0.75 }
    ),
    vp(
      "psoe",
      "strongly_support",
      29,
      "Apoyaremos la creación de mecanismos de supervisión de algoritmos a nivel europeo… Pondremos en marcha la Agencia Española de Supervisión de la Inteligencia Artificial…",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "support",
      26,
      "Con la auditoría algorítmica… la empresa deberá demostrar que el sistema de inteligencia artificial utilizado en el ámbito laboral no incurre [en discriminación]…",
      { confidence: 0.6, explanation: "Su propuesta de auditoría se centra en el ámbito laboral; la administración pública no se cita expresamente." }
    ),
    ne("vox"),
    vp26(
      "pp",
      "neutral_or_unclear",
      15,
      "con inteligencia artificial y con supervisión humana en toda decisión que afecte a derechos",
      { confidence: 0.4, explanation: "Exige supervisión humana en las decisiones automatizadas que afecten a derechos, pero no auditorías públicas e independientes." }
    ),
    ne26("vox"),
  ]),
  verify(base("ia_002"), [
    vp(
      "psoe",
      "support",
      29,
      "…el alineamiento de los algoritmos con las exigencias del Reglamento [europeo de IA]…",
      { confidence: 0.7 }
    ),
    vp(
      "sumar",
      "support",
      26,
      "…la empresa deberá demostrar que el sistema de inteligencia artificial utilizado… no incurre [en discriminación]…",
      { confidence: 0.6 }
    ),
    vp(
      "pp",
      "conditional_support",
      22,
      "…una Estrategia Nacional de Inteligencia Artificial que aproveche todo su potencial, poniendo siempre a la persona en el centro.",
      { confidence: 0.5, explanation: "Enfoque centrado en aprovechar el potencial con salvaguardas; no aboga por una aplicación estricta de la regulación." }
    ),
    ne("vox"),
    vp26(
      "pp",
      "oppose",
      63,
      "Habrá entornos de prueba seguros, sin cargas nacionales añadidas al marco europeo, y respuesta a los trámites en treinta días.",
      { confidence: 0.7, explanation: "Aplica el marco europeo sin cargas nacionales añadidas y una AESIA que «acompañará a las empresas» en lugar de limitarse a vigilarlas." }
    ),
    ne26("vox", "Su programa del 29N impulsa la adopción de la inteligencia artificial (pág. 27), sin pronunciarse sobre la intensidad de su regulación."),
  ]),
];
