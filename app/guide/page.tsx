"use client"

import { ArrowRight, Car, SnailIcon as Snake, FireExtinguisher, BookOpen } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { BackButton } from "@/components/back-button"

export default function GuidePage() {
  const { t } = useLanguage()

  const emergencies = [
    { title: t("generalFirstAid"), icon: BookOpen, color: "text-purple-500", href: "/guide/general" },
    { title: t("trafficAccident"), icon: Car, color: "text-blue-500", href: "/guide/traffic-accident" },
    { title: t("snakeBite"), icon: Snake, color: "text-green-500", href: "/guide/snake-bite" },
    { title: t("burns"), icon: FireExtinguisher, color: "text-red-600", href: "/guide/fire-emergency" },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">{t("guide")}</h1>
      <div className="space-y-4">
        {emergencies.map((emergency) => (
          <Link
            key={emergency.href}
            href={emergency.href}
            className="block p-6 bg-purple-50 rounded-2xl border border-purple-100 hover:bg-purple-100 hover:border-purple-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={emergency.color}>
                  <emergency.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{emergency.title}</h2>
                  <p className="text-gray-500">{t("firstAid")}</p>
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

