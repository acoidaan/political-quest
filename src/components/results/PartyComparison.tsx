"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PartySimilarity } from "@/lib/types";
import { activeQuestions, USING_DEMO_DATA } from "@/data/questions";
import { ACTIVE_PARTIES, PARTY_BY_ID } from "@/data/parties";
import { categoryLabel } from "@/data/categories";
import {
  calculatePartyAxisScores,
  calculatePartySimilarity,
  computeQuizResult,
} from "@/lib/scoring";
import { saveSession, useStoredSession } from "@/lib/store";
import { answerLabel, POSITION_LABELS, SOURCE_TYPE_LABELS } from "@/lib/labels";
import { Compass2D, compassFromAxes, type CompassPoint } from "@/components/charts/Compass2D";
import { DemoBanner } from "@/components/ui/DemoBanner";
import { RevealByProposal } from "./RevealByProposal";

/** Var CSS del color de cada partido (validado en claro y oscuro). */
const partyColor = (id: string) => `var(--party-${id})`;

export function PartyComparison() {
  const session = useStoredSession();
  // gate → predict → (session.prediction definida) revelación
  const [stage, setStage] = useState<"gate" | "predict">("gate");

  const data = useMemo(() => {
    if (session === undefined || !session?.finishedAt) return null;
    const byId = new Map(activeQuestions.map((q) => [q.id, q]));
    const questions = session.questionIds
      .map((id) => byId.get(id))
      .filter((q): q is NonNullable<typeof q> => q !== undefined);
    const result = computeQuizResult(session, activeQuestions);
    const similarities = ACTIVE_PARTIES.map((party) =>
      calculatePartySimilarity(questions, session.answers, party.id, {
        allowUnverified: USING_DEMO_DATA,
      })
    ).sort((a, b) => b.similarity - a.similarity);
    const partyCompass = ACTIVE_PARTIES.map((party) => {
      const axes = calculatePartyAxisScores(activeQuestions, party.id, {
        allowUnverified: USING_DEMO_DATA,
      });
      const c = compassFromAxes(axes);
      return { party, x: c.x, y: c.y };
    });
    return { result, similarities, partyCompass };
  }, [session]);

  if (session === undefined) return null; // hidratación: aún no sabemos

  if (!data) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center">
        <h1 className="font-display text-3xl">Primero, el test</h1>
        <p className="mt-3 text-ink-2">
          La comparación con partidos solo tiene sentido después de responder.
        </p>
        <Link
          href="/test"
          className="mt-8 inline-block bg-ink text-paper px-6 py-3 rounded-md hover:bg-accent transition-colors"
        >
          Empezar el test
        </Link>
      </div>
    );
  }

  if (session && session.prediction === undefined) {
    if (stage === "gate") {
      return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-20 sm:py-24 text-center rise-in">
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            Comparación opcional
          </p>
          <h1 className="font-display text-3xl sm:text-5xl mt-4 leading-tight text-balance">
            Ha llegado el momento de levantar el velo
          </h1>
          <p className="mt-5 text-ink-2 text-lg">
            Hasta aquí has juzgado ideas sin siglas. Ahora verás qué partidos
            defendían cada propuesta y cuáles se acercan más y menos a tus
            respuestas, con sus fuentes.
          </p>
          <p className="mt-3 text-sm text-muted">
            Coincidencia programática no significa intención de voto ni apoyo a
            un partido.
          </p>
          <button
            type="button"
            onClick={() => setStage("predict")}
            className="mt-9 bg-ink text-paper px-8 py-4 rounded-lg text-lg hover:bg-accent transition-colors"
          >
            Continuar
          </button>
          <div className="mt-6">
            <Link
              href="/resultados"
              className="text-sm text-ink-2 underline decoration-dotted underline-offset-4 hover:text-accent"
            >
              ← Volver a mis resultados
            </Link>
          </div>
        </div>
      );
    }
    const choose = (prediction: string) => saveSession({ ...session, prediction });
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-20 sm:py-24 text-center rise-in">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">
          Antes de mirar
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mt-4 leading-snug text-balance">
          ¿Con qué partido crees que coincidirán más tus respuestas?
        </h1>
        <p className="mt-4 text-ink-2">
          Solo es un juego: tu predicción no cambia ningún cálculo. Después
          verás si tu intuición acierta.
        </p>
        <div className="mt-9 grid grid-cols-2 gap-3 max-w-md mx-auto">
          {[...ACTIVE_PARTIES]
            .sort((a, b) => a.name.localeCompare(b.name, "es"))
            .map((party) => (
              <button
                key={party.id}
                type="button"
                onClick={() => choose(party.id)}
                className="px-4 py-4 rounded-lg border border-line bg-surface font-medium hover:border-accent hover:-translate-y-0.5 transition-all"
              >
                {party.name}
              </button>
            ))}
        </div>
        <button
          type="button"
          onClick={() => choose("none")}
          className="mt-5 text-sm text-ink-2 underline decoration-dotted underline-offset-4 hover:text-accent"
        >
          Prefiero no adivinar
        </button>
      </div>
    );
  }

  const userCompass = compassFromAxes(data.result.axes);
  const compassPoints: CompassPoint[] = [
    {
      id: "user",
      label: "TÚ",
      x: userCompass.x,
      y: userCompass.y,
      color: "var(--accent)",
      emphasize: true,
    },
    ...data.partyCompass.map(({ party, x, y }) => ({
      id: party.id,
      label: party.name,
      x,
      y,
      color: partyColor(party.id),
    })),
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 space-y-12 rise-in">
      {USING_DEMO_DATA && <DemoBanner />}

      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-muted">
          Coincidencia programática
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mt-3">
          Tus respuestas, frente a los programas
        </h1>
        <p className="mt-3 text-ink-2 text-sm max-w-2xl">
          Para cada partido solo se comparan las cuestiones donde respondiste
          con la escala y existe una posición documentada. Un partido sin
          posición en una pregunta no queda penalizado: simplemente esa pregunta
          no cuenta para él.
        </p>
      </header>

      <PredictionOutcome
        prediction={session?.prediction}
        similarities={data.similarities}
      />

      <section aria-label="Coincidencia por partido" className="space-y-4">
        {data.similarities.map((sim, i) => (
          <PartyCard key={sim.party} sim={sim} rank={i} />
        ))}
      </section>

      {session && <RevealByProposal session={session} />}

      <section aria-labelledby="mapa2d">
        <h2 id="mapa2d" className="font-display text-2xl mb-4">
          Todos en el mismo mapa
        </h2>
        <Compass2D
          points={compassPoints}
          userUncertainty={{ x: userCompass.ux, y: userCompass.uy }}
        />
        <p className="text-xs text-muted text-center mt-2 max-w-md mx-auto">
          Posiciones de partidos estimadas aplicando el mismo motor de
          puntuación a sus posiciones documentadas
          {USING_DEMO_DATA ? " (demo, sin verificar)" : ""}.
        </p>
      </section>

      <section className="text-xs text-muted space-y-1.5 border-t border-line pt-6">
        <p>Coincidencia programática no significa intención de voto ni apoyo al partido.</p>
        <p>
          Las posiciones corresponden principalmente al ciclo electoral
          2023-2026 y pueden cambiar; cada una está fechada en{" "}
          <Link href="/fuentes" className="underline hover:text-accent">
            fuentes
          </Link>
          .
        </p>
        <p>
          <Link href="/resultados" className="underline hover:text-accent">
            ← Volver a mis resultados
          </Link>
        </p>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------

function PartyCard({ sim, rank }: { sim: PartySimilarity; rank: number }) {
  const [open, setOpen] = useState(false);
  const party = PARTY_BY_ID[sim.party];
  if (!party) return null;

  const noData = sim.comparableCount === 0;

  return (
    <article
      className="border border-line rounded-xl bg-surface overflow-hidden rise-in"
      style={{ animationDelay: `${rank * 80}ms`, animationFillMode: "both" }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full text-left px-5 py-4 hover:bg-accent-soft/20 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-block w-3.5 h-3.5 rounded-full shrink-0"
            style={{ background: partyColor(party.id) }}
          />
          <span className="font-medium">{party.name}</span>
          <span className="hidden sm:inline text-xs text-muted">{party.fullName}</span>
          <span className="ml-auto font-display text-2xl tabular-nums">
            {noData ? "—" : `${Math.round(sim.similarity)}%`}
          </span>
        </div>
        <div className="mt-1 flex items-start justify-between gap-3 text-xs text-muted">
          <span>
            {noData
              ? "Sin posiciones comparables con tus respuestas"
              : `Coincidencia en las cuestiones comparables · ${sim.comparableCount} de ${sim.totalAnswered} respondidas · ±${Math.round(sim.uncertainty)}`}
          </span>
          <span aria-hidden="true" className="shrink-0 whitespace-nowrap">
            {open ? "cerrar ▴" : "ver por qué ▾"}
          </span>
        </div>
        {!noData && (
          <div
            className="mt-2 h-1.5 bg-track rounded-full overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="h-full rounded-full grow-x"
              style={{
                width: `${sim.similarity}%`,
                background: partyColor(party.id),
                animationDelay: `${150 + rank * 120}ms`,
              }}
            />
          </div>
        )}
      </button>

      {open && !noData && (
        <div className="px-5 pb-5 border-t border-line pt-4 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium mb-1.5">Coincidís especialmente en</h3>
              {sim.topAgreements.length === 0 ? (
                <p className="text-muted">Nada destacable.</p>
              ) : (
                <ul className="space-y-1 text-ink-2">
                  {sim.topAgreements.map((c) => (
                    <li key={c.category} className="flex justify-between gap-2">
                      <span>{categoryLabel(c.category)}</span>
                      <span className="tabular-nums text-muted">
                        {Math.round(c.agreement * 100)}% · {c.n} preg.
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h3 className="font-medium mb-1.5">Diferís especialmente en</h3>
              {sim.topDisagreements.length === 0 ? (
                <p className="text-muted">Nada destacable.</p>
              ) : (
                <ul className="space-y-1 text-ink-2">
                  {sim.topDisagreements.map((c) => (
                    <li key={c.category} className="flex justify-between gap-2">
                      <span>{categoryLabel(c.category)}</span>
                      <span className="tabular-nums text-muted">
                        {Math.round(c.agreement * 100)}% · {c.n} preg.
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <details className="text-sm">
            <summary className="cursor-pointer text-ink-2 hover:text-accent transition-colors">
              Pregunta a pregunta ({sim.perQuestion.length})
            </summary>
            <ul className="mt-3 space-y-4">
              {sim.perQuestion.map((c) => {
                const question = activeQuestions.find(
                  (q) => q.id === c.questionId
                );
                return (
                  <li key={c.questionId} className="border-l-2 border-line pl-3">
                    <p className="text-ink">{question?.statement}</p>
                    <dl className="mt-1.5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-xs">
                      <dt className="text-muted">Tu respuesta</dt>
                      <dd className="text-ink-2">{answerLabel(c.userValue)}</dd>
                      <dt className="text-muted">Posición del partido</dt>
                      <dd className="text-ink-2">
                        {POSITION_LABELS[c.partyStatus]}
                        {c.explanation ? ` — ${c.explanation}` : ""}
                      </dd>
                      <dt className="text-muted">Fuente</dt>
                      <dd className="text-ink-2">
                        {SOURCE_TYPE_LABELS[c.source.type]} · {c.source.document}
                        {c.source.page ? ` · pág. ${c.source.page}` : ""} ·{" "}
                        {c.source.date}
                        {c.source.url && (
                          <>
                            {" · "}
                            <a
                              href={c.source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-accent"
                            >
                              Ver fuente
                            </a>
                          </>
                        )}
                      </dd>
                    </dl>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
      )}
    </article>
  );
}

// ---------------------------------------------------------------------------

/**
 * Resultado del juego de predicción. Si la diferencia entre los dos primeros
 * es menor que su incertidumbre, se dice: no hay un «ganador» claro.
 */
function PredictionOutcome({
  prediction,
  similarities,
}: {
  prediction: string | undefined;
  similarities: PartySimilarity[];
}) {
  const ranked = similarities.filter((s) => s.comparableCount > 0);
  if (ranked.length === 0) return null;
  const [first, second] = ranked;
  const tie =
    second !== undefined &&
    first.similarity - second.similarity <
      Math.max(first.uncertainty, second.uncertainty);
  const predictedIndex = ranked.findIndex((s) => s.party === prediction);
  const predictedName = prediction ? PARTY_BY_ID[prediction]?.name : undefined;

  let headline: string;
  if (!predictedName) {
    headline = `Tus respuestas coinciden más con ${PARTY_BY_ID[first.party]?.name}.`;
  } else if (predictedIndex === 0) {
    headline = `Acertaste: ${predictedName} es el partido que más coincide con tus respuestas.`;
  } else if (tie && predictedIndex === 1) {
    headline = `Casi: apostaste por ${predictedName}, que queda segundo en empate técnico con ${PARTY_BY_ID[first.party]?.name}.`;
  } else if (predictedIndex > 0) {
    headline = `Apostaste por ${predictedName}, pero queda en ${predictedIndex + 1}.ª posición. El que más coincide es ${PARTY_BY_ID[first.party]?.name}.`;
  } else {
    headline = `Apostaste por ${predictedName}, pero no hay posiciones comparables con tus respuestas.`;
  }

  return (
    <div className="rounded-xl border border-accent/40 bg-accent-soft/40 p-5 rise-in">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">
        {predictedName ? "Tu predicción" : "Resultado"}
      </p>
      <p className="mt-1.5 font-display text-xl sm:text-2xl leading-snug">{headline}</p>
      {tie && (
        <p className="mt-2 text-sm text-ink-2">
          Ojo: entre {PARTY_BY_ID[first.party]?.name} y{" "}
          {PARTY_BY_ID[second.party]?.name} la diferencia es menor que el margen
          de incertidumbre. Es un empate técnico.
        </p>
      )}
    </div>
  );
}
