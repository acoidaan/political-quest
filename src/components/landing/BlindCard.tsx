"use client";

import { useEffect, useState } from "react";

/**
 * Tarjeta de ejemplo de la portada: muestra propuestas reales del dataset
 * con el partido oculto, que es exactamente lo que se ve durante el test.
 * Rota cada pocos segundos salvo con prefers-reduced-motion.
 */
export function BlindCard({
  items,
}: {
  items: { id: string; category: string; statement: string }[];
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 4800);
    return () => clearInterval(t);
  }, [items.length]);

  const item = items[i];
  if (!item) return null;

  return (
    <figure
      aria-label="Ejemplo de propuesta tal como aparece en el test"
      className="relative"
    >
      {/* Tarjetas apiladas detrás, decorativas */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rotate-[2.5deg] rounded-2xl border border-line bg-surface/60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-[1deg] rounded-2xl border border-line bg-surface/80"
      />
      <div className="relative rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-[0_20px_50px_-25px_rgba(33,29,24,0.35)]">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="uppercase tracking-[0.2em] text-muted">
            {item.category}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-ink-2">
            <svg viewBox="0 0 16 16" className="w-3 h-3" aria-hidden="true">
              <rect x="3" y="7" width="10" height="7" rx="1.5" fill="currentColor" />
              <path
                d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            Partido oculto
          </span>
        </div>
        <blockquote
          key={item.id}
          className="rise-in font-display text-xl sm:text-2xl leading-snug mt-5 min-h-[5.5rem] text-balance"
        >
          {item.statement}
        </blockquote>
        <div aria-hidden="true" className="mt-7 flex items-center justify-between">
          {[22, 18, 14, 11, 14, 18, 22].map((size, k) => (
            <span
              key={k}
              className="rounded-full border-2 border-ink/30"
              style={{ width: size, height: size }}
            />
          ))}
        </div>
        <div aria-hidden="true" className="mt-2 flex justify-between text-[11px] text-muted">
          <span>En desacuerdo</span>
          <span>De acuerdo</span>
        </div>
        <figcaption className="mt-6 pt-4 border-t border-line text-xs text-muted flex items-center justify-between">
          <span>Propuesta real, redactada de forma neutral</span>
          <span className="flex gap-1" aria-hidden="true">
            {items.map((it, k) => (
              <span
                key={it.id}
                className={`h-1 rounded-full transition-all ${
                  k === i ? "w-4 bg-accent" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
