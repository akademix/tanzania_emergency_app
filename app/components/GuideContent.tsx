"use client"

import React, { useEffect, useState, useRef } from "react"
import { CheckIcon, AlertTriangle, PlayCircle, Volume2, Pause } from "lucide-react"
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

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          {tString("immediateActions")}
        </h2>
        
        {guide.steps.map((step, index) => {
          const isPlaying = playingAudioIndex === index;
          const audioPath = language === 'sw' ? step.audioSwPath : step.audioEnPath;

          return (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-200 ${
                completedSteps.includes(index) 
                  ? "border-green-400/50 bg-green-500/20" 
                  : "border-white/20 hover:bg-white/15"
              }`}
            >
              <div className="flex items-start gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-0 w-8 h-8 mt-1 rounded-full flex-shrink-0 transition-all duration-200 ${
                    completedSteps.includes(index)
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-white/20 border border-white/40 text-white hover:bg-white/30"
                  }`}
                  onClick={() => toggleStep(index)}
                  aria-label={completedSteps.includes(index) ? "Mark step as incomplete" : "Mark step as complete"}
                >
                  {completedSteps.includes(index) && <CheckIcon className="w-4 h-4" />}
                </Button>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      {tString("step")} {index + 1}
                    </h3>
                    
                    <div className="flex gap-2">
                      {audioPath && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handlePlayAudio(step, index)}
                          className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                        >
                          {isPlaying ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Volume2 className="w-4 h-4" />
                          )}
                        </Button>
                      )}
                      
                      {step.videoId && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleWatchDemo(step.videoId!, "Training Video")}
                          className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                        >
                          <PlayCircle className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-white mb-3">
                    {formatTextWithLineBreaks(
                      step.instruction && typeof step.instruction === 'object' && language in step.instruction
                        ? step.instruction[language as keyof typeof step.instruction] as string
                        : ''
                    )}
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