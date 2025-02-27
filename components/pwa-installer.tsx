"use client"

import { useEffect, useState } from 'react'
// Remove the unused import if we're not using it
// import { useLanguage } from '@/lib/language-context'

// Define a proper type for the BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstaller() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  // Remove the unused variable declaration
  // const { tString } = useLanguage()

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope)
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err)
          }
        )
      })
    }

    // Handle install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Stash the event so it can be triggered later
      setInstallPrompt(e as BeforeInstallPromptEvent)
    })

    // Check if app is already installed
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
      setInstallPrompt(null)
    })

    // Check if app is already in standalone mode (installed)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }
  }, [])

  const handleInstallClick = () => {
    if (!installPrompt) return

    // Show the install prompt
    installPrompt.prompt()
    
    // Wait for the user to respond to the prompt
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt')
        setIsInstalled(true)
      } else {
        console.log('User dismissed the install prompt')
      }
      setInstallPrompt(null)
    })
  }

  if (!installPrompt || isInstalled) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg">Install App</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">Install this app on your device for quick access</p>
      </div>
      <button 
        onClick={handleInstallClick}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
      >
        Install
      </button>
    </div>
  )
} 