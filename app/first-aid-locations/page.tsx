"use client"

import { BackButton } from "@/components/back-button"
import { MapPin } from "lucide-react"

export default function FirstAidLocationsPage() {
  return (
    <div className="max-w-md mx-auto px-4">
      <BackButton />

      <div className="space-y-6">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">First aid locations</h1>
              <p className="text-gray-300">Find nearby medical facilities</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <div className="aspect-[4/5] sm:aspect-video w-full rounded-xl overflow-hidden border border-white/20 shadow-lg">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1KjLiT5ULSv6bw1fToEQMGslVOB0&femb=1&ll=-6.296589854332089%2C36.766565621874946&z=6"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="bg-gray-100"
            />
          </div>
          
          <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-center gap-2 text-white mb-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">Interactive Map</span>
            </div>
            <p className="text-gray-300 text-sm">
              Use this map to find the nearest first aid stations, hospitals, and emergency medical facilities in Tanzania.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

