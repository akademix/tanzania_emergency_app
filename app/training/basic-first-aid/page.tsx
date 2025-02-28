"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"
import { PlayCircle } from "lucide-react"
import { VideoPlayer } from "@/components/video-player"
import { FaFirstAid, FaUserMd, FaCalendar, FaClock } from 'react-icons/fa'

export default function BasicFirstAidPage() {
  const { tString } = useLanguage()

  const lessons = [
    {
      title: "Introduction to First Aid",
      videoId: "ea1RJUOiNfQ",
      description: "Learn how to perform a primary survey - the first and most crucial step in providing first aid.",
    },
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
          <h1 className="text-3xl font-bold">{tString("basicFirstAid")}</h1>
          <p className="mt-2 text-gray-500">{tString("basicFirstAidDesc")}</p>
        </div>

        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
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
              {lesson.videoId === "placeholder2" ||
              lesson.videoId === "placeholder3" ||
              lesson.videoId === "placeholder4" ||
              lesson.videoId === "placeholder5" ? (
                <div className="mt-4 aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Video Player Placeholder</p>
                </div>
              ) : (
                <div className="mt-4">
                  {lesson.description && <p className="text-gray-600 mb-4">{lesson.description}</p>}
                  <VideoPlayer videoId={lesson.videoId} title={lesson.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

