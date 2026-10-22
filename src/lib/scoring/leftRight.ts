import type { AxisId, AxisScore, LeftRightScore } from "@/lib/types";
import { LEFT_RIGHT_WEIGHTS, leftRightBand, uncertaintyFloor } from "./constants";
import { clamp, toDisplay } from "./axes";

/**
 * Índice izquierda-derecha global (docs/ARQUITECTURA.md §3.4).
 *
 * Combinación ponderada de ejes DE CONTENIDO (economic, social, authority,
 * immigration, environment). territorial y europe se excluyen porque en España
 * atraviesan el eje izquierda-derecha. Se calcula EXCLUSIVAMENTE a partir de
 * las características ideológicas de las propuestas: las posiciones de
 * partidos no intervienen en ningún punto (§68 del briefing).
 *
 * Los pesos se renormalizan sobre los ejes con datos; la incertidumbre se
 * propaga cuadráticamente y respeta el suelo global.
 */
export function calculateLeftRightScore(axes: AxisScore[]): LeftRightScore {
  const usable = axes.filter(
    (a) => a.answered > 0 && (LEFT_RIGHT_WEIGHTS[a.axis] ?? 0) > 0
  );

  if (usable.length === 0) {
    return { display: 50, uncertainty: 50, band: leftRightBand(50), axesUsed: [] };
  }

  const totalW = usable.reduce((s, a) => s + (LEFT_RIGHT_WEIGHTS[a.axis] ?? 0), 0);
  let raw = 0;
  let varAcc = 0; // varianza propagada en escala display
  let effectiveNTotal = 0;

  for (const a of usable) {
    const w = (LEFT_RIGHT_WEIGHTS[a.axis] ?? 0) / totalW;
    raw += w * a.raw;
    varAcc += w * w * a.uncertainty * a.uncertainty;
    effectiveNTotal += a.effectiveN;
  }

  raw = clamp(raw, -1, 1);
  const floor = uncertaintyFloor(effectiveNTotal);
  const uncertainty = Math.min(50, Math.max(floor, Math.sqrt(varAcc)));
  const display = toDisplay(raw);

  return {
    display,
    uncertainty,
    band: leftRightBand(display),
    axesUsed: usable.map((a) => a.axis as AxisId),
  };
}
