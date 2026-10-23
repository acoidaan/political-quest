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
    date: "2026-10-23",
    kind: "datos",
    title: "Seguimiento del 29-N: documento programático del PP",
    details: [
      "El PP pasa a «Documentos parciales» con su «Contrato con España» (19 de octubre de 2026), enlazado desde pp.es. No es el programa completo, así que las posiciones del PP en el test no cambian.",
      "Sin programas nuevos en las webs oficiales de PSOE, BNG, EH Bildu, Junts y PNV.",
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
