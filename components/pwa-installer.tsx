"use client"

import { useEffect, useState } from 'react'
import { Download, X, Smartphone } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

// Define a proper type for the BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstaller() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { tString } = useLanguage()

  useEffect(() => {
    // Check if running on iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // Check if app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    const isIOSStandalone = (window.navigator as any).standalone === true
    
    if (isStandalone || isIOSStandalone) {
      setIsInstalled(true)
      return
    }

    // Check if user has previously dismissed the prompt
    const dismissed = localStorage.getItem('pwa-install-dismissed')
    if (dismissed) {
      const dismissedTime = parseInt(dismissed)
      const now = Date.now()
      const daysSinceDismissed = (now - dismissedTime) / (1000 * 60 * 60 * 24)
      
      // Show again after 7 days
      if (daysSinceDismissed < 7) {
        setDismissed(true)
        return
      }
    }

    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('[PWA] ServiceWorker registration successful:', registration.scope)
            
            // Check for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New content is available, prompt user to refresh
                    if (confirm('New version available! Refresh to update?')) {
                      window.location.reload()
                    }
                  }
                })
              }
            })
          },
          (err) => {
            console.log('[PWA] ServiceWorker registration failed:', err)
          }
        )
      })
    }

    // Handle install prompt for Android/Chrome
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Handle successful installation
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setInstallPrompt(null)
      console.log('[PWA] App installed successfully')
    }

    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!installPrompt) return

    try {
      await installPrompt.prompt()
      const choiceResult = await installPrompt.userChoice
      
      if (choiceResult.outcome === 'accepted') {
        console.log('[PWA] User accepted the install prompt')
        setIsInstalled(true)
      } else {
        console.log('[PWA] User dismissed the install prompt')
        handleDismiss()
      }
      setInstallPrompt(null)
    } catch (error) {
      console.error('[PWA] Install prompt error:', error)
    }
  }

  const handleIOSInstall = () => {
    setShowIOSInstructions(true)
  }

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem('pwa-install-dismissed', Date.now().toString())
  }

  // Don't show if installed, dismissed, or no prompt available
  if (isInstalled || dismissed || (!installPrompt && !isIOS)) {
    return null
  }

  // iOS Installation Instructions Modal
  if (showIOSInstructions) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 max-w-sm w-full border border-white/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Install App</h3>
            <button
              onClick={() => setShowIOSInstructions(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="space-y-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <p className="text-sm">Tap the Share button in Safari</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <p className="text-sm">Scroll down and tap &quot;Add to Home Screen&quot;</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <p className="text-sm">Tap &quot;Add&quot; to install the app</p>
            </div>
          </div>
          
          <button
            onClick={() => setShowIOSInstructions(false)}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-2xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
          >
            Got it!
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            {isIOS ? (
              <Smartphone className="w-6 h-6 text-white" />
            ) : (
              <Download className="w-6 h-6 text-white" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-white text-lg leading-tight">
              {tString("installApp") || "Install App"}
            </h3>
            <p className="text-gray-300 text-sm leading-tight">
              {tString("installAppDescription") || "Get quick access to emergency guides offline"}
            </p>
          </div>
          
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
            
            <button
              onClick={isIOS ? handleIOSInstall : handleInstallClick}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm whitespace-nowrap"
            >
              {tString("install") || "Install"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 