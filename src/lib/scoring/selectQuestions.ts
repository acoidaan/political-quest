import type { AxisId, Question, QuizMode } from "@/lib/types";
import { AXIS_IDS } from "@/data/axes";
import { createRng, shuffled, type Rng } from "@/lib/rng";
import { CONSISTENCY_PAIRS_TARGET, MODE_SIZES } from "./constants";
import { discriminationScore } from "./discrimination";

export interface SelectOptions {
  /** true ⇒ usar el pool demo (preguntas demo). false ⇒ solo published. */
  demo?: boolean;
  /** Nº de preguntas; por defecto el de la modalidad. */
  count?: number;
}

/**
 * Selección y ordenación de preguntas (docs/ARQUITECTURA.md §3.7).
 *
 * Selección greedy determinista (semilla) que maximiza:
 * - cobertura de los 7 ejes (garantizada incluso en el test de 25);
 * - diversidad de categorías;
 * - relevancia editorial y capacidad discriminativa;
 * y penaliza redundancia (misma subcategoría / preguntas relacionadas).
 *
 * Ordenación: round-robin aleatorizado de categorías (nunca dos preguntas
 * seguidas de la misma categoría cuando es evitable), alternando polaridad
 * cuando es posible para mitigar acquiescence bias; los pares de consistencia
 * se separan al menos 8 posiciones.
 */
export function selectQuestions(
  pool: Question[],
  mode: QuizMode,
  seed: number,
  options: SelectOptions = {}
): Question[] {
  const rng = createRng(seed);
  const target = options.count ?? MODE_SIZES[mode];

  const eligible = pool.filter((q) =>
    options.demo ? q.demo && q.status !== "archived" : q.status === "published" && !q.demo
  );
  if (eligible.length <= target) return orderQuestions(eligible, rng);

  const selected = greedySelect(eligible, target, mode, rng, options);
  return orderQuestions(selected, rng);
}

// ---------------------------------------------------------------------------

function greedySelect(
  eligible: Question[],
  target: number,
  mode: QuizMode,
  rng: Rng,
  options: SelectOptions
): Question[] {
  // Puntuación base estable + jitter aleatorio pequeño (variedad entre sesiones).
  const base = new Map<string, number>();
  for (const q of eligible) {
    base.set(
      q.id,
      0.35 * (q.importance / 3) +
        0.35 * discriminationScore(q, { allowUnverified: options.demo }) +
        0.1 * rng()
    );
  }

  const byId = new Map(eligible.map((q) => [q.id, q]));
  const selected: Question[] = [];
  const selectedIds = new Set<string>();
  const axisCount = new Map<AxisId, number>();
  const categoryCount = new Map<string, number>();
  const subcategorySeen = new Set<string>();

  const minPerAxis = Math.max(2, Math.floor(target / 12));

  const contributesTo = (q: Question, axis: AxisId) =>
    Math.abs(q.weights[axis] ?? 0) >= 0.3;

  const priority = (q: Question): number => {
    let p = base.get(q.id) ?? 0;
    // Necesidad de cobertura de ejes aún por debajo del mínimo.
    for (const axis of AXIS_IDS) {
      if ((axisCount.get(axis) ?? 0) < minPerAxis && contributesTo(q, axis)) {
        p += 0.5;
        break;
      }
    }
    // Redundancia.
    if (q.subcategory && subcategorySeen.has(`${q.category}:${q.subcategory}`)) p -= 0.6;
    for (const rel of q.relatedTo ?? []) {
      if (selectedIds.has(rel.id)) p -= 0.5; // los pares se reintroducen después
    }
    // Saturación de categoría.
    p -= 0.15 * (categoryCount.get(q.category) ?? 0);
    return p;
  };

  const pick = (q: Question) => {
    selected.push(q);
    selectedIds.add(q.id);
    for (const axis of AXIS_IDS) {
      if (contributesTo(q, axis)) axisCount.set(axis, (axisCount.get(axis) ?? 0) + 1);
    }
    categoryCount.set(q.category, (categoryCount.get(q.category) ?? 0) + 1);
    if (q.subcategory) subcategorySeen.add(`${q.category}:${q.subcategory}`);
  };

  const remaining = new Set(eligible.map((q) => q.id));
  while (selected.length < target && remaining.size > 0) {
    let best: Question | null = null;
    let bestP = -Infinity;
    for (const id of remaining) {
      const q = byId.get(id)!;
      const p = priority(q);
      if (p > bestP) {
        bestP = p;
        best = q;
      }
    }
    if (!best) break;
    remaining.delete(best.id);
    pick(best);
  }

  ensureConsistencyPairs(selected, selectedIds, eligible, byId, mode, base);
  return selected;
}

/**
 * Garantiza que existan pares de consistencia completos: si una pregunta
 * seleccionada tiene pareja fuera de la selección, sustituye la pregunta
 * seleccionada de menor prioridad (que no rompa un par) por la pareja.
 */
function ensureConsistencyPairs(
  selected: Question[],
  selectedIds: Set<string>,
  eligible: Question[],
  byId: Map<string, Question>,
  mode: QuizMode,
  base: Map<string, number>
): void {
  const targetPairs = CONSISTENCY_PAIRS_TARGET[mode];
  let completePairs = countCompletePairs(selected, selectedIds);

  for (const q of [...selected]) {
    if (completePairs >= targetPairs) break;
    for (const rel of q.relatedTo ?? []) {
      if (selectedIds.has(rel.id)) continue;
      const partner = byId.get(rel.id);
      if (!partner) continue;
      // Sustituir la seleccionada con menor prioridad que no participe en pares.
      const sacrificable = [...selected]
        .filter(
          (s) =>
            s.id !== q.id &&
            !(s.relatedTo ?? []).some((r) => selectedIds.has(r.id))
        )
        .sort((a, b) => (base.get(a.id) ?? 0) - (base.get(b.id) ?? 0))[0];
      if (!sacrificable) continue;
      const idx = selected.indexOf(sacrificable);
      selected[idx] = partner;
      selectedIds.delete(sacrificable.id);
      selectedIds.add(partner.id);
      completePairs++;
      break;
    }
  }
}

function countCompletePairs(selected: Question[], selectedIds: Set<string>): number {
  const seen = new Set<string>();
  let count = 0;
  for (const q of selected) {
    for (const rel of q.relatedTo ?? []) {
      const key = [q.id, rel.id].sort().join("::");
      if (seen.has(key)) continue;
      seen.add(key);
      if (selectedIds.has(rel.id) && selectedIds.has(q.id)) count++;
    }
  }
  return count;
}

// ---------------------------------------------------------------------------

function orderQuestions(questions: Question[], rng: Rng): Question[] {
  const pool = shuffled(questions, rng);
  const ordered: Question[] = [];
  let lastCategory: string | null = null;
  let lastPolarity: string | null = null;

  while (pool.length > 0) {
    let idx = pool.findIndex(
      (q) => q.category !== lastCategory && q.polarity !== lastPolarity
    );
    if (idx === -1) idx = pool.findIndex((q) => q.category !== lastCategory);
    if (idx === -1) idx = 0;
    const [q] = pool.splice(idx, 1);
    ordered.push(q);
    lastCategory = q.category;
    lastPolarity = q.polarity;
  }

  return separatePairs(ordered, 8);
}

/** Aleja los pares de consistencia al menos `minGap` posiciones. */
function separatePairs(ordered: Question[], minGap: number): Question[] {
  const posOf = () => new Map(ordered.map((q, i) => [q.id, i]));
  let positions = posOf();

  for (let i = 0; i < ordered.length; i++) {
    const q = ordered[i];
    for (const rel of q.relatedTo ?? []) {
      const j = positions.get(rel.id);
      if (j === undefined) continue;
      if (Math.abs(i - j) < minGap) {
        const later = Math.max(i, j);
        const targetIdx = Math.min(
          ordered.length - 1,
          Math.min(i, j) + minGap + Math.floor(minGap / 2)
        );
        const [moved] = ordered.splice(later, 1);
        ordered.splice(targetIdx, 0, moved);
        positions = posOf();
      }
    }
  }
  return ordered;
}
