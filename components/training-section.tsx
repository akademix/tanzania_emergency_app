"use client"

import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function TrainingSection() {
  const { tString } = useLanguage()

  return (
    <Link
      href="/training"
      className="block p-6 bg-green-50 rounded-2xl border border-green-100 hover:bg-green-100 hover:border-green-200 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-green-500">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{tString("training")}</h2>
            <p className="text-gray-500">{tString("learnSkills")}</p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
      </div>
    </Link>
  )
} 