"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"
import { PlayCircle } from "lucide-react"

export default function WoundTreatmentPage() {
  const { tString } = useLanguage()

  const lessons = [
    { title: "Types of Wounds", videoId: "placeholder1" },
    { title: "Cleaning and Disinfecting Wounds", videoId: "placeholder2" },
    { title: "Bandaging Techniques", videoId: "placeholder3" },
    { title: "Treating Major Bleeding", videoId: "placeholder4" },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{tString("woundTreatment")}</h1>
          <p className="mt-2 text-gray-500">{tString("woundTreatmentDesc")}</p>
        </div>

        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-green-500">
                    <PlayCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{lesson.title}</h2>
                    <p className="text-gray-500">
                      {tString("lesson")} {index + 1}
                    </p>
                  </div>
                </div>
              </div>
              {/* Placeholder for video player */}
              <div className="mt-4 aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Video Player Placeholder</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

