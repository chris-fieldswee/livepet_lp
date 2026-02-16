"use client"

import { usePathname } from "next/navigation"
import Topbar from "./topbar"

export default function ConditionalTopbar() {
  const pathname = usePathname()

  if (pathname === "/hero-alt" || pathname === "/hero-alt-v2") {
    return null
  }

  return <Topbar />
}
