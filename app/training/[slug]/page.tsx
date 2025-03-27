"use client"

import { notFound } from "next/navigation"
import { BackButton } from "@/components/back-button"
import { TrainingContent } from "@/app/components/TrainingContent"
import { useState, useEffect } from "react"
import { TrainingData } from "@/app/data/training"

export default function TrainingPage({ params }: { params: { slug: string } }) {
  const [training, setTraining] = useState<TrainingData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTraining = async () => {
      try {
        setLoading(true)
        // Using dynamic import for client-side loading
        const { getTrainingById } = await import("@/app/data/training")
        // Wait for params to resolve if needed
        const resolvedParams = await Promise.resolve(params)
        const trainingData = await getTrainingById(resolvedParams.slug)
        
        if (trainingData) {
          setTraining(trainingData)
        }
      } catch (error) {
        console.error("Failed to load training content:", error)
      } finally {
        setLoading(false)
      }
    }
    
    loadTraining()
  }, [params])

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <BackButton />
        <div className="py-8 text-center">Loading...</div>
      </div>
    )
  }

  if (!training) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <TrainingContent training={training} />
    </div>
  )
} 