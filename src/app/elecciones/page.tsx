import type { Metadata } from "next";
import Link from "next/link";
import {
  CURRENT_ELECTION,
  PROGRAM_STATUS_LABELS,
  TRACKED_CANDIDACIES,
  type ProgramStatus,
} from "@/data/elections";
import { formatDate } from "@/data/stats";
import { DaysUntil } from "@/components/ui/DaysUntil";
import { REPO_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programas del 29-N",
  description:
    "Seguimiento público de los programas electorales de las elecciones generales del 29 de noviembre de 2026 y de su incorporación al test.",
};

const STATUS_STYLE: Record<ProgramStatus, string> = {
  pending: "border-line text-muted",
  partial: "border-accent/40 text-ink-2",
  published: "border-accent text-ink",
  incorporated: "border-ink bg-ink text-paper",
};

const STEPS = [
  [
    "Detección",
    "Una revisión periódica comprueba las webs oficiales de cada candidatura y lo contrasta con varios medios de distinta línea editorial.",
  ],
  [
    "Extracción literal",
    "De cada programa se extraen solo citas literales con página, para las propuestas que ya existen en el test o para otras nuevas.",
  ],
  [
    "Revisión pública",
    "Cada cambio llega como pull request en el repositorio: qué cita, de qué página, qué posición se asigna y por qué. Nada entra sin revisión.",
  ],
  [
    "Versionado",
    "La posición de 2023 no se borra: se cierra con fecha y la nueva entra en vigor. La comparación usa siempre la vigente.",
  ],
];

export default function EleccionesPage() {
  const byName = (a: { name: string }, b: { name: string }) =>
    a.name.localeCompare(b.name, "es");
  const groups = [
    {
      label: "Ámbito estatal",
      items: TRACKED_CANDIDACIES.filter((c) => c.scope.startsWith("Estatal")).sort(byName),
    },
    {
      label: "Ámbito territorial",
      items: TRACKED_CANDIDACIES.filter((c) => !c.scope.startsWith("Estatal")).sort(
        byName
      ),
    },
  ];
  const lastChecked = TRACKED_CANDIDACIES.map((c) => c.lastChecked).sort().at(-1) ?? "";

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">
        Seguimiento de programas
      </p>
      <h1 className="font-display text-4xl sm:text-5xl mt-3 text-balance">
        Elecciones generales del 29-N
      </h1>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-2">
        <span>Votación: {formatDate(CURRENT_ELECTION.date)}</span>
        <span>
          Campaña: {formatDate(CURRENT_ELECTION.campaign.from)} –{" "}
          {formatDate(CURRENT_ELECTION.campaign.to)}
        </span>
        <span className="text-accent font-medium">
          <DaysUntil date={CURRENT_ELECTION.date} />
        </span>
      </div>
      <p className="mt-6 text-ink-2 max-w-2xl leading-relaxed">
        Cuando cada candidatura publique su programa, sus propuestas se
        verifican y se incorporan al test con el mismo procedimiento que el
        resto. Hasta entonces, la comparación usa los programas del 23J-2023 y
        votaciones en el Congreso, y lo indica en cada posición.
      </p>
      <p className="mt-2 text-xs text-muted">
        Convocatoria: {CURRENT_ELECTION.convocation.description} el{" "}
        {formatDate(CURRENT_ELECTION.convocation.date)}. Última comprobación de
        esta lista: {formatDate(lastChecked)}.
      </p>

      {groups.map((group) => (
        <section key={group.label} className="mt-12" aria-label={group.label}>
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
            {group.label}
          </h2>
          <ul className="divide-y divide-line border-y border-line">
            {group.items.map((c) => (
              <li key={c.id} className="py-4 grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-2">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-medium text-lg">{c.name}</span>
                    <span className="text-sm text-muted">{c.scope}</span>
                  </div>
                  {c.composition && (
                    <p className="text-sm text-ink-2 mt-0.5">{c.composition}</p>
                  )}
                  {c.documents.length > 0 && (
                    <ul className="mt-1.5 space-y-0.5 text-sm">
                      {c.documents.map((d) => (
                        <li key={d.url}>
                          <a
                            href={d.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-dotted underline-offset-4 hover:text-accent"
                          >
                            {d.title}
                          </a>{" "}
                          <span className="text-muted">· {formatDate(d.date)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {c.notes && <p className="text-xs text-muted mt-1">{c.notes}</p>}
                </div>
                <div className="sm:text-right">
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs ${STATUS_STYLE[c.programStatus]}`}
                  >
                    {PROGRAM_STATUS_LABELS[c.programStatus]}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mt-14" aria-labelledby="proceso">
        <h2 id="proceso" className="font-display text-3xl">
          Cómo entra un programa en el test
        </h2>
        <ol className="mt-6 grid sm:grid-cols-2 gap-6">
          {STEPS.map(([title, body], i) => (
            <li key={title} className="border-t-2 border-ink pt-3">
              <span className="text-xs text-muted tabular-nums">Paso {i + 1}</span>
              <h3 className="font-medium mt-0.5">{title}</h3>
              <p className="mt-1 text-sm text-ink-2 leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-ink-2">
          La lista sigue un criterio fijo: candidaturas con representación en el
          Congreso saliente o con presencia relevante en el ciclo electoral, y
          las que se presentan como nuevas formaciones estatales. El orden es
          alfabético. ¿Falta alguna?{" "}
          <a
            href={`${REPO_URL}/issues/new?template=fuente.yml`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            Propón una fuente
          </a>{" "}
          o consulta las{" "}
          <Link href="/novedades" className="underline hover:text-accent">
            novedades
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
