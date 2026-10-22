import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { REPO_URL, siteUrl } from "@/lib/site";
import { SiteHeader } from "@/components/ui/SiteHeader";

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
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-line mt-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-[1fr_auto] text-sm text-muted">
            <div className="space-y-1.5 max-w-md">
              <p className="font-display text-base text-ink">¿Dónde estás políticamente?</p>
              <p>
                Un experimento de transparencia política. Sin registro, sin
                rastreo. Código, datos y metodología abiertos.
              </p>
            </div>
            <nav aria-label="Pie" className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end sm:self-end">
              <Link href="/novedades" className="hover:text-accent transition-colors">
                Novedades
              </Link>
              <Link href="/elecciones" className="hover:text-accent transition-colors">
                Programas 29-N
              </Link>
              <Link href="/privacidad" className="hover:text-accent transition-colors">
                Privacidad
              </Link>
              <Link href="/acerca-de" className="hover:text-accent transition-colors">
                Acerca de
              </Link>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Código en GitHub ↗
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
