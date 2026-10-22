"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/metodologia", label: "Metodología" },
  { href: "/fuentes", label: "Fuentes" },
  { href: "/elecciones", label: "29-N" },
];

/**
 * Cabecera. Durante el test entra en «modo concentración»: desaparecen los
 * enlaces a fuentes y partidos para no tentar a mirar de quién es cada
 * propuesta antes de terminar.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const inTest = pathname === "/test";

  return (
    <header className="border-b border-line bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70 sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-lg tracking-tight hover:text-accent transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <Logo />
          <span className="hidden sm:inline">¿Dónde estás políticamente?</span>
          <span className="sm:hidden">¿Dónde estás?</span>
        </Link>
        {inTest ? (
          <span className="text-xs text-muted inline-flex items-center gap-2 whitespace-nowrap">
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
            />
            <span className="sm:hidden">Test a ciegas</span>
            <span className="hidden sm:inline">Test a ciegas: sin siglas hasta el final</span>
          </span>
        ) : (
          <nav aria-label="Principal" className="flex gap-4 sm:gap-5 text-sm text-ink-2">
            {NAV.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors hover:text-accent ${
                    active ? "text-ink font-medium" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}

/** Marca: brújula mínima con la aguja sin dirección política fija. */
function Logo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 5.5 14.2 12 12 18.5 9.8 12Z" fill="var(--accent)" />
      <circle cx="12" cy="12" r="1.3" fill="var(--paper)" />
    </svg>
  );
}
