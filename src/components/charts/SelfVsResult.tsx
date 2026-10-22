/**
 * Autopercepción vs. resultado (§14): dos puntos etiquetados sobre la misma
 * escala izquierda-derecha 0-100. Elemento puramente descriptivo.
 */
export function SelfVsResult({
  selfPlacement, // 1-10
  result, // 0-100
  uncertainty,
}: {
  selfPlacement: number;
  result: number;
  uncertainty: number;
}) {
  const self100 = ((selfPlacement - 1) / 9) * 100;
  const lo = Math.max(0, result - uncertainty);
  const hi = Math.min(100, result + uncertainty);

  return (
    <figure>
      <svg
        viewBox="0 0 100 26"
        className="w-full h-20"
        role="img"
        aria-label={`Autopercepción: ${self100.toFixed(0)} de 100. Resultado según respuestas: ${result.toFixed(0)} de 100 (±${Math.round(uncertainty)}).`}
        preserveAspectRatio="none"
      >
        <rect x="0" y="12" width="100" height="2" rx="1" fill="var(--track)" />
        <rect x="49.8" y="10.5" width="0.4" height="5" fill="var(--line)" />
        {/* conexión */}
        <line
          x1={self100}
          y1="13"
          x2={result}
          y2="13"
          stroke="var(--muted)"
          strokeWidth="0.6"
          strokeDasharray="1.5 1.5"
        />
        {/* banda de incertidumbre del resultado */}
        <rect
          x={lo}
          y="11.25"
          width={Math.max(0.5, hi - lo)}
          height="3.5"
          rx="1.75"
          fill="var(--accent)"
          opacity="0.22"
        />
        {/* autopercepción: círculo hueco (forma distinta, no solo color) */}
        <circle
          cx={self100}
          cy="13"
          r="2.4"
          fill="var(--paper)"
          stroke="var(--ink-2)"
          strokeWidth="1"
        />
        {/* resultado: punto sólido acento */}
        <circle
          cx={result}
          cy="13"
          r="2.6"
          fill="var(--accent)"
          stroke="var(--paper)"
          strokeWidth="0.8"
        />
      </svg>
      <figcaption className="flex justify-between text-[11px] text-muted -mt-2">
        <span>Izquierda</span>
        <span>Derecha</span>
      </figcaption>
      <dl className="mt-2 grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block w-3 h-3 rounded-full border-2 border-ink-2 bg-paper"
          />
          <dt className="text-ink-2">Tú pensabas que estabas en</dt>
          <dd className="font-medium tabular-nums">{(selfPlacement).toFixed(1)}/10</dd>
        </div>
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block w-3 h-3 rounded-full bg-accent"
          />
          <dt className="text-ink-2">Tus respuestas se sitúan en</dt>
          <dd className="font-medium tabular-nums">
            {Math.round(result)}/100
          </dd>
        </div>
      </dl>
    </figure>
  );
}
