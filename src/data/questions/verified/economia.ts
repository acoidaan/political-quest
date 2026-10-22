import type { Question } from "@/lib/types";
import { axesOnly, ne, verify, vp } from "./helpers";
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
  ]),
  axesOnly(
    base("eco_004"),
    "Verificación 2026-08: ningún programa 23J aborda expresamente la venta de participaciones públicas."
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
  ]),
];
