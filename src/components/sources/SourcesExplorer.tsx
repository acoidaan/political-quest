"use client";

import { useMemo, useState } from "react";
import { activeQuestions } from "@/data/questions";
import { CATEGORIES, categoryLabel } from "@/data/categories";
import { PARTY_BY_ID } from "@/data/parties";
import { POSITION_LABELS, SOURCE_TYPE_LABELS } from "@/lib/labels";
import { AXIS_BY_ID } from "@/data/axes";
import type { AxisId } from "@/lib/types";

/**
 * Base de fuentes consultable (§18): para cada propuesta, su versión neutral,
 * el texto original si existe, y cada posición de partido con documento,
 * fecha, enlace y fecha de verificación.
 */
export function SourcesExplorer() {
  const [category, setCategory] = useState<string>("");
  const [query, setQuery] = useState("");

  const usedCategories = useMemo(() => {
    const used = new Set(activeQuestions.map((q) => q.category));
    return CATEGORIES.filter((c) => used.has(c.id));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return activeQuestions.filter((question) => {
      if (category && question.category !== category) return false;
      if (q && !question.statement.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 items-end">
        <label className="text-sm">
          <span className="block text-xs text-muted mb-1">Categoría</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-line rounded-md bg-surface px-3 py-2"
          >
            <option value="">Todas</option>
            {usedCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm flex-1 min-w-48">
          <span className="block text-xs text-muted mb-1">Buscar</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="texto de la propuesta…"
            className="w-full border border-line rounded-md bg-surface px-3 py-2"
          />
        </label>
        <p className="text-xs text-muted pb-2">
          {filtered.length} de {activeQuestions.length}
        </p>
      </div>

      <ul className="mt-6 space-y-6">
        {filtered.map((question) => (
          <li
            key={question.id}
            className="border border-line rounded-lg bg-surface p-5"
          >
            <div className="flex flex-wrap gap-2 text-xs text-muted mb-2">
              <span className="uppercase tracking-wider">
                {categoryLabel(question.category)}
              </span>
              <span>· id {question.id}</span>
              <span>· estado: {question.status}</span>
              {question.demo && (
                <span className="text-accent font-medium">· DEMO, sin verificar</span>
              )}
            </div>
            <p className="text-ink font-medium">{question.statement}</p>
            {question.explainer && (
              <p className="mt-1.5 text-xs text-ink-2 leading-relaxed">
                <span className="text-muted">ⓘ </span>
                {question.explainer}
              </p>
            )}

            <dl className="mt-3 text-xs text-ink-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
              <dt className="text-muted">Pesos ideológicos</dt>
              <dd>
                {Object.entries(question.weights)
                  .map(
                    ([axis, w]) =>
                      `${AXIS_BY_ID[axis as AxisId].label} ${w > 0 ? "+" : ""}${w}`
                  )
                  .join(" · ")}{" "}
                · relevancia {question.importance}/3
              </dd>
              {question.methodNotes && (
                <>
                  <dt className="text-muted">Nota metodológica</dt>
                  <dd>{question.methodNotes}</dd>
                </>
              )}
            </dl>

            {question.partyPositions.length > 0 && (
              <table className="mt-4 w-full text-xs">
                <caption className="sr-only">
                  Posiciones de partidos sobre esta propuesta
                </caption>
                <thead>
                  <tr className="text-left text-muted border-b border-line">
                    <th className="py-1.5 pr-3 font-medium">Partido</th>
                    <th className="py-1.5 pr-3 font-medium">Posición</th>
                    <th className="py-1.5 pr-3 font-medium">Fuente</th>
                    <th className="py-1.5 pr-3 font-medium">Fecha</th>
                    <th className="py-1.5 font-medium">Verificada</th>
                  </tr>
                </thead>
                <tbody>
                  {question.partyPositions.map((p) => (
                    <tr key={p.party} className="border-b border-line/60 align-top">
                      <td className="py-1.5 pr-3 font-medium text-ink">
                        {PARTY_BY_ID[p.party]?.name ?? p.party}
                      </td>
                      <td className="py-1.5 pr-3">
                        {POSITION_LABELS[p.status]}
                        {p.explanation && (
                          <span className="block text-muted">{p.explanation}</span>
                        )}
                      </td>
                      <td className="py-1.5 pr-3">
                        {SOURCE_TYPE_LABELS[p.source.type]}
                        {p.source.url && (
                          <>
                            {" · "}
                            <a
                              href={p.source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-accent"
                            >
                              enlace
                            </a>
                          </>
                        )}
                        {p.originalText && (
                          <span className="block text-muted italic">
                            «{p.originalText}»
                          </span>
                        )}
                      </td>
                      <td className="py-1.5 pr-3 whitespace-nowrap">
                        {p.source.date}
                      </td>
                      <td className="py-1.5">
                        {p.source.verifiedAt ?? (
                          <span className="text-accent">pendiente</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
