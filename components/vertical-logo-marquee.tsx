"use client"

const PARTNER_LOGOS = [
  "/assets/images/4.svg",
  "/assets/images/5.svg",
  "/assets/images/7.svg",
  "/assets/images/logo.svg",
]

type VerticalLogoMarqueeProps = { direction: "up" | "down" }

function LogoItem({
  src,
  alt,
  size,
  spacing,
}: {
  src: string
  alt: string
  size: number
  spacing: string
}) {
  return (
    <div
      className={`shrink-0 ${spacing}`}
      style={{
        width: size,
        height: size,
        backgroundColor: "#c9b892",
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
      role="img"
      aria-label={alt}
    />
  )
}

export default function VerticalLogoMarquee({ direction }: VerticalLogoMarqueeProps) {
  const size = 72
  const spacing = "my-6"
  const animationClass =
    direction === "up" ? "animate-marquee-vertical" : "animate-marquee-vertical-reverse"

  return (
    <div className="h-full min-h-[200px] overflow-hidden flex flex-col items-center w-24 shrink-0">
      <div
        className={`flex ${animationClass}`}
        style={{ flexDirection: "column" }}
      >
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
          <LogoItem
            key={i}
            src={src}
            alt={`Partner ${(i % PARTNER_LOGOS.length) + 1}`}
            size={size}
            spacing={spacing}
          />
        ))}
      </div>
    </div>
  )
}
