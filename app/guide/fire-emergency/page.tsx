"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"
import { Progress } from "@/components/ui/progress"
import { useCompletedSteps } from "@/lib/useCompletedSteps"
import { useEffect, useState } from "react"
import { CheckIcon, AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
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
import { EmergencyCallButton } from "@/components/emergency-call-button"

export default function BurnsPage() {
  const { t } = useLanguage()
  const steps = [
    "Ensure your own safety and call emergency services immediately, especially if: - Large burn area - Inhaled smoke/hot air - Burns to face/throat - Breathing difficulties",
    "If person or clothes are on fire: Stop, drop, and roll them on the ground. Use water if available.",
    "Cool the burned area with room temperature water (20°C) for at least 20 minutes.",
    "Use running water if possible, or immerse the burned area if it's an arm or leg.",
    "Remove any jewelry or tight items from the burned area before swelling occurs.",
    "If running water isn't available, use a clean, wet cloth at room temperature.",
    "Only cool the burned area, not the entire body, to prevent hypothermia.",
  ]
  const { completedSteps, toggleStep, progress, isReturning } = useCompletedSteps("burns", steps.length)
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
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("continueOrStartOver")}</AlertDialogTitle>
            <AlertDialogDescription>{t("continueOrStartOverDescription")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleStartOver}>{t("startOver")}</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleContinue}
              className="bg-blue-500 text-white hover:bg-blue-600 font-bold px-6 py-2"
            >
              {t("continue")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="space-y-6">
        <EmergencyCallButton />

        <div>
          <h1 className="text-3xl font-bold">First Aid for Burns</h1>
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
              <li>Use ice or very cold water</li>
              <li>Pop any blisters that form</li>
              <li>Apply creams, ointments, or butter to the burn</li>
              <li>Remove clothes that are stuck to the burn</li>
              <li>Cool the entire body - focus only on burned area</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Info className="w-5 h-5" />
              Burn Types Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>First Degree: Red, painful, dry skin without blisters</li>
              <li>Second Degree: Blisters, moist skin, usually leaves scars</li>
              <li>Third Degree: Deep injury, dry leather-like skin, severe damage</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

