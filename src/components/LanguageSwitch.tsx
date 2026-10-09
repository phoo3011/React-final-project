"use client";
import { useI18n } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/i18n";

const options: { value: Lang; label: string; name: string }[] = [
  { value: "en", label: "EN", name: "English" },
  { value: "th", label: "TH", name: "ไทย" },
];

export default function LanguageSwitch() {
  const { lang, setLang, d } = useI18n();
  return (
    <div className="lang-switch" role="group" aria-label={d.nav.language}>
      {options.map((option) => (
        <button key={option.value} type="button" className={lang === option.value ? "active" : ""} aria-pressed={lang === option.value} title={option.name} onClick={() => setLang(option.value)}>
          {option.label}
        </button>
      ))}
    </div>
  );
}
