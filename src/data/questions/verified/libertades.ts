import type { Question } from "@/lib/types";
import { axesOnly, ne, ne26, verify, vote, vp, vp26 } from "./helpers";
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
    vp26(
      "pp",
      "strongly_oppose",
      22,
      "Reformaremos la Ley de Extranjería para prohibir las regularizaciones masivas e indiscriminadas",
      { confidence: 0.9 }
    ),
    vp26(
      "vox",
      "strongly_oppose",
      15,
      "Prohibición de las regularizaciones masivas. Quien entra de forma ilegal jamás podrá regularizar su situación.",
      { confidence: 0.95 }
    ),
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_support",
      126,
      "Reformaremos de forma integral la Ley de Extranjería para instaurar un procedimiento estable, permanente y reglado de regularización administrativa.",
      { confidence: 0.95 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      28,
      "Derogación de la Ley de Extranjería, regularización extraordinaria y cierre de los CIE",
      { confidence: 0.95 }
    ),
    vp26(
      "bng",
      "strongly_support",
      23,
      "favorecer e facilitar os procesos de regularización administrativa",
      { confidence: 0.85 }
    ),
    ne26("erc"),
    vp26(
      "pnv",
      "support",
      25,
      "Avanzar en los procesos de regularización previstos en la legislación, facilitando la integración social y laboral de las personas que cumplen los requisitos establecidos.",
      { confidence: 0.6, explanation: "Dentro de los procedimientos legales vigentes." }
    ),
    vp26(
      "ehbildu",
      "strongly_support",
      20,
      "Regularización y nueva Ley de Extranjería: Garantizar una regularización efectiva, accesible y estable.",
      { confidence: 0.9 }
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
    vp26(
      "pp",
      "support",
      23,
      "Quien quiera renovar su residencia temporal en el régimen general deberá firmar un compromiso de integración.",
      { confidence: 0.85, explanation: "Añade como requisito de renovación aprender español, conocer la Constitución y, cuando corresponda, formarse para el empleo." }
    ),
    vp26(
      "vox",
      "strongly_support",
      15,
      "Supresión de la institución del arraigo como forma de atajar la inmigración ilegal",
      { confidence: 0.8 }
    ),
    vp26(
      "psoe",
      "oppose",
      92,
      "simplificar los trámites, dar seguridad jurídica, impulsar la contratación en origen, agilizar la homologación de títulos y facilitar el acceso al empleo",
      { confidence: 0.6, explanation: "Posición derivada: propone simplificar los trámites de extranjería, no endurecer los requisitos." }
    ),
    vp26(
      "frente-amplio",
      "oppose",
      126,
      "Suprimiremos trabas administrativas para el acceso efectivo a derechos",
      { confidence: 0.65, explanation: "Posición derivada: propone eliminar trabas administrativas y un procedimiento estable de regularización." }
    ),
    vp26(
      "adelante-andalucia",
      "oppose",
      28,
      "Derogación de la Ley de Extranjería, regularización extraordinaria y cierre de los CIE",
      { confidence: 0.6, explanation: "Posición derivada: deroga la ley de extranjería y regulariza; no se refiere expresamente a los permisos." }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_oppose",
      20,
      "Facilitar las autorizaciones de residencia y trabajo y prevenir la irregularidad sobrevenida.",
      { confidence: 0.85 }
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
    vp26(
      "pp",
      "support",
      23,
      "La expulsión será la regla para los extranjeros condenados por delitos sexuales, delitos de sangre y multirreincidencia.",
      { confidence: 0.75, explanation: "La expulsión como regla se limita a delitos sexuales, de sangre y multirreincidencia, no a todos los delitos de gravedad media." }
    ),
    vp26(
      "vox",
      "strongly_support",
      15,
      "Deportación de quienes cometan delitos graves o hagan del delito leve su forma de vida",
      { confidence: 0.85 }
    ),
    ne26("psoe"),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    vp26(
      "erc",
      "strongly_oppose",
      14,
      "per evitar la deriva punitiva i les deportacions automàtiques",
      { confidence: 0.7, explanation: "Posición derivada: rechaza las expulsiones automáticas." }
    ),
    ne26("pnv"),
    ne26("ehbildu"),
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
    vp26(
      "pp",
      "neutral_or_unclear",
      22,
      "Aplicaremos el Pacto Europeo e impulsaremos acuerdos con países seguros para que examinen solicitudes y acojan a quienes lo necesiten.",
      { confidence: 0.4, explanation: "Se compromete a aplicar el Pacto Europeo de Migración y Asilo, pero no se pronuncia sobre cuotas obligatorias de reparto." }
    ),
    ne26("vox"),
    ne26("psoe", "Su programa del 29N defiende una política migratoria europea «basada en la solidaridad» (pág. 110), sin pronunciarse sobre cuotas obligatorias de reparto."),
    vp26(
      "frente-amplio",
      "conditional_support",
      127,
      "Interpretación y aplicación del Pacto Europeo de Migración y Asilo bajo su vertiente más garantista.",
      { confidence: 0.5, explanation: "Acepta aplicar el Pacto Europeo de Migración y Asilo, sin pronunciarse expresamente sobre el reparto obligatorio." }
    ),
    ne26("adelante-andalucia"),
    ne26("bng"),
    vp26(
      "erc",
      "conditional_support",
      17,
      "en el marc de l’aplicació del Pacte Europeu de Migració i Asil",
      { confidence: 0.5, explanation: "Acepta aplicar el Pacto Europeo de Migración y Asilo, sin pronunciarse expresamente sobre el reparto obligatorio." }
    ),
    ne26("pnv"),
    ne26("ehbildu"),
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
    vp26(
      "vox",
      "strongly_oppose",
      19,
      "excluyendo a los extranjeros en situación ilegal salvo casos de urgencia grave.",
      { confidence: 0.9 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      26,
      "Blindaremos por ley la universalidad de la atención sanitaria para residentes en España, independientemente de su estatus administrativo.",
      { confidence: 0.9 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      106,
      "Sanidad universal efectiva, escuela infantil y comedor sin trabas administrativas.",
      { confidence: 0.85, explanation: "Dentro del apartado sobre personas sin papeles." }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_support",
      20,
      "eliminación de barreras para acceder a la sanidad, educación, vivienda y protección social, independientemente de la situación administrativa",
      { confidence: 0.9 }
    ),
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
    vp26(
      "pp",
      "strongly_support",
      21,
      "Modernizaremos las vallas, los espigones y los sistemas de vigilancia de Ceuta y Melilla, con sensores, cámaras térmicas y drones.",
      { confidence: 0.9 }
    ),
    vp26(
      "vox",
      "strongly_support",
      7,
      "Militarización de la frontera para repeler cualquier intento futuro de invasión o ataque híbrido.",
      { confidence: 0.9 }
    ),
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      126,
      "Derogaremos formalmente la disposición adicional décima de la Ley de Extranjería (relativa al «rechazo en frontera»)",
      { confidence: 0.75, explanation: "Posición derivada: deroga el rechazo en frontera y crea un control independiente de derechos humanos en la Frontera Sur." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      106,
      "retirada de las concertinas de Ceuta y Melilla",
      { confidence: 0.8, explanation: "Posición derivada." }
    ),
    vp26(
      "bng",
      "strongly_oppose",
      23,
      "o fin das deportacións en quente",
      { confidence: 0.75, explanation: "Posición derivada: rechaza las devoluciones en caliente." }
    ),
    ne26("erc"),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_oppose",
      20,
      "Rechazar las disposiciones restrictivas del Pacto Europeo sobre Migración y Asilo, las devoluciones sumarias",
      { confidence: 0.8, explanation: "Posición derivada: rechaza las devoluciones sumarias." }
    ),
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
    vp26(
      "pp",
      "oppose",
      50,
      "Aprobaremos una nueva Ley de Nacionalidad que refuerce las condiciones de acceso",
      { confidence: 0.6, explanation: "Posición derivada: endurece el acceso a la nacionalidad, aunque no menciona expresamente los años de residencia." }
    ),
    vp26(
      "vox",
      "strongly_oppose",
      15,
      "Endurecimiento de los requisitos de adquisición de la nacionalidad española.",
      { confidence: 0.8, explanation: "Además revoca las «pasarelas rápidas para adquirir la nacionalidad española»." }
    ),
    ne26("psoe"),
    ne26("frente-amplio", "Su programa del 29N solo propone devolver la nacionalidad a los saharauis nacidos bajo administración española (pág. 128)."),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
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
    vp26(
      "pp",
      "support",
      17,
      "LA MULTIRREINCIDENCIA TENDRÁ UNA RESPUESTA PENAL MÁS RÁPIDA Y EFICAZ.",
      { confidence: 0.65, explanation: "Prioriza los juicios rápidos y la tramitación conjunta de delitos leves; endurece la pena solo para los violadores reincidentes (prisión permanente revisable, medida 30)." }
    ),
    ne26("vox"),
    ne26("psoe"),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    vp26(
      "pnv",
      "support",
      24,
      "Combatir la multirreincidencia y proteger a las víctimas.",
      { confidence: 0.6, explanation: "Pide una respuesta judicial «ágil, eficaz y proporcionada» a la reincidencia, sin concretar un endurecimiento de las penas." }
    ),
    ne26("ehbildu"),
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
    vp26(
      "pp",
      "strongly_support",
      20,
      "AMPLIAREMOS LA PRISIÓN PERMANENTE REVISABLE A QUIEN HAGA DESAPARECER A SU VÍCTIMA Y A LOS DEPREDADORES SEXUALES.",
      { confidence: 0.95 }
    ),
    vp26(
      "vox",
      "strongly_support",
      45,
      "Ampliación de la prisión permanente revisable.",
      { confidence: 0.95 }
    ),
    ne26("frente-amplio"),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      94,
      "Penas orientadas a la reinserción, como manda la Constitución.",
      { confidence: 0.85, explanation: "Propone derogar la prisión permanente revisable (pág. 94)." }
    ),
    vp26(
      "bng",
      "strongly_oppose",
      30,
      "Derrogación da prisión permanente revisábel",
      { confidence: 0.95 }
    ),
    ne26("erc"),
    vp26(
      "pnv",
      "strongly_oppose",
      28,
      "Rechazar la prisión permanente revisable",
      { confidence: 0.95 }
    ),
    ne26("ehbildu"),
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
    vp26(
      "pp",
      "oppose",
      18,
      "Elevaremos la multa mínima a 3.000 euros para quienes participen activamente en actos de vandalismo contra bienes públicos o privados",
      { confidence: 0.55, explanation: "Posición derivada: endurece las sanciones de seguridad ciudadana por vandalismo y desórdenes; no menciona las manifestaciones no comunicadas ni la grabación de agentes." }
    ),
    ne26("vox"),
    vp26(
      "psoe",
      "support",
      99,
      "Aprobar una nueva Ley de Seguridad Ciudadana que sustituya a la Ley Orgánica 4/2015, garantizando los derechos de reunión y manifestación, un régimen sancionador preciso",
      { confidence: 0.7, explanation: "No se refiere expresamente a la grabación de agentes." }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      142,
      "Derogaremos por completo la Ley Mordaza.",
      { confidence: 0.95 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      89,
      "derogar la ley mordaza",
      { confidence: 0.95 }
    ),
    vp26(
      "bng",
      "strongly_support",
      30,
      "Derrogación íntegra da Lei Mordaza",
      { confidence: 0.95 }
    ),
    vp26(
      "erc",
      "strongly_support",
      8,
      "Derogar la Llei mordassa.",
      { confidence: 0.95 }
    ),
    vp26(
      "pnv",
      "support",
      27,
      "Impulsar la reforma de la legislación conocida como «ley mordaza», eliminando las restricciones desproporcionadas al ejercicio de derechos y libertades.",
      { confidence: 0.8 }
    ),
    vp26(
      "ehbildu",
      "strongly_support",
      22,
      "Acabar con la Ley Mordaza.",
      { confidence: 0.95 }
    ),
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
    vp26(
      "pp",
      "strongly_support",
      32,
      "Los jueces y magistrados de todas las categorías elegirán a los doce vocales judiciales del Consejo General del Poder Judicial.",
      { confidence: 0.95 }
    ),
    vp26(
      "vox",
      "strongly_support",
      55,
      "Modificar la Ley Orgánica del Poder Judicial para que los doce vocales de procedencia judicial del Consejo General del Poder Judicial sean elegidos mediante voto personal, directo y secreto por y entre los propios jueces y magistrados",
      { confidence: 0.95 }
    ),
    ne26("psoe", "Su programa del 29N no aborda el sistema de elección del CGPJ."),
    vp26(
      "frente-amplio",
      "oppose",
      148,
      "Los vocales del turno judicial se seguirán eligiendo por mayoría de tres quintos, pero si en dos meses no hay acuerdo, las Cámaras podrán elegirlos en segunda votación",
      { confidence: 0.8 }
    ),
    ne26("adelante-andalucia", "Su programa del 29N propone la elección directa del Consejo General del Poder Judicial (pág. 92), una opción distinta de las que plantea la pregunta."),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
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
    vp26(
      "pp",
      "oppose",
      17,
      "Reformaremos el delito de desórdenes públicos para ampliar las conductas castigadas y endurecer las penas",
      { confidence: 0.6, explanation: "Posición derivada: el programa amplía delitos y penas (desórdenes, prisión permanente revisable, Ley del Menor) y no menciona penas alternativas ni la reinserción." }
    ),
    vp26(
      "vox",
      "oppose",
      45,
      "Los que cometen los peores delitos deben tener las máximas condenas.",
      { confidence: 0.65, explanation: "Posición derivada: amplía la prisión permanente revisable y rebaja la edad de responsabilidad penal; no menciona la reinserción." }
    ),
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "support",
      144,
      "Estableceremos un cuerpo de agentes de penas y medidas en medio abierto, con capacitación especial en reinserción.",
      { confidence: 0.7, explanation: "Elimina además obstáculos a la progresión de grado (pág. 144)." }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      94,
      "Penas orientadas a la reinserción, como manda la Constitución.",
      { confidence: 0.75 }
    ),
    vp26(
      "bng",
      "support",
      30,
      "ir en contra do principio de reinserción social",
      { confidence: 0.6, explanation: "Posición derivada: rechaza la prisión permanente revisable y la libertad vigilada tras la condena por contrarias a la reinserción." }
    ),
    ne26("erc"),
    vp26(
      "pnv",
      "support",
      28,
      "defender un sistema penitenciario orientado a la reeducación y la reinserción",
      { confidence: 0.7 }
    ),
    ne26("ehbildu"),
  ]),
  axesOnly(
    base("pri_001"),
    "Verificación 2026-08: los programas 23J no abordan expresamente los beneficios penitenciarios y el tercer grado.",
    [
      vp26(
        "pp",
        "support",
        47,
        "no habrá tercer grado ni libertad condicional para los condenados por terrorismo sin arrepentimiento veraz y sin una colaboración efectiva y verificable con la Justicia",
        { confidence: 0.7, explanation: "La restricción se concreta para los condenados por terrorismo, no para todos los delitos graves." }
      ),
      vp26(
        "vox",
        "support",
        57,
        "Fin de los privilegios penitenciarios de los condenados por terrorismo.",
        { confidence: 0.7, explanation: "La restricción se concreta para los condenados por terrorismo, no para todos los delitos graves." }
      ),
      ne26("psoe"),
      vp26(
        "frente-amplio",
        "strongly_oppose",
        144,
        "Eliminaremos los obstáculos en la progresión de grados y el acceso a los medios abiertos (tercer grado y libertad condicional).",
        { confidence: 0.75, explanation: "Posición derivada: facilita el acceso al tercer grado, sin distinguir por tipo de delito." }
      ),
      ne26("adelante-andalucia"),
      ne26("bng"),
      ne26("erc"),
      ne26("pnv"),
      ne26("ehbildu"),
    ]
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
    ne26("pp"),
    vp26(
      "vox",
      "strongly_oppose",
      56,
      "Dotar de la máxima protección jurídica a los símbolos de la Nación, especialmente la Bandera, el Escudo y el Himno o la Corona. Las penas por las ofensas y ultrajes a España y sus símbolos o emblemas deben agravarse para que ninguna afrenta a ellos quede impune.",
      { confidence: 0.8, explanation: "Propone agravar las penas por ofensas a la Corona; no se refiere a las ofensas a los sentimientos religiosos." }
    ),
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_support",
      142,
      "Derogaremos los artículos del Código Penal que castigan los delitos contra los sentimientos religiosos o de escarnio público, los delitos contra la Corona",
      { confidence: 0.95 }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      96,
      "Suprimir del Código Penal la ofensa a los sentimientos religiosos.",
      { confidence: 0.8, explanation: "Se refiere solo a la ofensa religiosa, no a las injurias a la Corona." }
    ),
    vp26(
      "bng",
      "strongly_support",
      30,
      "inxurias contra a Coroa, os Exércitos, as Forzas e Corpos de Seguranza, o Goberno e outras institucións do Estado, do escarnio de crenzas relixiosas",
      { confidence: 0.9, explanation: "Propone eliminar estos delitos del Código Penal." }
    ),
    vp26(
      "erc",
      "strongly_support",
      8,
      "Suprimir els delictes d’ofensa als sentiments religiosos i d’injúries i calúmnies contra la Corona",
      { confidence: 0.95 }
    ),
    vp26(
      "pnv",
      "conditional_support",
      27,
      "Código Penal en los delitos relacionados con la expresión de opiniones sobre la Corona, las instituciones y los símbolos del Estado, adecuando la legislación a los estándares europeos de libertad de expresión.",
      { confidence: 0.5, explanation: "Propone reformar estos delitos, no suprimirlos; no menciona la ofensa religiosa." }
    ),
    vp26(
      "ehbildu",
      "strongly_support",
      22,
      "propondremos despenalizar los artículos sobre las criticas a la corona y las instituciones del estado",
      { confidence: 0.95, explanation: "Incluye también la crítica a los sentimientos religiosos." }
    ),
  ]),
  axesOnly(
    base("prv_001"),
    "Verificación 2026-08: ningún programa 23J aborda el reconocimiento facial policial en espacios públicos (SUMAR solo lo trata en el ámbito laboral).",
    [
      ne26("pp", "Su programa del 29N prevé financiar videovigilancia municipal (medida 27), pero no menciona el reconocimiento facial."),
      ne26("vox"),
      ne26("psoe"),
      ne26("frente-amplio"),
      ne26("adelante-andalucia"),
      vp26(
        "bng",
        "strongly_oppose",
        77,
        "Estabelecer límites estritos ao recoñecemento facial e á vixilancia biométrica masiva en espazos públicos",
        { confidence: 0.85 }
      ),
      ne26("erc"),
      ne26("pnv"),
      ne26("ehbildu"),
    ]
  ),
];
