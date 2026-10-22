import type { Metadata } from "next";
import { ResultsView } from "@/components/results/ResultsView";

export const metadata: Metadata = {
  title: "Tu mapa político",
  description: "Tus resultados por ejes, con incertidumbre y sin etiquetas.",
  robots: { index: false },
};

export default function ResultadosPage() {
  return <ResultsView />;
}
