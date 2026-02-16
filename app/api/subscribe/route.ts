import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Proszę podać prawidłowy adres email." },
        { status: 400 }
      )
    }

    const mailerLiteApiKey = process.env.MAILERLITE_API_KEY
    const mailerLiteGroupId = process.env.MAILERLITE_GROUP_ID

    if (!mailerLiteApiKey) {
      console.error("MAILERLITE_API_KEY is not set")
      return NextResponse.json(
        { error: "Konfiguracja serwera nie jest ukończona. Skontaktuj się z administratorem." },
        { status: 500 }
      )
    }

    // Add subscriber to MailerLite
    const subscriberData: { email: string; status: string; groups?: string[] } = {
      email: email,
      status: "active",
    }

    // Add groups if group ID is provided
    if (mailerLiteGroupId) {
      subscriberData.groups = [mailerLiteGroupId]
    }

    // Try the newer API endpoint first
    let mailerLiteResponse = await fetch(
      `https://connect.mailerlite.com/api/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${mailerLiteApiKey}`,
        },
        body: JSON.stringify(subscriberData),
      }
    )

    // If that fails, try the v2 API endpoint
    if (!mailerLiteResponse.ok && mailerLiteResponse.status === 404) {
      mailerLiteResponse = await fetch(
        `https://api.mailerlite.com/api/v2/subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${mailerLiteApiKey}`,
          },
          body: JSON.stringify(subscriberData),
        }
      )
    }

    if (!mailerLiteResponse.ok) {
      const errorData = await mailerLiteResponse.json().catch(() => ({}))
      console.error("MailerLite API error:", mailerLiteResponse.status, errorData)
      
      // If subscriber already exists, that's okay
      if (mailerLiteResponse.status === 422 || mailerLiteResponse.status === 409) {
        return NextResponse.json(
          { message: "Email został już dodany do listy." },
          { status: 200 }
        )
      }

      return NextResponse.json(
        { error: `Nie udało się dodać do listy. Status: ${mailerLiteResponse.status}. Sprawdź konsolę serwera.` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Pomyślnie dodano do listy oczekujących!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json(
      { error: "Wystąpił błąd podczas przetwarzania żądania." },
      { status: 500 }
    )
  }
}
