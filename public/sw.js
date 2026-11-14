/**
 * Service worker: deja la web usable sin conexión después de la primera
 * visita.
 *
 * - Al instalarse descarga las páginas públicas y sus recursos
 *   (/_next/static), así que también abren sin red las que aún no se han
 *   visitado.
 * - Páginas y datos de navegación (RSC): primero la red y, si falla, la copia
 *   guardada. Con conexión siempre se ve la versión publicada más reciente.
 * - /_next/static: primero la caché; sus nombres llevan hash y no cambian.
 *
 * Cada despliegue registra el worker con otra versión (?v=), lo que vuelve a
 * descargar todo y borra las cachés de la versión anterior. No guarda nada
 * del usuario: las respuestas del test siguen solo en localStorage.
 */

const VERSION = new URL(self.location.href).searchParams.get("v") || "dev";
const PREFIX = "pq-";
const PAGES = `${PREFIX}pages-${VERSION}`;
const ASSETS = `${PREFIX}assets-${VERSION}`;

const ROUTES = [
  "/",
  "/test",
  "/resultados",
  "/resultados/partidos",
  "/metodologia",
  "/fuentes",
  "/elecciones",
  "/novedades",
  "/privacidad",
  "/acerca-de",
];

const STATIC_ASSET = /\/_next\/static\/[^"'\s\\)]+/g;

function isStaticAsset(url) {
  return url.pathname.startsWith("/_next/static/");
}

function isRscRequest(request, url) {
  return request.headers.get("RSC") === "1" || url.searchParams.has("_rsc");
}

async function cacheAssetsOf(html) {
  const cache = await caches.open(ASSETS);
  const urls = [...new Set(html.match(STATIC_ASSET) ?? [])];
  await Promise.all(
    urls.map(async (path) => {
      if (await cache.match(path)) return;
      try {
        const response = await fetch(path);
        if (response.ok) await cache.put(path, response);
      } catch {
        // Un recurso que falte solo afecta a esa página.
      }
    })
  );
}

async function precache() {
  const pages = await caches.open(PAGES);
  await Promise.all(
    [...ROUTES, "/favicon.ico"].map(async (route) => {
      try {
        const response = await fetch(route, { cache: "no-cache" });
        if (!response.ok) return;
        if (route !== "/favicon.ico") {
          await cacheAssetsOf(await response.clone().text());
        }
        await pages.put(route, response);
      } catch {
        // Sin red durante la instalación: se guardará al navegar.
      }
    })
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((n) => n.startsWith(PREFIX) && n !== PAGES && n !== ASSETS)
          .map((n) => caches.delete(n))
      );
      await self.clients.claim();
    })()
  );
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(ASSETS);
    await cache.put(request, response.clone());
  }
  return response;
}

async function networkFirst(request, { navigation }) {
  const cache = await caches.open(PAGES);
  try {
    const response = await fetch(request);
    if (response.ok && response.type === "basic") {
      await cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;
    if (!navigation) throw error; // Next.js recurre a una navegación completa.
    // Mismo pathname con otros parámetros (p. ej. /test?modo=rapido).
    const samePath = await cache.match(request, { ignoreSearch: true });
    if (samePath) return samePath;
    const home = await cache.match("/");
    if (home) return home;
    return new Response(
      "<!doctype html><meta charset=utf-8><title>Sin conexión</title>" +
        "<p>Sin conexión. Vuelve a intentarlo cuando tengas red.</p>",
      { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === "/sw.js" || url.pathname.startsWith("/admin")) return;
  if (url.pathname.startsWith("/_next/webpack-hmr")) return;

  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request));
  } else if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, { navigation: true }));
  } else if (isRscRequest(request, url)) {
    event.respondWith(networkFirst(request, { navigation: false }));
  }
});
