import type { Question } from "@/lib/types";
import { axesOnly, ne, ne26, verify, vp, vp26 } from "./helpers";
import { baseQuestion as base } from "./base";


/** VERIFICADO — Economía, impuestos, bienestar, trabajo, vivienda. */
export const VERIFIED_ECONOMIA: Question[] = [
  verify(base("eco_001"), [
    vp(
      "sumar",
      "strongly_support",
      12,
      "Transformaremos la Sociedad Estatal de Participaciones Industriales (SEPI) en una verdadera Agencia Industrial Pública.",
      { confidence: 0.75, explanation: "Implicación estratégica del sector público en la política industrial." }
    ),
    ne("pp"),
    ne("psoe", "Su programa apuesta por la autonomía estratégica y los PERTE sin pronunciarse sobre participación pública accionarial estable."),
    ne("vox"),
    vp26(
      "pp",
      "conditional_support",
      13,
      "Revisaremos todas las participaciones empresariales del Estado y venderemos aquellas que no respondan a un interés público o estratégico acreditado.",
      { confidence: 0.5, explanation: "Posición derivada: mantiene solo las participaciones con interés público o estratégico acreditado y vende el resto." }
    ),
    ne26("vox"),
    vp26(
      "psoe",
      "strongly_support",
      15,
      "Mantendremos la participación del Estado en sectores estratégicos, preservando capacidades industriales y tecnológicas esenciales, fortaleciendo la autonomía estratégica de España y Europa.",
      { confidence: 0.9 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      91,
      "Dotaremos a la SEPI de los medios económicos y humanos para entrar como accionista en nuevas empresas y sectores estratégicos y para modernizar las empresas públicas en las que participa.",
      { confidence: 0.9 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      61,
      "Presencia pública en energía, farmacia, alimentación y telecomunicaciones",
      { confidence: 0.9 }
    ),
    vp26(
      "bng",
      "support",
      9,
      "control público dos nosos recursos, dos sectores estratéxicos da economía",
      { confidence: 0.7, explanation: "Lo plantea para los poderes públicos gallegos." }
    ),
    ne26("erc"),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "support",
      16,
      "refuercen la participación pública en sectores estratégicos",
      { confidence: 0.8 }
    ),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_support",
      18,
      "El Estado adquirirá, a través de la Empresa Pública de Energía, la mayoría absoluta del accionariado de Repsol.",
      { confidence: 0.9 }
    ),
  ]),
  verify(base("eco_002"), [
    vp(
      "vox",
      "support",
      86,
      "…mejorar la capacidad adquisitiva de las familias a través de reducciones en el IRPF, cotizaciones sociales…",
      { confidence: 0.65, explanation: "Iniciativa parlamentaria propia citada en el anexo del programa (marzo 2023)." }
    ),
    vp(
      "pp",
      "neutral_or_unclear",
      19,
      "…implementación de bonificaciones adicionales en las cotizaciones sociales para aquellos trabajadores que amplíen sus horas laborales…",
      { confidence: 0.5, explanation: "Propone bonificaciones selectivas, no una rebaja general de cotizaciones." }
    ),
    ne("psoe"),
    ne("sumar"),
    vp26(
      "pp",
      "neutral_or_unclear",
      59,
      "bonificaremos el 100% de las cotizaciones empresariales por el primer trabajador durante un año y el 50% por el segundo.",
      { confidence: 0.5, explanation: "Bonificaciones selectivas (primeros empleados de autónomos, plantillas estables, trabajadores con hijos), no una rebaja general de cotizaciones." }
    ),
    ne26("vox", "Su programa del 29N no plantea una rebaja general de cotizaciones empresariales; solo una cuota de autónomos progresiva desde cero (pág. 9)."),
    ne26("psoe"),
    ne26("frente-amplio", "Su programa del 29N solo prevé bonificaciones de las cotizaciones empresariales en territorios de baja densidad (pág. 97), no una rebaja general."),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "strongly_oppose",
      19,
      "revisión e redución das bonificacións e descontos nas cotizacións empresariais",
      { confidence: 0.7, explanation: "Posición derivada: propone reducir las bonificaciones en las cotizaciones empresariales para sostener las pensiones." }
    ),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "conditional_support",
      48,
      "La empresa que comparta esa mejora con su plantilla tendrá una bonificación del 50% en su cotización a la Seguridad Social por ese extra",
      { confidence: 0.55, explanation: "Rebaja de cotizaciones selectiva, ligada a los pluses por productividad, no general." }
    ),
    vp26(
      "podemos",
      "oppose",
      44,
      "estableceremos un sistema de cotización progresiva que tenga en cuenta el nivel de renta y el volumen de beneficios empresariales",
      { confidence: 0.55, explanation: "Posición derivada: propone cotizaciones progresivas según los beneficios empresariales y suprimir la base máxima, no reducirlas." }
    ),
  ]),
  verify(base("eco_003"), [
    vp(
      "psoe",
      "support",
      39,
      "Evaluaremos la prórroga y ajustes de los gravámenes temporales sobre la banca y energéticas, para que ambos sectores sigan contribuyendo a la justicia fiscal…",
      { confidence: 0.75 }
    ),
    vp(
      "sumar",
      "strongly_support",
      16,
      "Mantendremos los impuestos extraordinarios sobre las empresas energéticas y financieras mientras se aprueba e implementa completamente la reforma integral del impuesto de sociedades.",
      { confidence: 0.9 }
    ),
    ne("pp", "Su programa 23J no menciona los gravámenes a banca y energéticas."),
    ne("vox"),
    ne26("pp", "Su programa del 29N no menciona los gravámenes a banca y energéticas; la medida 183 («Eliminaremos los impuestos que frenan la inversión») no identifica qué impuestos."),
    ne26("vox"),
    ne26("psoe", "Su programa del 29N recuerda los impuestos extraordinarios a la banca y a las grandes energéticas aprobados en la legislatura (pág. 36), pero no se compromete a mantenerlos ni a recuperarlos."),
    vp26(
      "frente-amplio",
      "strongly_support",
      51,
      "Recuperación con carácter estructural del gravamen especial del 1,2 % sobre la cifra de negocios de los grandes operadores y empresas energéticas que actúan en España.",
      { confidence: 0.9, explanation: "En la misma página: «Mantendremos con carácter estructural el gravamen bancario»." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      58,
      "Gravamen estable sobre los beneficios extraordinarios de la banca y de las energéticas.",
      { confidence: 0.95 }
    ),
    vp26(
      "bng",
      "strongly_support",
      44,
      "Blindar a permanencia dos impostos específicos aos beneficios da banca, das grandes enerxéticas",
      { confidence: 0.9 }
    ),
    vp26(
      "erc",
      "strongly_support",
      22,
      "Convertir l’impost extraordinari a la banca en un tribut permanent.",
      { confidence: 0.9, explanation: "Propone también recuperar el impuesto a las grandes energéticas (pág. 22)." }
    ),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_support",
      14,
      "Recuperar el impuesto a la energéticas que PNV, UPN, PP, VOX y JUNTS tumbaron, haciéndolo permanente.",
      { confidence: 0.95 }
    ),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_support",
      17,
      "Estableceremos un impuesto permanente sobre los beneficios extraordinarios de la gran banca, de forma que al menos el 50 % de sus beneficios revierta en las arcas públicas.",
      { confidence: 0.95 }
    ),
  ]),
  axesOnly(
    base("eco_004"),
    "Verificación 2026-08: ningún programa 23J aborda expresamente la venta de participaciones públicas.",
    [
      vp26(
        "pp",
        "support",
        13,
        "Revisaremos todas las participaciones empresariales del Estado y venderemos aquellas que no respondan a un interés público o estratégico acreditado.",
        { confidence: 0.75 }
      ),
      ne26("vox"),
      vp26(
        "psoe",
        "oppose",
        15,
        "Reforzaremos el sector público empresarial.",
        { confidence: 0.6, explanation: "Posición derivada: propone reforzar el sector público empresarial y mantener la participación del Estado en sectores estratégicos; no se refiere expresamente a vender participaciones." }
      ),
      vp26(
        "frente-amplio",
        "oppose",
        91,
        "Dotaremos a la SEPI de los medios económicos y humanos para entrar como accionista en nuevas empresas y sectores estratégicos y para modernizar las empresas públicas en las que participa.",
        { confidence: 0.6, explanation: "Posición derivada: propone ampliar la participación pública en empresas; no se refiere expresamente a vender participaciones." }
      ),
      vp26(
        "adelante-andalucia",
        "oppose",
        61,
        "Presencia pública en energía, farmacia, alimentación y telecomunicaciones",
        { confidence: 0.6, explanation: "Posición derivada: defiende la presencia pública en sectores estratégicos; no se refiere expresamente a vender participaciones." }
      ),
      ne26("bng"),
      ne26("erc"),
      ne26("pnv"),
      ne26("ehbildu"),
      ne26("democracia21"),
      vp26(
        "podemos",
        "oppose",
        17,
        "Fomentaremos la creación de empresas públicas que operen en el mercado y se financien con el fruto de su actividad",
        { confidence: 0.7, explanation: "Posición derivada: propone ampliar el sector público empresarial (incluida la nacionalización de Repsol), no desinvertir." }
      ),
    ]
  ),
  verify(base("imp_001"), [
    vp(
      "psoe",
      "support",
      39,
      "…para que ambos sectores sigan contribuyendo a la justicia fiscal y al sostenimiento del Estado de bienestar.",
      { confidence: 0.65, explanation: "Marco de «justicia fiscal» con mayor contribución de grandes patrimonios y grupos; sin subida concreta de IRPF a rentas altas." }
    ),
    vp(
      "sumar",
      "strongly_support",
      16,
      "Implementaremos un impuesto a las grandes fortunas de forma permanente, reforzando además su progresividad, hasta llegar a tipos impositivos de al menos el 4%…",
      { confidence: 0.85 }
    ),
    vp(
      "pp",
      "oppose",
      23,
      "Eliminaremos el impuesto a las grandes fortunas, y simplificaremos el IRPF…",
      { confidence: 0.65, explanation: "Posición derivada: su programa va en dirección de alivio fiscal, no de mayor tributación a rentas altas." }
    ),
    vp(
      "vox",
      "strongly_oppose",
      75,
      "…simplificación progresiva y continuada del IRPF a un tipo único reducido del 15%… y un tipo ordinario del 25%…",
      { confidence: 0.8, explanation: "Posición derivada: un tipo único implica una fuerte rebaja para las rentas más altas." }
    ),
    ne26("pp", "Su programa del 29N anuncia rebajas del IRPF para rentas medias y bajas, pero no aborda la tributación de las rentas más altas."),
    vp26(
      "vox",
      "oppose",
      9,
      "Revisión y reducción sistemática de todos los impuestos y tasas que lastran la prosperidad de los trabajadores, familias y empresas españolas.",
      { confidence: 0.55, explanation: "Posición derivada: propone una rebaja general de impuestos y no contempla subirlos a las rentas altas." }
    ),
    vp26(
      "psoe",
      "strongly_support",
      48,
      "Incrementar la tributación de las rentas de capital más elevadas.",
      { confidence: 0.8, explanation: "Se concreta en las rentas del capital, con un tipo máximo del 35% por encima de 300.000 euros." }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      53,
      "Acercaremos la tributación de las rentas del capital a la de las rentas del trabajo.",
      { confidence: 0.8, explanation: "Se concreta en las rentas del capital y en los grandes patrimonios (págs. 45-46)." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      10,
      "un IRPF que baje a las rentas más bajas y suba con fuerza a partir de 100.000 euros al año",
      { confidence: 0.9 }
    ),
    vp26(
      "bng",
      "strongly_support",
      43,
      "Incrementar a súa progresividade: que pague máis quen máis renda obtén.",
      { confidence: 0.85 }
    ),
    vp26(
      "erc",
      "strongly_support",
      21,
      "Augmentar el tipus màxim de l’IRPF sobre els guanys de capital del 30 % al 35 %",
      { confidence: 0.85, explanation: "Se concreta en las rentas del capital." }
    ),
    ne26("pnv"),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "neutral_or_unclear",
      32,
      "no hace falta subir ni bajar impuestos para hacerlo mucho mejor",
      { confidence: 0.5, explanation: "No propone subir el IRPF a las rentas altas; sí que las ganancias por activos mantenidos menos de un año tributen como rentas del trabajo." }
    ),
    vp26(
      "podemos",
      "strongly_support",
      21,
      "Reforma del IRPF para que las rentas más altas contribuyan más.",
      { confidence: 0.95 }
    ),
  ]),
  verify(base("imp_002"), [
    vp(
      "pp",
      "support",
      23,
      "Aprobaremos un alivio fiscal inmediato a las familias. Corregiremos los efectos de la inflación en la tarifa del IRPF…",
      { confidence: 0.7 }
    ),
    vp(
      "vox",
      "strongly_support",
      75,
      "…simplificación progresiva y continuada del IRPF a un tipo único reducido del 15% a aplicar sobre bases imponibles inferiores a 70.000 euros…",
      { confidence: 0.9 }
    ),
    vp(
      "sumar",
      "oppose",
      17,
      "…conviene evaluar y eliminar aquellas deducciones del IRPF sin justificación económica, muchas de las cuales generan además una reducción de la progresividad del impuesto.",
      { confidence: 0.6, explanation: "Posición derivada: su reforma fiscal busca más progresividad y recaudación, no rebajas generalizadas." }
    ),
    ne("psoe", "Su programa defiende la «justicia fiscal» sin pronunciarse expresamente sobre una rebaja o subida general del IRPF."),
    vp26(
      "pp",
      "support",
      60,
      "Elevaremos los mínimos personales y familiares del IRPF y bajaremos el IRPF de las rentas medias y bajas y de las familias.",
      { confidence: 0.75, explanation: "Rebaja centrada en rentas medias y bajas, más la deflactación de la tarifa (medida 178), no una rebaja uniforme para todos los tramos." }
    ),
    vp26(
      "vox",
      "strongly_support",
      9,
      "Reforma del sistema de tributación sobre la renta (IRPF). Simplificación y bajada del IRPF.",
      { confidence: 0.85 }
    ),
    ne26("psoe", "Su programa del 29N propone mejoras fiscales para las rentas medias y bajas (pág. 49), no una rebaja general del IRPF."),
    ne26("frente-amplio", "Su programa del 29N propone bajar el IRPF a las rentas del trabajo de hasta 27.000 euros (pág. 46), no una rebaja general."),
    vp26(
      "adelante-andalucia",
      "oppose",
      10,
      "un IRPF que baje a las rentas más bajas y suba con fuerza a partir de 100.000 euros al año",
      { confidence: 0.75 }
    ),
    vp26(
      "bng",
      "oppose",
      43,
      "Incrementar a súa progresividade: que pague máis quen máis renda obtén.",
      { confidence: 0.6, explanation: "Posición derivada." }
    ),
    vp26(
      "erc",
      "oppose",
      20,
      "una reforma de l’IRPF i l’IVA que penalitzi les rendes més altes",
      { confidence: 0.65, explanation: "Propone bajarlo a la clase trabajadora y subirlo a las rentas altas." }
    ),
    ne26("pnv"),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "conditional_opposition",
      32,
      "no hace falta subir ni bajar impuestos para hacerlo mucho mejor",
      { confidence: 0.6, explanation: "No propone una rebaja general del IRPF, aunque sí deflactar cada año los tramos con el IPC y rebajas fiscales selectivas." }
    ),
    vp26(
      "podemos",
      "oppose",
      21,
      "reduciremos el tipo mínimo del 9,5 % actual al 9 %, y elevaremos los tipos a las bases imponibles de más de 60.000 euros anuales",
      { confidence: 0.6, explanation: "Posición derivada: rebaja solo el tipo mínimo y sube los tipos desde 60.000 euros; no plantea una rebaja generalizada." }
    ),
  ]),
  verify(base("imp_003"), [
    vp(
      "vox",
      "strongly_support",
      77,
      "Suprimiremos el Impuesto sobre el Patrimonio, el Impuesto sobre Sucesiones y Donaciones y Plusvalías municipales en todo el territorio nacional…",
      { confidence: 0.95 }
    ),
    vp(
      "sumar",
      "strongly_oppose",
      16,
      "En el impuesto sobre sucesiones y donaciones se establecerá un mínimo en el conjunto de España que las comunidades autónomas no podrán rebajar.",
      { confidence: 0.85 }
    ),
    ne("pp"),
    ne("psoe"),
    ne26("pp", "Su programa del 29N no menciona el impuesto de sucesiones y donaciones; la medida 185 deja a las comunidades autónomas libertad para bajar sus impuestos cedidos."),
    ne26("vox", "Su programa del 29N no menciona el impuesto de sucesiones y donaciones."),
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      52,
      "Crearemos un impuesto estatal sobre las grandes herencias, de más de un millón de euros.",
      { confidence: 0.85, explanation: "Mantiene las reducciones por parentesco, transmisión de empresas y vivienda habitual (pág. 46)." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      58,
      "Tributación mínima en todo el Estado para acabar con el dumping fiscal entre comunidades.",
      { confidence: 0.8, explanation: "Propone un suelo común en el impuesto de sucesiones y donaciones." }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21"),
    ne26("podemos"),
  ]),
  verify(base("imp_004"), [
    vp("pp", "strongly_oppose", 23, "Eliminaremos el impuesto a las grandes fortunas…", { confidence: 0.95 }),
    vp(
      "vox",
      "strongly_oppose",
      77,
      "Suprimiremos el Impuesto sobre el Patrimonio… impuestos que suponen confiscaciones injustas, duplicadas o desproporcionadas…",
      { confidence: 0.8, explanation: "Suprime el impuesto sobre el patrimonio en todo el territorio; el impuesto a grandes fortunas es su complemento estatal." }
    ),
    vp(
      "psoe",
      "conditional_support",
      39,
      "Evaluaremos los resultados del Impuesto Temporal de Solidaridad de las Grandes Fortunas y, en su caso, avanzaremos en el debate sobre la tributación de la riqueza…",
      { confidence: 0.65, explanation: "Mantiene el impuesto pero lo somete a evaluación en el marco de la financiación autonómica." }
    ),
    vp(
      "sumar",
      "strongly_support",
      16,
      "Implementaremos un impuesto a las grandes fortunas de forma permanente, reforzando además su progresividad…",
      { confidence: 0.9 }
    ),
    ne26("pp", "Su programa del 29N no menciona el impuesto a las grandes fortunas."),
    ne26("vox", "Su programa del 29N no menciona el impuesto a las grandes fortunas."),
    vp26(
      "psoe",
      "support",
      47,
      "La recaudación de la tributación complementaria de los grandes patrimonios y de la mayor progresividad de las rentas del capital contribuirá a financiar la prestación por crianza y la lucha contra la pobreza infantil.",
      { confidence: 0.7, explanation: "Cuenta con mantener la tributación complementaria de los grandes patrimonios, sin detallar su diseño." }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      52,
      "Reformaremos el Impuesto de Solidaridad de las Grandes Fortunas para garantizar que los patrimonios con más de un millón de euros paguen como mínimo el 2 %.",
      { confidence: 0.95 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      10,
      "Impuesto a las grandes fortunas y a los terratenientes",
      { confidence: 0.9 }
    ),
    ne26("bng"),
    vp26(
      "erc",
      "strongly_support",
      22,
      "Fer permanent l’impost temporal de solidaritat de les grans fortunes",
      { confidence: 0.95 }
    ),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_support",
      14,
      "Aumentar el peso impositivo del impuesto a la banca y las grandes fortunas.",
      { confidence: 0.9 }
    ),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_support",
      17,
      "reformaremos el Impuesto Temporal de Solidaridad de las Grandes Fortunas para configurarlo como un impuesto estatal permanente",
      { confidence: 0.95 }
    ),
  ]),
  verify(base("bie_001"), [
    vp(
      "pp",
      "conditional_support",
      19,
      "Mejoraremos el acceso al Ingreso Mínimo Vital y su efectividad como herramienta de inserción laboral…",
      { confidence: 0.65, explanation: "Mejora el acceso pero orientándolo a la inserción laboral, sin comprometer ampliación de cuantías." }
    ),
    vp(
      "sumar",
      "strongly_support",
      86,
      "El Ingreso Mínimo Vital (IMV) ha sido un avance muy importante y vamos a conseguir que sea una verdadera garantía de ingreso para toda la ciudadanía… incluir a las personas jóvenes de entre 18 y 23…",
      { confidence: 0.85 }
    ),
    vp(
      "psoe",
      "support",
      13,
      "…hemos creado el Ingreso Mínimo Vital, un nuevo pilar del estado del bienestar…",
      { confidence: 0.6, explanation: "Defiende y consolida la prestación que creó; el programa no concreta una ampliación." }
    ),
    ne("vox"),
    ne26("pp", "Su programa del 29N no aborda el ingreso mínimo vital; menciona reforzar las ayudas a familias vulnerables (medida 166) sin concretar."),
    vp26(
      "vox",
      "oppose",
      19,
      "El Ingreso Mínimo Vital atenderá únicamente las necesidades de los españoles con menos recursos.",
      { confidence: 0.65, explanation: "Restringe el ingreso mínimo vital a los españoles en lugar de ampliarlo." }
    ),
    vp26(
      "psoe",
      "support",
      38,
      "Potenciar el IMV. Crear pasarelas que automaticen y simplifiquen la concesión del IMV, utilizando datos de renta y patrimonio más recientes.",
      { confidence: 0.75 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      22,
      "Extenderemos de forma plena el IMV a jóvenes de 18 a 30 años sin exigir requisitos desproporcionados de emancipación previa",
      { confidence: 0.85, explanation: "Propone además concederlo de oficio y acercarlo al 60% de la renta mediana (pág. 22)." }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      66,
      "Atención con personal propio de la Seguridad Social y resolución en el plazo legal.",
      { confidence: 0.6, explanation: "Posición derivada: quiere que el Ingreso Mínimo Vital llegue a quienes tienen derecho, sin hablar de ampliar requisitos." }
    ),
    ne26("bng"),
    vp26(
      "erc",
      "support",
      28,
      "Exigir a l’Estat els recursos necessaris per adaptar l’ingrés mínim vital al cost de la vida a Catalunya.",
      { confidence: 0.65, explanation: "Lo plantea como adaptación de la cuantía al coste de vida en Cataluña." }
    ),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_support",
      13,
      "ampliar las condiciones y requisitos para hacerlo accesible a más personas. Además, se propone aumentar las cuantías",
      { confidence: 0.85, explanation: "Se refiere al Ingreso Mínimo Vital, cuya transferencia también reclama." }
    ),
    vp26(
      "democracia21",
      "support",
      30,
      "la Administración se pondrá en contacto proactivamente con ellas para tramitar de oficio el Ingreso Mínimo Vital (IMV)",
      { confidence: 0.6, explanation: "Busca que el IMV llegue a más hogares concediéndolo de oficio, sin proponer ampliar sus requisitos ni sus cuantías." }
    ),
    vp26(
      "podemos",
      "strongly_support",
      45,
      "Potenciaremos el Ingreso Mínimo Vital con el objetivo de convertirlo en una renta universal incondicionada para todos los ciudadanos y ciudadanas.",
      { confidence: 0.9 }
    ),
  ]),
  verify(base("bie_002"), [
    vp(
      "pp",
      "strongly_support",
      19,
      "…condicionaremos la percepción a la participación en itinerarios de inserción laboral.",
      { confidence: 0.9 }
    ),
    ne("psoe"),
    ne("vox"),
    ne("sumar", "Su programa amplía la garantía de ingresos sin pronunciarse expresamente sobre una mayor condicionalidad."),
    ne26("pp", "Su programa del 29N no condiciona prestaciones a la búsqueda de empleo; solo anuncia perseguir el fraude en la incapacidad temporal (medida 175)."),
    ne26("vox"),
    ne26("psoe"),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21"),
    vp26(
      "podemos",
      "oppose",
      45,
      "Potenciaremos el Ingreso Mínimo Vital con el objetivo de convertirlo en una renta universal incondicionada para todos los ciudadanos y ciudadanas.",
      { confidence: 0.65, explanation: "Posición derivada: su objetivo es una renta incondicionada, lo contrario de endurecer la condicionalidad." }
    ),
  ]),
  verify(base("pen_001"), [
    vp(
      "pp",
      "conditional_support",
      19,
      "Garantizaremos la revalorización de las pensiones en el marco… [de la] sostenibilidad y suficiencia del sistema de pensiones para las generaciones actuales y futuras.",
      { confidence: 0.7, explanation: "Garantiza la revalorización condicionada a la sostenibilidad del sistema." }
    ),
    vp(
      "psoe",
      "strongly_support",
      167,
      "…se ha recuperado el derecho a la revalorización de las pensiones para garantizar el mantenimiento de su poder adquisitivo.",
      { confidence: 0.85 }
    ),
    vp(
      "sumar",
      "strongly_support",
      15,
      "…la actualización automática de las pensiones de acuerdo con el crecimiento del IPC… Este compromiso se mantendrá de forma absoluta…",
      { confidence: 0.95 }
    ),
    ne("vox", "Su programa propone exenciones de IRPF a pensiones contributivas, sin pronunciarse sobre la revalorización por IPC."),
    vp26(
      "pp",
      "conditional_support",
      "42-43",
      "Aseguraremos que mantengan su poder adquisitivo y suban cada año con el IPC.",
      { confidence: 0.75, explanation: "Compromete la revalorización con el IPC, pero el programa propone bajar impuestos y no asume el coste en cotizaciones o impuestos que plantea la pregunta." }
    ),
    ne26("vox", "Su programa del 29N vincula la sostenibilidad de las pensiones al crecimiento económico (pág. 10), sin pronunciarse sobre su revalorización con el IPC."),
    vp26(
      "psoe",
      "strongly_support",
      40,
      "Blindar constitucionalmente el sistema público de pensiones y su revalorización conforme al IPC",
      { confidence: 0.95 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      64,
      "ubicaremos el derecho a la pensión pública y su revalorización automática con arreglo al IPC",
      { confidence: 0.95, explanation: "Propone llevarlo a la Constitución." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      55,
      "Las pensiones públicas subirán con el IPC real",
      { confidence: 0.95 }
    ),
    vp26(
      "bng",
      "strongly_support",
      18,
      "Revalorización anual das pensións conforme ao IPC real.",
      { confidence: 0.95 }
    ),
    vp26(
      "erc",
      "strongly_support",
      26,
      "Revalorar les pensions d’acord amb l’IPC de cada territori.",
      { confidence: 0.85, explanation: "Propone usar el IPC de cada territorio." }
    ),
    vp26(
      "pnv",
      "strongly_support",
      31,
      "revalorizarlas anualmente conforme al IPC, protegiendo su poder adquisitivo frente al incremento del coste de la vida.",
      { confidence: 0.9 }
    ),
    vp26(
      "ehbildu",
      "strongly_support",
      7,
      "Garantizar el poder adquisitivo de las y los pensionistas, manteniendo y blindando la revalorización anual al IPC.",
      { confidence: 0.95 }
    ),
    vp26(
      "democracia21",
      "neutral_or_unclear",
      79,
      "tranquilidad para quienes ya cobran su pensión, sostenibilidad para quienes la cobrarán mañana y justicia entre generaciones",
      { confidence: 0.5, explanation: "Remite la reforma de las pensiones a una asamblea ciudadana elegida por sorteo, sin pronunciarse sobre la revalorización con el IPC." }
    ),
    ne26("podemos", "Propone equiparar la pensión mínima al SMI y financiar las pensiones con los Presupuestos, pero no se pronuncia sobre la revalorización conforme al IPC."),
  ]),
  verify(base("pen_002"), [
    vp(
      "psoe",
      "conditional_support",
      25,
      "Profundizaremos en la creación de fondos de pensiones de empleo, desarrollando el segundo pilar de protección, en el ámbito laboral…",
      { confidence: 0.65, explanation: "Impulsa el ahorro complementario colectivo de empleo, no los planes individuales con desgravación." }
    ),
    ne("pp"),
    ne("vox"),
    ne("sumar"),
    ne26("pp", "Su programa del 29N propone un trato fiscal equivalente para todas las formas de ahorro (medida 184), no un incentivo específico al ahorro para la jubilación."),
    ne26("vox"),
    ne26("psoe"),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      53,
      "Eliminaremos el régimen fiscal especial de los trabajadores desplazados y las deducciones por planes de pensiones privados individuales.",
      { confidence: 0.85 }
    ),
    ne26("adelante-andalucia"),
    vp26(
      "bng",
      "strongly_oppose",
      19,
      "Derrogación das normas que fomentan os plans de pensións privados de emprego nos convenios colectivos",
      { confidence: 0.8 }
    ),
    ne26("erc"),
    vp26(
      "pnv",
      "support",
      31,
      "Favorecer la extensión de los sistemas de previsión social de empleo",
      { confidence: 0.6, explanation: "Posición derivada: apoya la previsión social de empleo como complemento de las pensiones públicas, sin mencionar incentivos fiscales." }
    ),
    ne26("ehbildu"),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_oppose",
      21,
      "Eliminaremos las desgravaciones al IRPF por la suscripción de planes de pensiones incluyendo los planes de empleo de las empresas",
      { confidence: 0.9, explanation: "Posición inversa: suprime los incentivos fiscales al ahorro privado para la jubilación." }
    ),
  ]),
  verify(base("tra_001"), [
    vp(
      "sumar",
      "strongly_support",
      27,
      "Estableceremos garantías para las personas trabajadoras frente al despido mediante un sistema restaurativo y disuasorio… se reconocerá el derecho a una indemnización adicional…",
      { confidence: 0.9 }
    ),
    ne("pp"),
    ne("psoe"),
    ne("vox"),
    ne26("pp", "Su programa del 29N no aborda las indemnizaciones por despido."),
    ne26("vox", "Su programa del 29N propone derogar la legislación laboral del Gobierno (pág. 13), sin concretar nada sobre las indemnizaciones por despido."),
    vp26(
      "psoe",
      "support",
      41,
      "Reformar el despido improcedente para garantizar una reparación efectiva, proporcionada y disuasoria",
      { confidence: 0.75, explanation: "No fija la cuantía; remite a la Carta Social Europea revisada." }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      60,
      "Reformaremos la indemnización por despido improcedente para que repare el daño real causado a la persona trabajadora y disuada de los despidos injustificados",
      { confidence: 0.8, explanation: "No fija la cuantía." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      63,
      "Trabajar tiene que dar para vivir: menos horas, mejores sueldos y despidos que dejen de salir baratos.",
      { confidence: 0.8 }
    ),
    vp26(
      "bng",
      "strongly_support",
      15,
      "Os 45 días de indemnización e un máximo de 42 mensualidades por despedimento improcedente.",
      { confidence: 0.9 }
    ),
    vp26(
      "erc",
      "strongly_support",
      26,
      "recuperant la indemnització per acomiadament improcedent de 45 dies per any treballat, amb un màxim de 42 mensualitats",
      { confidence: 0.9 }
    ),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_support",
      6,
      "Indemnización por despido improcedente de al menos 45 días",
      { confidence: 0.95 }
    ),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_support",
      42,
      "Restableceremos la indemnización de 45 días por año trabajado en los despidos ilegales",
      { confidence: 0.95 }
    ),
  ]),
  verify(base("tra_002"), [
    vp(
      "sumar",
      "strongly_support",
      7,
      "En 2024 se establecerá por ley una jornada laboral máxima de 37,5 horas y se abrirá un proceso de diálogo social para seguir reduciendo la jornada hasta alcanzar las 32 horas semanales.",
      { confidence: 0.95 }
    ),
    vp(
      "psoe",
      "conditional_support",
      50,
      "Continuaremos impulsando el proyecto piloto de reducción de jornada laboral para empresas industriales… sin merma salarial.",
      { confidence: 0.6, explanation: "Apoya la reducción vía proyectos piloto, sin comprometer una jornada máxima legal menor." }
    ),
    ne("pp"),
    ne("vox"),
    ne26("pp", "Su programa del 29N no aborda la reducción de la jornada máxima; propone bancos de horas y horarios flexibles (medida 162)."),
    ne26("vox"),
    vp26(
      "psoe",
      "strongly_support",
      41,
      "Completar la reducción de la jornada a 37,5 horas e incentivar los avances en la negociación colectiva hacia las 35 horas.",
      { confidence: 0.95 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      7,
      "Avanzaremos hacia la jornada laboral máxima de 32 horas semanales sin reducción salarial —empezando por las 37,5 horas de forma inmediata—",
      { confidence: 0.95 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      7,
      "Jornada laboral de 32 horas Sin rebaja de sueldo.",
      { confidence: 0.95 }
    ),
    vp26(
      "bng",
      "strongly_support",
      15,
      "Promover a implantación da xornada laboral de 35 horas semanais sen redución salarial",
      { confidence: 0.95 }
    ),
    vp26(
      "erc",
      "strongly_support",
      26,
      "Reduir la durada màxima de la jornada laboral setmanal a 37 hores i mitja sense reducció salarial.",
      { confidence: 0.95 }
    ),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_support",
      6,
      "Reducción de la jornada laboral hasta las 32 horas semanales o la jornada de 4 días sin reducción salarial.",
      { confidence: 0.95 }
    ),
    ne26("democracia21"),
    vp26(
      "podemos",
      "strongly_support",
      41,
      "Reduciremos la jornada laboral a 30 horas semanales durante la legislatura, comenzando con una bajada a 35 horas",
      { confidence: 0.95 }
    ),
  ]),
  verify(base("smi_001"), [
    vp(
      "sumar",
      "strongly_support",
      7,
      "Subiremos el salario mínimo interprofesional por encima del IPC anual para mantener la ganancia de poder adquisitivo…",
      { confidence: 0.95 }
    ),
    vp(
      "psoe",
      "support",
      18,
      "…la subida del salario mínimo interprofesional, en casi un 50%… ha tenido un impacto directo muy positivo…",
      { confidence: 0.6, explanation: "Defiende la senda de subidas realizada; el programa no fija un compromiso cuantificado futuro." }
    ),
    vp(
      "pp",
      "neutral_or_unclear",
      19,
      "Actualizaremos el Salario Mínimo Interprofesional en el marco del diálogo social.",
      { confidence: 0.6, explanation: "Ni asume ni rechaza subidas por encima de la inflación: lo remite al diálogo social." }
    ),
    vp(
      "vox",
      "neutral_or_unclear",
      22,
      "Impulsaremos la subida de todos los salarios…",
      { confidence: 0.5, explanation: "No se pronuncia sobre el instrumento del SMI por encima del IPC." }
    ),
    ne26("pp", "Su programa del 29N no aborda la evolución del salario mínimo; solo vincula a él el umbral de exención del IRPF (medida 177)."),
    ne26("vox"),
    vp26(
      "psoe",
      "support",
      37,
      "Blindar por ley el SMI por encima del 60% del salario medio y actualizarlo periódicamente según los precios, los salarios, la productividad y las necesidades de las personas trabajadoras",
      { confidence: 0.75, explanation: "Vincula el SMI al 60% del salario medio y a su actualización periódica, sin comprometer subidas por encima de la inflación." }
    ),
    vp26(
      "frente-amplio",
      "support",
      58,
      "Garantizaremos por ley una subida progresiva del Salario Mínimo Interprofesional (SMI) manteniendo un suelo permanente equivalente al 60 % del salario medio neto de la economía.",
      { confidence: 0.8, explanation: "Vincula el SMI al 60% del salario medio neto con subidas progresivas, sin referirse expresamente a la inflación." }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      9,
      "Salarios y salario mínimo ligados a la inflación por ley.",
      { confidence: 0.6, explanation: "Liga el salario mínimo a la inflación, sin comprometer subidas por encima de ella." }
    ),
    vp26(
      "bng",
      "support",
      15,
      "Incrementar o Salario Mínimo Interprofesional até o situar no 60 % do salario medio",
      { confidence: 0.8 }
    ),
    ne26("erc", "Su programa del 29N pide un salario mínimo propio para Cataluña (pág. 20), sin pronunciarse sobre la evolución del estatal."),
    ne26("pnv", "Su programa del 29N pide la competencia para fijar un salario mínimo vasco por encima del estatal (pág. 9), sin pronunciarse sobre la evolución del estatal."),
    vp26(
      "ehbildu",
      "strongly_support",
      6,
      "Establecer por ley, como parámetro de suficiencia para el establecimiento de las cuantías, la referencia que establece la Carta Social Europea.",
      { confidence: 0.75, explanation: "Propone además que las comunidades autónomas puedan fijar un salario mínimo propio por encima del estatal." }
    ),
    vp26(
      "democracia21",
      "conditional_support",
      49,
      "con el objetivo de que el SMI no baje de los 2/3 de la mediana salarial de nuestro país",
      { confidence: 0.6, explanation: "Encarga la actualización a un órgano técnico independiente con cláusulas de revisión por inflación y filtros de prudencia para jóvenes y pequeñas empresas." }
    ),
    vp26(
      "podemos",
      "strongly_support",
      41,
      "Aumentaremos el SMI hasta los 1.800 euros al mes en una legislatura",
      { confidence: 0.95 }
    ),
  ]),
  verify(base("viv_001"), [
    vp(
      "sumar",
      "strongly_support",
      78,
      "…establecer unos precios de referencia para las zonas tensionadas equivalentes al 30% de la renta de los hogares que alquilan…",
      { confidence: 0.9 }
    ),
    vp(
      "psoe",
      "support",
      221,
      "Desarrollaremos las medidas contempladas para la contención de los precios de la vivienda.",
      { confidence: 0.8, explanation: "Despliegue de la Ley 12/2023, que habilita la limitación de alquileres en zonas tensionadas." }
    ),
    vp(
      "pp",
      "strongly_oppose",
      34,
      "Derogaremos la ley de vivienda, que ha generado inseguridad jurídica y no resuelve ninguno de los problemas de fondo del mercado de la vivienda.",
      { confidence: 0.9 }
    ),
    vp(
      "vox",
      "strongly_oppose",
      43,
      "Derogaremos la Ley por el derecho a la vivienda aprobada por el gobierno de Sánchez, la cual… hundirá el mercado del alquiler…",
      { confidence: 0.9 }
    ),
    vp26(
      "pp",
      "strongly_oppose",
      53,
      "Eliminaremos las zonas tensionadas y el índice de precios, que han introducido más intervención, más incertidumbre y menos oferta en el mercado del alquiler.",
      { confidence: 0.9 }
    ),
    vp26(
      "vox",
      "oppose",
      23,
      "Recuperar la seguridad jurídica y una oferta de alquileres estable, abundante y asequible. Derogación de la Ley de Vivienda.",
      { confidence: 0.6, explanation: "Posición derivada: deroga la Ley de Vivienda, que es la norma que permite limitar los alquileres en zonas tensionadas; no menciona expresamente los topes." }
    ),
    vp26(
      "psoe",
      "strongly_support",
      30,
      "Congelar temporalmente las rentas que superen los índices de referencia, evitando incrementos abusivos en los mercados tensionados.",
      { confidence: 0.9 }
    ),
    vp26(
      "frente-amplio",
      "strongly_support",
      13,
      "Limitaremos por ley el precio del alquiler residencial en todas las zonas tensionadas",
      { confidence: 0.95 }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      49,
      "Índice estatal de referencia por barrio o municipio para que ningún alquiler supere el 20 % de la renta media de la zona.",
      { confidence: 0.95 }
    ),
    ne26("bng"),
    ne26("erc", "Su programa del 29N pide que la Generalitat pueda legislar plenamente sobre arrendamientos urbanos (pág. 19), sin pronunciarse sobre limitar los precios por ley estatal."),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_support",
      5,
      "estableciendo regulaciones de los precios y aportando seguridad mediante contratos duraderos y prorrogables automáticamente",
      { confidence: 0.85, explanation: "Propone además un tope estructural del 2 % a la actualización anual de las rentas." }
    ),
    vp26(
      "democracia21",
      "conditional_support",
      19,
      "aplicaremos una limitación general y temporal de los alquileres en zonas tensionadas",
      { confidence: 0.8, explanation: "La limitación es excepcional y transitoria, y va unida a garantías públicas para los propietarios frente a impagos." }
    ),
    vp26(
      "podemos",
      "strongly_support",
      8,
      "Aprobaremos una reducción extraordinaria del 40 % de los precios del alquiler, aplicable a los contratos vigentes, sus renovaciones y prórrogas, así como a los nuevos contratos",
      { confidence: 0.95 }
    ),
  ]),
  verify(base("viv_002"), [
    vp(
      "pp",
      "support",
      34,
      "Derogaremos la ley de vivienda…",
      { confidence: 0.65, explanation: "Posición inversa derivada de su compromiso de derogar la ley que habilita los límites de precios." }
    ),
    vp(
      "vox",
      "support",
      43,
      "Derogaremos la Ley por el derecho a la vivienda… altera el contenido esencial del derecho de propiedad consagrado en el artículo 33…",
      { confidence: 0.7, explanation: "Posición inversa derivada; invoca expresamente el derecho de propiedad." }
    ),
    vp(
      "psoe",
      "oppose",
      221,
      "Desarrollaremos las medidas contempladas para la contención de los precios de la vivienda.",
      { confidence: 0.7, explanation: "Posición inversa derivada de su apoyo a la contención de precios." }
    ),
    vp(
      "sumar",
      "strongly_oppose",
      78,
      "…eliminando las deducciones fiscales en el IRPF de los alquileres que se sitúen por encima del precio de referencia…",
      { confidence: 0.85, explanation: "Posición inversa derivada de su sistema de precios de referencia con penalizaciones." }
    ),
    vp26(
      "pp",
      "support",
      53,
      "Eliminaremos las zonas tensionadas y el índice de precios, que han introducido más intervención, más incertidumbre y menos oferta en el mercado del alquiler.",
      { confidence: 0.75, explanation: "Elimina los límites vigentes; incentiva fiscalmente, sin imponerlas, las renovaciones con subidas por debajo del IPC (medida 156)." }
    ),
    vp26(
      "vox",
      "support",
      23,
      "Recuperar la seguridad jurídica y una oferta de alquileres estable, abundante y asequible. Derogación de la Ley de Vivienda.",
      { confidence: 0.6, explanation: "Posición derivada: deroga la Ley de Vivienda y apuesta por incentivos fiscales al alquiler de larga duración." }
    ),
    vp26(
      "psoe",
      "oppose",
      30,
      "Congelar temporalmente las rentas que superen los índices de referencia, evitando incrementos abusivos en los mercados tensionados.",
      { confidence: 0.8, explanation: "Posición derivada: congela las rentas que superen los índices de referencia en los mercados tensionados." }
    ),
    vp26(
      "frente-amplio",
      "strongly_oppose",
      13,
      "Limitaremos por ley el precio del alquiler residencial en todas las zonas tensionadas",
      { confidence: 0.85, explanation: "Posición derivada: propone limitar por ley el precio del alquiler en las zonas tensionadas." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_oppose",
      49,
      "Índice estatal de referencia por barrio o municipio para que ningún alquiler supere el 20 % de la renta media de la zona.",
      { confidence: 0.85, explanation: "Posición derivada: propone limitar los alquileres al 20 % de la renta media de la zona." }
    ),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "strongly_oppose",
      5,
      "Establecer de manera estructural el máximo de 2% de actualización anual de renta en los contratos de arrendamiento",
      { confidence: 0.8, explanation: "Posición derivada: propone regular los precios del alquiler." }
    ),
    vp26(
      "democracia21",
      "conditional_opposition",
      19,
      "Esta tregua de precios tendrá un carácter estrictamente excepcional y transitorio",
      { confidence: 0.65, explanation: "Posición derivada: propone limitar temporalmente los alquileres en zonas tensionadas e ir levantando la limitación a medida que aumente la oferta." }
    ),
    vp26(
      "podemos",
      "strongly_oppose",
      8,
      "Aprobaremos una reducción extraordinaria del 40 % de los precios del alquiler, aplicable a los contratos vigentes, sus renovaciones y prórrogas, así como a los nuevos contratos",
      { confidence: 0.9, explanation: "Posición inversa de la limitación legal de los alquileres que propone." }
    ),
  ]),
  verify(base("viv_003"), [
    vp(
      "pp",
      "strongly_support",
      82,
      "Aprobaremos un paquete de medidas “anti-okupación” para permitir que los desalojos se produzcan en un plazo máximo de 24 horas…",
      { confidence: 0.95 }
    ),
    vp(
      "psoe",
      "support",
      251,
      "…se impulsará la reforma legislativa… para garantizar el desalojo de los ocupas ilegales en un plazo máximo de 48 horas.",
      { confidence: 0.85 }
    ),
    vp(
      "vox",
      "strongly_support",
      40,
      "Tolerancia cero con la ocupación ilegal. Reformaremos tanto del Código Penal como de las Leyes de Enjuiciamiento Criminal y Civil…",
      { confidence: 0.9 }
    ),
    ne("sumar", "Su programa de vivienda regula desahucios y alquiler social sin pronunciarse expresamente sobre desalojos exprés de ocupaciones."),
    vp26(
      "pp",
      "strongly_support",
      55,
      "Aprobaremos una ley para que el propietario pueda recuperar su vivienda en 48 horas desde el primer día.",
      { confidence: 0.9 }
    ),
    vp26(
      "vox",
      "strongly_support",
      24,
      "Desalojo de la vivienda okupada en menos de 24 horas y recuperación inmediata de la posesión por su legítimo titular, el propietario.",
      { confidence: 0.95 }
    ),
    vp26(
      "psoe",
      "strongly_support",
      100,
      "desalojo de viviendas ocupadas en 48 horas",
      { confidence: 0.85 }
    ),
    ne26("frente-amplio"),
    ne26("adelante-andalucia"),
    ne26("bng"),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    ne26("democracia21", "Propone juzgados especializados de arrendamientos y medidas contra la «inquiokupación» (impago del alquiler), pero no se pronuncia sobre los desalojos de viviendas ocupadas ilegalmente."),
    vp26(
      "podemos",
      "oppose",
      9,
      "Prohibiremos los desahucios y lanzamientos de personas en situación de vulnerabilidad sin alternativa habitacional digna y adecuada",
      { confidence: 0.65, explanation: "Posición derivada: prioriza suspender desalojos de personas vulnerables e ilegalizar las empresas de desokupación; no propone desalojos exprés." }
    ),
  ]),
  verify(base("viv_004"), [
    vp(
      "psoe",
      "support",
      99,
      "…el compromiso de alcanzar el 20% de vivienda pública son y serán claves…",
      { confidence: 0.6, explanation: "Objetivo de parque público; el destino del suelo público no se detalla expresamente." }
    ),
    ne("pp"),
    ne("vox"),
    ne("sumar", "Propone ampliar el parque público por otras vías (alquiler social obligatorio, movilización de vivienda vacía); el destino del suelo público no se aborda expresamente."),
    vp26(
      "pp",
      "conditional_opposition",
      53,
      "Publicaremos todas las parcelas públicas destinadas a vivienda para que cualquier promotor o cooperativa pueda conocerlas.",
      { confidence: 0.5, explanation: "Posición derivada: abre el suelo público a cualquier promotor o cooperativa en lugar de reservarlo a vivienda pública en alquiler." }
    ),
    vp26(
      "vox",
      "neutral_or_unclear",
      23,
      "Aumentar con urgencia la construcción de vivienda protegida para las familias españolas mediante su promoción y colaboración público-privada: cesiones de suelo, subvenciones, descuentos, avales a financiación y créditos blandos.",
      { confidence: 0.4, explanation: "Aumenta la vivienda protegida mediante cesiones de suelo y colaboración público-privada, sin precisar si el suelo público se reserva para alquiler público." }
    ),
    vp26(
      "psoe",
      "conditional_support",
      28,
      "Movilizar suelo público, incluidos suelos dotacionales, para desarrollar en promoción directa, en concesión de obra pública o en colaboración público-privada.",
      { confidence: 0.55, explanation: "Destina el suelo público a vivienda asequible en venta o alquiler, también mediante colaboración público-privada; no lo reserva solo al alquiler público." }
    ),
    vp26(
      "frente-amplio",
      "support",
      11,
      "Movilizaremos suelo y edificios públicos de titularidad estatal, incluidos los de Casa 47, para su cesión a cooperativas sin ánimo de lucro mediante derechos de superficie a largo plazo",
      { confidence: 0.65, explanation: "Posición derivada: cede el suelo público estatal a cooperativas sin ánimo de lucro mediante derecho de superficie, sin venderlo; su parque público es mayoritariamente en alquiler (pág. 10)." }
    ),
    vp26(
      "adelante-andalucia",
      "strongly_support",
      51,
      "Prohibir la venta del patrimonio público de suelo y edificios y promover la cesión temporal de los que están en desuso para uso social.",
      { confidence: 0.85 }
    ),
    vp26(
      "bng",
      "support",
      13,
      "Evitar a degradación, o alleamento e a privatización do patrimonio público do solo e da vivenda",
      { confidence: 0.7, explanation: "Pide además ceder el suelo público estatal a las comunidades autónomas para vivienda." }
    ),
    ne26("erc"),
    ne26("pnv"),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "support",
      22,
      "aportarán el suelo público mediante concesiones o derechos de superficie a 75 años (garantizando que el suelo y las viviendas sigan siendo 100% públicas al final del periodo)",
      { confidence: 0.6, explanation: "El suelo público se cede, sin venderse, para construir vivienda asequible en colaboración público-privada; el programa no precisa que sea solo de alquiler." }
    ),
    vp26(
      "podemos",
      "support",
      10,
      "así como todo el suelo edificable en sus manos, para destinarlos al alquiler social",
      { confidence: 0.7, explanation: "Referido al suelo de la SAREB; además prohíbe vender vivienda pública al sector privado (medida 17)." }
    ),
  ]),
  verify(base("reg_001"), [
    vp(
      "vox",
      "support",
      86,
      "…promoviendo un marco fiscal y laboral de simplificación normativa y de rebaja de impuestos que incentive la contratación…",
      { confidence: 0.6, explanation: "Iniciativa propia citada en el anexo del programa (marzo 2023)." }
    ),
    ne("pp"),
    ne("psoe"),
    ne("sumar"),
    vp26(
      "pp",
      "strongly_support",
      14,
      "Reformaremos la normativa estatal para que más actividades de bajo riesgo puedan iniciarse mediante declaración responsable.",
      { confidence: 0.85 }
    ),
    vp26(
      "vox",
      "strongly_support",
      28,
      "Silencio administrativo positivo y declaración responsable como regla general.",
      { confidence: 0.9 }
    ),
    vp26(
      "psoe",
      "conditional_support",
      15,
      "reducir la carga burocrática y facilitar que las empresas puedan operar, crecer y escalar en todo el territorio nacional.",
      { confidence: 0.55, explanation: "Reduce cargas y barreras regulatorias «innecesarias» mediante coordinación entre administraciones, sin plantear menos control previo." }
    ),
    vp26(
      "frente-amplio",
      "conditional_support",
      99,
      "Reforzaremos la ventanilla única administrativa y aceleraremos la digitalización para reducir trabas y trámites burocráticos",
      { confidence: 0.5, explanation: "Reduce trámites mediante ventanilla única y digitalización, sin plantear menos control previo." }
    ),
    ne26("adelante-andalucia"),
    ne26("bng"),
    vp26(
      "erc",
      "conditional_support",
      23,
      "s’ha de promoure una simplificació administrativa real durant el cicle de creixement de les pimes, que redueixi costos, duplicitats i terminis sense rebaixar les garanties laborals, socials i ambientals",
      { confidence: 0.5, explanation: "Simplifica trámites sin rebajar garantías." }
    ),
    vp26(
      "pnv",
      "support",
      14,
      "Reducir la burocracia y eliminar duplicidades administrativas que dificultan la creación, ampliación y gestión de empresas y negocios.",
      { confidence: 0.65, explanation: "No se refiere expresamente a reducir el control previo." }
    ),
    ne26("ehbildu"),
    vp26(
      "democracia21",
      "strongly_support",
      51,
      "podrá iniciar su actividad de inmediato mediante una licencia provisional automática",
      { confidence: 0.9, explanation: "Se aplica cuando la Administración no resuelve en plazo, salvo casos tasados de seguridad o salud pública; propone también crear una empresa en una hora y suprimir la licencia de obra menor." }
    ),
    ne26("podemos"),
  ]),
  verify(base("emp_001"), [
    vp(
      "psoe",
      "support",
      116,
      "Reforzaremos las convocatorias de empleo público para renovar las plantillas y reducir la precariedad y la temporalidad laboral…",
      { confidence: 0.65 }
    ),
    vp(
      "sumar",
      "support",
      18,
      "Dignificar el empleo público, otra garantía de servicios de calidad para la ciudadanía… vuelta a la atención presencial plena [tras] la reducción de las plantillas de trabajadores del sector público…",
      { confidence: 0.7 }
    ),
    ne("pp"),
    ne("vox"),
    vp26(
      "pp",
      "support",
      69,
      "En Atención Primaria, al menos 4.500 médicos más.",
      { confidence: 0.75, explanation: "También crea las plazas de jueces, fiscales y funcionarios de Justicia necesarias (medida 33)." }
    ),
    vp26(
      "vox",
      "neutral_or_unclear",
      38,
      "Refuerzo de plantillas médicas, de enfermería y personal administrativo.",
      { confidence: 0.5, explanation: "Refuerza las plantillas sanitarias y de justicia, pero también propone «reducir al mínimo estrictamente necesario el tamaño de la Administración Pública» (pág. 29)." }
    ),
    vp26(
      "psoe",
      "support",
      100,
      "Ampliar las plantillas judiciales y fiscales y acabar con el abuso de la temporalidad",
      { confidence: 0.7, explanation: "Amplía plantillas en justicia, Policía y psicología clínica y reduce la temporalidad, sin plantear una ampliación general de los servicios públicos." }
    ),
    vp26(
      "frente-amplio",
      "support",
      31,
      "Fijaremos por ley ratios máximas por aula",
      { confidence: 0.65, explanation: "Fija ratios máximas por aula y más profesionales de salud mental (pág. 28), sin plantear una ampliación general de las plantillas." }
    ),
    vp26(
      "adelante-andalucia",
      "support",
      17,
      "Hasta igualar la inversión por estudiante de la media europea, con ratios más bajas y plantillas suficientes.",
      { confidence: 0.7, explanation: "Se refiere a la educación pública." }
    ),
    ne26("bng"),
    vp26(
      "erc",
      "support",
      43,
      "Cal continuar apostant pel desplegament de noves places de jutges i jutgesses a Catalunya",
      { confidence: 0.6, explanation: "Se refiere a la plantilla judicial en Cataluña." }
    ),
    ne26("pnv"),
    vp26(
      "ehbildu",
      "support",
      12,
      "deberán realizarse las inversiones en recursos y plantillas necesarios para respetar y asegurar el derecho de la ciudadanía a un servicio de calidad",
      { confidence: 0.6, explanation: "Se refiere a la atención de la Administración pública." }
    ),
    vp26(
      "democracia21",
      "support",
      70,
      "Estableceremos un calendario vinculante de incremento de plazas estructurales para acabar con la sobrecarga asistencial",
      { confidence: 0.7, explanation: "Se refiere a la sanidad pública; en educación propone equipos permanentes de refuerzo en los centros." }
    ),
    vp26(
      "podemos",
      "support",
      131,
      "Aumentaremos la financiación y las plantillas de la Administración de Justicia",
      { confidence: 0.75, explanation: "También fija ratios mínimas de profesionales de salud mental (medida 306)." }
    ),
  ]),
];
