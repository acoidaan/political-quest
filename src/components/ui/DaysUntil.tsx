"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};
const today = () => new Date().toISOString().slice(0, 10);

/**
 * Días que faltan hasta una fecha, calculados en el navegador (las páginas son
 * estáticas: en el servidor la cifra quedaría congelada en el día del build).
 */
export function DaysUntil({ date }: { date: string }) {
  const now = useSyncExternalStore(noop, today, () => null);
  if (!now) return null;
  const days = Math.round(
    (Date.parse(`${date}T00:00:00Z`) - Date.parse(`${now}T00:00:00Z`)) / 86_400_000
  );
  if (days < 0) return null;
  return (
    <span>
      {days === 0 ? "Es hoy" : days === 1 ? "Falta 1 día" : `Faltan ${days} días`}
    </span>
  );
}
