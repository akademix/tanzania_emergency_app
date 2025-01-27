"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"

export default function BurnsPage() {
  const { t } = useLanguage()

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{t("burnTreatment").title}</h1>
          <p className="mt-2 text-gray-500">{t("treatment")}</p>
        </div>

        <div className="space-y-4">
          {t("burnTreatment").steps.map((step, index) => (
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

