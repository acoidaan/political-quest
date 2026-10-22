import { activeQuestions } from "./questions";
import { ACTIVE_PARTIES } from "./parties";
import { AXES } from "./axes";
import { currentPositions } from "@/lib/scoring/positions";

/**
 * Cifras de transparencia derivadas del dataset activo (nunca escritas a
 * mano): se recalculan en cada build, así que no pueden quedar desfasadas.
 */
export function datasetStats() {
  let documented = 0;
  let quotes = 0;
  const sources = new Set<string>();
  let lastVerified = "";
  for (const q of activeQuestions) {
    for (const p of currentPositions(q)) {
      if (p.status === "insufficient_evidence") continue;
      documented++;
      if (p.originalText) quotes++;
      // Agrupa por documento sin el detalle de sesión/votación.
      sources.add(p.source.url ?? p.source.document);
      if (p.source.verifiedAt && p.source.verifiedAt > lastVerified)
        lastVerified = p.source.verifiedAt;
    }
  }
  return {
    questions: activeQuestions.length,
    documentedPositions: documented,
    literalQuotes: quotes,
    primarySources: sources.size,
    parties: ACTIVE_PARTIES.length,
    axes: AXES.length,
    lastVerified,
  };
}

/** "2026-08-09" → "9 de agosto de 2026". */
export function formatDate(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
