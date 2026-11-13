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
    date: "2026-11-13",
    kind: "datos",
    title: "Seguimiento del 29-N: programas de VOX, ERC y Coalición Canaria",
    details: [
      "VOX pasa a «Programa publicado · en verificación» con sus medidas para el 29-N. Sus posiciones en el test siguen siendo las de 2023 hasta que se verifique el documento.",
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
