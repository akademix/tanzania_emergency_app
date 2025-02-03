export type VideoLanguage = 'en' | 'sw'

export type VideoType = 'emergency' | 'training'

export interface BaseVideo {
  id: string
  title: string
  description: string
  duration: number // in seconds
  languages: VideoLanguage[]
  thumbnailUrl?: string
}

export interface EmergencyVideo extends BaseVideo {
  type: 'emergency'
  path: string
}

export interface TrainingVideo extends BaseVideo {
  type: 'training'
  streamingUrl: string
  downloadUrl: string
  isDownloadable: boolean
  isDownloaded?: boolean
}

export type Video = EmergencyVideo | TrainingVideo