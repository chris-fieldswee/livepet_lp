"use client"

import { useLanguage } from "@/context/language-context"

export default function LanguageSwitch() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm px-1 py-0.5">
      <button
        type="button"
        onClick={() => setLocale("pl")}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          locale === "pl" ? "bg-white text-zinc-900" : "text-white/80 hover:text-white"
        }`}
        aria-label="Polski"
        aria-pressed={locale === "pl"}
      >
        PL
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          locale === "en" ? "bg-white text-zinc-900" : "text-white/80 hover:text-white"
        }`}
        aria-label="English"
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  )
}
