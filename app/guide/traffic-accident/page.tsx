"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"
import { Progress } from "@/components/ui/progress"
import { useCompletedSteps } from "@/lib/useCompletedSteps"
import { useEffect, useState } from "react"
import { CheckIcon, AlertTriangle, Info } from "lucide-react"
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

export default function TrafficAccidentPage() {
  const { tString } = useLanguage()
  const steps = [
    "Ensure your own safety and call emergency services immediately - Provide exact location - State number of people involved - Report any trapped victims - Mention if there's fire or dangerous goods",
    "Secure the accident scene: Turn on hazard lights, place warning triangle at least 100m behind the accident",
    "Check for danger: Fire, traffic, fuel leaks, unstable vehicles",
    "Check consciousness of victims - speak loudly and clearly",
    "Check breathing and pulse - be prepared for CPR if needed",
    "If conscious, keep victims calm and still - don't move them unless in immediate danger",
    "Control any serious bleeding with direct pressure using clean cloth",
    "Keep victims warm using blankets or coats",
  ]
  const { completedSteps, toggleStep, progress, isReturning } = useCompletedSteps("trafficAccident", steps.length)
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

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">First Aid for Traffic Accidents</h1>
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
              <li>Remove motorcycle helmets unless victim is not breathing</li>
              <li>Move victims with potential neck or spine injuries</li>
              <li>Give food or drink to victims</li>
              <li>Leave the scene until emergency services arrive</li>
              <li>Attempt to move vehicles unless they pose immediate danger</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Info className="w-5 h-5" />
              Critical Signs to Monitor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>Consciousness: Confusion, drowsiness, or unconsciousness</li>
              <li>Breathing: Difficulty breathing or irregular breathing</li>
              <li>Circulation: Weak pulse, pale/cold skin, severe bleeding</li>
              <li>Movement: Inability to move limbs, severe pain when moving</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Info className="w-5 h-5" />
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700">
              Document the scene if possible (photos, notes) and collect contact information from witnesses while
              waiting for emergency services.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

