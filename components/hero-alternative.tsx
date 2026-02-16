"use client"

import Image from "next/image"
import SignupForm from "@/components/signup-form"
import StoreBadges from "@/components/store-badges"
import HorizontalLogoMarquee from "@/components/horizontal-logo-marquee"
import LanguageSwitch from "@/components/language-switch"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function HeroAlternative() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <section
      className="relative w-full min-h-[100dvh] md:h-[100dvh] flex flex-col overflow-y-auto md:overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/images/hero-bg.png)",
      }}
      aria-label="Hero"
    >
      {/* Full screen overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        aria-hidden
      />
      {/* Top bar: LivePet logo + language switch */}
      <div className="relative z-10 flex shrink-0 items-center justify-center w-full py-8 px-4">
        <div className="absolute top-8 right-4">
          <LanguageSwitch />
        </div>
        <Image
          src="/assets/images/logo.png"
          alt="LivePet Logo"
          width={140}
          height={48}
          className="h-5 w-auto brightness-0 invert"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 pb-0 text-center min-h-0">
        {/* Claim, signup form and badges - vertically centered */}
        <div className="flex flex-1 min-h-0 flex-col items-center justify-center">
          <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-4 text-white leading-tight">
            {t.hero.headline1}
            <br />
            <span className="whitespace-nowrap">{t.hero.headline2}</span>
          </h2>
          <p className="text-base sm:text-lg text-white mb-4 sm:mb-5 md:mb-4 max-w-xl mx-auto whitespace-pre-line">
            {t.hero.subtitle}
          </p>
          <div id="signup-alt" className="w-full max-w-2xl mx-auto mb-0">
            <div className="p-4 sm:p-5">
              <SignupForm align="center" variant="light" />
            </div>
          </div>
          <div className="flex flex-col items-center w-full pt-3 sm:pt-4">
            <div className="grid grid-cols-[0.5fr_1fr_1fr_0.5fr] gap-2 w-full max-w-lg mx-auto">
              <div />
              <div className="flex justify-center">
                <StoreBadges variant="dark" badge="app-store" showFootnote={false} />
              </div>
              <div className="flex justify-center">
                <StoreBadges variant="dark" badge="google-play" showFootnote={false} />
              </div>
              <div />
            </div>
          </div>
        </div>

        {/* Horizontal logo marquee at bottom */}
        <div className="flex shrink-0 flex-col items-center w-full pt-6 sm:pt-8 pb-6 sm:pb-8">
          <HorizontalLogoMarquee />
        </div>
      </div>
    </section>
  )
}
