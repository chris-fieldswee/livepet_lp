import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"

const workSans = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://livepet.pl"),
  title: "Livepet – Wszystko o Twoim pupilu w jednym miejscu",
  description:
    "Zdrowie, wizyty i codzienna opieka Twojego pupila zawsze pod ręką. Dołącz do Livepet i uzyskaj wczesny dostęp.",
  icons: {
    icon: "/assets/images/app_icon.png",
  },
  openGraph: {
    title: "Livepet – Wszystko o Twoim pupilu w jednym miejscu",
    description:
      "Zdrowie, wizyty i codzienna opieka Twojego pupila zawsze pod ręką. Dołącz do Livepet i uzyskaj wczesny dostęp.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={workSans.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
