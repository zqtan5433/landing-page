import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTemplate, templates } from "@/catalog/templates";
import { JsonLd } from "@/components/json-ld";
import { PreviewBar } from "@/components/preview-bar";
import { templateJsonLd, templateMetadata } from "@/lib/seo";
import { templateViews } from "@/templates";

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    return {
      title: "Template not found",
      robots: { index: false, follow: false },
    };
  }

  return templateMetadata(template);
}

export default async function TemplatePreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplate(slug);
  const View = templateViews[slug];

  if (!template || !View) {
    notFound();
  }

  return (
    <>
      <JsonLd data={templateJsonLd(template)} />
      <PreviewBar />
      <View />
    </>
  );
}
