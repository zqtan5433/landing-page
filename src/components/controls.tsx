"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={`inline-flex h-9 w-9 ${className}`} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5z" />
        </svg>
      )}
    </button>
  );
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
      className={`inline-flex h-9 items-center rounded-full border px-3 text-xs font-medium tracking-wide ${className}`}
    >
      {locale === "zh" ? "EN" : "中文"}
    </button>
  );
}
