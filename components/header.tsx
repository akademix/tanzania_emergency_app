"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-white border-b">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-semibold">{t("firstAid")}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-6 h-6">
            <rect width="200" height="200" fill="white" />
            <defs>
              <clipPath id="heartClip">
                <path
                  d="
                  M100 190
                  C 85 175, 30 135, 15 95
                  C 0 55, 15 15, 45 15
                  C 75 15, 95 40, 100 65
                  C 105 40, 125 15, 155 15
                  C 185 15, 200 55, 185 95
                  C 170 135, 115 175, 100 190
                  Z"
                />
              </clipPath>
              <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g clipPath="url(#heartClip)">
              <rect x="-50" y="-50" width="300" height="300" fill="#1EB53A" />
              <g transform="rotate(-45, 100, 100)">
                <rect x="-50" y="65" width="300" height="14" fill="#FCD116" />
                <rect x="-50" y="79" width="300" height="32" fill="#000000" />
                <rect x="-50" y="111" width="300" height="14" fill="#FCD116" />
                <rect x="-50" y="125" width="300" height="300" fill="#00A3DD" />
              </g>
              <rect x="-50" y="-50" width="300" height="300" fill="url(#shine)" />
            </g>
            <path
              d="
              M100 190
              C 85 175, 30 135, 15 95
              C 0 55, 15 15, 45 15
              C 75 15, 95 40, 100 65
              C 105 40, 125 15, 155 15
              C 185 15, 200 55, 185 95
              C 170 135, 115 175, 100 190
              Z"
              fill="none"
              stroke="#333333"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
          </svg>
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

