"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"

export default function FirstAidLocationsPage() {
  const { tString } = useLanguage()

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <BackButton />

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{tString("firstAidLocations")}</h1>
        </div>

        <div className="aspect-[4/5] sm:aspect-video w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1KjLiT5ULSv6bw1fToEQMGslVOB0&femb=1&ll=-6.296589854332089%2C36.766565621874946&z=6"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

