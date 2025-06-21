"use client"

import { ArrowRight, Car, Flame, Heart, AlertTriangle, Activity, Shield, Book } from "lucide-react"
import Link from "next/link"
import { BackButton } from "@/components/back-button"
import { useEffect, useState } from "react"
import { GuideData } from "../data/guides"
import { useLanguage } from "@/lib/language-context"

// Function to capitalize first letter of a string
function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function GuidePage() {
  const { language, tString } = useLanguage()
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

  // Map guide IDs to their respective icons with improved colors and designs
  const guideIcons: Record<string, { icon: React.ReactNode; bgColor: string; iconColor: string }> = {
    "traffic-accident": { 
      icon: <Car className="w-7 h-7" />, 
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600", 
      iconColor: "text-white" 
    },
    "snake-bite": { 
      icon: <Shield className="w-7 h-7" />, 
      bgColor: "bg-gradient-to-br from-green-500 to-green-600", 
      iconColor: "text-white" 
    },
    "fire-emergency": { 
      icon: <Flame className="w-7 h-7" />, 
      bgColor: "bg-gradient-to-br from-red-500 to-red-600", 
      iconColor: "text-white" 
    },
    "burns": { 
      icon: <Heart className="w-7 h-7" />, 
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600", 
      iconColor: "text-white" 
    },
  }

  return (
    <div className="max-w-md mx-auto px-4">
      <BackButton />
      
      <div className="mb-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Book className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">{tString("emergencyGuidesTitle")}</h1>
        <p className="text-gray-300">{tString("stepByStepInstructions")}</p>
      </div>

      <div className="space-y-4">
        {guides.map((guide) => {
          const guideIcon = guideIcons[guide.id] || { 
            icon: <Activity className="w-7 h-7" />, 
            bgColor: "bg-gradient-to-br from-gray-500 to-gray-600", 
            iconColor: "text-white" 
          }
          
          const guideTitle = guide.title && typeof guide.title === 'object' && language in guide.title
            ? guide.title[language as keyof typeof guide.title]
            : '';
          
          return (
            <Link
              key={guide.id}
              href={`/guide/${guide.id}`}
              className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 ${guideIcon.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <div className={guideIcon.iconColor}>
                      {guideIcon.icon}
                    </div>
                  </div>
                  <div className="text-white">
                    <h2 className="text-xl font-semibold mb-1">
                      {capitalizeFirstLetter(guideTitle)}
                    </h2>
                    <p className="text-gray-300 text-sm">{tString("emergencyFirstAidSteps")}</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>
            </Link>
          )
        })}
      </div>

      {guides.length === 0 && (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{tString("loadingGuides")}</h3>
          <p className="text-gray-300 text-sm">{tString("pleaseWaitLoadingGuides")}</p>
        </div>
      )}
    </div>
  )
}

