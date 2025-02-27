"use client"

import { useState, useEffect } from 'react'
import { WifiOff } from 'lucide-react'

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  
  useEffect(() => {
    // Set initial state
    setIsOnline(navigator.onLine)
    
    // Add event listeners
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])
  
  if (isOnline) return null
  
  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto w-max bg-amber-100 text-amber-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-50">
      <WifiOff className="w-4 h-4" />
      <span className="text-sm font-medium">You are offline. Some features may be limited.</span>
    </div>
  )
} 