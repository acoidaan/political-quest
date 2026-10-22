import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, priority: 1 },
    { url: `${base}/metodologia`, lastModified: now, priority: 0.8 },
    { url: `${base}/fuentes`, lastModified: now, priority: 0.7 },
    { url: `${base}/acerca-de`, lastModified: now, priority: 0.5 },
    { url: `${base}/privacidad`, lastModified: now, priority: 0.3 },
  ];
}
