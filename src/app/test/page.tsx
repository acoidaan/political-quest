import type { Metadata } from "next";
import { QuizRunner } from "@/components/quiz/QuizRunner";

export const metadata: Metadata = {
  title: "Test",
  description:
    "Responde a propuestas políticas concretas sin saber quién las propone.",
  robots: { index: false },
};

export default async function TestPage({
  searchParams,
}: PageProps<"/test">) {
  const params = await searchParams;
  const modo = typeof params.modo === "string" ? params.modo : undefined;
  return <QuizRunner modeParam={modo} />;
}
