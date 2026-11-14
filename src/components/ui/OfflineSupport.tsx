"use client";

import { useEffect, useSyncExternalStore } from "react";

function subscribe(onChange: () => void): () => void {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);
  return () => {
    window.removeEventListener("online", onChange);
    window.removeEventListener("offline", onChange);
  };
}

/**
 * Registra el service worker (public/sw.js) que deja la web usable sin
 * conexión tras la primera visita, y avisa cuando el navegador está sin red.
 * Solo en producción: en desarrollo la caché ocultaría los cambios.
 */
export function OfflineSupport() {
  const online = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    const version = encodeURIComponent(process.env.SW_VERSION ?? "dev");
    navigator.serviceWorker
      .register(`/sw.js?v=${version}`, { scope: "/", updateViaCache: "none" })
      .catch(() => {
        // Sin service worker la web funciona igual, solo que necesita red.
      });
  }, []);

  if (online) return null;
  return (
    <div
      role="status"
      className="bg-accent-soft text-ink text-sm text-center px-4 py-2 border-b border-line"
    >
      Sin conexión. Puedes seguir con el test: tus respuestas se guardan en
      este dispositivo.
    </div>
  );
}
