"use client"

import { useEffect } from 'react'

export function GeneratePlaceholder() {
  useEffect(() => {
    if (typeof document !== 'undefined' && process.env.NODE_ENV === 'development') {
      const canvas = document.createElement('canvas')
      canvas.width = 1280
      canvas.height = 720
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        // Background
        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(0, 0, 1280, 720)
        
        // Play button
        ctx.fillStyle = '#e53e3e'
        ctx.beginPath()
        ctx.arc(640, 360, 80, 0, Math.PI * 2)
        ctx.fill()
        
        // Play triangle
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.moveTo(620, 320)
        ctx.lineTo(680, 360)
        ctx.lineTo(620, 400)
        ctx.closePath()
        ctx.fill()
        
        // Text
        ctx.fillStyle = 'white'
        ctx.font = 'bold 36px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('Video Placeholder', 640, 520)
        
        // Save as JPG
        const dataUrl = canvas.toDataURL('image/jpeg')
        console.log('Generated placeholder:', dataUrl)
      }
    }
  }, [])
  
  return null
} 