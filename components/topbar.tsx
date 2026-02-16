"use client"

import Image from "next/image"
import Link from "next/link"
import LanguageSwitch from "./language-switch"

export default function Topbar() {
  return (
    <header className="relative z-10 flex shrink-0 items-center justify-center w-full py-6 px-4 bg-transparent">
      <div className="absolute top-6 right-4">
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
    </header>
  )
}
