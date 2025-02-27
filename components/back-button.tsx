"use client"

import { Button } from "@/components/ui/button"

export function BackButton() {
  return (
    <Button 
      variant="outline" 
      className="mb-4"
      onClick={() => window.history.back()}
    >
      ← Back
    </Button>
  )
}

