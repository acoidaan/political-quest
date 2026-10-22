import { describe, expect, it } from "vitest";
import { calculatePartySimilarity } from "@/lib/scoring";
import { answer, makePosition, makeQuestion } from "./helpers";

describe("calculatePartySimilarity", () => {
  it("acuerdo total → 100%", () => {
    const qs = [
      makeQuestion({
        id: "a",
        partyPositions: [makePosition("pp", "strongly_support")],
      }),
      makeQuestion({
        id: "b",
        partyPositions: [makePosition("pp", "strongly_oppose")],
      }),
    ];
    const sim = calculatePartySimilarity(
      qs,
      { a: answer("a", 3), b: answer("b", -3) },
      "pp"
    );
    expect(sim.similarity).toBe(100);
    expect(sim.comparableCount).toBe(2);
  });

  it("desacuerdo total → 0%", () => {
    const qs = [
      makeQuestion({
        id: "a",
        partyPositions: [makePosition("pp", "strongly_support")],
      }),
    ];
    const sim = calculatePartySimilarity(qs, { a: answer("a", -3) }, "pp");
    expect(sim.similarity).toBe(0);
  });

  it("insufficient_evidence NO penaliza: la pregunta no es comparable", () => {
    const qs = [
      makeQuestion({
        id: "a",
        partyPositions: [makePosition("pp", "strongly_support")],
      }),
      makeQuestion({
        id: "b",
        partyPositions: [makePosition("pp", "insufficient_evidence")],
      }),
    ];
    const sim = calculatePartySimilarity(
      qs,
      { a: answer("a", 3), b: answer("b", -3) },
      "pp"
    );
    expect(sim.similarity).toBe(100);
    expect(sim.comparableCount).toBe(1);
    expect(sim.totalAnswered).toBe(2);
  });

  it("neutral_or_unclear tampoco es comparable", () => {
    const qs = [
      makeQuestion({
        id: "a",
        partyPositions: [makePosition("pp", "neutral_or_unclear")],
      }),
    ];
    const sim = calculatePartySimilarity(qs, { a: answer("a", 3) }, "pp");
    expect(sim.comparableCount).toBe(0);
  });

  it("preguntas sin responder o skipped no cuentan", () => {
    const qs = [
      makeQuestion({
        id: "a",
        partyPositions: [makePosition("pp", "support")],
      }),
      makeQuestion({
        id: "b",
        partyPositions: [makePosition("pp", "support")],
      }),
    ];
    const sim = calculatePartySimilarity(qs, { a: answer("a", "skipped") }, "pp");
    expect(sim.comparableCount).toBe(0);
    expect(sim.totalAnswered).toBe(0);
  });

  it("posiciones sin verificar se excluyen salvo allowUnverified (demo)", () => {
    const qs = [
      makeQuestion({
        id: "a",
        partyPositions: [
          makePosition("pp", "support", { needsVerification: true }),
        ],
      }),
    ];
    const prod = calculatePartySimilarity(qs, { a: answer("a", 2) }, "pp");
    expect(prod.comparableCount).toBe(0);
    const demo = calculatePartySimilarity(qs, { a: answer("a", 2) }, "pp", {
      allowUnverified: true,
    });
    expect(demo.comparableCount).toBe(1);
  });

  it("la confianza de la fuente pondera la pregunta", () => {
    const qs = [
      makeQuestion({
        id: "a",
        partyPositions: [makePosition("pp", "strongly_support", { confidence: 1 })],
      }),
      makeQuestion({
        id: "b",
        partyPositions: [makePosition("pp", "strongly_oppose", { confidence: 0.2 })],
      }),
    ];
    // Usuario de acuerdo con ambas: coincide en a (conf 1), difiere en b (conf 0.2)
    const sim = calculatePartySimilarity(
      qs,
      { a: answer("a", 3), b: answer("b", 3) },
      "pp"
    );
    expect(sim.similarity).toBeGreaterThan(75); // b pesa poco
  });

  it("desglose por categoría: acuerdos y desacuerdos", () => {
    const qs = [
      makeQuestion({
        id: "a",
        category: "vivienda",
        partyPositions: [makePosition("pp", "strongly_support")],
      }),
      makeQuestion({
        id: "b",
        category: "inmigracion",
        partyPositions: [makePosition("pp", "strongly_support")],
      }),
    ];
    const sim = calculatePartySimilarity(
      qs,
      { a: answer("a", 3), b: answer("b", -3) },
      "pp"
    );
    expect(sim.topAgreements.map((c) => c.category)).toContain("vivienda");
    expect(sim.topDisagreements.map((c) => c.category)).toContain("inmigracion");
  });

  it("pocas preguntas comparables → incertidumbre alta", () => {
    const qs = [
      makeQuestion({
        id: "a",
        partyPositions: [makePosition("pp", "support")],
      }),
    ];
    const sim = calculatePartySimilarity(qs, { a: answer("a", 2) }, "pp");
    expect(sim.uncertainty).toBeGreaterThanOrEqual(10);
  });
});
