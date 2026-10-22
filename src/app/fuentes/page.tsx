import type { Metadata } from "next";
import { USING_DEMO_DATA } from "@/data/questions";
import { DemoBanner } from "@/components/ui/DemoBanner";
import { SourcesExplorer } from "@/components/sources/SourcesExplorer";

export const metadata: Metadata = {
  title: "Fuentes",
  description:
    "Base consultable de propuestas: versión neutral, texto original, posiciones de partidos, documento, fecha y verificación.",
};

export default function FuentesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <h1 className="font-display text-4xl">Fuentes</h1>
      <p className="mt-3 text-ink-2 max-w-2xl">
        Cada propuesta del test es auditable: aquí puedes ver su redacción
        neutral, sus pesos ideológicos, la nota metodológica y la posición
        documentada de cada partido con su fuente y fecha. Durante el test nada
        de esto es visible; la transparencia llega después, para no convertir
        las preguntas en marcas.
      </p>
      {USING_DEMO_DATA && (
        <div className="mt-5">
          <DemoBanner />
        </div>
      )}
      <div className="mt-8">
        <SourcesExplorer />
      </div>
    </div>
  );
}
