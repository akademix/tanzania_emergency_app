"use client"

import { useEffect, useState, useRef } from "react"
import { CheckIcon, AlertTriangle, Info, PlayCircle, X, Volume2, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
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
  const { tString, language } = useLanguage()
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
        <AlertDialogContent className="max-w-[90%] w-full rounded-xl p-6 sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>{tString("continueOrStartOver")}</AlertDialogTitle>
            <AlertDialogDescription>{tString("continueOrStartOverDescription")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex sm:flex-row gap-2">
            <Button 
              className="flex-1" 
              variant="outline" 
              onClick={handleStartOver}
            >
              {tString("startOver")}
            </Button>
            <Button 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" 
              onClick={handleContinue}
            >
              {tString("continue")}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{tString("videoDialogTitle")}</DialogTitle>
            <DialogDescription>{tString("videoDialogDescription")}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <VideoPlayer videoId={currentVideo.videoId} title={currentVideo.title} />
          </div>
          <DialogFooter className="mt-4">
            <Button 
              variant="outline" 
              onClick={() => setVideoDialogOpen(false)}
            >
              {tString("closeButton")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div>
        <h1 className="text-3xl font-bold">{tString("firstAid")} for {
          String(
            guide.title && typeof guide.title === 'object' && language in guide.title
              ? guide.title[language as keyof typeof guide.title]
              : ''
          )
        }</h1>
      </div>

      <div className="space-y-2">
        <Progress value={progress} className="w-full" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>{`${completedSteps.length} of ${guide.steps.length} ${tString("lessons")} completed`}</span>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">{tString("immediateActions")}</h2>
        {guide.steps.map((step, index) => {
          const hasAudio = step.audioEnPath || step.audioSwPath;
          const isPlaying = playingAudioIndex === index;
          const audioPath = language === 'sw' ? step.audioSwPath : step.audioEnPath;

          return (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${
                completedSteps.includes(index) ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-start gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-0 w-6 h-6 mt-1 rounded-full flex-shrink-0 ${
                    completedSteps.includes(index)
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => toggleStep(index)}
                  aria-label={completedSteps.includes(index) ? "Mark step as incomplete" : "Mark step as complete"}
                >
                  {completedSteps.includes(index) && <CheckIcon className="w-4 h-4" />}
                </Button>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <label className="text-lg flex-grow cursor-pointer" onClick={() => toggleStep(index)}>
                      {formatTextWithLineBreaks(
                        step.instruction && typeof step.instruction === 'object' && language in step.instruction
                          ? step.instruction[language as keyof typeof step.instruction]
                          : ''
                      )}
                    </label>
                    {audioPath && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-gray-700 flex-shrink-0"
                        onClick={() => handlePlayAudio(step, index)}
                        aria-label={isPlaying ? "Pause audio" : "Play audio"}
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </Button>
                    )}
                  </div>
                  {step.videoId && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 text-blue-600 border-blue-200 hover:bg-blue-50 flex items-center gap-2"
                      onClick={() => handleWatchDemo(step.videoId!, 
                        `${String(
                          guide.title && typeof guide.title === 'object' && language in guide.title
                            ? guide.title[language as keyof typeof guide.title]
                            : ''
                        )} - ${tString("lesson")} ${index + 1}`)}
                    >
                      <PlayCircle className="h-4 w-4" />
                      {tString("watchDemonstration")}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {guide.dangerWarnings && guide.dangerWarnings.length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="w-5 h-5" />
              {tString("doNot")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-red-700">
              {guide.dangerWarnings?.map((warning, index) => {
                const text = warning && typeof warning === 'object' && language in warning 
                  ? warning[language as keyof typeof warning] 
                  : '';
                return <li key={index}>{String(text)}</li>;
              })}
            </ul>
          </CardContent>
        </Card>
      )}

      {guide.criticalSigns && guide.criticalSigns.length > 0 && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Info className="w-5 h-5" />
              {tString("criticalSignsToMonitor")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              {guide.criticalSigns?.map((sign, index) => {
                const text = sign && typeof sign === 'object' && language in sign
                  ? sign[language as keyof typeof sign]
                  : '';
                return <li key={index}>{String(text)}</li>;
              })}
            </ul>
          </CardContent>
        </Card>
      )}

      {guide.additionalInfo && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Info className="w-5 h-5" />
              {tString("additionalInformation")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700">
              {String(
                guide.additionalInfo && typeof guide.additionalInfo === 'object' && language in guide.additionalInfo
                  ? guide.additionalInfo[language as keyof typeof guide.additionalInfo]
                  : ''
              )}
            </p>
          </CardContent>
        </Card>
      )}

      <audio ref={audioRef} />
    </div>
  )
} 