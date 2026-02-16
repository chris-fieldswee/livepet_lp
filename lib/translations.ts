export type Locale = "pl" | "en"

export const translations = {
  pl: {
    hero: {
      headline1: "Jeden profil.",
      headline2: "Całe życie zwierzaka.",
      subtitle:
        "Zdrowie, codzienność i opieka zebrane w jednym miejscu.\nDla Ciebie i wszystkich, którzy są częścią życia Twojego pupila.",
    },
    signup: {
      emailPlaceholder: "Twój adres email...",
      submit: "Uzyskaj wczesny dostęp",
      submitting: "Wysyłanie...",
      success: "Dziękujemy! Zostałeś dodany do listy oczekujących.",
      error: "Wystąpił błąd. Spróbuj ponownie.",
    },
    store: {
      comingSoon: "Wkrótce dostępny w",
      footnote: "Wkrótce dostępne w App Store i Google Play",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
  },
  en: {
    hero: {
      headline1: "One profile.",
      headline2: "Your pet's whole life.",
      subtitle:
        "Health, daily care and everything in one place.\nFor you and everyone who is part of your pet's life.",
    },
    signup: {
      emailPlaceholder: "Your email address...",
      submit: "Get early access",
      submitting: "Sending...",
      success: "Thank you! You've been added to the waitlist.",
      error: "An error occurred. Please try again.",
    },
    store: {
      comingSoon: "Coming soon to",
      footnote: "Coming soon to App Store and Google Play",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
  },
} as const

export type Translations = (typeof translations)[Locale]
