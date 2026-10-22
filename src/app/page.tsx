import Link from "next/link";
import { MODE_INFO } from "@/lib/labels";
import { activeQuestions, USING_DEMO_DATA } from "@/data/questions";
import { DemoBanner } from "@/components/ui/DemoBanner";

const MODES = [
  { mode: "quick", href: "/test?modo=rapido" },
  { mode: "full", href: "/test?modo=completo" },
  { mode: "deep", href: "/test?modo=exhaustivo" },
] as const;

export default function Landing() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <section className="py-16 sm:py-24 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
          Un test sobre ideas, no sobre siglas
        </p>
        <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight">
          ¿Qué piensas <em className="text-accent not-italic">realmente</em>?
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-ink-2 leading-relaxed">
          Responde a propuestas políticas concretas{" "}
          <strong className="text-ink">sin saber quién las propone</strong>. Al
          terminar descubrirás dónde se sitúan tus respuestas en economía,
          sociedad, autoridad, territorio, Europa, inmigración y medioambiente —
          y solo si quieres, qué programas se parecen más a lo que has
          respondido.
        </p>
        <div className="mt-10">
          <Link
            href="/test"
            className="inline-block bg-ink text-paper px-8 py-4 rounded-md text-lg font-medium hover:bg-accent transition-colors"
          >
            Empezar el test
          </Link>
        </div>
      </section>

      <section aria-labelledby="modalidades" className="pb-16">
        <h2 id="modalidades" className="sr-only">
          Modalidades del test
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {MODES.map(({ mode, href }) => {
            const info = MODE_INFO[mode];
            return (
              <Link
                key={mode}
                href={href}
                className="group border border-line rounded-lg p-6 bg-surface hover:border-accent transition-colors"
              >
                <div className="font-display text-3xl">{info.count}</div>
                <div className="mt-1 font-medium group-hover:text-accent transition-colors">
                  {info.label}
                </div>
                <p className="mt-2 text-sm text-ink-2">{info.blurb}</p>
                <p className="mt-3 text-xs text-muted">{info.duration}</p>
              </Link>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-muted">
          La duración es orientativa. Base actual: {activeQuestions.length}{" "}
          propuestas; los tests largos usan todas las disponibles.
        </p>
      </section>

      <section className="pb-16 max-w-3xl space-y-6">
        <div className="grid sm:grid-cols-3 gap-6 text-sm">
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
