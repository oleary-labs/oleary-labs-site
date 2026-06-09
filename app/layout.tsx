import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

import Providers from "@/context/Providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://olearylabs.com"),
  title: "O'Leary Labs - Blockchain & Web3 Studio",
  description:
    "O'Leary Labs builds protocol infrastructure and bespoke applications for the onchain economy, including Signet.",
  icons: {
    icon: "/logo-mark.svg",
    apple: "/logo-mark-512.png",
  },
  openGraph: {
    title: "O'Leary Labs",
    description:
      "Protocol infrastructure and bespoke applications for the onchain economy.",
    images: ["/logo-mark-512.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf8",
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
