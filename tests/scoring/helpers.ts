import type {
  AnswerValue,
  PartyPosition,
  PositionStatus,
  Question,
  UserAnswer,
} from "@/lib/types";

let counter = 0;

export function makeQuestion(overrides: Partial<Question> = {}): Question {
  counter++;
  return {
    id: overrides.id ?? `q_${counter}`,
    statement: `Afirmación de prueba ${counter}`,
    category: "economia",
    weights: { economic: 1 },
    importance: 2,
    polarity: "positive",
    partyPositions: [],
    status: "published",
    demo: false,
    needsVerification: false,
    updatedAt: "2026-01-01",
    ...overrides,
  };
}

export function makePosition(
  party: string,
  status: PositionStatus,
  overrides: Partial<PartyPosition> = {}
): PartyPosition {
  return {
    party,
    status,
    source: { type: "demo", document: "Documento de prueba", date: "2026-01-01" },
    confidence: 0.9,
    validFrom: "2023-07-23",
    needsVerification: false,
    ...overrides,
  };
}

export function answer(
  questionId: string,
  value: AnswerValue | "skipped",
  personalImportance?: UserAnswer["personalImportance"]
): UserAnswer {
  return { questionId, value, personalImportance, answeredAt: "2026-01-01T00:00:00Z" };
}

export function answersFor(
  questions: Question[],
  value: AnswerValue | "skipped"
): Record<string, UserAnswer> {
  return Object.fromEntries(questions.map((q) => [q.id, answer(q.id, value)]));
}
