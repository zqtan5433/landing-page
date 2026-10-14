"use client";

import Image from "next/image";
import Link from "next/link";
import { templates } from "@/catalog/templates";
import { LanguageToggle, ThemeToggle } from "@/components/controls";
import { useCopy, useLocale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

const copy = {
  en: {
    kicker: "Template gallery",
    title: "Pages",
    count: (n: number) => `${n} pages`,
    subtitle: "Hover a card, preview the look, then view or contact on WhatsApp.",
    view: "View",
    contact: "Contact",
    open: "Open preview",
    inquire: (name: string) =>
      `Hi, I'm interested in the "${name}" website template.`,
  },
  zh: {
    kicker: "模板库",
    title: "Pages",
    count: (n: number) => `${n} 个页面`,
    subtitle: "悬停卡片预览风格，再点 View 查看，或 Contact 用 WhatsApp 联系。",
    view: "View",
    contact: "Contact",
    open: "打开预览",
    inquire: (name: string) => `你好，我对「${name}」网站模板感兴趣。`,
  },
};

export default function CatalogPage() {
  const t = useCopy(copy);
  const { locale } = useLocale();

  return (
    <div className="relative min-h-screen bg-[#eef0f3] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%)]" />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10">
        <div className="animate-rise">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{t.kicker}</p>
          <div className="mt-1 flex items-end gap-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.title}
            </h1>
            <span className="mb-1 rounded-full bg-zinc-900 px-2.5 py-1 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900">
              {t.count(templates.length)}
            </span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            {t.subtitle}
          </p>
        </div>
        <div className="animate-fade flex items-center gap-2">
          <LanguageToggle className="border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900" />
          <ThemeToggle className="border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
      </header>

      <main className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, index) => {
          const title = template.title[locale];
          const description = template.description[locale];
          const tags = template.tags[locale];

          return (
            <article
              key={template.slug}
              className="catalog-card group flex flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] dark:bg-zinc-900 dark:ring-1 dark:ring-white/10"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <Link
                href={`/templates/${template.slug}`}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={template.preview}
                  alt=""
                  fill
                  className="preview-image object-cover"
                  sizes="(min-width: 1024px) 22rem, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div
                  className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold shadow-lg"
                  style={{ background: template.swatch, color: template.swatchInk }}
                >
                  {template.mark}
                </div>
                <span className="absolute right-4 bottom-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-900 opacity-0 transition group-hover:opacity-100">
                  {t.open}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
                <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={
                        tagIndex === 0
                          ? "rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-800 dark:bg-sky-500/15 dark:text-sky-200"
                          : "rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                  <Link
                    href={`/templates/${template.slug}`}
                    className="inline-flex h-9 flex-1 items-center justify-center rounded-lg border border-zinc-200 text-sm font-medium transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                  >
                    {t.view}
                  </Link>
                  <a
                    href={whatsappLink(t.inquire(title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 flex-1 items-center justify-center rounded-lg bg-zinc-900 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                  >
                    {t.contact}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </main>
    </div>
  );
}
