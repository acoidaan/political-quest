import type { ConvictionItem, Question, UserAnswer } from "@/lib/types";
import { CENTRIST_THRESHOLD, CONVICTION_THRESHOLD, MAX_ANSWER } from "./constants";

/**
 * "Tus posiciones más claras" (§29): respuestas más contundentes, con
 * intensidad firmada -100..+100. La intensidad NO se traduce a
 * izquierda/derecha: es contundencia sobre la propuesta concreta.
 */
export function calculateConvictions(
  questions: Question[],
  answers: Record<string, UserAnswer>,
  limit = 6
): ConvictionItem[] {
  return collectItems(questions, answers)
    .filter((item) => Math.abs(item.intensity) >= CONVICTION_THRESHOLD)
    .sort((a, b) => Math.abs(b.intensity) - Math.abs(a.intensity))
    .slice(0, limit);
}

/**
 * "Donde eres más centrista" (§30): respuestas próximas al centro
 * (neutral/depende o levemente inclinadas). Las omitidas no cuentan.
 */
export function calculateCentrist(
  questions: Question[],
  answers: Record<string, UserAnswer>,
  limit = 6
): ConvictionItem[] {
  return collectItems(questions, answers)
    .filter((item) => Math.abs(item.intensity) <= CENTRIST_THRESHOLD)
    .sort((a, b) => Math.abs(a.intensity) - Math.abs(b.intensity))
    .slice(0, limit);
}

function collectItems(
  questions: Question[],
  answers: Record<string, UserAnswer>
): ConvictionItem[] {
  const items: ConvictionItem[] = [];
  for (const q of questions) {
    const answer = answers[q.id];
    if (!answer || answer.value === "skipped") continue;
    items.push({
      questionId: q.id,
      category: q.category,
      statement: q.statement,
      intensity: Math.round((answer.value / MAX_ANSWER) * 100),
    });
  }
  return items;
}
