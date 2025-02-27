import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function EmergencyCallButton() {
  const { tString } = useLanguage()

  return (
    <a href="tel:0800750112" className="mb-6 block">
      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
        <Phone className="w-5 h-5 mr-2" />
        {tString("callEmergency")}
      </Button>
    </a>
  )
}

