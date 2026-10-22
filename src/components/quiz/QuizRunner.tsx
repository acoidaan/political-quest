"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { AnswerValue, PersonalImportance, QuizMode, QuizSession } from "@/lib/types";
import { activeQuestions, USING_DEMO_DATA } from "@/data/questions";
import { categoryLabel } from "@/data/categories";
import { selectQuestions } from "@/lib/scoring";
import { ANSWER_SCALE, MODE_INFO, PERSONAL_IMPORTANCE_LABELS, SKIP_LABEL } from "@/lib/labels";
import {
  clearSession,
  createSession,
  newSeed,
  saveSession,
  useStoredSession,
} from "@/lib/store";

const MODE_FROM_PARAM: Record<string, QuizMode> = {
  rapido: "quick",
  completo: "full",
  exhaustivo: "deep",
};

function startSession(mode: QuizMode): void {
  const seed = newSeed();
  const questions = selectQuestions(activeQuestions, mode, seed, {
    demo: USING_DEMO_DATA,
  });
  saveSession(
    createSession(mode, questions.map((q) => q.id), seed, USING_DEMO_DATA)
  );
}

export function QuizRunner({ modeParam }: { modeParam?: string }) {
  const session = useStoredSession();

  // Autoarranque desde la landing (?modo=…) si no hay sesión previa.
  // Escribe en el store externo (no setState): el hook re-renderiza solo.
  useEffect(() => {
    const mode = modeParam ? MODE_FROM_PARAM[modeParam] : undefined;
    if (mode && session === null) startSession(mode);
  }, [modeParam, session]);

  if (session === undefined) return null; // hidratación: aún no sabemos

  if (session === null) {
    return <ModePicker onPick={startSession} />;
  }

  if (session.finishedAt) {
    return <AlreadyFinished />;
  }

  return <ActiveQuiz session={session} />;
}

// ---------------------------------------------------------------------------

function ActiveQuiz({ session }: { session: QuizSession }) {
  const router = useRouter();
  // -1 = automático: primera pregunta sin responder.
  const [indexOverride, setIndexOverride] = useState(-1);
  const [showImportance, setShowImportance] = useState(false);
  const [showExplainer, setShowExplainer] = useState(false);
  const [selfPlacementPhase, setSelfPlacementPhase] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const questionsById = useMemo(
    () => new Map(activeQuestions.map((q) => [q.id, q])),
    []
  );

  const total = session.questionIds.length;
  const firstUnanswered = session.questionIds.findIndex(
    (id) => !session.answers[id]
  );
  const index =
    indexOverride >= 0
      ? Math.min(indexOverride, total - 1)
      : firstUnanswered === -1
        ? total - 1
        : firstUnanswered;

  if (selfPlacementPhase) {
    return (
      <SelfPlacement
        onDone={(value) => {
          saveSession({
            ...session,
            selfPlacement: value,
            finishedAt: new Date().toISOString(),
          });
          router.push("/resultados");
        }}
      />
    );
  }

  const questionId = session.questionIds[index];
  const question = questionsById.get(questionId);
  if (!question) return null;

  const current = session.answers[questionId];
  const answeredCount = Object.keys(session.answers).length;

  const goTo = (i: number) => {
    setIndexOverride(i);
    setShowImportance(false);
    setShowExplainer(false);
    headingRef.current?.focus();
  };

  const record = (value: AnswerValue | "skipped") => {
    saveSession({
      ...session,
      answers: {
        ...session.answers,
        [questionId]: {
          questionId,
          value,
          personalImportance: current?.personalImportance,
          answeredAt: new Date().toISOString(),
        },
      },
    });
    setShowImportance(false);
    setShowExplainer(false);
    if (index + 1 < total) {
      goTo(index + 1);
    } else {
      setSelfPlacementPhase(true);
    }
  };

  const setImportance = (imp: PersonalImportance) => {
    if (!current) return;
    saveSession({
      ...session,
      answers: {
        ...session.answers,
        [questionId]: { ...current, personalImportance: imp },
      },
    });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8 sm:py-14">
      {/* Progreso discreto (§55): sin puntuaciones provisionales. */}
      <div className="flex items-center justify-between text-sm text-muted mb-2">
        <span>
          {index + 1} / {total}
        </span>
        <span aria-hidden="true">Tu mapa se está definiendo</span>
      </div>
      <div
        className="h-1 bg-track rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={answeredCount}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label="Progreso del test"
      >
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${(answeredCount / total) * 100}%` }}
        />
      </div>

      <div key={question.id} className="rise-in mt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {categoryLabel(question.category)}
        </p>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-2xl sm:text-3xl leading-snug mt-3 outline-none"
        >
          {question.statement}
        </h1>

        {question.explainer && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowExplainer((v) => !v)}
              aria-expanded={showExplainer}
              aria-controls={`explainer-${question.id}`}
              className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                showExplainer ? "text-accent" : "text-muted hover:text-accent"
              }`}
            >
              <svg
                viewBox="0 0 16 16"
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <circle cx="8" cy="4.7" r="1" fill="currentColor" />
                <rect x="7.2" y="6.8" width="1.6" height="5" rx="0.8" fill="currentColor" />
              </svg>
              ¿Qué significa esta pregunta?
            </button>
            {showExplainer && (
              <div
                id={`explainer-${question.id}`}
                className="rise-in mt-2 border-l-2 border-accent/50 bg-surface rounded-r-md pl-4 pr-3 py-3 text-sm text-ink-2 leading-relaxed"
              >
                {question.explainer}
                <p className="mt-2 text-xs text-muted">
                  Explicación neutral: describe la propuesta y sus dos caras, no
                  sugiere respuesta.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 grid gap-2" role="group" aria-label="Tu respuesta">
          {ANSWER_SCALE.map((option) => {
            const active = current?.value === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => record(option.value)}
                aria-pressed={active}
                className={`text-left px-4 py-3 rounded-md border transition-colors ${
                  active
                    ? "border-accent bg-accent-soft/50 text-ink"
                    : "border-line bg-surface hover:border-accent/60"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <button
            type="button"
            onClick={() => record("skipped")}
            className={`underline decoration-dotted underline-offset-4 transition-colors ${
              current?.value === "skipped"
                ? "text-accent"
                : "text-muted hover:text-accent"
            }`}
          >
            {SKIP_LABEL}
          </button>
          <button
            type="button"
            onClick={() => setShowImportance((v) => !v)}
            aria-expanded={showImportance}
            className="text-muted hover:text-accent transition-colors"
          >
            ¿Importancia del tema? {current?.personalImportance ? "·" : "+"}
          </button>
        </div>

        {showImportance && (
          <div
            className="mt-3 border border-line rounded-md p-3 bg-surface text-sm"
            role="group"
            aria-label="Qué importancia tiene este tema para ti"
          >
            <p className="text-ink-2 mb-2">
              ¿Qué importancia tiene este tema para ti? (opcional; pondera
              ligeramente tu resultado)
            </p>
            <div className="flex gap-2">
              {(Object.keys(PERSONAL_IMPORTANCE_LABELS) as PersonalImportance[]).map(
                (imp) => (
                  <button
                    key={imp}
                    type="button"
                    onClick={() => setImportance(imp)}
                    aria-pressed={current?.personalImportance === imp}
                    disabled={!current}
                    className={`px-3 py-1.5 rounded-full border transition-colors disabled:opacity-40 ${
                      current?.personalImportance === imp
                        ? "border-accent bg-accent-soft/50"
                        : "border-line hover:border-accent/60"
                    }`}
                  >
                    {PERSONAL_IMPORTANCE_LABELS[imp]}
                  </button>
                )
              )}
            </div>
            {!current && (
              <p className="mt-2 text-xs text-muted">
                Responde primero a la pregunta.
              </p>
            )}
          </div>
        )}

        <div className="mt-10 flex items-center justify-between text-sm">
          <button
            type="button"
            onClick={() => index > 0 && goTo(index - 1)}
            disabled={index === 0}
            className="text-ink-2 hover:text-accent transition-colors disabled:opacity-30"
          >
            ← Anterior
          </button>
          <button
            type="button"
            onClick={() => {
              clearSession();
            }}
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            Empezar de nuevo
          </button>
          {current && index + 1 < total ? (
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="text-ink-2 hover:text-accent transition-colors"
            >
              Siguiente →
            </button>
          ) : (
            <span aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

function ModePicker({ onPick }: { onPick: (mode: QuizMode) => void }) {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16">
      <h1 className="font-display text-3xl sm:text-4xl">Elige tu test</h1>
      <p className="mt-3 text-ink-2">
        Durante el cuestionario nunca verás qué partido propone cada medida.
        Puedes cambiar tus respuestas con «Anterior» y usar «{SKIP_LABEL}»
        cuando lo necesites: esa opción no cuenta como neutral, simplemente
        excluye la pregunta.
      </p>
      <div className="mt-8 grid gap-3">
        {(["quick", "full", "deep"] as QuizMode[]).map((mode) => {
          const info = MODE_INFO[mode];
          return (
            <button
              key={mode}
              type="button"
              onClick={() => onPick(mode)}
              className="text-left border border-line rounded-lg p-5 bg-surface hover:border-accent transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-medium">{info.label}</span>
                <span className="text-sm text-muted">
                  {info.count} preguntas · {info.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-2">{info.blurb}</p>
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-muted">
        Tus respuestas se guardan solo en este dispositivo.{" "}
        <Link href="/privacidad" className="underline hover:text-accent">
          Más sobre privacidad
        </Link>
        .
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------

function AlreadyFinished() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center">
      <h1 className="font-display text-3xl">Ya completaste un test</h1>
      <p className="mt-3 text-ink-2">
        Puedes ver tus resultados o empezar uno nuevo (se borrará el anterior).
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/resultados"
          className="px-6 py-3 rounded-md bg-ink text-paper hover:bg-accent transition-colors"
        >
          Ver mis resultados
        </Link>
        <button
          type="button"
          onClick={() => clearSession()}
          className="px-6 py-3 rounded-md border border-line hover:border-accent transition-colors"
        >
          Empezar de nuevo
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

/**
 * Autopercepción (§14): opcional, se guarda aparte y solo se usa como
 * elemento descriptivo en los resultados. Nunca altera las puntuaciones.
 */
function SelfPlacement({ onDone }: { onDone: (value?: number) => void }) {
  const [value, setValue] = useState(5.5);
  const [touched, setTouched] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 rise-in">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">
        Última pregunta, opcional
      </p>
      <h1 className="font-display text-2xl sm:text-3xl mt-3 leading-snug">
        Antes de ver tu resultado: ¿dónde dirías que estás políticamente?
      </h1>
      <p className="mt-3 text-ink-2 text-sm">
        Tu intuición no cambia el resultado; después la comparamos con lo que
        has respondido.
      </p>
      <div className="mt-10">
        <label htmlFor="self" className="sr-only">
          De 1 (izquierda) a 10 (derecha)
        </label>
        <input
          id="self"
          type="range"
          min={1}
          max={10}
          step={0.5}
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
            setTouched(true);
          }}
          className="w-full accent-[var(--accent)]"
        />
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>1 · Izquierda</span>
          <span
            className={`font-medium text-base ${touched ? "text-accent" : "text-muted"}`}
            aria-live="polite"
          >
            {touched ? value.toFixed(1) : "—"}
          </span>
          <span>10 · Derecha</span>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onDone(touched ? value : undefined)}
          className="px-6 py-3 rounded-md bg-ink text-paper hover:bg-accent transition-colors"
        >
          Ver mi resultado
        </button>
        <button
          type="button"
          onClick={() => onDone(undefined)}
          className="px-6 py-3 rounded-md border border-line hover:border-accent transition-colors"
        >
          Prefiero no decirlo
        </button>
      </div>
    </div>
  );
}
