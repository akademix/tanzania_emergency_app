"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"
import { PlayCircle } from "lucide-react"
import { VideoPlayer } from "@/components/video/video-player"
import { getVideo } from "@/lib/video/config"

export default function BasicFirstAidPage() {
  const { t } = useLanguage()
  const introVideo = getVideo('intro-first-aid')

  const lessons = [
    { title: "Introduction to First Aid", videoId: "intro-first-aid" },
    { title: "Assessing Emergency Situations", videoId: "placeholder2" },
    { title: "CPR Basics", videoId: "placeholder3" },
    { title: "Treating Wounds and Bleeding", videoId: "placeholder4" },
    { title: "Handling Fractures and Sprains", videoId: "placeholder5" },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{t("basicFirstAid")}</h1>
          <p className="mt-2 text-gray-500">{t("basicFirstAidDesc")}</p>
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
              <div className="mt-4">
                {lesson.videoId === "intro-first-aid" && introVideo ? (
                  <VideoPlayer video={introVideo} />
                ) : (
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Video Player Placeholder</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

