import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

import Providers from "@/context/Providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://olearylabs.com"),
  title: "O'Leary Labs - Luxury-Tech Protocol Studio",
  description:
    "O'Leary Labs builds refined protocol infrastructure and bespoke applications for the onchain economy, including Signet.",
  icons: {
    icon: "/oleary_labs_logo_kit/app_icon.png",
    apple: "/oleary_labs_logo_kit/app_icon.png",
  },
  openGraph: {
    title: "O'Leary Labs",
    description:
      "Refined protocol infrastructure and bespoke applications for the onchain economy.",
    images: ["/oleary_labs_logo_kit/app_icon.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0706",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
