import { Video } from './types'

export const videos: Video[] = [
  {
    id: 'intro-first-aid',
    type: 'emergency',
    title: 'Introduction to First Aid',
    description: 'Basic principles and approach to emergency situations',
    duration: 166,
    languages: ['en', 'sw'],
    path: '/videos/emergency/intro-first-aid.mp4'
  },
  {
    id: 'cpr-demo',
    type: 'emergency',
    title: 'CPR Demonstration',
    description: 'Basic CPR technique demonstration',
    duration: 120,
    languages: ['en', 'sw'],
    path: '/videos/emergency/cpr-demo.mp4'
  },
  {
    id: 'cpr-training',
    type: 'training',
    title: 'Complete CPR Training',
    description: 'Comprehensive CPR training module',
    duration: 600,
    languages: ['en', 'sw'],
    streamingUrl: '/videos/training/cpr-training.mp4', // temporary local path for testing
    downloadUrl: '/videos/training/downloaded/cpr-training.mp4',
    isDownloadable: true
  }
]

export const getVideo = (id: string): Video | undefined => {
  return videos.find(video => video.id === id)
}

export const getEmergencyVideos = (): Video[] => {
  return videos.filter(video => video.type === 'emergency')
}

export const getTrainingVideos = (): Video[] => {
  return videos.filter(video => video.type === 'training')
} 