"use client"

import { ArrowRight, Bug, Car, Flame } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { BackButton } from "@/components/back-button"
import { useEffect, useState } from "react"
import { GuideData } from "../data/guides"

export default function GuidePage() {
  const { tString, language } = useLanguage()
  const [guides, setGuides] = useState<GuideData[]>([])

  useEffect(() => {
    // Load guide data on the client side
    const loadGuides = async () => {
      try {
        // Using dynamic import for client-side loading
        const { getAllGuides } = await import("../data/guides")
        const guidesData = await getAllGuides()
        setGuides(guidesData)
      } catch (error) {
        console.error("Failed to load guides:", error)
      }
    }
    
    loadGuides()
  }, [])

  // Map guide IDs to their respective icons
  const guideIcons: Record<string, { icon: React.ReactNode; color: string }> = {
    "traffic-accident": { icon: <Car className="w-8 h-8" />, color: "text-blue-500" },
    "snake-bite": { icon: <Bug className="w-8 h-8" />, color: "text-green-500" },
    "fire-emergency": { icon: <Flame className="w-8 h-8" />, color: "text-red-600" },
    "burns": { icon: <Flame className="w-8 h-8" />, color: "text-orange-500" },
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">{tString("guide")}</h1>
      <div className="space-y-4">
        {guides.map((guide) => (
          <Link
            key={guide.id}
            href={`/guide/${guide.id}`}
            className="block p-6 bg-purple-50 rounded-2xl border border-purple-100 hover:bg-purple-100 hover:border-purple-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={guideIcons[guide.id]?.color || "text-gray-500"}>
                  {guideIcons[guide.id]?.icon || <ArrowRight className="w-8 h-8" />}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">
                    {guide.title && typeof guide.title === 'object' && language in guide.title
                      ? guide.title[language as keyof typeof guide.title]
                      : ''}
                  </h2>
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

