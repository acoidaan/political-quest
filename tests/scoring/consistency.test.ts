import { describe, expect, it } from "vitest";
import {
  calculateConsistency,
  inconsistencyMultiplier,
} from "@/lib/scoring";
import { answer, makeQuestion } from "./helpers";

describe("calculateConsistency", () => {
  const pairInverse = () => [
    makeQuestion({
      id: "limit_rents",
      weights: { economic: -0.8 },
      relatedTo: [{ id: "free_rents", expected: "inverse" }],
    }),
    makeQuestion({
      id: "free_rents",
      weights: { economic: 0.8 },
      relatedTo: [{ id: "limit_rents", expected: "inverse" }],
    }),
  ];

  it("par inverso respondido coherentemente → inconsistencia 0", () => {
    const r = calculateConsistency(pairInverse(), {
      limit_rents: answer("limit_rents", 3),
      free_rents: answer("free_rents", -3),
    });
    expect(r.inconsistency).toBe(0);
    expect(r.pairsEvaluated).toBe(1);
    expect(r.flaggedPairs).toHaveLength(0);
  });

  it("par inverso respondido igual → inconsistencia máxima y flag", () => {
    const r = calculateConsistency(pairInverse(), {
      limit_rents: answer("limit_rents", 3),
      free_rents: answer("free_rents", 3),
    });
    expect(r.inconsistency).toBe(1);
    expect(r.flaggedPairs).toHaveLength(1);
  });

  it("el par se evalúa una sola vez aunque ambas lo declaren", () => {
    const r = calculateConsistency(pairInverse(), {
      limit_rents: answer("limit_rents", 2),
      free_rents: answer("free_rents", -2),
    });
    expect(r.pairsEvaluated).toBe(1);
  });

  it("pares con skipped no se evalúan", () => {
    const r = calculateConsistency(pairInverse(), {
      limit_rents: answer("limit_rents", 3),
      free_rents: answer("free_rents", "skipped"),
    });
    expect(r.pairsEvaluated).toBe(0);
    expect(r.inconsistency).toBe(0);
  });

  it("multiplicador acotado a 1.5", () => {
    expect(inconsistencyMultiplier(0)).toBe(1);
    expect(inconsistencyMultiplier(1)).toBe(1.5);
    expect(inconsistencyMultiplier(0.3)).toBeCloseTo(1.3);
  });
});
