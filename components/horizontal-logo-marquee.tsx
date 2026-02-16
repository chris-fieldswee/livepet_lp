"use client"

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
  return (
    <div
      className="w-full overflow-hidden min-h-[72px] flex items-center py-keyline-1 backdrop-blur-md rounded-2xl bg-white/5 [transform:translateZ(0)]"
      style={{ WebkitBackdropFilter: "blur(12px)" }}
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
