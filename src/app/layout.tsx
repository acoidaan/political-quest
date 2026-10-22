import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "¿Dónde estás políticamente?",
    template: "%s · ¿Dónde estás políticamente?",
  },
  description:
    "Responde a propuestas políticas reales sin saber quién las propone y descubre dónde se sitúan tus respuestas en varios ejes ideológicos.",
  openGraph: {
    title: "¿Dónde estás políticamente?",
    description:
      "Juzga ideas, no siglas: un test basado en propuestas políticas concretas, con metodología transparente.",
    locale: "es_ES",
    type: "website",
    siteName: "¿Dónde estás políticamente?",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Dónde estás políticamente?",
    description:
      "Juzga ideas, no siglas: un test basado en propuestas políticas concretas, con metodología transparente.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-4 focus:py-2 focus:rounded focus:shadow"
        >
          Saltar al contenido
        </a>
        <header className="border-b border-line">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-baseline justify-between gap-4">
            <Link
              href="/"
              className="font-display text-lg tracking-tight hover:text-accent transition-colors"
            >
              ¿Dónde estás políticamente?
            </Link>
            <nav aria-label="Principal" className="flex gap-4 text-sm text-ink-2">
              <Link href="/metodologia" className="hover:text-accent transition-colors">
                Metodología
              </Link>
              <Link href="/fuentes" className="hover:text-accent transition-colors">
                Fuentes
              </Link>
              <Link
                href="/acerca-de"
                className="hidden sm:inline hover:text-accent transition-colors"
              >
                Acerca de
              </Link>
            </nav>
          </div>
        </header>
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-line mt-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 text-sm text-muted flex flex-wrap gap-x-6 gap-y-2">
            <span>
              Un experimento de transparencia política. Sin registro, sin rastreo.
            </span>
            <nav aria-label="Legal" className="flex gap-4">
              <Link href="/privacidad" className="hover:text-accent transition-colors">
                Privacidad
              </Link>
              <Link href="/acerca-de" className="hover:text-accent transition-colors">
                Acerca de
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
