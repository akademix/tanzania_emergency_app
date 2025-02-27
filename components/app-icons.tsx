"use client"

import { useEffect } from 'react'

export function GenerateIcons() {
  useEffect(() => {
    // This is just for development - in production you should use real icons
    if (typeof document !== 'undefined' && process.env.NODE_ENV === 'development') {
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 512
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        // Background
        ctx.fillStyle = '#3b82f6'
        ctx.fillRect(0, 0, 512, 512)
        
        // Cross symbol
        ctx.fillStyle = 'white'
        ctx.fillRect(156, 56, 200, 400)
        ctx.fillRect(56, 156, 400, 200)
        
        // Save as PNG
        const dataUrl = canvas.toDataURL('image/png')
        console.log('Generated icon:', dataUrl)
        
        // You can download this in development and save to your public folder
      }
    }
  }, [])
  
  return null
} 