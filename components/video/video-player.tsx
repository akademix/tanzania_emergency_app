"use client"

import { useRef, useEffect } from 'react'
import { Video } from '@/lib/video/types'
import { useLanguage } from '@/lib/language-context'

interface VideoPlayerProps {
  video: Video
  autoPlay?: boolean
  onEnded?: () => void
}

export function VideoPlayer({ video, autoPlay = false, onEnded }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { language } = useLanguage()

  const videoSource = video.type === 'emergency' 
    ? video.path 
    : video.isDownloaded 
      ? video.downloadUrl 
      : video.streamingUrl

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    if (onEnded) {
      videoElement.addEventListener('ended', onEnded)
      return () => videoElement.removeEventListener('ended', onEnded)
    }
  }, [onEnded])

  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full"
        controls
        autoPlay={autoPlay}
        playsInline
        preload={video.type === 'emergency' ? 'auto' : 'metadata'}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 