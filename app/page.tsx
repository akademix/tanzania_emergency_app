"use client"

import Link from "next/link"
import { ArrowRight, AlertTriangle, Building, AlertCircle, ClipboardCheck } from "lucide-react"
import { LocationCard } from "@/components/location-card"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { tString } = useLanguage()

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="space-y-4">
        {/* Emergency Critical Cards Section - Larger and more prominent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <a
            href="tel:0800750112"
            className="block p-6 bg-red-100 rounded-2xl border-2 border-red-300 hover:bg-red-200 hover:border-red-400 transition-colors shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-red-600">
                  <AlertCircle className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{tString("emergency")}</h2>
                  <p className="text-red-700 font-medium text-lg">{tString("emergencyNumber")}</p>
                </div>
              </div>
            </div>
          </a>

          <Link
            href="/guide"
            className="block p-6 bg-purple-100 rounded-2xl border-2 border-purple-300 hover:bg-purple-200 hover:border-purple-400 transition-colors shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-purple-600">
                  <AlertTriangle className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{tString("guide")}</h2>
                  <p className="text-gray-700 text-lg">{tString("quickReference")}</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-500" />
            </div>
          </Link>
        </div>

        {/* Secondary Features Section */}
        <h3 className="text-lg font-semibold text-gray-600 mt-4 mb-2">Other Services</h3>
        <Link
          href="/first-aid-locations"
          className="block p-6 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 hover:border-orange-200 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-orange-500">
                <Building className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{tString("firstAidLocations")}</h2>
                <p className="text-gray-500">{tString("findNearbyLocations")}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        <Link
          href="/responder-form"
          className="block p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:bg-blue-100 hover:border-blue-200 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-blue-500">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{tString("responderForm")}</h2>
                <p className="text-gray-500">{tString("submitEmergencyReports")}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
          <LocationCard />
        </div>
      </div>
    </div>
  )
}

