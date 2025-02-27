"use client"

import { Clock, PlayCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { BackButton } from "@/components/back-button"
import Link from "next/link"

export default function TrainingPage() {
  const { tString } = useLanguage()

  const courses = [
    {
      title: tString("basicFirstAid"),
      description: tString("basicFirstAidDesc"),
      duration: 30,
      lessons: 5,
      href: "/training/basic-first-aid",
    },
    {
      title: tString("cprCourse"),
      description: tString("cprCourseDesc"),
      duration: 45,
      lessons: 7,
      href: "/training/cpr",
    },
    {
      title: tString("woundTreatment"),
      description: tString("woundTreatmentDesc"),
      duration: 20,
      lessons: 4,
      href: "/training/wound-treatment",
    },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">{tString("trainingModules")}</h1>
      <div className="space-y-4">
        {courses.map((course) => (
          <Link
            key={course.href}
            href={course.href}
            className="block p-6 bg-green-50 rounded-2xl border border-green-100 hover:bg-green-100 hover:border-green-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
                <p className="text-gray-500 mb-3">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>
                      {course.duration} {tString("minutes")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" />
                    <span>
                      {course.lessons} {tString("lessons")}
                    </span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

