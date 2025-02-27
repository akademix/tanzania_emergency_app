"use client"

import { useLanguage } from "@/lib/language-context"
import { useCompletedSteps } from "@/lib/useCompletedSteps"
import { useEffect, useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function FireEmergencyContent() {
  const { tString } = useLanguage()
  const steps = [
    "Ensure your own safety and call emergency services immediately, especially if: - Large burn area - Inhaled smoke/hot air - Burns to face/throat - Breathing difficulties",
    "If person or clothes are on fire: Stop, drop, and roll them on the ground. Use water if available.",
    "Cool the burned area with room temperature water (20°C) for at least 20 minutes.",
    "Use running water if possible, or immerse the burned area if it's an arm or leg.",
    "Remove any jewelry or tight items from the burned area before swelling occurs.",
    "If running water isn't available, use a clean, wet cloth at room temperature.",
    "Only cool the burned area, not the entire body, to prevent hypothermia.",
  ]
  const { completedSteps, toggleStep, isReturning } = useCompletedSteps("burns", steps.length)
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
    <>
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{tString("continueOrStartOver")}</AlertDialogTitle>
            <AlertDialogDescription>{tString("continueOrStartOverDescription")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{tString("cancel")}</AlertDialogCancel>
            <AlertDialogAction onClick={handleContinue}>{tString("continue")}</AlertDialogAction>
            <AlertDialogAction onClick={handleStartOver}>{tString("startOver")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
} 