import type { PersonalImportance, Question, UserAnswer } from "@/lib/types";
import { CATEGORIES, CATEGORY_BY_ID } from "@/data/categories";

/** Bloque temático de una pregunta (grupo de su categoría). */
export function topicOf(question: Question): string {
  return CATEGORY_BY_ID[question.category]?.group ?? question.category;
}

/**
 * Bloques temáticos presentes en un conjunto de preguntas, en el orden de
 * CATEGORIES (estable entre sesiones).
 */
export function topicsOf(questions: Question[]): string[] {
  const present = new Set(questions.map(topicOf));
  const ordered = [...new Set(CATEGORIES.map((c) => c.group))];
  const known = ordered.filter((g) => present.has(g));
  const unknown = [...present].filter((g) => !ordered.includes(g)).sort();
  return [...known, ...unknown];
}

/**
 * Respuestas efectivas: la importancia declarada por bloque temático se
 * aplica a las preguntas de ese bloque que no tienen importancia propia. La
 * importancia marcada en una pregunta concreta siempre prevalece.
 *
 * Función pura: no modifica `answers`. El multiplicador sigue siendo el
 * acotado de PERSONAL_IMPORTANCE_MULT, así que el efecto es el mismo que
 * marcar la importancia pregunta a pregunta.
 */
export function applyTopicImportance(
  questions: Question[],
  answers: Record<string, UserAnswer>,
  topicImportance?: Record<string, PersonalImportance>
): Record<string, UserAnswer> {
  if (!topicImportance || Object.keys(topicImportance).length === 0) {
    return answers;
  }
  const result: Record<string, UserAnswer> = { ...answers };
  for (const q of questions) {
    const answer = answers[q.id];
    if (!answer || answer.personalImportance) continue;
    const imp = topicImportance[topicOf(q)];
    if (imp) result[q.id] = { ...answer, personalImportance: imp };
  }
  return result;
}
