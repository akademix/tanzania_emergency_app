"use client"

import React, { useEffect, useState, useRef } from "react"
import { CheckIcon, AlertTriangle, PlayCircle, Volume2, Pause, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useCompletedSteps } from "@/lib/useCompletedSteps"
import { useLanguage } from "@/lib/language-context"
import { GuideData, GuideStep } from "@/app/data/guides"
import { VideoPlayer } from "@/components/video-player"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export interface GuideContentProps {
  guide: GuideData
}

// Helper function to safely format text with newlines and bullet points
function formatTextWithLineBreaks(text: string) {
  return text.split('\n').map((line, i) => (
    <span key={i} className={line.startsWith('•') ? 'block ml-4' : line.trim() === '' ? 'block h-4' : 'block'}>
      {line}
    </span>
  ));
}

export function GuideContent({ guide }: GuideContentProps) {
  const { language, tString } = useLanguage()
  const { completedSteps, toggleStep, progress, isReturning } = useCompletedSteps(guide.id, guide.steps.length)
  const [showDialog, setShowDialog] = useState(false)
  const [videoDialogOpen, setVideoDialogOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<{videoId: string, title: string}>({videoId: "", title: ""})
  const [playingAudioIndex, setPlayingAudioIndex] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isReturning) {
      setShowDialog(true)
    }
  }, [isReturning])

  const handleContinue = () => {
    setShowDialog(false)
  }

  const handleStartOver = () => {
    completedSteps.forEach((step) => toggleStep(step))
    setShowDialog(false)
  }

  const handleWatchDemo = (videoId: string, title: string) => {
    setCurrentVideo({videoId, title})
    setVideoDialogOpen(true)
  }

  const handlePlayAudio = (step: GuideStep, index: number) => {
    console.log("Play audio for step", index, "Language:", language);
    const audioPath = language === 'sw' ? step.audioSwPath : step.audioEnPath;
    console.log("Audio path:", audioPath);

    if (audioRef.current && audioPath) {
      if (playingAudioIndex === index) {
        audioRef.current.pause();
        setPlayingAudioIndex(null);
      } else {
        if (playingAudioIndex !== null) {
          audioRef.current.pause();
        }
        audioRef.current.src = audioPath;
        audioRef.current.play().then(() => {
          setPlayingAudioIndex(index);
        }).catch(error => {
          console.error("Error playing audio:", error);
          setPlayingAudioIndex(null);
        });
      }
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleAudioEnd = () => {
      setPlayingAudioIndex(null);
    };

    if (audioElement) {
      audioElement.addEventListener('ended', handleAudioEnd);
      return () => {
        audioElement.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, []);

  return (
    <div className="space-y-6">
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="max-w-[90%] w-full rounded-2xl p-6 sm:max-w-md bg-slate-800/95 backdrop-blur-sm border border-white/30 shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white text-xl font-bold">{tString("continueOrStartOver")}</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-200 mt-2">
              {tString("continueOrStartOverDescription")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex sm:flex-row gap-3 mt-6">
            <Button 
              className="flex-1 bg-white/20 border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60 font-medium py-2.5 rounded-xl transition-all duration-200" 
              variant="outline" 
              onClick={handleStartOver}
            >
              {tString("startOver")}
            </Button>
            <Button 
              className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium py-2.5 rounded-xl shadow-lg transition-all duration-200" 
              onClick={handleContinue}
            >
              {tString("continue")}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white/10 backdrop-blur-sm border border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white">Training Video</DialogTitle>
            <DialogDescription className="text-gray-300">
              Watch the demonstration video for this step.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <VideoPlayer videoId={currentVideo.videoId} title={currentVideo.title} />
          </div>
          <DialogFooter className="mt-4">
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => setVideoDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          {tString("firstAidFor")} {
            String(
              guide.title && typeof guide.title === 'object' && language in guide.title
                ? guide.title[language as keyof typeof guide.title]
                : ''
            )
          }
        </h1>
        <p className="text-gray-300">{tString("followStepByStepInstructions")}</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">{tString("progress")}</span>
            <span className="text-gray-300 text-sm">{`${completedSteps.length} ${tString("of")} ${guide.steps.length} ${tString("completed")}`}</span>
          </div>
          <Progress value={progress} className="w-full bg-white/20" />
        </div>
      </div>

      {/* Emergency Call Section - Always Visible */}
      <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-3xl p-4 border border-red-400/30 shadow-lg shadow-red-500/20">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-white mb-1">{tString("emergency")}</h3>
          <p className="text-red-200 text-sm">0800 750 112</p>
        </div>
        <a
          href="tel:0800750112"
          onClick={() => {
            if (navigator.vibrate) navigator.vibrate([200, 100, 200])
          }}
          className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl shadow-xl shadow-red-500/40 transition-all duration-300 touch-target tap-highlight-none transform hover:scale-[1.02] active:scale-95 pulse-emergency font-bold text-lg"
          aria-label="Call emergency services now"
        >
          <Phone className="w-6 h-6" />
          <span>Call Now</span>
        </a>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          {tString("immediateActions")}
        </h2>
        
        {guide.steps.map((step, index) => {
          const isPlaying = playingAudioIndex === index;
          const audioPath = language === 'sw' ? step.audioSwPath : step.audioEnPath;
          const isCompleted = completedSteps.includes(index);

          return (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-3xl p-6 border transition-all duration-300 transform hover:scale-[1.01] ${
                isCompleted 
                  ? "border-green-400/50 bg-green-500/20 shadow-lg shadow-green-500/20" 
                  : "border-white/20 hover:bg-white/15 hover:border-white/30"
              }`}
            >
              {/* Step Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Completion Toggle Button - Now first */}
                  <button
                    onClick={() => {
                      toggleStep(index)
                      if (navigator.vibrate) navigator.vibrate(isCompleted ? 30 : 50)
                    }}
                    className={`w-6 h-6 rounded-md transition-all duration-300 touch-target tap-highlight-none transform active:scale-95 flex items-center justify-center border-2 ${
                      isCompleted
                        ? "bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 shadow-lg shadow-green-500/30"
                        : "bg-white/5 border-white/40 hover:bg-white/10 hover:border-white/60"
                    }`}
                    aria-label={isCompleted ? "Mark step as incomplete" : "Mark step as complete"}
                  >
                    {isCompleted && (
                      <CheckIcon className="w-4 h-4 text-white" />
                    )}
                  </button>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {tString("step")} {index + 1}
                    </h3>
                    {isCompleted && (
                      <p className="text-green-300 text-sm font-medium">
                        ✓ {tString("completed")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Buttons - Moved to top right */}
                <div className="flex gap-2">
                  {/* Audio Button */}
                  {audioPath && (
                    <button
                      onClick={() => {
                        handlePlayAudio(step, index)
                        if (navigator.vibrate) navigator.vibrate(30)
                      }}
                      className={`w-10 h-10 rounded-full transition-all duration-300 touch-target tap-highlight-none transform hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg ${
                        isPlaying
                          ? "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/30"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50"
                      }`}
                      aria-label={isPlaying ? "Pause audio" : "Play audio"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  )}
                  
                  {/* Video Button */}
                  {step.videoId && (
                    <button
                      onClick={() => {
                        handleWatchDemo(step.videoId!, "Training Video")
                        if (navigator.vibrate) navigator.vibrate(30)
                      }}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 transition-all duration-300 touch-target tap-highlight-none transform hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg"
                      aria-label="Watch demonstration video"
                    >
                      <PlayCircle className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Step Content */}
              <div className="mb-6">
                <div className="text-white leading-relaxed text-base">
                  {formatTextWithLineBreaks(
                    step.instruction && typeof step.instruction === 'object' && language in step.instruction
                      ? step.instruction[language as keyof typeof step.instruction] as string
                      : ''
                  )}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">
                    {tString("step")} {index + 1} {tString("of")} {guide.steps.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {Array.from({ length: guide.steps.length }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i <= index
                              ? completedSteps.includes(i)
                                ? "bg-green-400"
                                : "bg-blue-400"
                              : "bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 ml-2">
                      {Math.round(((completedSteps.length) / guide.steps.length) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <audio ref={audioRef} />
    </div>
  )
} 