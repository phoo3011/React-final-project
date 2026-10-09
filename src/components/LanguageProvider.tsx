"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { getDictionary, LANG_COOKIE, type Dictionary, type Lang } from "@/lib/i18n";

type I18n = { lang: Lang; d: Dictionary; setLang: (lang: Lang) => void };
const I18nContext = createContext<I18n | null>(null);

export function LanguageProvider({ initialLang, children }: { initialLang: Lang; children: React.ReactNode }) {
  const router = useRouter();
  const [lang, setLangState] = useState<Lang>(initialLang);
  function setLang(next: Lang) {
    if (next === lang) return;
    document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = next;
    setLangState(next);
    router.refresh();
  }
  return <I18nContext.Provider value={{ lang, d: getDictionary(lang), setLang }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside LanguageProvider");
  return value;
}
