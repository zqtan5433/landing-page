"use client";

import Link from "next/link";
import { useCopy } from "@/lib/i18n";

const copy = {
  en: { back: "All templates" },
  zh: { back: "全部模板" },
};

export function PreviewBar() {
  const t = useCopy(copy);

  return (
    <div className="fixed top-4 left-4 z-50">
      <Link
        href="/"
        className="inline-flex items-center rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm backdrop-blur dark:border-white/15 dark:bg-zinc-900/90 dark:text-zinc-100"
      >
        ← {t.back}
      </Link>
    </div>
  );
}
