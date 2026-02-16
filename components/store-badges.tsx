"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

type StoreBadgesProps = {
  variant?: "dark" | "light"
  badge?: "app-store" | "google-play" | "both"
  showFootnote?: boolean
}

export default function StoreBadges({
  variant = "dark",
  badge = "both",
  showFootnote = true,
}: StoreBadgesProps) {
  const { locale } = useLanguage()
  const t = translations[locale]
  const badgeClasses = "flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg cursor-not-allowed bg-transparent shrink-0"

  const iconClasses = variant === "light" ? "h-8 w-8 text-zinc-800 shrink-0" : "h-8 w-8 text-white shrink-0"
  const labelClasses = variant === "light" ? "text-[10px] text-zinc-600 leading-none" : "text-[10px] text-white/90 leading-none"
  const titleClasses = variant === "light" ? "text-base font-semibold text-zinc-900 leading-tight" : "text-base font-semibold text-white leading-tight"
  const footnoteClasses = variant === "light" ? "text-sm text-zinc-600" : "text-sm text-white/80"

  const appStoreBadge = (
    <div className={badgeClasses} aria-hidden>
      <svg viewBox="0 0 24 24" className={iconClasses} fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
      <div className="flex flex-col items-start">
        <span className={`${labelClasses} whitespace-nowrap`}>{t.store.comingSoon}</span>
        <span className={`${titleClasses} whitespace-nowrap`}>{t.store.appStore}</span>
      </div>
    </div>
  )

  const googlePlayBadge = (
    <div className={badgeClasses} aria-hidden>
      <svg viewBox="0 0 24 24" className={iconClasses} fill="currentColor">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
      </svg>
      <div className="flex flex-col items-start">
        <span className={`${labelClasses} whitespace-nowrap`}>{t.store.comingSoon}</span>
        <span className={`${titleClasses} whitespace-nowrap`}>{t.store.googlePlay}</span>
      </div>
    </div>
  )

  const badges = (
    <>
      {(badge === "app-store" || badge === "both") && appStoreBadge}
      {(badge === "google-play" || badge === "both") && googlePlayBadge}
    </>
  )

  return (
    <div className="flex flex-col gap-3 w-full max-w-xl items-center text-center">
      <div className="flex flex-nowrap gap-2 sm:gap-3 justify-center items-center">{badges}</div>
      {showFootnote && (
        <p className={footnoteClasses}>{t.store.footnote}</p>
      )}
    </div>
  )
}
