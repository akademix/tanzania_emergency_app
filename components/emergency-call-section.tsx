import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { FaPhone, FaAmbulance, FaInfoCircle } from 'react-icons/fa'

export function EmergencyCallSection() {
  const { tString } = useLanguage()

  return (
    <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
      <h2 className="flex items-center gap-2">
        <FaPhone className="text-red-500" />
        {tString("emergency")}
      </h2>
      <p className="text-red-600 mb-3">{tString("emergencyNumber")}: 0800 750 112</p>
      <a href="tel:0800750112" className="block">
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
          <Phone className="w-5 h-5 mr-2" />
          {tString("callEmergency")}
        </Button>
      </a>
    </div>
  )
}

