"use client"

import { ArrowRight, Car, Flame, Heart, AlertTriangle, Activity, Shield, Book, Volume2, Pause } from "lucide-react"
import Link from "next/link"
import { BackButton } from "@/components/back-button"
import { useEffect, useState, useRef } from "react"
import { GuideData } from "../data/guides"
import { useLanguage } from "@/lib/language-context"

// Function to capitalize first letter of a string
function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function GuidePage() {
  const { language, tString } = useLanguage()
  const [guides, setGuides] = useState<GuideData[]>([])
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Load guide data on the client side
    const loadGuides = async () => {
      try {
        // Using dynamic import for client-side loading
        const { getAllGuides } = await import("../data/guides")
        const guidesData = await getAllGuides()
        setGuides(guidesData)
      } catch (error) {
        console.error("Failed to load guides:", error)
      }
    }
    
    loadGuides()
  }, [])

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleAudioEnd = () => {
      setPlayingAudioId(null);
    };

    if (audioElement) {
      audioElement.addEventListener('ended', handleAudioEnd);
      return () => {
        audioElement.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, []);

  const handlePlayAudio = (audioId: string, audioPath: string | undefined, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent navigation when clicking audio button
    event.stopPropagation(); // Stop event from bubbling to Link
    
    if (audioRef.current && audioPath) {
      if (playingAudioId === audioId) {
        audioRef.current.pause();
        setPlayingAudioId(null);
      } else {
        if (playingAudioId !== null) {
          audioRef.current.pause();
        }
        audioRef.current.src = audioPath;
        audioRef.current.play().then(() => {
          setPlayingAudioId(audioId);
        }).catch(error => {
          console.error("Error playing audio:", error);
          setPlayingAudioId(null);
        });
      }
    }
  };

  // Map guide IDs to their respective icons with improved colors and designs
  const guideIcons: Record<string, { icon: React.ReactNode; bgColor: string; iconColor: string }> = {
    "traffic-accident": { 
      icon: <Car className="w-7 h-7" />, 
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600", 
      iconColor: "text-white" 
    },
    "snake-bite": { 
      icon: <Shield className="w-7 h-7" />, 
      bgColor: "bg-gradient-to-br from-green-500 to-green-600", 
      iconColor: "text-white" 
    },
    "fire-emergency": { 
      icon: <Flame className="w-7 h-7" />, 
      bgColor: "bg-gradient-to-br from-red-500 to-red-600", 
      iconColor: "text-white" 
    },
    "burns": { 
      icon: <Heart className="w-7 h-7" />, 
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600", 
      iconColor: "text-white" 
    },
  }

  return (
    <div className="max-w-md mx-auto px-4">
      <BackButton />
      
      <div className="mb-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Book className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">{tString("emergencyGuidesTitle")}</h1>
        <p className="text-gray-300">{tString("stepByStepInstructions")}</p>
      </div>

      <div className="space-y-4">
        {guides.map((guide) => {
          const guideIcon = guideIcons[guide.id] || { 
            icon: <Activity className="w-7 h-7" />, 
            bgColor: "bg-gradient-to-br from-gray-500 to-gray-600", 
            iconColor: "text-white" 
          }
          
          const guideTitle = guide.title && typeof guide.title === 'object' && language in guide.title
            ? guide.title[language as keyof typeof guide.title]
            : '';
          
          const guideDescription = guide.description && typeof guide.description === 'object' && language in guide.description
            ? guide.description[language as keyof typeof guide.description]
            : '';
          
          const titleAudioPath = language === 'sw' ? guide.audioSwPath : guide.audioEnPath;
          const descriptionAudioPath = language === 'sw' ? guide.descriptionAudioSwPath : guide.descriptionAudioEnPath;
          const isTitlePlaying = playingAudioId === `${guide.id}-title`;
          const isDescriptionPlaying = playingAudioId === `${guide.id}-description`;
          
          return (
            <Link
              key={guide.id}
              href={`/guide/${guide.id}`}
              className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5 flex-1">
                  <div className={`w-14 h-14 ${guideIcon.bgColor} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <div className={guideIcon.iconColor}>
                      {guideIcon.icon}
                    </div>
                  </div>
                  <div className="text-white flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-xl font-semibold">
                        {capitalizeFirstLetter(guideTitle)}
                      </h2>
                      {titleAudioPath && (
                        <button
                          onClick={(e) => handlePlayAudio(`${guide.id}-title`, titleAudioPath, e)}
                          className={`w-8 h-8 rounded-full transition-all duration-300 touch-target tap-highlight-none transform hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg ${
                            isTitlePlaying
                              ? "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/30"
                              : "bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50"
                          }`}
                          aria-label={isTitlePlaying ? "Pause title audio" : "Play title audio"}
                        >
                          {isTitlePlaying ? (
                            <Pause className="w-3 h-3" />
                          ) : (
                            <Volume2 className="w-3 h-3" />
                          )}
                        </button>
                      )}
                    </div>
                    <div className="flex items-start gap-2">
                      <p className="text-gray-300 text-sm flex-1">{guideDescription}</p>
                      {descriptionAudioPath && (
                        <button
                          onClick={(e) => handlePlayAudio(`${guide.id}-description`, descriptionAudioPath, e)}
                          className={`w-6 h-6 rounded-full transition-all duration-300 touch-target tap-highlight-none transform hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg ${
                            isDescriptionPlaying
                              ? "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/30"
                              : "bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50"
                          }`}
                          aria-label={isDescriptionPlaying ? "Pause description audio" : "Play description audio"}
                        >
                          {isDescriptionPlaying ? (
                            <Pause className="w-2.5 h-2.5" />
                          ) : (
                            <Volume2 className="w-2.5 h-2.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0 ml-3" />
              </div>
            </Link>
          )
        })}
      </div>

      {guides.length === 0 && (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{tString("loadingGuides")}</h3>
          <p className="text-gray-300 text-sm">{tString("pleaseWaitLoadingGuides")}</p>
        </div>
      )}

      <audio ref={audioRef} />
    </div>
  )
}

