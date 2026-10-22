import type { AxisId, PersonalImportance, QuizMode } from "@/lib/types";

/**
 * Constantes metodológicas del motor de scoring.
 * Cada valor está documentado; cambiarlos altera la metodología y debe
 * reflejarse en /metodologia.
 */

/** Valor máximo absoluto de la escala de respuesta (-3..+3). */
export const MAX_ANSWER = 3;

/**
 * Pesos del índice izquierda-derecha global sobre ejes DE CONTENIDO.
 * territorial y europe se excluyen deliberadamente: en España atraviesan el eje
 * izquierda-derecha (hay descentralistas y centralistas en ambos lados).
 * Ver docs/ARQUITECTURA.md §3.4.
 */
export const LEFT_RIGHT_WEIGHTS: Partial<Record<AxisId, number>> = {
  economic: 0.4,
  social: 0.25,
  authority: 0.15,
  immigration: 0.1,
  environment: 0.1,
};

/**
 * Multiplicador de la importancia personal declarada por el usuario.
 * Acotado (0.75–1.3) para que no domine indebidamente la puntuación (§7).
 */
export const PERSONAL_IMPORTANCE_MULT: Record<PersonalImportance, number> = {
  low: 0.75,
  normal: 1,
  high: 1.3,
};

/**
 * Suelo de incertidumbre (escala 0-100, semiamplitud) según tamaño muestral
 * efectivo. Evita que 2 respuestas produzcan una puntuación artificialmente
 * segura (§44). Interpolación por tramos.
 */
export function uncertaintyFloor(effectiveN: number): number {
  if (effectiveN <= 1) return 30;
  if (effectiveN <= 3) return 20;
  if (effectiveN <= 5) return 14;
  if (effectiveN <= 10) return 9;
  if (effectiveN <= 20) return 6;
  return 4;
}

/** Número de preguntas por modalidad. */
export const MODE_SIZES: Record<QuizMode, number> = {
  quick: 25,
  full: 75,
  deep: 150,
};

/** Pares de consistencia deseados por modalidad (si el pool los ofrece). */
export const CONSISTENCY_PAIRS_TARGET: Record<QuizMode, number> = {
  quick: 1,
  full: 4,
  deep: 6,
};

/**
 * Umbral de "convicción": intensidad mínima (|respuesta|/3 · 100) para que una
 * respuesta cuente entre "tus posiciones más claras".
 */
export const CONVICTION_THRESHOLD = 67; // |±2| o más

/** Umbral de "centrismo": intensidad máxima para "donde eres más centrista". */
export const CENTRIST_THRESHOLD = 34; // |±1| o menos

/** Bandas descriptivas del índice izquierda-derecha (0-100). */
export const LEFT_RIGHT_BANDS: { max: number; label: string }[] = [
  { max: 15, label: "izquierda" },
  { max: 35, label: "centroizquierda" },
  { max: 45, label: "centro con inclinación a la izquierda" },
  { max: 55, label: "centro" },
  { max: 65, label: "centro con inclinación a la derecha" },
  { max: 85, label: "centroderecha" },
  { max: 100, label: "derecha" },
];

export function leftRightBand(display: number): string {
  for (const band of LEFT_RIGHT_BANDS) {
    if (display <= band.max) return band.label;
  }
  return "centro";
}
