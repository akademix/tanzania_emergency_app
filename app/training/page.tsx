"use client"

import { Clock, PlayCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { BackButton } from "@/components/back-button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { TrainingData } from "../data/training"

export default function TrainingPage() {
  const { tString } = useLanguage()
  const [trainings, setTrainings] = useState<TrainingData[]>([])

  useEffect(() => {
    // Load training data on the client side
    const loadTrainings = async () => {
      try {
        // Using dynamic import for client-side loading
        const { getAllTrainings } = await import("../data/training")
        const trainingsData = await getAllTrainings()
        setTrainings(trainingsData)
      } catch (error) {
        console.error("Failed to load trainings:", error)
      }
    }
    
    loadTrainings()
  }, [])

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">{tString("trainingModules")}</h1>
      <div className="space-y-4">
        {trainings.map((training) => (
          <Link
            key={training.id}
            href={`/training/${training.id}`}
            className="block p-6 bg-green-50 rounded-2xl border border-green-100 hover:bg-green-100 hover:border-green-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">{training.title}</h2>
                <p className="text-gray-500 mb-3">{training.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>
                      {training.duration} {tString("minutes")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" />
                    <span>
                      {training.lessons.length} {tString("lessons")}
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

