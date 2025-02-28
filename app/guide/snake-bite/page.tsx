"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"
import { Progress } from "@/components/ui/progress"
import { useCompletedSteps } from "@/lib/useCompletedSteps"
import { useState, useEffect } from "react"
import { CheckIcon, AlertTriangle, Info, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
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
import { FaArrowRight, FaBan, FaFirstAid } from 'react-icons/fa'

export default function SnakeBitePage() {
  const { tString } = useLanguage()
  const steps = [
    "Ensure your own safety and move away from the snake's area. If still attached, use a stick to make it release - do not attempt to catch or kill it.",
    "Call emergency services immediately, especially if: - Snake is venomous or unknown - Difficulty breathing - Bite on head/neck - Signs of severe allergic reaction.",
    "Keep the person calm and still to slow down venom spread.",
    "Remove any constricting items (jewelry, watches, tight clothing) from the affected area.",
    "Keep the bitten area below heart level.",
    "Clean the wound with soap and water if available.",
    "Place the person on their left side (recovery position) in case of vomiting.",
  ]
  const { completedSteps, toggleStep, progress, isReturning } = useCompletedSteps("snakeBite", steps.length)
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
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="max-w-[90%] w-full rounded-xl p-6 sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>{tString("continueOrStartOver")}</AlertDialogTitle>
            <AlertDialogDescription>{tString("continueOrStartOverDescription")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
            <AlertDialogCancel>{tString("cancel")}</AlertDialogCancel>
            <AlertDialogAction onClick={handleContinue}>{tString("continue")}</AlertDialogAction>
            <AlertDialogAction onClick={handleStartOver}>{tString("startOver")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Bug className="w-6 h-6 text-red-500" />
          <h1 className="text-3xl font-bold">First Aid for Snake Bites</h1>
        </div>

        <div className="space-y-2">
          <Progress value={progress} className="w-full" />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{`${completedSteps.length} of ${steps.length} steps completed`}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Immediate Actions</h2>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${
                completedSteps.includes(index) ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
              }`}
            >
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
                  {completedSteps.includes(index) && <CheckIcon className="w-4 h-4" />}
                </Button>
                <label className="text-lg flex-1 cursor-pointer" onClick={() => toggleStep(index)}>
                  {step}
                </label>
              </div>
            </div>
          ))}
        </div>

        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="w-5 h-5" />
              DO NOT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-red-700">
              <li>Apply a tourniquet or try to suck out the venom</li>
              <li>Cut into the wound</li>
              <li>Apply ice or submerge in water</li>
              <li>Drink alcohol or caffeinated beverages</li>
              <li>Take ibuprofen or other non-paracetamol pain medication</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Info className="w-5 h-5" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>Monitor airway and breathing - be prepared for resuscitation if needed</li>
              <li>Paracetamol may be given for pain relief</li>
              <li>Reassure the victim - many snakes are non-venomous</li>
              <li>Immobilize the affected limb and use a stretcher if available</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

