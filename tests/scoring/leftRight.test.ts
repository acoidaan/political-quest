import { describe, expect, it } from "vitest";
import { calculateAxisScores, calculateLeftRightScore } from "@/lib/scoring";
import { answersFor, makeQuestion } from "./helpers";

describe("calculateLeftRightScore", () => {
  it("sin respuestas → 50 con incertidumbre máxima", () => {
    const lr = calculateLeftRightScore(calculateAxisScores([], {}));
    expect(lr.display).toBe(50);
    expect(lr.uncertainty).toBe(50);
    expect(lr.axesUsed).toHaveLength(0);
  });

  it("todo al polo derecho en ejes de contenido → cerca de 100", () => {
    const qs = [
      makeQuestion({ id: "a", weights: { economic: 1 } }),
      makeQuestion({ id: "b", weights: { social: 1 } }),
      makeQuestion({ id: "c", weights: { authority: 1 } }),
      makeQuestion({ id: "d", weights: { immigration: 1 } }),
      makeQuestion({ id: "e", weights: { environment: 1 } }),
    ];
    const lr = calculateLeftRightScore(calculateAxisScores(qs, answersFor(qs, 3)));
    expect(lr.display).toBe(100);
    expect(lr.band).toBe("derecha");
  });

  it("territorial y europe NO influyen en izquierda-derecha", () => {
    const qs = [
      makeQuestion({ id: "t", weights: { territorial: 1 } }),
      makeQuestion({ id: "e", weights: { europe: 1 } }),
    ];
    const lr = calculateLeftRightScore(calculateAxisScores(qs, answersFor(qs, 3)));
    expect(lr.display).toBe(50);
    expect(lr.axesUsed).toHaveLength(0);
  });

  it("renormaliza pesos cuando faltan ejes", () => {
    const qs = [makeQuestion({ id: "a", weights: { economic: 1 } })];
    const lr = calculateLeftRightScore(calculateAxisScores(qs, answersFor(qs, -3)));
    expect(lr.display).toBe(0); // solo economic, renormalizado a peso 1
  });

  it("pocas preguntas → incertidumbre no baja del suelo", () => {
    const qs = [makeQuestion({ id: "a", weights: { economic: 1 } })];
    const lr = calculateLeftRightScore(calculateAxisScores(qs, answersFor(qs, 3)));
    expect(lr.uncertainty).toBeGreaterThanOrEqual(20);
  });

  it("bandas descriptivas correctas", () => {
    const qs = Array.from({ length: 10 }, (_, i) =>
      makeQuestion({ id: `q${i}`, weights: { economic: 1 } })
    );
    const lr = calculateLeftRightScore(calculateAxisScores(qs, answersFor(qs, -1)));
    expect(lr.display).toBeCloseTo(33.3, 0);
    expect(lr.band).toBe("centroizquierda");
  });
});
