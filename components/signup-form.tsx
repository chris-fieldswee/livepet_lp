"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function SignupForm({ align = "center", variant = "dark" }: { align?: "left" | "center"; variant?: "dark" | "light" }) {
  const { locale } = useLanguage()
  const t = translations[locale]
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [focused, setFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const labelFloated = focused || email.length > 0

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: "success", text: t.signup.success })
        setEmail("")
      } else {
        setMessage({ type: "error", text: data.error || t.signup.error })
      }
    } catch {
      setMessage({ type: "error", text: t.signup.error })
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return (
      <div
        className={`w-full max-w-2xl ${align === "left" ? "ml-0 mr-auto" : "mx-auto"}`}
        suppressHydrationWarning
      >
        <div className="flex flex-col sm:flex-row gap-1 w-full h-[52px] rounded-xl" aria-hidden />
      </div>
    )
  }

  return (
    <div className={`w-full max-w-2xl ${align === "left" ? "ml-0 mr-auto" : "mx-auto"}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:items-stretch">
        <div className="relative flex-1 min-w-0">
          <label
            htmlFor="signup-email"
            className={`absolute left-6 transition-all duration-200 pointer-events-none ${
              labelFloated
                ? "top-0 -translate-y-1/2 text-xs font-medium px-1.5"
                : "top-1/2 -translate-y-1/2 text-base"
            } ${
              labelFloated
                ? variant === "light"
                  ? "text-livepet-brown bg-white"
                  : "text-white bg-white/10"
                : variant === "light"
                  ? "text-zinc-500"
                  : "text-white/70"
            }`}
          >
            {t.signup.emailPlaceholder}
          </label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder=" "
            required
            aria-label={t.signup.emailPlaceholder}
            className={`w-full h-full min-h-[56px] px-6 py-4 rounded-xl border-2 transition-[color,background-color,border-color] focus:outline-none focus:outline-[0] focus:ring-0 focus:shadow-none focus:[box-shadow:none] active:outline-none active:outline-[0] active:ring-0 active:shadow-none active:[box-shadow:none] ${
              variant === "light"
                ? "bg-white border-white text-zinc-900 focus:border-livepet-brown"
                : "bg-white/10 backdrop-blur-sm !border-white/10 text-white focus:!border-livepet-brown"
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="min-h-[56px] px-6 py-4 text-sm sm:text-base bg-livepet-brown text-white rounded-full font-normal hover:bg-livepet-brown/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isLoading ? t.signup.submitting : t.signup.submit}
        </button>
      </form>
      {message && (
        <div
          className={`mt-3 px-4 py-2 rounded-lg text-sm text-center ${
            message.type === "success"
              ? "bg-green-500/90 text-white"
              : "bg-red-500/90 text-white"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  )
}
