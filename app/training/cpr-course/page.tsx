"use client"

import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/lib/language-context"

export default function CPRCoursePage() {
  const { tString } = useLanguage()  // Use tString instead of t
  
  // ... existing code ...
  
  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{tString("cprCourse")}</h1>
          <p className="mt-2 text-gray-500">{tString("cprCourseDesc")}</p>
        </div>
        
        {/* Update other instances of t in JSX */}
        
      </div>
    </div>
  )
} 