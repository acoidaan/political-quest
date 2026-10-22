import { describe, expect, it } from "vitest";
import { selectQuestions, computeQuizResult } from "@/lib/scoring";
import { AXIS_IDS } from "@/data/axes";
import { makeQuestion, answersFor } from "./helpers";
import type { Question, QuizSession } from "@/lib/types";

function buildPool(): Question[] {
  const pool: Question[] = [];
  const cats = ["economia", "vivienda", "sanidad", "inmigracion", "territorio", "ue", "energia", "justicia"];
  let i = 0;
  for (const axis of AXIS_IDS) {
    for (let k = 0; k < 12; k++) {
      i++;
      pool.push(
        makeQuestion({
          id: `p_${axis}_${k}`,
          category: cats[i % cats.length],
          subcategory: `sub_${k % 6}`,
          weights: { [axis]: k % 2 === 0 ? 0.8 : -0.8 },
          polarity: k % 2 === 0 ? "positive" : "negative",
          importance: ((k % 3) + 1) as 1 | 2 | 3,
          demo: true,
        })
      );
    }
  }
  return pool;
}

describe("selectQuestions", () => {
  it("devuelve el número pedido", () => {
    const sel = selectQuestions(buildPool(), "quick", 42, { demo: true });
    expect(sel).toHaveLength(25);
  });

  it("cubre los 7 ejes incluso en el test rápido", () => {
    const sel = selectQuestions(buildPool(), "quick", 7, { demo: true });
    for (const axis of AXIS_IDS) {
      const covering = sel.filter((q) => Math.abs(q.weights[axis] ?? 0) >= 0.3);
      expect(covering.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("es determinista con la misma semilla", () => {
    const a = selectQuestions(buildPool(), "quick", 123, { demo: true });
    const b = selectQuestions(buildPool(), "quick", 123, { demo: true });
    expect(a.map((q) => q.id)).toEqual(b.map((q) => q.id));
  });

  it("no repite categoría en preguntas adyacentes cuando es evitable", () => {
    const sel = selectQuestions(buildPool(), "full", 99, { demo: true });
    let adjacentSame = 0;
    for (let i = 1; i < sel.length; i++) {
      if (sel[i].category === sel[i - 1].category) adjacentSame++;
    }
    // Con 8 categorías disponibles debería ser raro
    expect(adjacentSame).toBeLessThanOrEqual(3);
  });

  it("no selecciona preguntas archivadas ni de producción en modo demo", () => {
    const pool = buildPool();
    pool.push(makeQuestion({ id: "archived", demo: true, status: "archived" }));
    pool.push(makeQuestion({ id: "prod", demo: false, status: "published" }));
    const sel = selectQuestions(pool, "deep", 1, { demo: true });
    expect(sel.find((q) => q.id === "archived")).toBeUndefined();
    expect(sel.find((q) => q.id === "prod")).toBeUndefined();
  });

  it("si el pool es menor que el objetivo, devuelve todo el pool", () => {
    const pool = buildPool().slice(0, 10);
    const sel = selectQuestions(pool, "full", 5, { demo: true });
    expect(sel).toHaveLength(10);
  });
});

describe("computeQuizResult (orquestador)", () => {
  it("resultado completo de una sesión coherente", () => {
    const pool = buildPool().slice(0, 20);
    const session: QuizSession = {
      id: "s1",
      mode: "quick",
      seed: 1,
      questionIds: pool.map((q) => q.id),
      answers: answersFor(pool, 2),
      startedAt: "2026-01-01",
      demoData: true,
    };
    const result = computeQuizResult(session, pool);
    expect(result.answeredCount).toBe(20);
    expect(result.skippedCount).toBe(0);
    expect(result.axes).toHaveLength(7);
    expect(result.leftRight.display).toBeGreaterThanOrEqual(0);
    expect(result.leftRight.display).toBeLessThanOrEqual(100);
  });

  it('todo "no tengo suficiente información" → todo 50 e incertidumbre máxima', () => {
    const pool = buildPool().slice(0, 20);
    const session: QuizSession = {
      id: "s2",
      mode: "quick",
      seed: 1,
      questionIds: pool.map((q) => q.id),
      answers: answersFor(pool, "skipped"),
      startedAt: "2026-01-01",
      demoData: true,
    };
    const result = computeQuizResult(session, pool);
    expect(result.answeredCount).toBe(0);
    expect(result.skippedCount).toBe(20);
    expect(result.leftRight.display).toBe(50);
    expect(result.leftRight.uncertainty).toBe(50);
    expect(result.convictions).toHaveLength(0);
  });
});
