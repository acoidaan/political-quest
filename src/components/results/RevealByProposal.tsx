"use client";

import { useMemo, useState } from "react";
import type { AnswerValue, PartyPosition, Question, QuizSession } from "@/lib/types";
import { POSITION_VALUE } from "@/lib/types";
import { ACTIVE_PARTIES, PARTY_BY_ID } from "@/data/parties";
import { categoryLabel } from "@/data/categories";
import { currentPosition } from "@/lib/scoring";
import { MAX_ANSWER } from "@/lib/scoring/constants";
import { answerLabel, POSITION_LABELS, SOURCE_TYPE_LABELS } from "@/lib/labels";
import { activeQuestions, USING_DEMO_DATA } from "@/data/questions";

const partyColor = (id: string) => `var(--party-${id})`;
const QUESTIONS_BY_ID = new Map(activeQuestions.map((q) => [q.id, q]));
const PREVIEW = 6;

interface Row {
  question: Question;
  user: AnswerValue;
  positions: { position: PartyPosition; value: number; agreement: number }[];
}

/**
 * «¿De quién era cada idea?»: tras la revelación, recorre las propuestas que
 * el usuario respondió y muestra qué partidos las defendían o rechazaban, con
 * cita literal y fuente. Mismo criterio que la similitud: solo posiciones
 * vigentes, verificadas y con postura clara.
 */
export function RevealByProposal({ session }: { session: QuizSession }) {
  const [showAll, setShowAll] = useState(false);
  const [onlyFirm, setOnlyFirm] = useState(false);

  const rows = useMemo(() => buildRows(session), [session]);
  const visibleRows = rows.filter((r) => !onlyFirm || Math.abs(r.user) >= 2);
  const shown = showAll ? visibleRows : visibleRows.slice(0, PREVIEW);

  if (rows.length === 0) return null;

  return (
    <section aria-labelledby="de-quien" className="space-y-5">
      <div>
        <h2 id="de-quien" className="font-display text-3xl">
          ¿De quién era cada idea?
        </h2>
        <p className="mt-2 text-sm text-ink-2 max-w-2xl">
          Las propuestas que has respondido, ahora con nombres. Para cada
          partido, su posición documentada y si coincide con la tuya. Despliega
          cualquiera para leer la cita literal y la fuente.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="text-muted">
          {visibleRows.length} propuestas con posiciones documentadas
        </span>
        <label className="inline-flex items-center gap-2 cursor-pointer text-ink-2">
          <input
            type="checkbox"
            checked={onlyFirm}
            onChange={(e) => setOnlyFirm(e.target.checked)}
            className="accent-[var(--accent)]"
          />
          Solo donde respondí con firmeza
        </label>
      </div>

      <ul className="space-y-3">
        {shown.map((row) => (
          <ProposalRow key={row.question.id} row={row} />
        ))}
      </ul>

      {visibleRows.length > PREVIEW && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="w-full py-3 rounded-lg border border-line text-sm text-ink-2 hover:border-accent hover:text-accent transition-colors"
        >
          {showAll ? "Mostrar menos" : `Ver las ${visibleRows.length} propuestas`}
        </button>
      )}
    </section>
  );
}

function buildRows(session: QuizSession): Row[] {
  const rows: Row[] = [];
  for (const id of session.questionIds) {
    const answer = session.answers[id];
    if (!answer || answer.value === "skipped") continue;
    const user = answer.value;
    const question = QUESTIONS_BY_ID.get(id);
    if (!question) continue;
    const positions = ACTIVE_PARTIES.map((party) => currentPosition(question, party.id))
      .filter(
        (p): p is PartyPosition =>
          p !== undefined &&
          p.status !== "insufficient_evidence" &&
          p.status !== "neutral_or_unclear" &&
          (!p.needsVerification || USING_DEMO_DATA)
      )
      .map((position) => {
        const value =
          position.value ??
          POSITION_VALUE[position.status as keyof typeof POSITION_VALUE];
        const agreement = 1 - Math.abs(user / MAX_ANSWER - value) / 2;
        return { position, value, agreement };
      })
      .sort((a, b) => b.value - a.value);
    if (positions.length === 0) continue;
    rows.push({ question, user, positions });
  }
  return rows;
}

function ProposalRow({ row }: { row: Row }) {
  const [open, setOpen] = useState(false);
  const supporters = row.positions.filter((p) => p.value > 0);
  const opponents = row.positions.filter((p) => p.value < 0);

  return (
    <li className="rounded-xl border border-line bg-surface overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full text-left p-4 sm:p-5 hover:bg-accent-soft/20 transition-colors"
      >
        <div className="flex items-baseline justify-between gap-3 text-xs">
          <span className="uppercase tracking-[0.15em] text-muted">
            {categoryLabel(row.question.category)}
          </span>
          <span className="text-muted shrink-0" aria-hidden="true">
            {open ? "cerrar ▴" : "citas y fuentes ▾"}
          </span>
        </div>
        <p className="mt-1.5 font-display text-lg leading-snug">
          {row.question.statement}
        </p>
        <p className="mt-2 text-sm">
          <span className="text-muted">Tu respuesta: </span>
          <span className="font-medium">{answerLabel(row.user)}</span>
        </p>
        <div className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <Side label="A favor" items={supporters} />
          <Side label="En contra" items={opponents} />
        </div>
      </button>

      {open && (
        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-line space-y-4">
          {row.positions.map(({ position, agreement }) => {
            const party = PARTY_BY_ID[position.party];
            if (!party) return null;
            const s = position.source;
            return (
              <div key={position.party} className="pt-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <Dot id={party.id} />
                  <span className="font-medium">{party.name}</span>
                  <span className="text-ink-2">· {POSITION_LABELS[position.status]}</span>
                  <AgreementTag agreement={agreement} />
                </div>
                {position.originalText && (
                  <blockquote className="mt-2 border-l-2 border-line pl-3 text-sm text-ink-2 italic leading-relaxed">
                    «{position.originalText}»
                  </blockquote>
                )}
                {position.explanation && (
                  <p className="mt-1.5 text-xs text-muted">{position.explanation}</p>
                )}
                <p className="mt-1.5 text-xs text-muted">
                  {SOURCE_TYPE_LABELS[s.type]} · {s.document}
                  {s.page ? ` · pág. ${s.page}` : ""}
                  {s.url && (
                    <>
                      {" · "}
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-accent"
                      >
                        ver fuente
                      </a>
                    </>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </li>
  );
}

function Side({
  label,
  items,
}: {
  label: string;
  items: { position: PartyPosition; agreement: number }[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-muted w-20 shrink-0">{label}</span>
      {items.length === 0 ? (
        <span className="text-muted">—</span>
      ) : (
        items.map(({ position, agreement }) => {
          const party = PARTY_BY_ID[position.party];
          if (!party) return null;
          const match = agreement >= 0.75;
          return (
            <span
              key={position.party}
              title={match ? "Coincide con tu respuesta" : undefined}
              className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs ${
                match ? "border-ink/60 text-ink" : "border-line text-ink-2"
              }`}
            >
              <Dot id={party.id} small />
              {party.name}
              {match && <span aria-label="coincide contigo">✓</span>}
            </span>
          );
        })
      )}
    </div>
  );
}

function AgreementTag({ agreement }: { agreement: number }) {
  if (agreement >= 0.75)
    return <span className="text-xs rounded-full bg-accent-soft px-2 py-0.5 text-ink">coincide contigo</span>;
  if (agreement <= 0.35)
    return <span className="text-xs rounded-full border border-line px-2 py-0.5 text-muted">opuesto a ti</span>;
  return <span className="text-xs rounded-full border border-line px-2 py-0.5 text-muted">a medio camino</span>;
}

function Dot({ id, small = false }: { id: string; small?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block rounded-full shrink-0 ${small ? "w-2 h-2" : "w-3 h-3"}`}
      style={{ background: partyColor(id) }}
    />
  );
}
