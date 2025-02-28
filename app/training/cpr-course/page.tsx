"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useCompletedSteps } from "@/lib/useCompletedSteps"

export default function CPRCoursePage() {
  const { tString } = useLanguage()
  const [showDialog, setShowDialog] = useState(false)
  const { isReturning } = useCompletedSteps("cprCourse", 5) // Assuming 5 lessons or steps
  
  useEffect(() => {
    if (isReturning) {
      setShowDialog(true)
    }
  }, [isReturning])

  const handleContinue = () => {
    setShowDialog(false)
  }

  const handleStartOver = () => {
    // Reset progress logic here if needed
    setShowDialog(false)
  }
  
  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{tString("cprCourse")}</h1>
          <p className="mt-2 text-gray-500">{tString("cprCourseDesc")}</p>
        </div>
        
        {/* Your course content here */}
      </div>
      
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
    </div>
  )
} 