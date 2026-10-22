import { useSyncExternalStore } from "react";
import type { QuizMode, QuizSession, UserAnswer } from "@/lib/types";
import { randomId, randomSeed } from "@/lib/rng";

/**
 * Persistencia local de la sesión: SOLO localStorage, identificador aleatorio,
 * ningún dato personal, nada sale del dispositivo (privacidad por diseño, §35).
 *
 * Se expone como store externo (useSyncExternalStore): los componentes leen la
 * sesión suscribiéndose, y toda escritura pasa por saveSession/clearSession,
 * que notifican. Evita estados duplicados y setState-en-efecto.
 */

const KEY = "dep-session-v1";

const subscribers = new Set<() => void>();

function notify(): void {
  for (const cb of subscribers) cb();
}

function subscribe(cb: () => void): () => void {
  subscribers.add(cb);
  return () => subscribers.delete(cb);
}

// Caché del snapshot: misma referencia mientras el raw no cambie (requisito
// de useSyncExternalStore para no re-renderizar en bucle).
let cacheRaw: string | null = null;
let cacheSession: QuizSession | null = null;
let cachePrimed = false;

function getSnapshot(): QuizSession | null {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    raw = null;
  }
  if (!cachePrimed || raw !== cacheRaw) {
    cacheRaw = raw;
    cachePrimed = true;
    try {
      cacheSession = raw ? (JSON.parse(raw) as QuizSession) : null;
    } catch {
      cacheSession = null;
    }
  }
  return cacheSession;
}

// En servidor (y primer render de hidratación) la sesión es "desconocida".
function getServerSnapshot(): QuizSession | null | undefined {
  return undefined;
}

/**
 * Sesión almacenada: `undefined` = aún desconocida (SSR/hidratación),
 * `null` = no hay sesión, objeto = sesión.
 */
export function useStoredSession(): QuizSession | null | undefined {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function createSession(
  mode: QuizMode,
  questionIds: string[],
  seed: number,
  demoData: boolean
): QuizSession {
  return {
    id: randomId(),
    mode,
    seed,
    questionIds,
    answers: {},
    startedAt: new Date().toISOString(),
    demoData,
  };
}

export function newSeed(): number {
  return randomSeed();
}

export function saveSession(session: QuizSession): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(session));
  } catch {
    // almacenamiento lleno o bloqueado: seguimos en memoria
    cacheRaw = `mem:${session.id}:${Object.keys(session.answers).length}:${session.finishedAt ?? ""}:${session.selfPlacement ?? ""}`;
    cacheSession = session;
    cachePrimed = true;
  }
  notify();
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    cacheRaw = null;
    cacheSession = null;
    cachePrimed = true;
  }
  notify();
}

export function loadSession(): QuizSession | null {
  if (typeof window === "undefined") return null;
  return getSnapshot();
}

export function setAnswer(session: QuizSession, answer: UserAnswer): QuizSession {
  const updated: QuizSession = {
    ...session,
    answers: { ...session.answers, [answer.questionId]: answer },
  };
  saveSession(updated);
  return updated;
}
