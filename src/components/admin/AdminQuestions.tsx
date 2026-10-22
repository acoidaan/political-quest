"use client";

import { useMemo, useState } from "react";
import type { AxisId, Question, QuestionStatus } from "@/lib/types";
import { activeQuestions, demoQuestions, verifiedQuestions } from "@/data/questions";
import { CATEGORIES, categoryLabel } from "@/data/categories";
import { PARTIES, PARTY_BY_ID } from "@/data/parties";
import { AXIS_BY_ID } from "@/data/axes";
import { POSITION_LABELS, SOURCE_TYPE_LABELS } from "@/lib/labels";
import { discriminationScore } from "@/lib/scoring";
import { generateBalanceReport } from "@/data/balance";

const STATUSES: QuestionStatus[] = [
  "draft",
  "needs_source",
  "needs_neutrality_review",
  "verified",
  "published",
  "archived",
];

/**
 * Panel de auditoría del dataset. Lectura + exportación: las ediciones se
 * hacen en los archivos de src/data/questions (versionados con git, que actúa
 * como historial de auditoría). El botón de exportar descarga el JSON de la
 * selección para flujos de revisión externos.
 */
export function AdminQuestions() {
  const [status, setStatus] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [party, setParty] = useState<string>("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Question | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return activeQuestions.filter((question) => {
      if (status && question.status !== status) return false;
      if (category && question.category !== category) return false;
      if (party && !question.partyPositions.some((p) => p.party === party))
        return false;
      if (
        q &&
        !question.statement.toLowerCase().includes(q) &&
        !question.id.includes(q)
      )
        return false;
      return true;
    });
  }, [status, category, party, query]);

  const balance = useMemo(() => generateBalanceReport(activeQuestions), []);

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(filtered, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.download = "questions-export.json";
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="font-display text-3xl">Admin · Preguntas</h1>
        <p className="text-xs text-muted">
          {demoQuestions.length} demo · {verifiedQuestions.length} verificadas ·
          discriminación media {balance.meanDiscrimination.toFixed(2)} ·{" "}
          {balance.warnings.length} avisos de balance
        </p>
      </div>

      {balance.warnings.length > 0 && (
        <ul className="mt-3 text-xs text-accent space-y-1">
          {balance.warnings.map((w, i) => (
            <li key={i}>⚠ {w}</li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-3 items-end text-sm">
        <label>
          <span className="block text-xs text-muted mb-1">Estado</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-line rounded bg-surface px-2 py-1.5"
          >
            <option value="">Todos</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="block text-xs text-muted mb-1">Categoría</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-line rounded bg-surface px-2 py-1.5"
          >
            <option value="">Todas</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="block text-xs text-muted mb-1">Partido</span>
          <select
            value={party}
            onChange={(e) => setParty(e.target.value)}
            className="border border-line rounded bg-surface px-2 py-1.5"
          >
            <option value="">Todos</option>
            {PARTIES.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex-1 min-w-40">
          <span className="block text-xs text-muted mb-1">Buscar</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-line rounded bg-surface px-2 py-1.5"
            placeholder="texto o id"
          />
        </label>
        <button
          type="button"
          onClick={exportJson}
          className="border border-line rounded px-3 py-1.5 hover:border-accent transition-colors"
        >
          Exportar JSON ({filtered.length})
        </button>
      </div>

      <div className="mt-4 overflow-x-auto border border-line rounded-lg">
        <table className="w-full text-xs min-w-[720px]">
          <thead className="bg-surface text-left text-muted">
            <tr>
              <th className="px-3 py-2 font-medium">Pregunta</th>
              <th className="px-3 py-2 font-medium">Categoría</th>
              <th className="px-3 py-2 font-medium">Pesos</th>
              <th className="px-3 py-2 font-medium">Partidos</th>
              <th className="px-3 py-2 font-medium">Estado</th>
              <th className="px-3 py-2 font-medium">Discr.</th>
              <th className="px-3 py-2 font-medium">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((q) => (
              <tr
                key={q.id}
                className="border-t border-line hover:bg-accent-soft/20 cursor-pointer"
                onClick={() => setSelected(selected?.id === q.id ? null : q)}
              >
                <td className="px-3 py-2 max-w-md">
                  <span className="text-muted">{q.id}</span> — {q.statement}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {categoryLabel(q.category)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {Object.entries(q.weights)
                    .map(([a, w]) => `${a.slice(0, 4)} ${w > 0 ? "+" : ""}${w}`)
                    .join(", ")}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {q.partyPositions.map((p) => p.party).join(", ") || "—"}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {q.status}
                  {q.demo && <span className="text-accent"> · demo</span>}
                </td>
                <td className="px-3 py-2 tabular-nums">
                  {discriminationScore(q, { allowUnverified: true }).toFixed(2)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{q.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <section
          aria-label={`Detalle de ${selected.id}`}
          className="mt-6 border border-accent/40 rounded-lg p-5 bg-surface text-sm"
        >
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-medium">
              {selected.id} · {categoryLabel(selected.category)}
              {selected.subcategory ? ` / ${selected.subcategory}` : ""}
            </h2>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="text-muted hover:text-accent"
            >
              cerrar ✕
            </button>
          </div>
          <p className="mt-2 text-ink">{selected.statement}</p>
          {selected.explainer ? (
            <p className="mt-1.5 text-xs text-ink-2 leading-relaxed">
              <span className="text-muted">ⓘ </span>
              {selected.explainer}
            </p>
          ) : (
            <p className="mt-1.5 text-xs text-accent">⚠ Sin explicación ⓘ</p>
          )}
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs text-ink-2">
            <dt className="text-muted">Pesos</dt>
            <dd>
              {Object.entries(selected.weights)
                .map(
                  ([a, w]) =>
                    `${AXIS_BY_ID[a as AxisId].label}: ${w > 0 ? "+" : ""}${w}`
                )
                .join(" · ")}
            </dd>
            <dt className="text-muted">Relevancia</dt>
            <dd>{selected.importance}/3 · polaridad {selected.polarity}</dd>
            {selected.relatedTo && selected.relatedTo.length > 0 && (
              <>
                <dt className="text-muted">Pares</dt>
                <dd>
                  {selected.relatedTo
                    .map((r) => `${r.id} (${r.expected})`)
                    .join(", ")}
                </dd>
              </>
            )}
            {selected.methodNotes && (
              <>
                <dt className="text-muted">Notas</dt>
                <dd>{selected.methodNotes}</dd>
              </>
            )}
          </dl>
          <h3 className="mt-4 font-medium text-xs uppercase tracking-wider text-muted">
            Posiciones
          </h3>
          <ul className="mt-2 space-y-2 text-xs">
            {selected.partyPositions.map((p) => (
              <li key={p.party} className="border-l-2 border-line pl-3">
                <strong className="text-ink">
                  {PARTY_BY_ID[p.party]?.name ?? p.party}
                </strong>{" "}
                — {POSITION_LABELS[p.status]} · confianza {p.confidence} ·{" "}
                {SOURCE_TYPE_LABELS[p.source.type]} · {p.source.date} · vigente
                desde {p.validFrom}
                {p.needsVerification && (
                  <span className="text-accent"> · SIN VERIFICAR</span>
                )}
                {p.explanation && (
                  <span className="block text-ink-2">{p.explanation}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            Para editar: modifica el archivo correspondiente en{" "}
            <code>src/data/questions/</code> — git conserva el historial de
            auditoría de cada cambio.
          </p>
        </section>
      )}
    </div>
  );
}
