import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function EmergencyCallSection() {
  const { t } = useLanguage()

  return (
    <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
      <h2 className="text-lg font-semibold text-red-700 mb-2">{t("emergencyContact")}</h2>
      <p className="text-red-600 mb-3">{t("emergencyNumber")}: 0800 750 112</p>
      <a href="tel:0800750112" className="block">
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
          <Phone className="w-5 h-5 mr-2" />
          {t("callEmergency")}
        </Button>
      </a>
    </div>
  )
}

