"use client"

import React, { useState, useRef, useEffect } from "react"
import { Play, AlertCircle, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from 'next/image'

interface VideoPlayerProps {
  videoId: string
  title: string
}

export function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("Failed to load video. Please try refreshing the page or check your internet connection.")
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Check if the videoId is a local file or YouTube ID
  const isLocalFile = videoId.endsWith('.mp4') || videoId.startsWith('/videos/')
  
  // For YouTube videos
  const thumbnailUrl = isLocalFile ? undefined : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  
  // For local files, construct the path
  const videoPath = isLocalFile 
    ? (videoId.startsWith('/') ? videoId : `/videos/training/${videoId}`)
    : undefined
    
  // Log debug info
  useEffect(() => {
    console.log("Video Info:", {
      videoId,
      isLocalFile,
      videoPath,
      exists: videoPath ? "Checking..." : "N/A"
    })
  }, [videoId, isLocalFile, videoPath])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setError(true)
    setIsLoading(false)
  }
  
  const handleVideoLoad = () => {
    console.log("Video loaded successfully:", videoPath)
    setIsLoading(false)
  }
  
  const handleVideoError = (e: any) => {
    console.error("Video loading error:", e)
    setErrorMessage(`Failed to load video: ${videoPath}. Check if the file exists and has the correct format.`)
    setError(true)
    setIsLoading(false)
  }
  
  // const togglePlay = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause()
  //     } else {
  //       videoRef.current.play()
  //     }
  //     setIsPlaying(!isPlaying)
  //   }
  // }

  if (error) {
    return (
      <Alert variant="destructive" className="mt-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          {errorMessage}
        </AlertDescription>
      </Alert>
    )
  }

  // Render local video player
  if (isLocalFile) {
    return (
      <div className="relative rounded-lg overflow-hidden bg-gray-100">
        <div className="aspect-video">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <RotateCw className="h-8 w-8 animate-spin text-gray-400" />
            </div>
          )}
          
          <video
            ref={videoRef}
            className="w-full h-full"
            controls={!isLoading}
            preload="metadata"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            poster="/placeholder.svg?height=720&width=1280"
            autoPlay
            loop
            muted
          >
            <source src={videoPath} type="video/mp4" />
            <p className="text-center p-4 bg-gray-100">
              Your browser doesn&apos;t support this video format.
              Try using Chrome, Firefox, or download <a href={videoPath} download className="text-blue-600 underline">the video</a> to play in VLC.
            </p>
          </video>
        </div>
      </div>
    )
  }

  // Render YouTube player (original implementation)
  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-100">
      <div className="aspect-video">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="relative">
              {/* Thumbnail */}
              <Image 
                src={thumbnailUrl || "/placeholder.svg"}
                alt={title}
                width={500}
                height={300}
                layout="responsive"
                className="w-full h-full object-cover opacity-50"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=720&width=1280"
                }}
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16">
                  <Play className="h-8 w-8" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
            </div>
          </div>
        )}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`border-0 ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </div>
    </div>
  )
}

