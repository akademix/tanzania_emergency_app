import { AlertTriangle } from "lucide-react"

interface EmergencyAlertProps {
  text: string
}

export function EmergencyAlert({ text }: EmergencyAlertProps) {
  return (
    <div className="mb-6 rounded-2xl border border-rose-200 bg-white p-4 flex items-start gap-3">
      <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
      <p className="text-rose-600 font-medium">{text}</p>
    </div>
  )
}

