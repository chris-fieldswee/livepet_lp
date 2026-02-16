"use client"

import { useEffect, useRef } from "react"

const LOGOS = [
  "/assets/images/1.png",
  "/assets/images/2.png",
  "/assets/images/3.png",
  "/assets/images/4.svg",
  "/assets/images/5.svg",
  "/assets/images/6.png",
  "/assets/images/7.svg",
  "/assets/images/8.png",
] as const

const LOGO_LINKS: Partial<Record<(typeof LOGOS)[number], string>> = {
  "/assets/images/1.png": "https://petsy.pl/?ref=livepet&promoCode=livepet",
  "/assets/images/2.png": "https://pawaway.com/",
  "/assets/images/3.png": "https://pethelp.pl/ref/livepet",
  "/assets/images/4.svg": "https://notione.com/",
  "/assets/images/5.svg": "https://rawolution.pl/go/livepet",
  "/assets/images/6.png": "https://www.colonnade.pl/dla-ciebie/ubezpieczenie-zwierzat",
  "/assets/images/7.svg": "https://petcover.pl/ubezpieczenie/?ref=livepet",
  "/assets/images/8.png": "https://piesotto.pl/?discount_code=livepet",
}

function LogoItem({
  src,
  alt,
  size,
  href,
}: {
  src: string
  alt: string
  size: number
  href?: string
}) {
  const logoEl = (
    <div
      className="shrink-0 mx-12 rounded"
      style={{
        width: size,
        height: size,
        backgroundColor: "#fff",
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
      {...(!href && { role: "img" as const, "aria-label": alt })}
      {...(href && { "aria-hidden": true })}
    />
  )
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
        aria-label={alt}
      >
        {logoEl}
      </a>
    )
  }
  return logoEl
}

export default function HorizontalLogoMarquee() {
  const size = 100
  const blurContainerRef = useRef<HTMLDivElement>(null)
  // #region agent log
  useEffect(() => {
    const el = blurContainerRef.current
    if (!el) return
    const log = () => {
      const cs = el && window.getComputedStyle(el)
      const hero = el.closest("section")
      const heroOverflow = hero ? window.getComputedStyle(hero).overflowY : null
      const rect = el.getBoundingClientRect()
      fetch("http://127.0.0.1:7248/ingest/5f1e9aa8-eef2-4a42-a157-3c289db885f1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location: "horizontal-logo-marquee.tsx:log",
          message: "backdrop-blur marquee computed state",
          data: {
            viewportW: window.innerWidth,
            viewportH: window.innerHeight,
            backdropFilter: cs?.backdropFilter ?? null,
            webkitBackdropFilter: (cs as unknown as Record<string, string> | undefined)?.webkitBackdropFilter ?? null,
            transform: cs?.transform ?? null,
            parentSectionOverflowY: heroOverflow,
            rect: { w: rect.width, h: rect.height, top: rect.top, left: rect.left },
          },
          timestamp: Date.now(),
          hypothesisId: "A",
        }),
      }).catch(() => {})
    }
    log()
    window.addEventListener("resize", log)
    return () => window.removeEventListener("resize", log)
  }, [])
  // #endregion
  return (
    <div
      ref={blurContainerRef}
      className="w-full overflow-hidden min-h-[72px] flex items-center py-2 backdrop-blur-md rounded-2xl bg-white/5 [transform:translateZ(0)]"
    >
      <div className="flex animate-marquee shrink-0 items-center">
        {[...LOGOS, ...LOGOS].map((src, i) => (
          <LogoItem
            key={i}
            src={src}
            alt={`Logo ${(i % LOGOS.length) + 1}`}
            size={size}
            href={LOGO_LINKS[src]}
          />
        ))}
      </div>
    </div>
  )
}
