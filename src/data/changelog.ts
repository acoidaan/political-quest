/**
 * Registro público de cambios (página /novedades).
 *
 * Toda modificación del dataset (posiciones, preguntas, partidos, fuentes) o
 * de la metodología añade aquí una entrada en el mismo pull request. Más
 * reciente primero. Sirve de auditoría legible: qué cambió, cuándo y por qué.
 */

export type ChangeKind = "datos" | "metodologia" | "web";

export interface ChangelogEntry {
  /** Fecha ISO. */
  date: string;
  kind: ChangeKind;
  title: string;
  details: string[];
}

export const CHANGE_KIND_LABELS: Record<ChangeKind, string> = {
  datos: "Datos",
  metodologia: "Metodología",
  web: "Web",
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-11-24",
    kind: "datos",
    title: "Compromís entra en la comparación con su programa para el 29-N",
    details: [
      "Sus posiciones proceden del programa de Compromís-Front Valencià, publicado en frontvalencia.org (18 de noviembre de 2026), con cita literal en valenciano y página en 63 de las 90 propuestas.",
      "Concurre solo en la Comunitat Valenciana. En las propuestas que su programa no aborda figura como «evidencia insuficiente» y no puntúa en la comparación.",
    ],
  },
  {
    date: "2026-11-24",
    kind: "datos",
    title: "Podemos entra en la comparación con su programa para el 29-N",
    details: [
      "Sus posiciones proceden de su programa «Así de básico: Paz, casa y trabajo» (17 de noviembre de 2026), con cita literal y página en 63 de las 90 propuestas.",
      "La web de Podemos bloquea el acceso automatizado, así que se ha usado una copia del programa aportada por el mantenedor, con el mismo título, número de páginas y fecha que la publicada.",
      "En las propuestas que su programa no aborda figura como «evidencia insuficiente» y no puntúa en la comparación.",
    ],
  },
  {
    date: "2026-11-24",
    kind: "datos",
    title: "Nueva versión revisada del programa del Frente Amplio",
    details: [
      "El Frente Amplio publicó el 23 de noviembre otra versión de su programa en la misma dirección, con un capítulo nuevo sobre deporte. Se han vuelto a comprobar todas sus citas: siguen siendo literales y 49 cambian de página. Ninguna posición cambia, así que el test no cambia.",
    ],
  },
  {
    date: "2026-11-20",
    kind: "datos",
    title: "Programa de Democracia 21 revisado",
    details: [
      "Democracia 21 publicó su programa completo, «La España que merecemos» (13 de noviembre de 2026). Sus posiciones se han extraído con cita literal y página: toma postura clara en 30 de las 90 propuestas.",
      "Es menos que los demás partidos estatales y concurre solo en Madrid y Barcelona, así que de momento no se muestra en los resultados; sus posiciones se conservan en el dataset.",
    ],
  },
  {
    date: "2026-11-19",
    kind: "datos",
    title: "EH Bildu entra en la comparación con su programa para el 29-N",
    details: [
      "Sus posiciones proceden de su programa «Posible egin. Garantía y derechos» (16 de noviembre de 2026), con cita literal y página en 41 de las 90 propuestas.",
      "En las propuestas que su programa no aborda figura como «evidencia insuficiente» y no puntúa en la comparación.",
    ],
  },
  {
    date: "2026-11-18",
    kind: "datos",
    title: "Versiones revisadas de los programas de Frente Amplio y ERC",
    details: [
      "Frente Amplio y ERC publicaron el 17 de noviembre versiones revisadas de sus programas en la misma dirección. Se han vuelto a comprobar todas sus citas: siguen siendo literales, y solo una cita del Frente Amplio (indemnización por despido) cambia de página. Ninguna posición cambia, así que el test no cambia.",
    ],
  },
  {
    date: "2026-11-17",
    kind: "metodologia",
    title: "El aviso de cobertura del informe de balance compara solo partidos estatales",
    details: [
      "El informe de balance avisa si el partido con menos posiciones tiene menos del 60 % de las del que más tiene. Ahora esa comparación se hace solo entre partidos estatales que se comparan: los partidos territoriales abordan por naturaleza menos propuestas de ámbito estatal, y los inactivos no puntúan. Sus recuentos siguen apareciendo en el informe.",
    ],
  },
  {
    date: "2026-11-17",
    kind: "datos",
    title: "Adelante Andalucía, BNG y ERC entran en la comparación",
    details: [
      "Se incorporan con sus programas para el 29-N, con cita literal y página: Adelante Andalucía en 51 de las 90 propuestas, BNG en 40 y ERC en 32. Las citas del BNG y de ERC se reproducen en gallego y en catalán, sin traducir.",
      "En las propuestas que su programa no aborda figuran como «evidencia insuficiente» y no puntúan en la comparación.",
      "El programa del PNV también se ha revisado, pero solo aborda 18 de las 90 propuestas: por debajo del mínimo para compararlo con garantías, así que no se muestra en los resultados.",
      "La etiqueta «Programa publicado · en verificación» pasa a «Programa publicado · aún no incorporado».",
    ],
  },
  {
    date: "2026-11-17",
    kind: "datos",
    title: "Frente Amplio entra en la comparación con su programa para el 29-N",
    details: [
      "Frente Amplio (Movimiento Sumar, Izquierda Unida, Más Madrid y Comuns) sustituye a Sumar en la comparación. Sus posiciones proceden de su programa «Un programa como una casa» (16 de noviembre de 2026), con cita literal y página en 67 de las 90 propuestas.",
      "En las 23 propuestas que su programa no aborda figura como «evidencia insuficiente» y no puntúa en la comparación. Las posiciones de Sumar de 2023 se conservan como historial.",
    ],
  },
  {
    date: "2026-11-16",
    kind: "metodologia",
    title: "Al final del test puedes indicar cuánto te importa cada tema",
    details: [
      "Tras la última pregunta aparece un paso opcional: para cada tema del test (Economía, Servicios públicos, Territorio…) eliges si te importa poco, lo normal o mucho.",
      "Los temas que más te importan cuentan algo más en tus ejes y en la coincidencia con partidos, y los que menos, algo menos. Se usa el mismo multiplicador acotado que la importancia por pregunta (×0,75 / ×1 / ×1,3), y si marcaste la importancia de una pregunta concreta, esa prevalece.",
    ],
  },
  {
    date: "2026-11-16",
    kind: "datos",
    title: "Programa del PSOE para el 29-N incorporado a la comparación",
    details: [
      "Las posiciones del PSOE proceden ahora de su programa «La fuerza de seguir avanzando» (15 de noviembre de 2026), con cita literal y página en las 86 propuestas que se basaban en su programa de 2023. Las posiciones de 2023 se conservan como historial.",
      "En las propuestas que el nuevo programa del PSOE no aborda, pasa a «evidencia insuficiente» y esa pregunta deja de puntuar en la comparación con el PSOE. Las cuatro posiciones basadas en votaciones del Congreso o en el BOE se mantienen.",
    ],
  },
  {
    date: "2026-11-14",
    kind: "web",
    title: "La web funciona sin conexión tras la primera visita",
    details: [
      "Después de abrirla una vez con conexión, la web se puede volver a abrir y recorrer sin red, y el test se puede hacer entero sin conexión. Las respuestas se siguen guardando solo en tu dispositivo.",
      "Con conexión se carga siempre la versión más reciente. Si se pierde la red, aparece un aviso.",
    ],
  },
  {
    date: "2026-11-13",
    kind: "datos",
    title: "Programa de VOX para el 29-N incorporado; programas de ERC y Coalición Canaria",
    details: [
      "Las posiciones de VOX proceden ahora de su programa «Es sentido común» (12 de noviembre de 2026), con cita literal y página en las 89 propuestas que se basaban en su programa de 2023. Las posiciones de 2023 se conservan como historial.",
      "En las propuestas que el nuevo programa de VOX no aborda, pasa a «evidencia insuficiente» y esa pregunta deja de puntuar en la comparación con VOX. La posición basada en una votación del Congreso se mantiene.",
      "ERC pasa a «Programa publicado · en verificación» y Coalición Canaria a «Documentos parciales» con las bases de su programa. No forman parte de la comparación, así que el test no cambia.",
    ],
  },
  {
    date: "2026-11-12",
    kind: "datos",
    title: "Seguimiento del 29-N: programa de Adelante Andalucía y enlace del PP",
    details: [
      "Adelante Andalucía pasa a «Programa publicado · en verificación» con su programa para las generales. No forma parte de la comparación, así que el test no cambia.",
      "El enlace al programa del PP apunta ahora al PDF de pp.es que se usó para las citas, porque la dirección anterior dejó de funcionar. El texto y las páginas citadas no cambian.",
    ],
  },
  {
    date: "2026-11-11",
    kind: "datos",
    title: "Programa del PP para el 29-N incorporado a la comparación",
    details: [
      "Las posiciones del PP proceden ahora de su programa «Reconstrucción nacional» (10 de noviembre de 2026), con cita literal y página en las 88 propuestas que se basaban en su programa de 2023. Las posiciones de 2023 se conservan como historial.",
      "En las propuestas que el nuevo programa no aborda, el PP pasa a «evidencia insuficiente» y esa pregunta deja de puntuar en la comparación con el PP. Las dos posiciones basadas en votaciones del Congreso se mantienen.",
      "El PNV pasa a «Programa publicado · en verificación» con su programa para las generales.",
    ],
  },
  {
    date: "2026-11-05",
    kind: "datos",
    title: "Seguimiento del 29-N: programa electoral del BNG",
    details: [
      "El BNG pasa a «Programa publicado · en verificación» con su programa para las generales (91 páginas), publicado en bng.gal. El BNG no forma parte de la comparación, así que el test no cambia.",
      "Sin programas nuevos en las webs oficiales de PP, PSOE, EH Bildu, Junts, PNV y Democracia 21.",
    ],
  },
  {
    date: "2026-11-03",
    kind: "datos",
    title: "Seguimiento del 29-N: candidaturas proclamadas en el BOE",
    details: [
      "Las coaliciones de Compromís, Coalición Canaria, Podemos, Frente Amplio y Democracia 21 pasan de «presentadas» a «proclamadas», según el BOE de hoy.",
      "Podemos, VOX y ERC: revisión manual de sus webs oficiales el 2 de noviembre, sin documentos nuevos para el 29-N.",
      "Sin programas nuevos en las webs oficiales de PP, PSOE, BNG, EH Bildu, Junts, PNV y Democracia 21.",
    ],
  },
  {
    date: "2026-10-30",
    kind: "datos",
    title: "Seguimiento del 29-N: documento programático de Democracia 21",
    details: [
      "Democracia 21 pasa a «Documentos parciales» con «España Limpia», publicado en democracia21.es. No es el programa completo y el partido no forma parte de la comparación, así que el test no cambia.",
      "Sin programas nuevos en las webs oficiales de PP, PSOE, BNG, EH Bildu, Junts y PNV.",
    ],
  },
  {
    date: "2026-10-28",
    kind: "datos",
    title: "Seguimiento del 29-N: candidaturas presentadas en el BOE",
    details: [
      "Se añaden las coaliciones con las que concurren Compromís, Coalición Canaria, Podemos y Frente Amplio, según las candidaturas presentadas que publica hoy el BOE (aún pendientes de proclamación).",
      "Sin programas nuevos en las webs oficiales de PP, PSOE, BNG, EH Bildu, Junts y PNV.",
    ],
  },
  {
    date: "2026-10-23",
    kind: "datos",
    title: "Seguimiento del 29-N: documentos programáticos del PP y VOX",
    details: [
      "El PP pasa a «Documentos parciales» con su «Contrato con España» (19 de octubre de 2026), enlazado desde pp.es. No es el programa completo, así que las posiciones del PP en el test no cambian.",
      "VOX pasa a «Documentos parciales» con «Recuperar España. Prioridad nacional, desregulación, remigración» (20 de octubre de 2026, 6 páginas), publicado en voxespana.es. No es el programa completo, así que las posiciones de VOX en el test no cambian.",
      "Sin programas nuevos en las webs oficiales de PSOE, Podemos, BNG, EH Bildu, ERC, Junts y PNV.",
    ],
  },
  {
    date: "2026-10-22",
    kind: "web",
    title: "Nueva experiencia y seguimiento de las elecciones del 29-N",
    details: [
      "Escala de respuesta visual y atajos de teclado (1–7) durante el test.",
      "Revelación final por pasos: primero predices qué partido se parece más a tus respuestas y después ves, propuesta a propuesta, quién defendía cada una.",
      "Página de seguimiento de los programas electorales del 29-N, con el estado de cada candidatura.",
      "Las posiciones de partidos pasan a estar versionadas por fecha: cuando un partido publique su programa de 2026, sus posiciones nuevas sustituirán a las de 2023 sin borrarlas.",
    ],
  },
  {
    date: "2026-08-09",
    kind: "datos",
    title: "Dataset verificado",
    details: [
      "90 propuestas con redacción neutral y explicación de ambas caras.",
      "Posiciones de PP, PSOE, VOX y Sumar con cita literal de sus programas del 23J-2023, votaciones del Congreso y BOE.",
    ],
  },
];
