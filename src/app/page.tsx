import Link from "next/link";
import { MODE_INFO } from "@/lib/labels";
import { activeQuestions, USING_DEMO_DATA } from "@/data/questions";
import { categoryLabel } from "@/data/categories";
import { CURRENT_ELECTION, TRACKED_CANDIDACIES } from "@/data/elections";
import { datasetStats, formatDate } from "@/data/stats";
import { DemoBanner } from "@/components/ui/DemoBanner";
import { BlindCard } from "@/components/landing/BlindCard";
import { DaysUntil } from "@/components/ui/DaysUntil";

const MODES = [
  { mode: "quick", href: "/test?modo=rapido" },
  { mode: "full", href: "/test?modo=completo" },
  { mode: "deep", href: "/test?modo=exhaustivo" },
] as const;

// Propuestas de ejemplo de la tarjeta: variadas en tema y sin pista de origen.
const SAMPLE_IDS = ["imp_003", "nuc_002", "viv_002", "edu_001", "ene_001"];

const STEPS = [
  {
    title: "Juzgas ideas, no siglas",
    body: "Propuestas reales de programas y votaciones, reescritas con lenguaje neutral. Nunca ves quién las defiende.",
  },
  {
    title: "Ves tu mapa en siete ejes",
    body: "Economía, sociedad, autoridad, territorio, Europa, inmigración y medioambiente, cada uno con su margen de incertidumbre.",
  },
  {
    title: "Al final, si quieres, se levanta el velo",
    body: "Predices qué partido se parece más a tus respuestas y descubres, propuesta a propuesta, quién defendía cada idea, con la cita y la fuente.",
  },
];

export default function Landing() {
  const stats = datasetStats();
  const samples = SAMPLE_IDS.map((id) => activeQuestions.find((q) => q.id === id))
    .filter((q) => q !== undefined)
    .map((q) => ({
      id: q.id,
      category: categoryLabel(q.category),
      statement: q.statement,
    }));
  const incorporated = TRACKED_CANDIDACIES.filter(
    (c) => c.programStatus === "incorporated"
  ).length;
  const published = TRACKED_CANDIDACIES.filter(
    (c) => c.programStatus !== "pending"
  ).length;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* ------------------------------------------------------------ hero */}
      <section className="py-14 sm:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted mb-6">
            Un test sobre ideas, no sobre siglas
          </p>
          <h1 className="font-display text-[2.6rem] sm:text-6xl leading-[1.04] tracking-tight text-balance">
            ¿Qué piensas <em className="text-accent not-italic">realmente</em>?
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-2 leading-relaxed">
            Responde a propuestas políticas concretas{" "}
            <strong className="text-ink">sin saber quién las propone</strong>.
            Descubre dónde se sitúan tus respuestas y, solo al final, qué
            partidos defendían cada idea.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/test"
              className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-4 rounded-lg text-lg font-medium hover:bg-accent transition-colors shadow-[0_10px_30px_-12px_rgba(33,29,24,0.6)]"
            >
              Empezar el test
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#como-funciona"
              className="text-ink-2 underline decoration-dotted underline-offset-4 hover:text-accent transition-colors"
            >
              Cómo funciona
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">
            Sin registro · 5 minutos en la versión rápida · tus respuestas no
            salen de tu dispositivo
          </p>
        </div>
        <div className="lg:pl-4">
          <BlindCard items={samples} />
        </div>
      </section>

      {/* ------------------------------------------------- cómo funciona */}
      <section
        id="como-funciona"
        aria-labelledby="como-funciona-h"
        className="py-12 border-t border-line scroll-mt-20"
      >
        <h2 id="como-funciona-h" className="font-display text-3xl sm:text-4xl">
          Cómo funciona
        </h2>
        <ol className="mt-8 grid sm:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="font-display text-5xl text-accent/80 tabular-nums">
                {i + 1}
              </span>
              <h3 className="mt-2 font-medium text-lg">{step.title}</h3>
              <p className="mt-1.5 text-ink-2 leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ----------------------------------------------------- modalidades */}
      <section aria-labelledby="modalidades" className="py-12 border-t border-line">
        <h2 id="modalidades" className="font-display text-3xl sm:text-4xl">
          Elige tu test
        </h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {MODES.map(({ mode, href }) => {
            const info = MODE_INFO[mode];
            return (
              <Link
                key={mode}
                href={href}
                className="group relative border border-line rounded-xl p-6 bg-surface hover:border-accent hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl tabular-nums">
                    {Math.min(info.count, stats.questions)}
                  </span>
                  <span className="text-xs text-muted">{info.duration}</span>
                </div>
                <div className="mt-2 font-medium group-hover:text-accent transition-colors">
                  {info.label}{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-ink-2">{info.blurb}</p>
              </Link>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-muted">
          La duración es orientativa. Base actual: {stats.questions} propuestas;
          los tests largos usan todas las disponibles.
        </p>
      </section>

      {/* ---------------------------------------------------- transparencia */}
      <section aria-labelledby="cifras" className="py-12 border-t border-line">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="cifras" className="font-display text-3xl sm:text-4xl">
            Todo es auditable
          </h2>
          <Link
            href="/fuentes"
            className="text-sm text-ink-2 underline decoration-dotted underline-offset-4 hover:text-accent"
          >
            Explorar las fuentes →
          </Link>
        </div>
        <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line rounded-xl overflow-hidden border border-line">
          {[
            [stats.questions, "propuestas con redacción neutral"],
            [stats.literalQuotes, "posiciones de partido con cita literal"],
            [stats.primarySources, "fuentes primarias: programas, votaciones, BOE"],
            [stats.axes, "ejes ideológicos independientes"],
          ].map(([value, label]) => (
            <div key={label} className="bg-surface p-5">
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block font-display text-4xl tabular-nums">{value}</span>
                <span className="block mt-1 text-sm text-ink-2">{label}</span>
              </dd>
            </div>
          ))}
        </dl>
        {stats.lastVerified && (
          <p className="mt-3 text-xs text-muted">
            Última verificación de fuentes: {formatDate(stats.lastVerified)}.
            Cada cambio queda registrado en{" "}
            <Link href="/novedades" className="underline hover:text-accent">
              novedades
            </Link>{" "}
            y en el historial público del repositorio.
          </p>
        )}
      </section>

      {/* ------------------------------------------------------------ 29-N */}
      <section aria-labelledby="elecciones" className="py-12 border-t border-line">
        <Link
          href="/elecciones"
          className="group block rounded-2xl border border-line bg-surface p-6 sm:p-8 hover:border-accent transition-colors"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm text-muted">
            <span className="uppercase tracking-[0.2em] text-xs">
              Elecciones generales · {formatDate(CURRENT_ELECTION.date)}
            </span>
            <DaysUntil date={CURRENT_ELECTION.date} />
          </div>
          <h2
            id="elecciones"
            className="mt-3 font-display text-2xl sm:text-3xl group-hover:text-accent transition-colors"
          >
            Seguimos los programas del 29-N{" "}
            <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </h2>
          <p className="mt-2 text-ink-2 max-w-2xl">
            {TRACKED_CANDIDACIES.length} candidaturas en seguimiento ·{" "}
            {published} con documentos publicados · {incorporated} incorporadas
            a la comparación. Mientras tanto, las posiciones proceden de los
            programas del 23J-2023 y de votaciones en el Congreso.
          </p>
        </Link>
      </section>

      {/* ---------------------------------------------------------- principios */}
      <section className="py-12 border-t border-line space-y-6">
        <div className="grid sm:grid-cols-3 gap-8 text-sm">
          <div className="border-t-2 border-ink pt-3">
            <h3 className="font-medium">Propuestas, no eslóganes</h3>
            <p className="mt-1 text-ink-2">
              Cada afirmación procede de propuestas políticas concretas,
              reescritas con lenguaje neutral y con su trade-off explícito.
            </p>
          </div>
          <div className="border-t-2 border-ink pt-3">
            <h3 className="font-medium">Varios ejes, no una etiqueta</h3>
            <p className="mt-1 text-ink-2">
              Siete dimensiones independientes con intervalo de incertidumbre.
              La realidad no cabe en izquierda/derecha, y lo decimos.
            </p>
          </div>
          <div className="border-t-2 border-ink pt-3">
            <h3 className="font-medium">Privado por diseño</h3>
            <p className="mt-1 text-ink-2">
              Sin registro, sin correo, sin rastreadores. Tus respuestas se
              calculan en tu dispositivo.
            </p>
          </div>
        </div>
        {USING_DEMO_DATA && <DemoBanner />}
      </section>
    </div>
  );
}
