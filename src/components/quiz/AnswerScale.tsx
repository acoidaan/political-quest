"use client";

import { useState } from "react";
import type { AnswerValue } from "@/lib/types";
import { ANSWER_SCALE } from "@/lib/labels";

/**
 * Escala Likert visual de 7 puntos: los círculos crecen hacia los extremos
 * para que la intensidad se lea sin texto. Ambos lados usan el mismo color
 * (tinta): ninguna dirección es «la buena». La respuesta elegida se marca con
 * el acento. Teclas 1–7 gestionadas por el contenedor (QuizRunner).
 */

// Diámetro (px) por posición, simétrico.
const SIZES = [46, 38, 30, 24, 30, 38, 46];

export function AnswerScale({
  value,
  pending,
  onPick,
}: {
  value: AnswerValue | "skipped" | undefined;
  /** Valor recién pulsado, antes de avanzar (feedback inmediato). */
  pending: AnswerValue | null;
  onPick: (value: AnswerValue) => void;
}) {
  const [hover, setHover] = useState<AnswerValue | null>(null);
  const shown = hover ?? pending ?? (typeof value === "number" ? value : null);
  const shownLabel =
    shown === null ? null : ANSWER_SCALE.find((o) => o.value === shown)?.label;

  return (
    <div>
      <div
        role="group"
        aria-label="Tu respuesta"
        className="flex items-center justify-between gap-1 sm:gap-3"
        onMouseLeave={() => setHover(null)}
      >
        {ANSWER_SCALE.map((option, i) => {
          const selected = (pending ?? value) === option.value;
          const size = SIZES[i];
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onPick(option.value)}
              onMouseEnter={() => setHover(option.value)}
              onFocus={() => setHover(option.value)}
              onBlur={() => setHover(null)}
              aria-pressed={selected}
              aria-label={`${option.label} (tecla ${i + 1})`}
              className="group relative flex-1 flex flex-col items-center justify-center py-2 rounded-lg"
            >
              <span
                aria-hidden="true"
                className={`block rounded-full border-2 transition-all duration-150 ${
                  selected
                    ? "bg-accent border-accent scale-110 shadow-[0_0_0_6px_var(--accent-soft)]"
                    : "border-ink/35 group-hover:border-accent group-hover:bg-accent-soft group-active:scale-95"
                }`}
                style={{ width: size, height: size }}
              />
              <span
                aria-hidden="true"
                className="hidden sm:block mt-2 text-[11px] tabular-nums text-muted"
              >
                {i + 1}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-2 flex items-start justify-between gap-2 text-xs sm:text-sm text-muted">
        <span className="w-24 sm:w-36 leading-tight">Totalmente en desacuerdo</span>
        <span
          className={`flex-1 text-center font-medium transition-colors ${
            shownLabel ? "text-ink" : "text-muted"
          }`}
          aria-hidden="true"
        >
          {shownLabel ?? "—"}
        </span>
        <span className="w-24 sm:w-36 text-right leading-tight">Totalmente de acuerdo</span>
      </div>
    </div>
  );
}
