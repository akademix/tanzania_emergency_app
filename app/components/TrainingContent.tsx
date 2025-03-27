"use client"

import { useState, useEffect } from "react"
import { PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useCompletedSteps } from "@/lib/useCompletedSteps"
import { TrainingData } from "@/app/data/training"
import { VideoPlayer } from "@/components/video-player"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export interface TrainingContentProps {
  training: TrainingData
}

export function TrainingContent({ training }: TrainingContentProps) {
  const { tString } = useLanguage()
  const { completedSteps, toggleStep, progress, isReturning } = useCompletedSteps(training.id, training.lessons.length)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    if (isReturning) {
      setShowDialog(true)
    }
  }, [isReturning])

  const handleContinue = () => {
    setShowDialog(false)
  }

  const handleStartOver = () => {
    completedSteps.forEach((step) => toggleStep(step))
    setShowDialog(false)
  }

  return (
    <div className="space-y-6">
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="max-w-[90%] w-full rounded-xl p-6 sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>{tString("continueOrStartOver")}</AlertDialogTitle>
            <AlertDialogDescription>{tString("continueOrStartOverDescription")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex sm:flex-row gap-2">
            <Button 
              className="flex-1" 
              variant="outline" 
              onClick={handleStartOver}
            >
              {tString("startOver")}
            </Button>
            <Button 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" 
              onClick={handleContinue}
            >
              {tString("continue")}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div>
        <h1 className="text-3xl font-bold">{training.title}</h1>
        <p className="mt-2 text-gray-500">{training.description}</p>
      </div>

      <div className="space-y-4">
        {training.lessons.map((lesson, index) => (
          <div
            key={index}
            className={`p-6 bg-white rounded-2xl border ${
              completedSteps.includes(index) ? "border-green-200 bg-green-50" : "border-gray-200"
            } shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-0 w-6 h-6 rounded-full ${
                    completedSteps.includes(index)
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => toggleStep(index)}
                >
                  {completedSteps.includes(index) && (
                    <div className="h-3 w-3 bg-white rounded-full" />
                  )}
                </Button>
                <div>
                  <h2 className="text-lg font-semibold">{lesson.title}</h2>
                  <p className="text-gray-500">
                    {tString("lesson")} {index + 1}
                  </p>
                </div>
              </div>
              <div className="text-green-500">
                <PlayCircle className="w-6 h-6" />
              </div>
            </div>
            {lesson.videoId.includes("placeholder") ? (
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
  )
} 