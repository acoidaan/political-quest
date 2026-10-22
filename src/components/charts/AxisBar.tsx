import type { AxisScore } from "@/lib/types";
import { AXIS_BY_ID } from "@/data/axes";

/**
 * Posición en un eje bipolar 0-100: punto + banda de incertidumbre sobre una
 * pista neutra. Forma elegida frente a la barra rellena porque el valor es una
 * POSICIÓN entre dos polos, no una magnitud desde cero.
 */
export function AxisBar({ score }: { score: AxisScore }) {
  const axis = AXIS_BY_ID[score.axis];
  const noData = score.answered === 0;
  const lo = Math.max(0, score.display - score.uncertainty);
  const hi = Math.min(100, score.display + score.uncertainty);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-medium text-sm">{axis.label}</span>
        <span className="text-sm text-ink-2 tabular-nums">
          {noData ? "sin datos" : `${Math.round(score.display)} ± ${Math.round(score.uncertainty)}`}
        </span>
      </div>
      <svg
        viewBox="0 0 100 12"
        className="w-full h-6 mt-1"
        role="img"
        aria-label={
          noData
            ? `${axis.label}: sin datos suficientes`
            : `${axis.label}: ${Math.round(score.display)} de 100, entre ${axis.negativePole} (0) y ${axis.positivePole} (100), con incertidumbre de ${Math.round(score.uncertainty)} puntos`
        }
        preserveAspectRatio="none"
      >
        {/* pista */}
        <rect x="0" y="5" width="100" height="2" rx="1" fill="var(--track)" />
        {/* marca central */}
        <rect x="49.8" y="3.5" width="0.4" height="5" fill="var(--line)" />
        {!noData && (
          <>
            <rect
              x={lo}
              y="4.25"
              width={Math.max(0.5, hi - lo)}
              height="3.5"
              rx="1.75"
              fill="var(--accent)"
              opacity="0.22"
            />
            <circle
              cx={score.display}
              cy="6"
              r="2.6"
              fill="var(--accent)"
              stroke="var(--paper)"
              strokeWidth="0.8"
            />
          </>
        )}
      </svg>
      <div className="flex justify-between text-[11px] text-muted mt-0.5">
        <span>{axis.negativePole}</span>
        <span className="text-right">{axis.positivePole}</span>
      </div>
    </div>
  );
}
