"use client"

import { useState } from "react"
import { Play, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface VideoPlayerProps {
  videoId: string
  title: string
}

export function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setError(true)
    setIsLoading(false)
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mt-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load video. Please try refreshing the page or check your internet connection.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-100">
      <div className="aspect-video">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="relative">
              {/* Thumbnail */}
              <img
                src={thumbnailUrl || "/placeholder.svg"}
                alt={title}
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

