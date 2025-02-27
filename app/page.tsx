"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Phone, AlertCircle, MapPin } from "lucide-react"
import { LocationCard } from "@/components/location-card"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { tString } = useLanguage()

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="space-y-4">
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

        <Link
          href="/first-aid-locations"
          className="block p-6 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 hover:border-orange-200 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-orange-500">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{tString("firstAidLocations")}</h2>
                <p className="text-gray-500">{tString("findNearbyLocations")}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        <a
          href="tel:0800750112"
          className="block p-6 bg-red-50 rounded-2xl border border-red-100 hover:bg-red-100 hover:border-red-200 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-red-500">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{tString("emergency")}</h2>
                <p className="text-red-600 font-medium">{tString("emergencyNumber")}</p>
              </div>
            </div>
          </div>
        </a>

        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
          <LocationCard />
        </div>
      </div>
    </div>
  )
}

