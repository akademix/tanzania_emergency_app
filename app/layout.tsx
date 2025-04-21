import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "First Aid App",
  description: "Emergency first aid application with location services",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/logo.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/logo.svg", type: "image/svg+xml" },
  ],
}

// Move themeColor and viewport to viewport export per Next.js 15.2.0+ recommendations
export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="First Aid App" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body className={`${inter.className} bg-gray-50 min-h-screen`} suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main className="py-8">{children}</main>
        </LanguageProvider>
        {/* Service worker is registered in the PWAInstaller component */}
      </body>
    </html>
  )
}

