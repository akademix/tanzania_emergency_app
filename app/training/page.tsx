"use client"

import { Clock, PlayCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { BackButton } from "@/components/back-button"
import Link from "next/link"

export default function TrainingPage() {
  const { t } = useLanguage()

  const courses = [
    {
      title: t("basicFirstAid"),
      description: t("basicFirstAidDesc"),
      duration: 30,
      lessons: 5,
      href: "/training/basic-first-aid",
    },
    {
      title: t("cprCourse"),
      description: t("cprCourseDesc"),
      duration: 45,
      lessons: 7,
      href: "/training/cpr",
    },
    {
      title: t("woundTreatment"),
      description: t("woundTreatmentDesc"),
      duration: 20,
      lessons: 4,
      href: "/training/wound-treatment",
    },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">{t("trainingModules")}</h1>
      <div className="space-y-4" role="list">
        {courses.map((course) => (
          <Link
            key={course.href}
            href={course.href}
            className="block p-6 bg-green-50 rounded-2xl border border-green-100 hover:bg-green-100 hover:border-green-200 transition-colors"
            role="listitem"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
                <p className="text-gray-500 mb-3">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2" aria-label={`Duration: ${course.duration} ${t("minutes")}`}>
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>
                      {course.duration} {t("minutes")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2" aria-label={`${course.lessons} ${t("lessons")}`}>
                    <PlayCircle className="w-4 h-4" aria-hidden="true" />
                    <span>
                      {course.lessons} {t("lessons")}
                    </span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}