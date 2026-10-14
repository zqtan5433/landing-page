import { notFound } from "next/navigation";
import { templates } from "@/catalog/templates";
import { PreviewBar } from "@/components/preview-bar";
import { templateViews } from "@/templates";

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export default async function TemplatePreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const View = templateViews[slug];

  if (!View) {
    notFound();
  }

  return (
    <>
      <PreviewBar />
      <View />
    </>
  );
}
