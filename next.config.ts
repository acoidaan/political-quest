import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Versión del service worker: cambia en cada despliegue para que el
    // navegador descargue de nuevo las páginas guardadas sin conexión.
    SW_VERSION: process.env.VERCEL_GIT_COMMIT_SHA ?? String(Date.now()),
  },
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
