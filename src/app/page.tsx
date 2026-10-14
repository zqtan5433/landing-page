import type { Metadata } from "next";
import { CatalogPage } from "@/components/catalog-page";
import { JsonLd } from "@/components/json-ld";
import { catalogJsonLd, SITE_TAGLINE, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Website templates`,
  description: SITE_TAGLINE,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={catalogJsonLd()} />
      <CatalogPage />
    </>
  );
}
