import { describe, expect, it } from "vitest";
import { calculateAxisScores } from "@/lib/scoring";
import { answer, answersFor, makeQuestion } from "./helpers";

const econ = (id: string, w: number) =>
  makeQuestion({ id, weights: { economic: w } });

describe("calculateAxisScores", () => {
  it("todas +3 con peso +1 → extremo positivo (100)", () => {
    const qs = [econ("a", 1), econ("b", 1), econ("c", 1)];
    const scores = calculateAxisScores(qs, answersFor(qs, 3));
    const e = scores.find((s) => s.axis === "economic")!;
    expect(e.raw).toBeCloseTo(1);
    expect(e.display).toBe(100);
    expect(e.answered).toBe(3);
  });

  it("todas -3 → extremo negativo (0)", () => {
    const qs = [econ("a", 1), econ("b", 1)];
    const e = calculateAxisScores(qs, answersFor(qs, -3)).find(
      (s) => s.axis === "economic"
    )!;
    expect(e.display).toBe(0);
  });

  it("todas 0 (neutral) → 50, pero con incertidumbre de suelo", () => {
    const qs = [econ("a", 1), econ("b", 1), econ("c", 1)];
    const e = calculateAxisScores(qs, answersFor(qs, 0)).find(
      (s) => s.axis === "economic"
    )!;
    expect(e.display).toBe(50);
    expect(e.uncertainty).toBeGreaterThan(0);
  });

  it('todas "skipped" → sin datos: 50 con incertidumbre máxima', () => {
    const qs = [econ("a", 1), econ("b", 1)];
    const e = calculateAxisScores(qs, answersFor(qs, "skipped")).find(
      (s) => s.axis === "economic"
    )!;
    expect(e.answered).toBe(0);
    expect(e.display).toBe(50);
    expect(e.uncertainty).toBe(50);
  });

  it("skipped no cuenta como 0: una +3 y una skipped → 100", () => {
    const qs = [econ("a", 1), econ("b", 1)];
    const e = calculateAxisScores(qs, {
      a: answer("a", 3),
      b: answer("b", "skipped"),
    }).find((s) => s.axis === "economic")!;
    expect(e.display).toBe(100);
    expect(e.answered).toBe(1);
  });

  it("una sola pregunta → incertidumbre alta (suelo n=1)", () => {
    const qs = [econ("a", 1)];
    const e = calculateAxisScores(qs, answersFor(qs, 3)).find(
      (s) => s.axis === "economic"
    )!;
    expect(e.uncertainty).toBeGreaterThanOrEqual(30);
  });

  it("respuestas contradictorias → más incertidumbre que coherentes", () => {
    const qs = [econ("a", 1), econ("b", 1), econ("c", 1), econ("d", 1)];
    const coherent = calculateAxisScores(qs, answersFor(qs, 2)).find(
      (s) => s.axis === "economic"
    )!;
    const contradictory = calculateAxisScores(qs, {
      a: answer("a", 3),
      b: answer("b", -3),
      c: answer("c", 3),
      d: answer("d", -3),
    }).find((s) => s.axis === "economic")!;
    expect(contradictory.uncertainty).toBeGreaterThan(coherent.uncertainty);
    expect(contradictory.display).toBe(50);
  });

  it("peso negativo invierte la dirección", () => {
    const qs = [makeQuestion({ id: "a", weights: { economic: -1 } })];
    const e = calculateAxisScores(qs, answersFor(qs, 3)).find(
      (s) => s.axis === "economic"
    )!;
    expect(e.display).toBe(0);
  });

  it("pregunta sin peso en un eje no afecta a ese eje", () => {
    const qs = [makeQuestion({ id: "a", weights: { social: 1 } })];
    const e = calculateAxisScores(qs, answersFor(qs, 3)).find(
      (s) => s.axis === "economic"
    )!;
    expect(e.answered).toBe(0);
  });

  it("importancia personal alta pesa más que baja, sin dominar", () => {
    const qs = [econ("a", 1), econ("b", 1)];
    const e = calculateAxisScores(qs, {
      a: answer("a", 3, "high"),
      b: answer("b", -3, "low"),
    }).find((s) => s.axis === "economic")!;
    expect(e.raw).toBeGreaterThan(0);
    expect(e.raw).toBeLessThan(0.5); // 1.3 vs 0.75: inclina, no domina
  });
});
