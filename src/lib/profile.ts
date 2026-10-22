import type { AxisId, QuizResult } from "@/lib/types";
import { AXIS_BY_ID } from "@/data/axes";

/**
 * Perfil descriptivo generado EXCLUSIVAMENTE a partir de puntuaciones (§32).
 * Sin atribuciones psicológicas, sin etiquetas de identidad: describe
 * tendencias de las respuestas.
 */

interface AxisPhrase {
  axis: AxisId;
  /** [inclinación al polo negativo, inclinación al polo positivo] */
  strong: [string, string];
  moderate: [string, string];
}

const PHRASES: AxisPhrase[] = [
  {
    axis: "economic",
    strong: [
      "una preferencia clara por la intervención pública y la redistribución económica",
      "una preferencia clara por el mercado y una menor intervención económica del Estado",
    ],
    moderate: [
      "una preferencia moderada por la redistribución económica",
      "una preferencia moderada por soluciones de mercado en economía",
    ],
  },
  {
    axis: "social",
    strong: [
      "posiciones socialmente muy progresistas",
      "posiciones socialmente muy conservadoras",
    ],
    moderate: [
      "posiciones socialmente progresistas",
      "posiciones socialmente conservadoras",
    ],
  },
  {
    axis: "authority",
    strong: [
      "una defensa marcada de las libertades individuales frente a la autoridad",
      "una preferencia marcada por el orden y la autoridad",
    ],
    moderate: [
      "cierta preferencia por las libertades individuales",
      "cierta preferencia por el orden y la seguridad",
    ],
  },
  {
    axis: "territorial",
    strong: [
      "una visión claramente descentralizadora del Estado",
      "una visión claramente centralizadora del Estado",
    ],
    moderate: [
      "una visión relativamente descentralizadora del Estado",
      "una visión relativamente centralizadora del Estado",
    ],
  },
  {
    axis: "europe",
    strong: [
      "un apoyo decidido a una mayor integración europea",
      "una posición decididamente soberanista frente a la Unión Europea",
    ],
    moderate: [
      "una inclinación favorable a la integración europea",
      "una inclinación soberanista respecto a la Unión Europea",
    ],
  },
  {
    axis: "immigration",
    strong: [
      "posiciones claramente favorables a la apertura migratoria",
      "posiciones claramente restrictivas en inmigración",
    ],
    moderate: [
      "posiciones relativamente abiertas en inmigración",
      "posiciones relativamente restrictivas en inmigración",
    ],
  },
  {
    axis: "environment",
    strong: [
      "un apoyo firme a una política ambiental más ambiciosa",
      "un claro escepticismo hacia una mayor regulación ambiental",
    ],
    moderate: [
      "una inclinación hacia una mayor intervención ambiental",
      "una inclinación hacia una menor regulación ambiental",
    ],
  },
];

export function generateProfileSummary(result: QuizResult): string {
  const parts: string[] = [];
  for (const phrase of PHRASES) {
    const axis = result.axes.find((a) => a.axis === phrase.axis);
    if (!axis || axis.answered < 2) continue;
    const dev = axis.display - 50;
    if (Math.abs(dev) < 10) continue; // cerca del centro: no lo destacamos
    const pole = dev > 0 ? 1 : 0;
    parts.push(Math.abs(dev) >= 28 ? phrase.strong[pole] : phrase.moderate[pole]);
  }

  if (parts.length === 0) {
    return "Tus respuestas se sitúan cerca del centro en la mayoría de las dimensiones evaluadas, sin inclinaciones marcadas en ningún eje.";
  }

  const list =
    parts.length === 1
      ? parts[0]
      : parts.slice(0, -1).join(", ") + " y " + parts[parts.length - 1];
  return `Tus respuestas muestran ${list}. Recuerda que este resumen describe únicamente el conjunto de respuestas dadas en este test.`;
}

/**
 * "Contradicciones interesantes" (§31): ejes de contenido cuya puntuación se
 * desvía notablemente del índice global, en direcciones opuestas. Tono
 * descriptivo, nunca burlón.
 */
export function findContrasts(result: QuizResult): string[] {
  const lr = result.leftRight.display;
  const out: string[] = [];
  const deviations = result.axes
    .filter((a) => a.answered >= 2 && result.leftRight.axesUsed.includes(a.axis))
    .map((a) => ({ axis: a, dev: a.display - lr }));

  const left = deviations.filter((d) => d.dev <= -20);
  const right = deviations.filter((d) => d.dev >= 20);
  if (left.length === 0 || right.length === 0) return out;

  for (const l of left.slice(0, 2)) {
    for (const r of right.slice(0, 2)) {
      out.push(
        `En ${AXIS_BY_ID[l.axis.axis].label.toLowerCase()} tus respuestas se inclinan hacia «${AXIS_BY_ID[
          l.axis.axis
        ].negativePole.toLowerCase()}» más que tu perfil general, mientras que en ${AXIS_BY_ID[
          r.axis.axis
        ].label.toLowerCase()} se acercan más a «${AXIS_BY_ID[r.axis.axis].positivePole.toLowerCase()}».`
      );
      if (out.length >= 2) return out;
    }
  }
  return out;
}
