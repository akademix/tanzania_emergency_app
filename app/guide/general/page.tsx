"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"
import { VideoPlayer } from "@/components/video/video-player"
import { getVideo } from "@/lib/video/config"

export default function GeneralPage() {
  const { t } = useLanguage()
  const introVideo = getVideo('intro-first-aid')

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{t("generalFirstAid")}</h1>
          <p className="mt-2 text-gray-500">{t("generalFirstAidDesc")}</p>
        </div>

        {introVideo && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{introVideo.title}</h2>
            <VideoPlayer video={introVideo} />
          </div>
        )}

        <div className="space-y-4">
          {t("generalFirstAidSteps").map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200">
              <div className="flex gap-4">
                <span className="text-xl font-semibold text-gray-400">{index + 1}.</span>
                <p className="text-lg">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}