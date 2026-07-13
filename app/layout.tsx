import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

import Providers from "@/context/Providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://oleary.com"),
  title: "O'Leary Labs - Software Systems Studio",
  description:
    "O'Leary Labs builds infrastructure, internal tools, and product systems for projects that need the technical layer to hold up under pressure.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/oleary_labs_logo_kit/app_icon.png",
    apple: "/oleary_labs_logo_kit/app_icon.png",
  },
  openGraph: {
    title: "O'Leary Labs",
    description:
      "Infrastructure, internal tools, and product systems for projects that need the technical layer to hold up under pressure.",
    url: "https://oleary.com",
    images: ["/oleary_labs_logo_kit/app_icon.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eee8dd",
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
