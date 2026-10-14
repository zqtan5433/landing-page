"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "zh" | "en";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("locale");
    if (saved === "zh" || saved === "en") {
      setLocaleState(saved);
      document.documentElement.lang = saved === "zh" ? "zh-CN" : "en";
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("locale", next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale() {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useLocale must be used within I18nProvider");
  }
  return value;
}

export function useCopy<T>(copy: Record<Locale, T>): T {
  const { locale } = useLocale();
  return copy[locale];
}
