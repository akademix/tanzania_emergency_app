"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"
import { PlayCircle } from "lucide-react"

export default function CPRPage() {
  const { t } = useLanguage()

  const lessons = [
    { title: "Understanding CPR", videoId: "placeholder1" },
    { title: "Chest Compressions Technique", videoId: "placeholder2" },
    { title: "Rescue Breathing", videoId: "placeholder3" },
    { title: "CPR for Adults", videoId: "placeholder4" },
    { title: "CPR for Children", videoId: "placeholder5" },
    { title: "CPR for Infants", videoId: "placeholder6" },
    { title: "Using an AED", videoId: "placeholder7" },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{t("cprCourse")}</h1>
          <p className="mt-2 text-gray-500">{t("cprCourseDesc")}</p>
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
                      {t("lesson")} {index + 1}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  {t("watchVideo")}
                </button>
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

