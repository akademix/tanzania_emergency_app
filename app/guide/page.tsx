"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { BackButton } from "@/components/back-button"

export default function GuidePage() {
  const { tString } = useLanguage()

  const emergencies = [
    {
      title: tString("trafficAccident"),
      emoji: "🚗",
      color: "text-blue-500",
      href: "/guide/traffic-accident",
    },
    {
      title: tString("snakeBite"),
      emoji: "🐍",
      color: "text-green-500",
      href: "/guide/snake-bite",
    },
    {
      title: tString("burns"),
      emoji: "🔥",
      color: "text-red-600",
      href: "/guide/fire-emergency",
    },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">{tString("guide")}</h1>
      <div className="space-y-4">
        {emergencies.map((emergency) => (
          <Link
            key={emergency.href}
            href={emergency.href}
            className="block p-6 bg-purple-50 rounded-2xl border border-purple-100 hover:bg-purple-100 hover:border-purple-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`${emergency.color} text-2xl`}>{emergency.emoji}</div>
                <div>
                  <h2 className="text-lg font-semibold">{emergency.title}</h2>
                  <p className="text-gray-500">{tString("firstAid")}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

