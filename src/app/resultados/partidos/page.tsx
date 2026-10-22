import type { Metadata } from "next";
import { PartyComparison } from "@/components/results/PartyComparison";

export const metadata: Metadata = {
  title: "Comparación con partidos",
  description:
    "Comparación opcional de tus respuestas con posiciones públicas documentadas.",
  robots: { index: false },
};

export default function PartidosPage() {
  return <PartyComparison />;
}
