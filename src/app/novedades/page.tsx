import type { Metadata } from "next";
import { CHANGE_KIND_LABELS, CHANGELOG } from "@/data/changelog";
import { formatDate } from "@/data/stats";
import { REPO_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Novedades",
  description:
    "Registro público de cambios en propuestas, posiciones de partidos, fuentes y metodología.",
};

export default function NovedadesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="font-display text-4xl sm:text-5xl">Novedades</h1>
      <p className="mt-3 text-ink-2 max-w-2xl">
        Cada cambio en propuestas, posiciones de partidos, fuentes o
        metodología queda registrado aquí con su fecha. El detalle completo,
        línea a línea, está en el{" "}
        <a
          href={`${REPO_URL}/commits/main`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent"
        >
          historial público del repositorio
        </a>
        .
      </p>

      <ol className="mt-10 relative border-l border-line ml-1.5 space-y-10">
        {CHANGELOG.map((entry) => (
          <li key={`${entry.date}-${entry.title}`} className="pl-6 relative">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-paper"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 text-sm">
              <time dateTime={entry.date} className="text-muted">
                {formatDate(entry.date)}
              </time>
              <span className="text-xs uppercase tracking-[0.15em] text-accent">
                {CHANGE_KIND_LABELS[entry.kind]}
              </span>
            </div>
            <h2 className="font-display text-2xl mt-1">{entry.title}</h2>
            <ul className="mt-2 space-y-1.5 text-ink-2 list-disc pl-5">
              {entry.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
