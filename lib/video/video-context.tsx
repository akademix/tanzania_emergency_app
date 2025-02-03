"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import { Video } from './types'

interface VideoContextType {
  downloadedVideos: string[] // Array of video IDs
  isVideoDownloaded: (id: string) => boolean
  downloadVideo: (video: Video) => Promise<void>
  removeDownloadedVideo: (id: string) => Promise<void>
}

const VideoContext = createContext<VideoContextType | undefined>(undefined)

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [downloadedVideos, setDownloadedVideos] = useState<string[]>([])

  // Load downloaded video list from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('downloadedVideos')
    if (stored) {
      setDownloadedVideos(JSON.parse(stored))
    }
  }, [])

  const isVideoDownloaded = (id: string) => downloadedVideos.includes(id)

  const downloadVideo = async (video: Video) => {
    if (video.type !== 'training' || !video.isDownloadable) return

    try {
      // Here we'll implement actual download logic
      // For now, just marking as downloaded
      const newDownloadedVideos = [...downloadedVideos, video.id]
      setDownloadedVideos(newDownloadedVideos)
      localStorage.setItem('downloadedVideos', JSON.stringify(newDownloadedVideos))
    } catch (error) {
      console.error('Failed to download video:', error)
      throw error
    }
  }

  const removeDownloadedVideo = async (id: string) => {
    const newDownloadedVideos = downloadedVideos.filter(videoId => videoId !== id)
    setDownloadedVideos(newDownloadedVideos)
    localStorage.setItem('downloadedVideos', JSON.stringify(newDownloadedVideos))
  }

  return (
    <VideoContext.Provider value={{
      downloadedVideos,
      isVideoDownloaded,
      downloadVideo,
      removeDownloadedVideo
    }}>
      {children}
    </VideoContext.Provider>
  )
}

export function useVideo() {
  const context = useContext(VideoContext)
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider')
  }
  return context
} 