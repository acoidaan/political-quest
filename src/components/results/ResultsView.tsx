"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { QuizResult } from "@/lib/types";
import { activeQuestions, USING_DEMO_DATA } from "@/data/questions";
import { categoryLabel } from "@/data/categories";
import { computeQuizResult } from "@/lib/scoring";
import { useStoredSession } from "@/lib/store";
import { generateProfileSummary, findContrasts } from "@/lib/profile";
import { AxisBar } from "@/components/charts/AxisBar";
import { RadarChart } from "@/components/charts/RadarChart";
import { Compass2D, compassFromAxes } from "@/components/charts/Compass2D";
import { SelfVsResult } from "@/components/charts/SelfVsResult";
import { DemoBanner } from "@/components/ui/DemoBanner";
import { downloadShareCard } from "./shareCard";

export function ResultsView() {
  const session = useStoredSession();

  const result: QuizResult | null = useMemo(() => {
    if (!session?.finishedAt) return null;
    return computeQuizResult(session, activeQuestions);
  }, [session]);

  if (session === undefined) return null; // hidratación: aún no sabemos

  if (!result) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center">
        <h1 className="font-display text-3xl">Aún no hay resultados</h1>
        <p className="mt-3 text-ink-2">
          Completa el test para ver tu mapa político.
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

  const lr = result.leftRight;
  const compass = compassFromAxes(result.axes);
  const contrasts = findContrasts(result);
  const insufficient = result.answeredCount < 10;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 space-y-14">
      {USING_DEMO_DATA && <DemoBanner compact />}

      {/* ------------------------------------------------ cabecera */}
      <header className="text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">
          Tu mapa político
        </p>
        <div className="mt-6 font-display text-6xl sm:text-7xl tabular-nums tracking-tight">
          {Math.round(lr.display)}
          <span className="text-2xl text-muted"> / 100</span>
        </div>
        <p className="mt-2 text-lg text-ink-2">
          ± {Math.round(lr.uncertainty)} ·{" "}
          <span className="text-ink font-medium">{lr.band}</span>
        </p>
        <p className="mt-4 text-sm text-ink-2 max-w-xl mx-auto">
          Tus respuestas se sitúan generalmente en{" "}
          <strong className="font-medium text-ink">{lr.band}</strong> en este
          conjunto de cuestiones (0 = izquierda, 100 = derecha). Es una
          descripción de tus respuestas, no una etiqueta sobre ti.
        </p>
        {insufficient && (
          <p className="mt-3 text-sm text-accent">
            Has respondido pocas preguntas con la escala; el margen de
            incertidumbre es grande.
          </p>
        )}
        <p className="mt-2 text-xs text-muted">
          {result.answeredCount} respondidas · {result.skippedCount} sin
          información suficiente
        </p>
      </header>

      {/* ------------------------------------------------ autopercepción */}
      {result.selfPlacement !== undefined && (
        <section aria-labelledby="autoper">
          <h2 id="autoper" className="font-display text-2xl mb-4">
            Tu intuición frente a tus respuestas
          </h2>
          <SelfVsResult
            selfPlacement={result.selfPlacement}
            result={lr.display}
            uncertainty={lr.uncertainty}
          />
        </section>
      )}

      {/* ------------------------------------------------ ejes */}
      <section aria-labelledby="ejes">
        <h2 id="ejes" className="font-display text-2xl mb-1">
          Tus siete ejes
        </h2>
        <p className="text-sm text-ink-2 mb-6">
          Cada eje es independiente. La banda sombreada es el intervalo de
          incertidumbre: cuanto más ancha, menos seguro es el punto.
        </p>
        <div className="grid gap-5">
          {result.axes.map((axis) => (
            <AxisBar key={axis.axis} score={axis} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ radar + mapa */}
      <section className="grid sm:grid-cols-2 gap-10 items-start" aria-label="Gráficos de resumen">
        <div>
          <h2 className="font-display text-2xl mb-4">En un vistazo</h2>
          <RadarChart scores={result.axes} />
        </div>
        <div>
          <h2 className="font-display text-2xl mb-4">El mapa 2D</h2>
          <Compass2D
            points={[
              {
                id: "user",
                label: "TÚ",
                x: compass.x,
                y: compass.y,
                color: "var(--accent)",
                emphasize: true,
              },
            ]}
            userUncertainty={{ x: compass.ux, y: compass.uy }}
          />
        </div>
      </section>

      {/* ------------------------------------------------ perfil */}
      <section aria-labelledby="perfil">
        <h2 id="perfil" className="font-display text-2xl mb-3">
          Lectura de tu perfil
        </h2>
        <p className="text-ink-2 leading-relaxed">{generateProfileSummary(result)}</p>
        {contrasts.length > 0 && (
          <div className="mt-5 border-l-2 border-accent pl-4">
            <h3 className="font-medium">Tu perfil no encaja en una sola etiqueta</h3>
            <ul className="mt-2 space-y-2 text-sm text-ink-2">
              {contrasts.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
        {result.consistency.pairsEvaluated > 0 &&
          result.consistency.inconsistency > 0.35 && (
            <p className="mt-4 text-sm text-muted">
              Algunas parejas de preguntas relacionadas recibieron respuestas en
              tensión; por eso tu intervalo de incertidumbre es más amplio. No
              es un error: las posiciones matizadas existen.
            </p>
          )}
      </section>

      {/* ------------------------------------------------ convicciones */}
      <section className="grid sm:grid-cols-2 gap-10" aria-label="Convicciones y zonas grises">
        <div>
          <h2 className="font-display text-2xl mb-1">Tus posiciones más claras</h2>
          <p className="text-xs text-muted mb-4">
            Intensidad de tu respuesta (−100 a +100), no izquierda/derecha.
          </p>
          {result.convictions.length === 0 ? (
            <p className="text-sm text-ink-2">
              No respondiste con contundencia a ninguna pregunta.
            </p>
          ) : (
            <ul className="space-y-3">
              {result.convictions.map((c) => (
                <li key={c.questionId} className="text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-xs uppercase tracking-wider text-muted">
                      {categoryLabel(c.category)}
                    </span>
                    <span className="font-display text-lg tabular-nums">
                      {c.intensity > 0 ? "+" : ""}
                      {c.intensity}
                    </span>
                  </div>
                  <p className="text-ink-2 mt-0.5">{c.statement}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2 className="font-display text-2xl mb-1">Donde eres más centrista</h2>
          <p className="text-xs text-muted mb-4">
            Respuestas neutras, condicionales o poco intensas.
          </p>
          {result.centrist.length === 0 ? (
            <p className="text-sm text-ink-2">
              Respondiste con intensidad a casi todo.
            </p>
          ) : (
            <ul className="space-y-3">
              {result.centrist.map((c) => (
                <li key={c.questionId} className="text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-xs uppercase tracking-wider text-muted">
                      {categoryLabel(c.category)}
                    </span>
                    <span className="font-display text-lg tabular-nums">
                      {c.intensity > 0 ? "+" : ""}
                      {c.intensity}
                    </span>
                  </div>
                  <p className="text-ink-2 mt-0.5">{c.statement}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ------------------------------------------------ compartir + partidos */}
      <section className="border-t border-line pt-10 text-center space-y-6">
        <div>
          <h2 className="font-display text-2xl">¿Y los partidos?</h2>
          <p className="mt-2 text-ink-2 text-sm max-w-lg mx-auto">
            Si quieres, comparamos tus respuestas con posiciones públicas de
            partidos. Hasta ahora no ha aparecido ninguna sigla: así juzgaste
            solo las ideas.
          </p>
          <Link
            href="/resultados/partidos"
            className="mt-5 inline-block bg-ink text-paper px-7 py-3.5 rounded-md hover:bg-accent transition-colors"
          >
            Comparar con programas políticos
          </Link>
        </div>
        <div>
          <button
            type="button"
            onClick={() => downloadShareCard(result)}
            className="text-sm text-ink-2 underline decoration-dotted underline-offset-4 hover:text-accent transition-colors"
          >
            Descargar tarjeta «Mi mapa político» (imagen)
          </button>
          <p className="mt-1 text-xs text-muted">
            La tarjeta solo incluye tus ejes; nunca menciona partidos.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ notas metodológicas */}
      <section className="text-xs text-muted space-y-1.5 border-t border-line pt-6">
        <p>Este resultado describe similitud entre respuestas, no tu identidad política.</p>
        <p>Los ejes políticos son simplificaciones útiles, no verdades.</p>
        <p>
          Las posiciones de partidos se basan en fuentes públicas fechadas y un
          partido puede cambiar de posición con el tiempo.
        </p>
        <p>
          <Link href="/metodologia" className="underline hover:text-accent">
            Cómo se calcula todo esto
          </Link>
        </p>
      </section>
    </div>
  );
}
