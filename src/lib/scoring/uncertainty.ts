/**
 * Estadística ponderada compartida por ejes y similitud.
 *
 * Método: media ponderada + error estándar con tamaño muestral efectivo de
 * Kish n_eff = (Σw)²/Σw². El intervalo (~IC95) es 1.96·SE, con un suelo
 * dependiente de n_eff para no comunicar certeza artificial con pocas
 * respuestas (docs/ARQUITECTURA.md §3.3).
 */

export interface WeightedStats {
  mean: number;
  /** Error estándar de la media ponderada. */
  se: number;
  effectiveN: number;
  count: number;
}

export function weightedStats(values: number[], weights: number[]): WeightedStats {
  const n = values.length;
  if (n === 0) return { mean: 0, se: Infinity, effectiveN: 0, count: 0 };

  let sumW = 0;
  let sumW2 = 0;
  let sumWX = 0;
  for (let i = 0; i < n; i++) {
    sumW += weights[i];
    sumW2 += weights[i] * weights[i];
    sumWX += weights[i] * values[i];
  }
  if (sumW <= 0) return { mean: 0, se: Infinity, effectiveN: 0, count: n };

  const mean = sumWX / sumW;
  const effectiveN = (sumW * sumW) / sumW2;

  if (n === 1) return { mean, se: Infinity, effectiveN, count: 1 };

  let sumWD2 = 0;
  for (let i = 0; i < n; i++) {
    const d = values[i] - mean;
    sumWD2 += weights[i] * d * d;
  }
  const variance = sumWD2 / sumW;
  const se = Math.sqrt(variance / Math.max(effectiveN, 1));
  return { mean, se, effectiveN, count: n };
}

/**
 * Convierte un SE en escala interna [-1,1] a semiamplitud ~IC95 en escala
 * 0-100, aplicando el suelo indicado.
 */
export function ciDisplay(se: number, floor: number): number {
  const raw = Number.isFinite(se) ? 1.96 * se * 50 : 50;
  return Math.min(50, Math.max(floor, raw));
}
