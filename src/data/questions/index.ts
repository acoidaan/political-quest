import type { Question } from "@/lib/types";
import { DEMO_ECONOMIA } from "./demo/economia";
import { DEMO_SOCIEDAD } from "./demo/sociedad";
import { DEMO_LIBERTADES } from "./demo/libertades";
import { DEMO_TERRITORIO_EXTERIOR } from "./demo/territorio-exterior";
import { DEMO_EQUILIBRIO } from "./demo/equilibrio";
import { VERIFIED_ECONOMIA } from "./verified/economia";
import { VERIFIED_SOCIEDAD } from "./verified/sociedad";
import { VERIFIED_LIBERTADES } from "./verified/libertades";
import { VERIFIED_TERRITORIO_EXTERIOR } from "./verified/territorio-exterior";
import { DEMO_EXPLAINERS } from "./explainers";

/**
 * Datasets ESTRICTAMENTE separados (§63 del briefing).
 *
 * - demoQuestions: fixture de desarrollo con posiciones NO verificadas.
 *   Ya no alimenta la aplicación; se conserva como banco de pruebas.
 * - verifiedQuestions: pool de producción (Fase 2). Cada posición de partido
 *   cita programa electoral oficial 23J-2023, página del PDF y fragmento
 *   literal, con fecha de verificación; la ausencia de evidencia se registra
 *   explícitamente como insufficient_evidence y NO puntúa en la comparación.
 *   Las preguntas sin ninguna posición atribuible puntúan solo en ejes.
 *
 * El contenido editorial (redacción neutral, pesos, polaridad, pares de
 * consistencia y explicación ⓘ) es común a ambos pools; las atribuciones a
 * partidos son independientes por pool y jamás se mezclan.
 */

const withExplainer = (qs: Question[]): Question[] =>
  qs.map((q) => ({ ...q, explainer: DEMO_EXPLAINERS[q.id] }));

export const demoQuestions: Question[] = withExplainer([
  ...DEMO_ECONOMIA,
  ...DEMO_SOCIEDAD,
  ...DEMO_LIBERTADES,
  ...DEMO_TERRITORIO_EXTERIOR,
  ...DEMO_EQUILIBRIO,
]);

export const verifiedQuestions: Question[] = withExplainer([
  ...VERIFIED_ECONOMIA,
  ...VERIFIED_SOCIEDAD,
  ...VERIFIED_LIBERTADES,
  ...VERIFIED_TERRITORIO_EXTERIOR,
]);

/** Pool activo de la aplicación: verificado en cuanto existe. */
export const USING_DEMO_DATA = verifiedQuestions.length === 0;
export const activeQuestions: Question[] = USING_DEMO_DATA
  ? demoQuestions
  : verifiedQuestions;

/** Etiqueta del ciclo temporal de las posiciones del pool activo (§21). */
export const POSITIONS_CYCLE_LABEL =
  "Posiciones correspondientes principalmente al ciclo electoral 2023-2026 (programas del 23J-2023).";

// ---------------------------------------------------------------------------
// Validaciones estructurales en tiempo de carga (fallan el build si se violan).
// ---------------------------------------------------------------------------

function validatePool(pool: Question[], label: string): Set<string> {
  const ids = new Set<string>();
  for (const q of pool) {
    if (ids.has(q.id)) throw new Error(`[${label}] Pregunta duplicada: ${q.id}`);
    ids.add(q.id);
    if (!q.explainer)
      throw new Error(`[${label}] Pregunta sin explicación cotidiana (ⓘ): ${q.id}`);
  }
  for (const q of pool) {
    for (const rel of q.relatedTo ?? []) {
      if (!ids.has(rel.id))
        throw new Error(`[${label}] relatedTo roto: ${q.id} → ${rel.id}`);
    }
  }
  return ids;
}

validatePool(demoQuestions, "demo");
for (const q of demoQuestions) {
  if (!q.demo) throw new Error(`Pregunta sin flag demo en dataset demo: ${q.id}`);
}

validatePool(verifiedQuestions, "verificado");
for (const q of verifiedQuestions) {
  if (q.demo) throw new Error(`Pregunta demo en dataset verificado: ${q.id}`);
  if (q.needsVerification)
    throw new Error(`Pregunta sin verificar en dataset verificado: ${q.id}`);
  for (const p of q.partyPositions) {
    if (p.needsVerification || p.source.type === "demo" || !p.source.verifiedAt)
      throw new Error(
        `Posición sin verificar en dataset verificado: ${q.id}/${p.party}`
      );
    if (
      p.status !== "insufficient_evidence" &&
      p.status !== "neutral_or_unclear" &&
      !p.originalText
    )
      throw new Error(
        `Posición clara sin cita literal en dataset verificado: ${q.id}/${p.party}`
      );
  }
}

// Huérfanas: toda explicación debe corresponder a una pregunta existente.
for (const id of Object.keys(DEMO_EXPLAINERS)) {
  if (!demoQuestions.some((q) => q.id === id))
    throw new Error(`Explicación huérfana (sin pregunta): ${id}`);
}
