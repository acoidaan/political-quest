import type { AxisId, AxisScore, Question, UserAnswer } from "@/lib/types";
import { AXIS_IDS } from "@/data/axes";
import { MAX_ANSWER, PERSONAL_IMPORTANCE_MULT, uncertaintyFloor } from "./constants";
import { ciDisplay, weightedStats } from "./uncertainty";

/**
 * Puntuación por eje (docs/ARQUITECTURA.md §3.2).
 *
 * score_a = media ponderada de x_i = (r_i/3)·sign(w_ia), con pesos
 * |w_ia| · importancia_editorial · multiplicador_importancia_personal.
 * Preguntas omitidas ("no tengo suficiente información") quedan fuera de
 * numerador y denominador: no son un 0.
 */
export function calculateAxisScores(
  questions: Question[],
  answers: Record<string, UserAnswer>
): AxisScore[] {
  return AXIS_IDS.map((axis) => calculateSingleAxis(axis, questions, answers));
}

function calculateSingleAxis(
  axis: AxisId,
  questions: Question[],
  answers: Record<string, UserAnswer>
): AxisScore {
  const values: number[] = [];
  const weights: number[] = [];

  for (const q of questions) {
    const w = q.weights[axis] ?? 0;
    if (w === 0) continue;
    const answer = answers[q.id];
    if (!answer || answer.value === "skipped") continue;

    const personal = PERSONAL_IMPORTANCE_MULT[answer.personalImportance ?? "normal"];
    values.push((answer.value / MAX_ANSWER) * Math.sign(w));
    weights.push(Math.abs(w) * q.importance * personal);
  }

  const stats = weightedStats(values, weights);
  if (stats.count === 0) {
    return { axis, raw: 0, display: 50, uncertainty: 50, answered: 0, effectiveN: 0 };
  }

  const raw = clamp(stats.mean, -1, 1);
  return {
    axis,
    raw,
    display: toDisplay(raw),
    uncertainty: ciDisplay(stats.se, uncertaintyFloor(stats.effectiveN)),
    answered: stats.count,
    effectiveN: stats.effectiveN,
  };
}

export function toDisplay(raw: number): number {
  return Math.round(((raw + 1) / 2) * 1000) / 10;
}

export function clamp(x: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, x));
}
