import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acerca de",
  description: "Objetivo del proyecto: juzgar ideas, no marcas políticas.",
};

export default function AcercaDePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 leading-relaxed text-ink-2 [&_strong]:text-ink">
      <h1 className="font-display text-4xl text-ink">Acerca de este proyecto</h1>
      <p className="mt-4 text-lg">
        En política, la marca llega antes que la idea: sabemos qué opinar de una
        propuesta en cuanto sabemos quién la firma. Este proyecto invierte el
        orden.
      </p>
      <p className="mt-4">
        Durante el test respondes a <strong>propuestas políticas concretas</strong>{" "}
        — derivadas de programas, iniciativas parlamentarias y documentos
        oficiales — sin ver nunca qué partido las propone. Después proyectamos
        tus respuestas sobre siete ejes ideológicos y, solo si tú lo pides, te
        mostramos qué posiciones públicas de partidos españoles se parecen más
        y menos a las tuyas, con sus fuentes.
      </p>
      <p className="mt-4">
        El objetivo <strong>no</strong> es decirte a quién votar. Es enseñarte
        esto: «estas son las posiciones que has expresado cuando quitamos
        nombres, logos y siglas de la ecuación». Si terminas pensando «creía
        que sabía dónde estaba políticamente, pero es más complicado», el
        proyecto ha funcionado.
      </p>
      <h2 className="font-display text-2xl text-ink mt-10 mb-3">Principios</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Ideas antes que siglas: cero pistas de procedencia durante el test.</li>
        <li>
          Trazabilidad total: cada posición de partido con documento, fecha y
          enlace (<Link href="/fuentes" className="underline hover:text-accent">fuentes</Link>).
        </li>
        <li>
          Incertidumbre visible: ningún resultado se presenta como verdad
          absoluta (<Link href="/metodologia" className="underline hover:text-accent">metodología</Link>).
        </li>
        <li>Privacidad por diseño: todo se calcula en tu dispositivo.</li>
        <li>Neutralidad vigilada: informes automáticos de balance del dataset.</li>
      </ul>
    </article>
  );
}
