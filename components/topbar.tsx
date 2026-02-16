"use client"

import Image from "next/image"
import Link from "next/link"
import LanguageSwitch from "./language-switch"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function Topbar() {
  const { locale } = useLanguage()
  const t = translations[locale]

  const contactHref =
    "https://www.linkedin.com/in/micha%C5%82-rybicki-0b7142146/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3BN1ieSMh3RESIyoGgOhi2qA%3D%3D"

  return (
    <header className="relative z-10 flex shrink-0 w-full py-6 px-4 bg-transparent">
      {/* Mobile: language switch (left) | signet (center) | contact (right) */}
      <div className="grid grid-cols-3 items-center w-full sm:hidden">
        <div className="flex justify-start">
          <LanguageSwitch />
        </div>
        <div className="flex justify-center">
          <Link href="/" className="flex items-center" aria-label="LivePet - Strona główna">
            <Image
              src="/assets/images/app_icon.png"
              alt="LivePet"
              width={40}
              height={40}
              className="h-24 w-auto brightness-0 invert"
            />
          </Link>
        </div>
        <div className="flex justify-end">
          <a
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-white/90 hover:text-white"
          >
            {t.contact}
          </a>
        </div>
      </div>
      {/* sm+: centered logo + right block (contact | pipe | language switch) */}
      <div className="relative hidden sm:flex items-center justify-center w-full">
        <div className="absolute top-0 right-0 flex items-center gap-5">
          <a
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-white/90 hover:text-white"
          >
            {t.contact}
          </a>
          <span className="text-white/60" aria-hidden>|</span>
          <LanguageSwitch />
        </div>
        <Link href="/" className="flex items-center" aria-label="LivePet - Strona główna">
          <Image
            src="/assets/images/logo.png"
            alt="LivePet Logo"
            width={140}
            height={48}
            className="h-5 w-auto brightness-0 invert"
          />
        </Link>
      </div>
    </header>
  )
}
