/**
 * Hero layout used only by /hero-alt-v2.
 * Layout and structure changes in this file do not affect the main page or /hero-alt.
 * SignupForm and StoreBadges are shared; changes to those components affect all pages.
 */
import Image from "next/image"
import SignupForm from "@/components/signup-form"
import StoreBadges from "@/components/store-badges"
import VerticalLogoMarquee from "@/components/vertical-logo-marquee"

export default function HeroAlternativeV2() {
  return (
    <section
      className="relative w-full min-h-[100dvh] md:h-[100dvh] flex flex-col overflow-y-auto md:overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/images/hero-bg.png)",
      }}
      aria-label="Hero - alternatywna wersja v2"
    >
      {/* Grain overlay on background */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.35] mix-blend-overlay"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Top bar: LivePet logo (white) */}
      <div className="relative z-10 flex shrink-0 items-center justify-center w-full py-8">
        <Image
          src="/assets/images/logo.png"
          alt="LivePet Logo"
          width={140}
          height={48}
          className="h-5 w-auto brightness-0 invert"
        />
      </div>

      <div className="relative z-10 grid flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left min-h-0 grid-rows-[1fr_auto_1fr]">
        {/* Spacer: equal space above content */}
        <div aria-hidden />
        {/* Claim, signup form and badges: middle row with marquees in one container on the right */}
        <div className="flex flex-row items-stretch justify-center gap-2 min-h-0 w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-start min-h-0 flex-1 min-w-0">
            <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-4 text-zinc-900 leading-tight">
              Jeden profil.
              <br />
              <span className="whitespace-nowrap">Całe życie zwierzaka.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 mb-8 sm:mb-10 md:mb-6 max-w-2xl">
              Zdrowie, codzienność i opieka zebrane w jednym miejscu.<br /> Dla Ciebie i wszystkich, którzy są częścią życia Twojego pupila.
            </p>
            <div id="signup-alt" className="w-full max-w-2xl mb-0">
              <SignupForm align="left" variant="light" />
            </div>
            <div className="flex flex-row items-stretch gap-3 sm:gap-4 mt-6">
              <div className="w-[180px] flex items-center justify-start">
                <StoreBadges variant="light" badge="app-store" showFootnote={false} />
              </div>
              <div className="w-[180px] flex items-center justify-start">
                <StoreBadges variant="light" badge="google-play" showFootnote={false} />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-row items-stretch gap-2 shrink-0 min-h-[280px] self-stretch">
            <VerticalLogoMarquee direction="up" />
            <VerticalLogoMarquee direction="down" />
          </div>
        </div>
        {/* Spacer: equal space below content */}
        <div aria-hidden />
      </div>
    </section>
  )
}
