import { describe, expect, it } from "vitest";
import type { UserAnswer } from "@/lib/types";
import {
  applyTopicImportance,
  calculateAxisScores,
  calculatePartySimilarity,
  topicOf,
  topicsOf,
} from "@/lib/scoring";
import { answer, makePosition, makeQuestion } from "./helpers";

describe("topicOf / topicsOf", () => {
  it("agrupa por el bloque de la categoría, en orden estable", () => {
    const qs = [
      makeQuestion({ category: "sanidad" }),
      makeQuestion({ category: "impuestos" }),
      makeQuestion({ category: "economia" }),
    ];
    expect(topicOf(qs[0])).toBe("Servicios públicos");
    expect(topicsOf(qs)).toEqual(["Economía", "Servicios públicos"]);
  });
});

describe("applyTopicImportance", () => {
  const eco = makeQuestion({ id: "eco", category: "economia" });
  const san = makeQuestion({ id: "san", category: "sanidad" });
  const qs = [eco, san];

  it("sin importancia por tema devuelve las mismas respuestas", () => {
    const answers = { eco: answer("eco", 2) };
    expect(applyTopicImportance(qs, answers)).toBe(answers);
    expect(applyTopicImportance(qs, answers, {})).toBe(answers);
  });

  it("aplica el tema solo a las preguntas sin importancia propia", () => {
    const answers = { eco: answer("eco", 2), san: answer("san", -1, "low") };
    const result = applyTopicImportance(qs, answers, {
      Economía: "high",
      "Servicios públicos": "high",
    });
    expect(result.eco.personalImportance).toBe("high");
    // La importancia marcada en la pregunta prevalece.
    expect(result.san.personalImportance).toBe("low");
    // Pura: no toca la entrada.
    expect(answers.eco.personalImportance).toBeUndefined();
  });

  it("no crea respuestas para preguntas sin responder", () => {
    const result = applyTopicImportance(qs, { eco: answer("eco", 1) }, {
      "Servicios públicos": "high",
    });
    expect(result.san).toBeUndefined();
  });

  it("un tema «Mucha» pesa más en el eje", () => {
    const a = makeQuestion({ id: "a", category: "economia", weights: { economic: 1 } });
    const b = makeQuestion({ id: "b", category: "sanidad", weights: { economic: 1 } });
    const answers = { a: answer("a", 3), b: answer("b", -3) };
    const axis = (ans: Record<string, UserAnswer>) =>
      calculateAxisScores([a, b], ans).find((s) => s.axis === "economic")!;
    expect(axis(answers).display).toBe(50);
    const weighted = applyTopicImportance([a, b], answers, { Economía: "high" });
    expect(axis(weighted).display).toBeGreaterThan(50);
  });

  it("un tema «Mucha» pesa más en la coincidencia con partidos", () => {
    const a = makeQuestion({
      id: "a",
      category: "economia",
      partyPositions: [makePosition("p", "strongly_support")],
    });
    const b = makeQuestion({
      id: "b",
      category: "sanidad",
      partyPositions: [makePosition("p", "strongly_oppose")],
    });
    const answers = { a: answer("a", 3), b: answer("b", 3) };
    const base = calculatePartySimilarity([a, b], answers, "p").similarity;
    const weighted = calculatePartySimilarity(
      [a, b],
      applyTopicImportance([a, b], answers, { Economía: "high" }),
      "p"
    ).similarity;
    expect(weighted).toBeGreaterThan(base);
  });
});
