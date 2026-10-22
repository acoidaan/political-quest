import type { Question, QuizResult, QuizSession } from "@/lib/types";
import { calculateAxisScores } from "./axes";
import { calculateLeftRightScore } from "./leftRight";
import { calculateConsistency, inconsistencyMultiplier } from "./consistency";
import { calculateCentrist, calculateConvictions } from "./convictions";

export { calculateAxisScores } from "./axes";
export { calculateLeftRightScore } from "./leftRight";
export { calculateConsistency, inconsistencyMultiplier } from "./consistency";
export { calculatePartySimilarity } from "./similarity";
export { selectQuestions } from "./selectQuestions";
export { discriminationScore } from "./discrimination";
export { calculateCentrist, calculateConvictions } from "./convictions";
export { calculatePartyAxisScores } from "./partyProfile";
export * from "./constants";

/**
 * Orquestador: calcula el resultado completo de una sesión terminada.
 * Función pura: (sesión, preguntas) → resultado. La comparación con partidos
 * NO se calcula aquí: es una capa aparte que solo se invoca si el usuario la
 * solicita explícitamente tras ver sus resultados.
 */
export function computeQuizResult(
  session: QuizSession,
  allQuestions: Question[]
): QuizResult {
  const byId = new Map(allQuestions.map((q) => [q.id, q]));
  const questions = session.questionIds
    .map((id) => byId.get(id))
    .filter((q): q is Question => q !== undefined);

  const answers = session.answers;
  const answerList = Object.values(answers);
  const answeredCount = answerList.filter((a) => a.value !== "skipped").length;
  const skippedCount = answerList.filter((a) => a.value === "skipped").length;

  const consistency = calculateConsistency(questions, answers);
  const mult = inconsistencyMultiplier(consistency.inconsistency);

  // La inconsistencia amplía la incertidumbre; nunca cambia las puntuaciones.
  const axes = calculateAxisScores(questions, answers).map((a) => ({
    ...a,
    uncertainty: Math.min(50, Math.round(a.uncertainty * mult * 10) / 10),
  }));

  const leftRight = calculateLeftRightScore(axes);
  leftRight.uncertainty = Math.min(
    50,
    Math.round(leftRight.uncertainty * mult * 10) / 10
  );

  return {
    sessionId: session.id,
    mode: session.mode,
    answeredCount,
    skippedCount,
    axes,
    leftRight,
    consistency,
    convictions: calculateConvictions(questions, answers),
    centrist: calculateCentrist(questions, answers),
    selfPlacement: session.selfPlacement,
    computedAt: new Date().toISOString(),
    demoData: session.demoData,
  };
}
