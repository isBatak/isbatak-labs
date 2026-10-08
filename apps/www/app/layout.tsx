import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import type { ReactNode } from "react"

import { Providers } from "../components/providers"
import { defaultSiteRadius } from "../components/radius-preference"
import { preloadIconSprite } from "../components/ui/icon"
import "./globals.css"

const body = Inter({ subsets: ["latin"], variable: "--font-body" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const ensureStatic = "navigation"

export const metadata: Metadata = {
  title: "isbatak zag",
  description:
    "Headless UI components for React, Vue, Svelte, Solid, Preact and vanilla JS, driven by one framework-agnostic state machine each",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  preloadIconSprite()

  return (
    <html
      lang="en"
      className={`${body.variable} ${mono.variable}`}
      data-radius={defaultSiteRadius}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
