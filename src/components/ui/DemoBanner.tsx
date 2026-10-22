/**
 * Aviso permanente mientras la app funcione con el dataset demo (§63).
 * Debe aparecer en toda superficie que muestre partidos, posiciones o fuentes.
 */
export function DemoBanner({ compact = false }: { compact?: boolean }) {
  return (
    <div
      role="note"
      className={`border border-accent/40 bg-accent-soft/40 rounded-md text-ink-2 ${
        compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"
      }`}
    >
      <strong className="text-ink">Datos de demostración.</strong> Las posiciones
      de partidos de esta versión son provisionales y{" "}
      <strong className="text-ink">no están verificadas</strong> con fuentes
      primarias. Sirven para probar la aplicación; no las cites como posiciones
      reales. La verificación documental es la Fase 2 del proyecto (ver{" "}
      <a href="/metodologia" className="underline hover:text-accent">
        metodología
      </a>
      ).
    </div>
  );
}
