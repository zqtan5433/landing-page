import type { Metadata } from "next";
import { templates, type TemplateMeta } from "@/catalog/templates";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://landing-page-iota-seven-92.vercel.app";

export const SITE_NAME = "Pages";
export const SITE_TAGLINE =
  "Browse ready-made website templates — SaaS, salon, company, bakery, fitness — and contact us on WhatsApp.";

export const SITE_TAGLINE_ZH =
  "浏览现成网站模板（SaaS、美容院、企业、面包店、健身），并通过 WhatsApp 联系我们。";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Website templates`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  keywords: [
    "website templates",
    "landing page templates",
    "SaaS template",
    "salon website",
    "company website",
    "bakery ecommerce",
    "fitness gym website",
    "WhatsApp order",
    "Malaysia website",
    "网站模板",
    "落地页",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    alternateLocale: ["zh_CN", "zh_MY"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Website templates`,
    description: SITE_TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Website templates`,
    description: SITE_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export function templateMetadata(template: TemplateMeta): Metadata {
  const title = template.title.en;
  const description = template.description.en;
  const url = absoluteUrl(`/templates/${template.slug}`);

  return {
    title,
    description,
    keywords: [
      ...template.tags.en,
      ...template.tags.zh,
      "website template",
      "landing page",
      "WhatsApp",
    ],
    alternates: {
      canonical: `/templates/${template.slug}`,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: template.preview,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [template.preview],
    },
  };
}

export function catalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_TAGLINE,
        inLanguage: ["en", "zh"],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#templates`,
        name: "Website templates",
        numberOfItems: templates.length,
        itemListElement: templates.map((template, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/templates/${template.slug}`),
          name: template.title.en,
          description: template.description.en,
        })),
      },
    ],
  };
}

export function templateJsonLd(template: TemplateMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(`/templates/${template.slug}`),
    url: absoluteUrl(`/templates/${template.slug}`),
    name: template.title.en,
    description: template.description.en,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: template.preview,
    },
    inLanguage: ["en", "zh"],
  };
}
