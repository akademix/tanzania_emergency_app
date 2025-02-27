"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  const { tString } = useLanguage()

  return (
    <Link href="/" className="inline-flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900">
      <ArrowLeft className="w-4 h-4" />
      <span>{tString("back")}</span>
    </Link>
  )
}

