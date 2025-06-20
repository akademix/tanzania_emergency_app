"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function BackButton() {
  const { tString } = useLanguage()
  
  return (
    <Button 
      variant="ghost" 
      className="mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
      onClick={() => window.history.back()}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      {tString("back")}
    </Button>
  )
}

