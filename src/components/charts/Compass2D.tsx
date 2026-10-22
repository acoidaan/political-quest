import type { AxisScore } from "@/lib/types";

export interface CompassPoint {
  id: string;
  label: string;
  x: number; // economic 0-100 (0 = intervención, 100 = mercado)
  y: number; // authority 0-100 (0 = libertario, 100 = orden)
  /** Color CSS. El usuario usa el acento; partidos, su var(--party-*). */
  color: string;
  emphasize?: boolean;
}

/**
 * Mapa 2D principal: eje económico × eje de autoridad. El usuario siempre;
 * los partidos SOLO tras la revelación explícita, siempre con etiqueta de
 * texto junto al punto (el color nunca es el único canal de identidad).
 */
export function Compass2D({
  points,
  userUncertainty,
}: {
  points: CompassPoint[];
  userUncertainty?: { x: number; y: number };
}) {
  const size = 340;
  const pad = 30;
  const plot = size - pad * 2;
  const px = (v: number) => pad + (v / 100) * plot;
  const py = (v: number) => pad + ((100 - v) / 100) * plot;

  const user = points.find((p) => p.emphasize);

  return (
    <figure>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-sm mx-auto"
        role="img"
        aria-label={`Mapa bidimensional. Horizontal: intervención (0) a mercado (100). Vertical: libertario (0) a orden (100). ${points
          .map((p) => `${p.label}: ${Math.round(p.x)}, ${Math.round(p.y)}`)
          .join("; ")}`}
      >
        <rect
          x={pad}
          y={pad}
          width={plot}
          height={plot}
          fill="var(--surface)"
          stroke="var(--line)"
        />
        {/* cuadrantes */}
        <line x1={px(50)} y1={pad} x2={px(50)} y2={size - pad} stroke="var(--line)" />
        <line x1={pad} y1={py(50)} x2={size - pad} y2={py(50)} stroke="var(--line)" />

        <text x={px(2)} y={py(97)} fontSize="9" className="fill-[var(--muted)]">
          Intervención · orden
        </text>
        <text x={px(98)} y={py(97)} fontSize="9" textAnchor="end" className="fill-[var(--muted)]">
          Mercado · orden
        </text>
        <text x={px(2)} y={py(3)} fontSize="9" className="fill-[var(--muted)]">
          Intervención · libertario
        </text>
        <text x={px(98)} y={py(3)} fontSize="9" textAnchor="end" className="fill-[var(--muted)]">
          Mercado · libertario
        </text>

        {/* elipse de incertidumbre del usuario */}
        {user && userUncertainty && (
          <ellipse
            cx={px(user.x)}
            cy={py(user.y)}
            rx={(userUncertainty.x / 100) * plot}
            ry={(userUncertainty.y / 100) * plot}
            fill={user.color}
            opacity="0.12"
          />
        )}

        {points.map((p) => (
          <g key={p.id}>
            <circle
              cx={px(p.x)}
              cy={py(p.y)}
              r={p.emphasize ? 7 : 5}
              fill={p.color}
              stroke="var(--paper)"
              strokeWidth="2"
            >
              <title>
                {p.label}: economía {Math.round(p.x)}, autoridad {Math.round(p.y)}
              </title>
            </circle>
            <text
              x={px(p.x)}
              y={py(p.y) - (p.emphasize ? 11 : 9)}
              textAnchor="middle"
              fontSize={p.emphasize ? 12 : 10}
              fontWeight={p.emphasize ? 700 : 500}
              className="fill-[var(--ink)]"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="text-xs text-muted text-center mt-1">
        Horizontal: intervención ↔ mercado. Vertical: libertario ↔ orden.
      </figcaption>
    </figure>
  );
}

export function compassFromAxes(axes: AxisScore[]): {
  x: number;
  y: number;
  ux: number;
  uy: number;
} {
  const economic = axes.find((a) => a.axis === "economic");
  const authority = axes.find((a) => a.axis === "authority");
  return {
    x: economic?.display ?? 50,
    y: authority?.display ?? 50,
    ux: economic?.uncertainty ?? 50,
    uy: authority?.uncertainty ?? 50,
  };
}
