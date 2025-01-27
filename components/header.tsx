"use client"

import { Globe } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-white border-b">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          {t("firstAid")}
        </Link>
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
          onClick={() => setLanguage(language === "en" ? "sw" : "en")}
        >
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium">{language === "en" ? "Swahili" : "English"}</span>
        </button>
      </div>
    </header>
  )
}

