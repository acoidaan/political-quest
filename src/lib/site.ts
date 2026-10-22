/**
 * URL pública del sitio, para metadatos absolutos (OpenGraph, sitemap).
 *
 * Prioridad: NEXT_PUBLIC_SITE_URL (dominio propio) → VERCEL_URL (despliegue
 * automático) → localhost en desarrollo.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

/** Repositorio público del proyecto (código, datos y su historial). */
export const REPO_URL = "https://github.com/acoidaan/political-quest";
