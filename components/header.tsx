"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="bg-transparent">
      <div className="max-w-md mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg p-1">
            <Image
              src="/logo.svg"
              alt="First aid pro Logo"
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div>
          <div className="text-white">
            <div className="text-xl font-bold">First aid</div>
          </div>
        </Link>
        <button
          className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg transition-colors flex items-center gap-2 text-white border border-white/20"
          onClick={() => setLanguage(language === "en" ? "sw" : "en")}
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{language === "en" ? "EN" : "SW"}</span>
        </button>
      </div>
    </header>
  )
}

