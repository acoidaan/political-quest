import type { AxisScore } from "@/lib/types";
import { AXIS_BY_ID } from "@/data/axes";

/**
 * Radar de los 7 ejes (una sola serie: el usuario). Ilustrativo; los valores
 * exactos con incertidumbre están en las barras de eje. Incluye descripción
 * accesible con todos los valores.
 */
export function RadarChart({ scores }: { scores: AxisScore[] }) {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 108;
  const n = scores.length;

  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, r: number) => ({
    x: cx + Math.cos(angle(i)) * r,
    y: cy + Math.sin(angle(i)) * r,
  });

  const polygon = scores
    .map((s, i) => {
      const r = (Math.max(4, s.display) / 100) * radius;
      const p = point(i, r);
      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    })
    .join(" ");

  const rings = [25, 50, 75, 100];

  const description = scores
    .map(
      (s) =>
        `${AXIS_BY_ID[s.axis].label}: ${s.answered === 0 ? "sin datos" : Math.round(s.display)}`
    )
    .join("; ");

  return (
    <figure>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-sm mx-auto"
        role="img"
        aria-label={`Radar de ejes (0 a 100 desde el centro): ${description}`}
      >
        {rings.map((ring) => (
          <polygon
            key={ring}
            points={scores
              .map((_, i) => {
                const p = point(i, (ring / 100) * radius);
                return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
              })
              .join(" ")}
            fill="none"
            stroke="var(--line)"
            strokeWidth={ring === 100 ? 1 : 0.5}
          />
        ))}
        {scores.map((_, i) => {
          const p = point(i, radius);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="var(--line)"
              strokeWidth="0.5"
            />
          );
        })}
        <polygon
          points={polygon}
          fill="var(--accent)"
          opacity="0.15"
        />
        <polygon
          points={polygon}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {scores.map((s, i) => {
          const r = (Math.max(4, s.display) / 100) * radius;
          const p = point(i, r);
          return (
            <circle
              key={s.axis}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="var(--accent)"
              stroke="var(--paper)"
              strokeWidth="1.5"
            >
              <title>
                {AXIS_BY_ID[s.axis].label}:{" "}
                {s.answered === 0 ? "sin datos" : Math.round(s.display)}
              </title>
            </circle>
          );
        })}
        {scores.map((s, i) => {
          const p = point(i, radius + 22);
          return (
            <text
              key={s.axis}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-[var(--ink-2)]"
              fontSize="11"
            >
              {AXIS_BY_ID[s.axis].label}
            </text>
          );
        })}
      </svg>
      <figcaption className="text-xs text-muted text-center mt-1">
        0 = {`centro del gráfico`} · cada eje va de su polo «negativo» (0) a su
        polo «positivo» (100); consulta las barras para ver los polos.
      </figcaption>
    </figure>
  );
}
