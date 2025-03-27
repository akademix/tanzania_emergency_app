"use client"

import { useEffect, useState } from "react"
import { CheckIcon, AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useCompletedSteps } from "@/lib/useCompletedSteps"
import { useLanguage } from "@/lib/language-context"
import { GuideData } from "@/app/data/guides"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export interface GuideContentProps {
  guide: GuideData
}

export function GuideContent({ guide }: GuideContentProps) {
  const { tString } = useLanguage()
  const { completedSteps, toggleStep, progress, isReturning } = useCompletedSteps(guide.id, guide.steps.length)
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
        <h1 className="text-3xl font-bold">First Aid for {guide.title}</h1>
      </div>

      <div className="space-y-2">
        <Progress value={progress} className="w-full" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>{`${completedSteps.length} of ${guide.steps.length} steps completed`}</span>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Immediate Actions</h2>
        {guide.steps.map((step, index) => (
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

      {guide.dangerWarnings && guide.dangerWarnings.length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="w-5 h-5" />
              DO NOT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-red-700">
              {guide.dangerWarnings.map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {guide.criticalSigns && guide.criticalSigns.length > 0 && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Info className="w-5 h-5" />
              Critical Signs to Monitor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              {guide.criticalSigns.map((sign, index) => (
                <li key={index}>{sign}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {guide.additionalInfo && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Info className="w-5 h-5" />
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700">
              {guide.additionalInfo}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 