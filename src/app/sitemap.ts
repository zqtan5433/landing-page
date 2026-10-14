import type { MetadataRoute } from "next";
import { templates } from "@/catalog/templates";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...templates.map((template) => ({
      url: absoluteUrl(`/templates/${template.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
