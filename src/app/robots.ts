import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * El test y los resultados no se indexan (son estado personal, no contenido);
 * el panel interno tampoco. Sí se indexan landing, metodología, fuentes,
 * acerca de y privacidad.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/resultados", "/test"],
    },
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
