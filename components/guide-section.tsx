"use client"

import Link from "next/link"
import { ArrowRight, AlertCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function GuideSection() {
  const { tString } = useLanguage()

  return (
    <Link
      href="/guide"
      className="block p-6 bg-purple-50 rounded-2xl border border-purple-100 hover:bg-purple-100 hover:border-purple-200 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-purple-500">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{tString("guide")}</h2>
            <p className="text-gray-500">{tString("quickReference")}</p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
      </div>
    </Link>
  )
} 