import { describe, expect, it } from "vitest";
import { calculatePartySimilarity, currentPosition, currentPositions } from "@/lib/scoring";
import { answer, makePosition, makeQuestion } from "./helpers";

describe("currentPosition (versionado de posiciones)", () => {
  const q = makeQuestion({
    id: "v",
    partyPositions: [
      makePosition("pp", "strongly_support", {
        validFrom: "2023-07-01",
        validUntil: "2026-11-05",
      }),
      makePosition("pp", "oppose", { validFrom: "2026-11-05" }),
      makePosition("psoe", "support", { validFrom: "2023-07-01" }),
    ],
  });

  it("antes del programa nuevo, rige la posición antigua", () => {
    expect(currentPosition(q, "pp", "2026-01-01")?.status).toBe("strongly_support");
  });

  it("desde validFrom del programa nuevo, rige la nueva (validUntil es exclusivo)", () => {
    expect(currentPosition(q, "pp", "2026-11-05")?.status).toBe("oppose");
  });

  it("antes de cualquier validFrom no hay posición", () => {
    expect(currentPosition(q, "pp", "2020-01-01")).toBeUndefined();
  });

  it("si hay dos vigentes por error, gana la más reciente", () => {
    const dup = makeQuestion({
      partyPositions: [
        makePosition("vox", "support", { validFrom: "2023-07-01" }),
        makePosition("vox", "oppose", { validFrom: "2026-11-01" }),
      ],
    });
    expect(currentPosition(dup, "vox", "2026-12-01")?.status).toBe("oppose");
  });

  it("currentPositions devuelve una por partido", () => {
    const list = currentPositions(q, "2026-12-01");
    expect(list.map((p) => `${p.party}:${p.status}`).sort()).toEqual([
      "pp:oppose",
      "psoe:support",
    ]);
  });

  it("la similitud usa solo la posición vigente", () => {
    const before = calculatePartySimilarity([q], { v: answer("v", 3) }, "pp", {
      asOf: "2026-01-01",
    });
    const after = calculatePartySimilarity([q], { v: answer("v", 3) }, "pp", {
      asOf: "2026-12-01",
    });
    expect(before.similarity).toBe(100);
    expect(after.similarity).toBeLessThan(20);
    expect(after.comparableCount).toBe(1);
  });
});
