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
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_support",
      103,
      "El nuevo modelo debe avanzar en la autonomía financiera de las comunidades autónomas, con una mayor capacidad tributaria y de gestión por las agencias tributarias autonómicas.",
      { confidence: 0.9 }
    ),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "strongly_support",
      8,
      "Trátase de que Galiza recade todos os impostos e teña capacidade para decidir como os inviste",
      { confidence: 0.95 }
    ),
    vp26(
      "erc",
      "strongly_support",
      11,
      "un model de finançament que avanci en la línia d’un concert econòmic solidari",
      { confidence: 0.9 }
    ),
    vp26(
      "pnv",
      "strongly_support",
      21,
      "Ampliar la capacidad normativa de las Haciendas Forales en el IVA y los Impuestos Especiales.",
      { confidence: 0.85 }
    ),
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
    vp26(
      "psoe",
      "oppose",
      91,
      "el reto no es recentralizar ni fragmentar, sino hacer que el Estado autonómico funcione mejor",
      { confidence: 0.75 }
    ),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      103,
      "debe acomodar la voluntad de mayor autogobierno que han expresado algunas comunidades autónomas",
      { confidence: 0.75, explanation: "Posición derivada: defiende más autogobierno y un modelo federal (pág. 140)." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      24,
      "Exigimos el máximo nivel de autonomía y autogobierno en cualquier reforma.",
      { confidence: 0.8, explanation: "Posición derivada: reclama más autogobierno para Andalucía." }
    ),
    vp26(
      "bng",
      "strongly_oppose",
      37,
      "O BNG aspira a que Galiza asuma a plena capacidade para rexer o seu sistema sanitario",
      { confidence: 0.8, explanation: "Posición derivada: reclama más competencias para Galicia." }
    ),
    vp26(
      "erc",
      "strongly_oppose",
      42,
      "impedir qualsevol intent de recentralització o ingerència de l’Estat en el model sanitari català",
      { confidence: 0.85 }
    ),
    vp26(
      "pnv",
      "strongly_oppose",
      38,
      "Rechazar cualquier intento de recentralización, invasión o vaciamiento de las competencias vascas",
      { confidence: 0.95 }
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
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
      ne26("psoe"),
      vp26(
        "frente-amplio",
        "support",
        140,
        "impulsar el cambio de modelo territorial establecido en la Constitución, en un sentido federal y plurinacional incluyendo el derecho a decidir mediante referéndum",
        { confidence: 0.65, explanation: "Lo plantea mediante reforma constitucional y sin mencionar expresamente Cataluña." }
      ),
      ne26("adelante-andalucia"),
      vp26(
        "bng",
        "support",
        32,
        "referendos vinculantes en asuntos de interese, incluído o dereito de autodeterminación",
        { confidence: 0.6, explanation: "Posición derivada: defiende el derecho de autodeterminación mediante referéndum, referido a Galicia; no menciona Cataluña." }
      ),
      vp26(
        "erc",
        "strongly_support",
        7,
        "Catalunya té dret a exercir l’autodeterminació, i són els catalans i les catalanes qui han de decidir el futur polític del país.",
        { confidence: 0.9 }
      ),
      ne26("pnv"),
    ]
  ),
  axesOnly(
    base("pv_001"),
    "Verificación 2026-08: ningún programa 23J aborda expresamente el concierto económico vasco-navarro.",
    [
      ne26("pp", "Su programa del 29N no menciona el concierto económico vasco-navarro; la medida 101 se refiere a las comunidades del régimen común."),
      ne26("vox"),
      ne26("psoe"),
      ne26("frente-amplio"),
      ne26("adelante-andalucia"),
      ne26("bng"),
      ne26("erc"),
      vp26(
        "pnv",
        "strongly_support",
        37,
        "En Madrid defenderemos el cumplimiento íntegro del Estatuto de Gernika, el Concierto Económico y las inversiones comprometidas.",
        { confidence: 0.95 }
      ),
    ]
  ),
  axesOnly(
    base("mon_001"),
    "Verificación 2026-08: ningún programa 23J aborda la forma de Estado.",
    [
      ne26("pp", "Su programa del 29N no aborda la forma de Estado más allá de una mención genérica a la monarquía parlamentaria en la introducción (pág. 8)."),
      ne26("vox", "Su programa del 29N protege la Corona como símbolo (pág. 56), pero no aborda la forma de Estado."),
      ne26("psoe"),
      vp26(
        "frente-amplio",
        "support",
        140,
        "Nuestro horizonte es avanzar hacia una República Federal que nos permita alcanzar una democracia real en la que también elijamos la Jefatura del Estado.",
        { confidence: 0.8, explanation: "Lo plantea como horizonte, sin concretar una consulta." }
      ),
      ne26("adelante-andalucia"),
      ne26("bng"),
      vp26(
        "erc",
        "strongly_support",
        8,
        "totes les iniciatives que puguin influir a l’hora de posar fi a aquesta institució contrària al principi democràtic",
        { confidence: 0.8, explanation: "Se refiere a la monarquía; no menciona una consulta." }
      ),
      ne26("pnv"),
    ]
  ),
  axesOnly(
    base("mon_002"),
    "Verificación 2026-08: ningún programa 23J aborda la forma de Estado.",
    [
      ne26("pp", "Su programa del 29N no aborda la forma de Estado más allá de una mención genérica a la monarquía parlamentaria en la introducción (pág. 8)."),
      ne26("vox", "Su programa del 29N protege la Corona como símbolo (pág. 56), pero no aborda la forma de Estado."),
      ne26("psoe"),
      vp26(
        "frente-amplio",
        "strongly_oppose",
        140,
        "Nuestro horizonte es avanzar hacia una República Federal que nos permita alcanzar una democracia real en la que también elijamos la Jefatura del Estado.",
        { confidence: 0.8, explanation: "Posición derivada: su horizonte es una república federal." }
      ),
      ne26("adelante-andalucia"),
      ne26("bng"),
      vp26(
        "erc",
        "strongly_oppose",
        8,
        "totes les iniciatives que puguin influir a l’hora de posar fi a aquesta institució contrària al principi democràtic",
        { confidence: 0.9, explanation: "Se refiere a la monarquía." }
      ),
      ne26("pnv"),
    ]
  ),
  axesOnly(
    base("con_001"),
    "Verificación 2026-08: los programas 23J no concretan el blindaje constitucional de derechos sociales con exigibilidad judicial directa.",
    [
      ne26("pp"),
      ne26("vox"),
      vp26(
        "psoe",
        "strongly_support",
        27,
        "Reformar la Constitución Española para que la vivienda se considere un derecho fundamental, permitiendo así que la ciudadanía pueda exigir su cumplimiento a los poderes públicos.",
        { confidence: 0.9, explanation: "También propone proteger como derechos fundamentales la salud y la vivienda (pág. 89)." }
      ),
      vp26(
        "frente-amplio",
        "strongly_support",
        19,
        "otorgándole la máxima protección jurídica e idéntica exigibilidad directa ante los tribunales ordinarios y el Tribunal Constitucional mediante recurso de amparo",
        { confidence: 0.9, explanation: "Se refiere al derecho a la vivienda; propone además blindar en la Constitución la salud y las pensiones (pág. 140)." }
      ),
      vp26(
        "adelante-andalucia",
        "strongly_support",
        49,
        "Reforma constitucional para llevar el artículo 47 al capítulo de derechos fundamentales, con recurso de amparo.",
        { confidence: 0.9, explanation: "Se refiere al derecho a la vivienda." }
      ),
      ne26("bng"),
      ne26("erc"),
      ne26("pnv"),
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
    vp26(
      "psoe",
      "conditional_opposition",
      "91-92",
      "Actualizaremos la Ley Reguladora de las Bases del Régimen Local para clarificar las competencias municipales y el papel de diputaciones, cabildos, consejos insulares y áreas metropolitanas",
      { confidence: 0.5, explanation: "Posición derivada: mantiene las diputaciones y refuerza la financiación local; no plantea suprimirlas ni fusionar municipios." }
    ),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "strongly_support",
      42,
      "Supresión das deputacións provinciais",
      { confidence: 0.85, explanation: "Se refiere a las diputaciones; no menciona los municipios pequeños." }
    ),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "strongly_support",
      109,
      "Hacer de la Unión Europea no solo un mercado único, sino una auténtica unión política y fiscal",
      { confidence: 0.85, explanation: "Además propone centralizar parte de la emisión de deuda pública en un Mecanismo Soberano Europeo (pág. 111)." }
    ),
    vp26(
      "frente-amplio",
      "support",
      137,
      "Financiaremos el presupuesto europeo no solo con contribuciones nacionales, sino también con nuevos recursos propios",
      { confidence: 0.65, explanation: "Propone nuevos recursos propios europeos; no menciona deuda común." }
    ),
    ne26("adelante-andalucia"),
    ne26("bng"),
    vp26(
      "erc",
      "support",
      16,
      "dotada amb un pressupost comú més ambiciós",
      { confidence: 0.6, explanation: "Pide un presupuesto común europeo más ambicioso; no se refiere a impuestos ni deuda comunes." }
    ),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "oppose",
      109,
      "Hacer de la Unión Europea no solo un mercado único, sino una auténtica unión política y fiscal",
      { confidence: 0.6, explanation: "Posición derivada: propone más integración europea, no recuperar competencias." }
    ),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "oppose",
      110,
      "Defender una política migratoria europea ordenada, basada en la solidaridad, la responsabilidad, las necesidades del mercado de trabajo europeo y el respeto de los derechos humanos",
      { confidence: 0.6, explanation: "Posición derivada: defiende una política migratoria común europea." }
    ),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "strongly_support",
      109,
      "superando los bloqueos de la unanimidad y reforzando el Parlamento Europeo.",
      { confidence: 0.75, explanation: "Lo plantea para el conjunto de la Unión, no solo para la política exterior." }
    ),
    vp26(
      "frente-amplio",
      "support",
      136,
      "Apostaremos por abandonar el requisito de la unanimidad a favor de un sistema de mayorías cualificadas en materia de política exterior y de seguridad común cuando esté involucrada la protección de los derechos humanos",
      { confidence: 0.75, explanation: "Mantiene la unanimidad en seguridad y defensa." }
    ),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "support",
      110,
      "Impulsar la Unión Europea de la defensa, reforzando la autonomía estratégica y militar de Europa",
      { confidence: 0.75 }
    ),
    vp26(
      "frente-amplio",
      "conditional_support",
      135,
      "un espacio europeo de seguridad sujeto a control democrático",
      { confidence: 0.5, explanation: "Defiende una autonomía estratégica europea «no al servicio de la industria armamentística», sin hablar de integrar estructuras militares." }
    ),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "oppose",
      90,
      "Opoñerse, no ámbito da UE, á militarización",
      { confidence: 0.6, explanation: "Posición derivada." }
    ),
    vp26(
      "erc",
      "support",
      16,
      "autònoma de l’OTAN en matèria de defensa",
      { confidence: 0.55, explanation: "Posición derivada: quiere una UE con defensa propia, autónoma de la OTAN." }
    ),
    ne26("pnv"),
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
    ne26("psoe", "Su programa del 29N no menciona la OTAN; rechaza elevar el gasto militar al 5% del PIB (pág. 105)."),
    vp26(
      "frente-amplio",
      "conditional_opposition",
      130,
      "Rechazaremos de forma explícita el compromiso de destinar el 5 % del PIB a gasto militar en el marco de la OTAN",
      { confidence: 0.55, explanation: "No plantea salir de la OTAN; rechaza su objetivo de gasto y propone la desmilitarización." }
    ),
    vp26(
      "adelante-andalucia",
      "oppose",
      109,
      "Proceso que termine en una consulta sobre la permanencia de España.",
      { confidence: 0.7, explanation: "Propone un referéndum sobre la permanencia en la OTAN y rechaza el objetivo de gasto de la Alianza." }
    ),
    vp26(
      "bng",
      "strongly_oppose",
      90,
      "Rexeitamento ao incremento do gasto militar e ao acatamento das directrices OTAN e Estados Unidos neste ámbito.",
      { confidence: 0.75, explanation: "Posición derivada: rechaza acatar las directrices de la OTAN; no se pronuncia expresamente sobre la pertenencia." }
    ),
    ne26("erc"),
    ne26("pnv"),
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
    ne26("psoe", "Su programa del 29N rechaza elevar el gasto militar al 5% del PIB (pág. 105) y propone hacer más eficiente la inversión en defensa (pág. 112), sin fijar un objetivo de gasto."),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      130,
      "Rechazaremos de forma explícita el compromiso de destinar el 5 % del PIB a gasto militar en el marco de la OTAN, impulsando una reducción efectiva de las partidas militares",
      { confidence: 0.9 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      109,
      "Rechazo al plan europeo de rearme y al objetivo del 5 % del PIB de la OTAN, reducción progresiva del gasto militar",
      { confidence: 0.95 }
    ),
    vp26(
      "bng",
      "strongly_oppose",
      90,
      "Rexeitamento ao incremento do gasto militar e ao acatamento das directrices OTAN e Estados Unidos neste ámbito.",
      { confidence: 0.95 }
    ),
    ne26("erc"),
    ne26("pnv"),
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
    ne26("psoe", "Su programa del 29N recuerda el embargo de armas a Israel aprobado por el Gobierno (pág. 105), sin proponer una regla general sobre el comercio de armas."),
    vp26(
      "frente-amplio",
      "strongly_support",
      131,
      "Aprobaremos la reforma de la Ley 53/2007 para establecer el embargo automático de material de defensa y de doble uso a cualquier Estado cuyos dirigentes estén investigados por la Corte Penal Internacional",
      { confidence: 0.85 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      32,
      "embargo total de armas y apoyo al boicot",
      { confidence: 0.8, explanation: "Se refiere a Israel." }
    ),
    ne26("bng"),
    vp26(
      "erc",
      "strongly_support",
      16,
      "Promoure un embargament complet d’armes a Israel per part de l’Estat.",
      { confidence: 0.8, explanation: "Se refiere a Israel." }
    ),
    ne26("pnv"),
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
      ne26("psoe"),
      vp26(
        "frente-amplio",
        "strongly_support",
        132,
        "Defenderemos el derecho incondicional a la autodeterminación del pueblo saharaui mediante un referéndum libre supervisado por Naciones Unidas",
        { confidence: 0.95 }
      ),
      vp26(
        "adelante-andalucia",
        "strongly_support",
        32,
        "Autodeterminación del Sáhara Occidental, con España asumiendo su responsabilidad como potencia administradora",
        { confidence: 0.9 }
      ),
      vp26(
        "bng",
        "strongly_support",
        90,
        "instando a que o Estado español impulse un referendo de autodeterminación con garantías democráticas",
        { confidence: 0.95 }
      ),
      vp26(
        "erc",
        "support",
        16,
        "gir del govern del PSOE respecte el Sàhara Occidental. Cal revertir-lo",
        { confidence: 0.7, explanation: "Posición derivada: pide revertir el cambio de posición del Gobierno sobre el Sáhara." }
      ),
      ne26("pnv"),
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
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_support",
      63,
      "Crearemos una comercializadora pública de referencia, que distribuya energía a los hogares y rompa el oligopolio y su integración vertical.",
      { confidence: 0.9 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      22,
      "Desprivatizar la energía y crear una empresa pública andaluza de energía",
      { confidence: 0.85, explanation: "Propone una empresa pública andaluza." }
    ),
    vp26(
      "bng",
      "support",
      56,
      "base para a creación dunha empresa pública galega en materia de enerxía",
      { confidence: 0.75, explanation: "Propone una empresa pública gallega." }
    ),
    ne26("erc"),
    ne26("pnv"),
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
    ne26("psoe", "Su programa del 29N propone una nueva Ley de Minas «alineada con la transición ecológica» (pág. 66), sin pronunciarse sobre la eliminación de trabas a la exploración."),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      64,
      "El Estado dejará de invertir en empresas dedicadas a la exploración, extracción, refino o distribución de combustibles fósiles.",
      { confidence: 0.7, explanation: "Posición derivada: retira la inversión pública en combustibles fósiles y prohíbe importar gas obtenido con fracking." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      82,
      "moratoria de hidrocarburos y Andalucía libre de fracking",
      { confidence: 0.8 }
    ),
    vp26(
      "bng",
      "oppose",
      56,
      "Comprometer o mantemento da prohibición da fractura hidráulica (fracking)",
      { confidence: 0.65, explanation: "Posición derivada." }
    ),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "oppose",
      66,
      "Mantener el calendario de cierre de las centrales nucleares hasta 2035",
      { confidence: 0.85, explanation: "Posición derivada: mantiene el calendario de cierre, lo contrario de prolongar su vida." }
    ),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      64,
      "Cumpliremos el calendario de cierre de las centrales nucleares.",
      { confidence: 0.9 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      82,
      "Fin de las subvenciones a combustibles fósiles y nuclear",
      { confidence: 0.7, explanation: "Posición derivada." }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "strongly_support",
      66,
      "Mantener el calendario de cierre de las centrales nucleares hasta 2035",
      { confidence: 0.95 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      64,
      "Cumpliremos el calendario de cierre de las centrales nucleares.",
      { confidence: 0.95 }
    ),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "support",
      73,
      "Defender y profundizar el Pacto Verde Europeo, garantizando que la simplificación administrativa no suponga una reducción de la ambición climática",
      { confidence: 0.65, explanation: "Mantiene la ambición climática y propone abandonar progresivamente los combustibles fósiles (pág. 65), sin plantear endurecer los objetivos de reducción." }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      60,
      "Reduciremos las emisiones respecto a 1990 un 38 % en 2035, un 85 % en 2040 y alcanzaremos la neutralidad climática en 2050",
      { confidence: 0.85 }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      22,
      "una ley de emergencia climática con objetivos anuales verificables",
      { confidence: 0.7 }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "strongly_support",
      71,
      "Impulsar las Zonas de Bajas Emisiones y la movilidad sostenible en las ciudades",
      { confidence: 0.85 }
    ),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "conditional_opposition",
      "69-70",
      "Facilitar la gestión administrativa de las explotaciones agrarias, reduciendo cargas burocráticas y desarrollando nuevas herramientas digitales de asesoramiento que permitan simplificar la relación de agricultores y ganaderos con la administración sin menoscabar las garantías ambientales, sanitarias y laborales.",
      { confidence: 0.6, explanation: "Simplifica la gestión administrativa de las explotaciones sin rebajar las garantías ambientales." }
    ),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "neutral_or_unclear",
      68,
      "Modernizar los regadíos, mejorando la eficiencia hídrica y energética sin aumentar el consumo total de agua.",
      { confidence: 0.5, explanation: "Propone bancos públicos de agua para prevenir la sobreexplotación de los acuíferos, sin plantear restringir los regadíos existentes." }
    ),
    vp26(
      "frente-amplio",
      "support",
      74,
      "creación de un canon hídrico progresivo para el regadío industrial en zonas con acuíferos sobreexplotados",
      { confidence: 0.7, explanation: "Plantea además evaluar moratorias a nuevos regadíos (pág. 75)." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      84,
      "freno al regadío intensivo, ni trasvases ni compraventa de derechos de riego, cierre de los pozos ilegales",
      { confidence: 0.8 }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "support",
      71,
      "Consolidar un sistema integrado de transporte público con financiación estable, tarifas sencillas y asequibles",
      { confidence: 0.75, explanation: "Mantiene además los programas de movilidad para jóvenes; no concreta la gratuidad de los abonos." }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      65,
      "Crearemos un abono único nominativo y mensual válido en todo el Estado, ciudades y modos de transporte.",
      { confidence: 0.85, explanation: "Con precios de 20 €/mes para Cercanías." }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      77,
      "el transporte público será más barato que el coche",
      { confidence: 0.7 }
    ),
    ne26("bng"),
    vp26(
      "erc",
      "support",
      21,
      "Garantir unes tarifes assequibles i estables que fomentin l’ús del transport públic",
      { confidence: 0.75 }
    ),
    ne26("pnv"),
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
    ne26("psoe", "Su programa del 29N propone reorientar la fiscalidad para abaratar las tecnologías limpias (pág. 66) y una tasa a los viajes de lujo (pág. 48), sin plantear subir los impuestos a los combustibles fósiles."),
    vp26(
      "frente-amplio",
      "strongly_support",
      48,
      "Profundizaremos en la fiscalidad sobre el carbono y los hidrocarburos, con compensaciones y exenciones para las rentas bajas y colectivos vulnerables.",
      { confidence: 0.9 }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      59,
      "Impuestos sobre las emisiones, los residuos peligrosos y el consumo de recursos comunes.",
      { confidence: 0.65, explanation: "Posición derivada: no se refiere expresamente a los carburantes." }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "strongly_support",
      101,
      "Garantizar que toda persona pueda ser atendida por un empleado público, en persona o por teléfono, sin cita previa obligatoria",
      { confidence: 0.85 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      22,
      "atención presencial obligatoria",
      { confidence: 0.75 }
    ),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "strongly_support",
      41,
      "Garantir a atención presencial sen cita previa",
      { confidence: 0.8 }
    ),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "strongly_support",
      96,
      "Establecer auditorías independientes de los sistemas de IA que afecten a derechos",
      { confidence: 0.8, explanation: "Se refiere a todos los sistemas de IA que afecten a derechos, no solo a los de las administraciones." }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      120,
      "Exigencia a proveedores de superar una auditoría de seguridad independiente antes de desplegar sistemas de IA en contratos públicos",
      { confidence: 0.85, explanation: "Propone además una ley sobre el uso de la IA en el sector público con inventario público obligatorio." }
    ),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "strongly_support",
      76,
      "Crear mecanismos públicos de inspección e auditoría dos algoritmos de interese xeral",
      { confidence: 0.85 }
    ),
    ne26("erc"),
    ne26("pnv"),
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
    vp26(
      "psoe",
      "support",
      96,
      "Aprobar la Ley para el buen uso y la gobernanza de la inteligencia artificial.",
      { confidence: 0.7, explanation: "Prevé supervisión humana, etiquetado obligatorio y sanciones de hasta 35 millones de euros, sin pronunciarse sobre su efecto en la adopción." }
    ),
    vp26(
      "frente-amplio",
      "support",
      120,
      "Extenderemos las auditorías independientes a decisiones automatizadas en empleo, crédito, seguros y servicios esenciales",
      { confidence: 0.7 }
    ),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
  ]),
];
