"use client"

import { useState, useEffect } from "react"

export function useCompletedSteps(category: string, totalSteps: number) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [isReturning, setIsReturning] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(`completedSteps_${category}`)
    if (stored) {
      const parsedSteps = JSON.parse(stored)
      setCompletedSteps(parsedSteps)
      setIsReturning(parsedSteps.length > 0)
    }
  }, [category])

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) => {
      const newSteps = prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      localStorage.setItem(`completedSteps_${category}`, JSON.stringify(newSteps))
      return newSteps
    })
  }

  const progress = (completedSteps.length / totalSteps) * 100

  return { completedSteps, toggleStep, progress, isReturning }
}

