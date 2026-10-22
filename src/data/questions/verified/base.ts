import type { Question } from "@/lib/types";
import { DEMO_ECONOMIA } from "../demo/economia";
import { DEMO_SOCIEDAD } from "../demo/sociedad";
import { DEMO_LIBERTADES } from "../demo/libertades";
import { DEMO_TERRITORIO_EXTERIOR } from "../demo/territorio-exterior";
import { DEMO_EQUILIBRIO } from "../demo/equilibrio";

/**
 * Resolutor del contenido editorial base (statement, pesos, categoría,
 * polaridad, pares). El contenido editorial es común a ambos pools; las
 * POSICIONES de partido del pool demo se descartan siempre al verificar.
 */
const ALL = new Map(
  [
    ...DEMO_ECONOMIA,
    ...DEMO_SOCIEDAD,
    ...DEMO_LIBERTADES,
    ...DEMO_TERRITORIO_EXTERIOR,
    ...DEMO_EQUILIBRIO,
  ].map((q) => [q.id, q])
);

export function baseQuestion(id: string): Question {
  const q = ALL.get(id);
  if (!q) throw new Error(`Pregunta base no encontrada: ${id}`);
  return q;
}
