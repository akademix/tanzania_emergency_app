"use client"

import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

export function BackButton() {
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 mb-6"
    >
      <ChevronLeft className="w-4 h-4 mr-2" />
      {t("back")}
    </button>
  )
}

