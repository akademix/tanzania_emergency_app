"use client"

import { useState } from "react"
// import { useRouter } from "next/navigation" // Removed useRouter
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, FileText, User, Building, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context" // Uncommented useLanguage
import { BackButton } from "@/components/back-button"

// Form data interface
interface ResponderFormData {
  eventNumber: string
  location: string
  accidentType: string
  equipmentUsed: string
  injuryAndService: string
  receivingFacilityName: string
  receivingStaffName: string
  receivingStaffId: string
  firstAidInitiated: string
  callerUsedApp: string
  feedback: {
    responseTime: string
    serviceSatisfaction: string
    equipment: string
    comments: string
  }
}

export default function ResponderForm() {
  // const router = useRouter() // Removed router
  const { language, tString } = useLanguage() // Uncommented tString
  
  // Initialize form with empty values
  const initialFormData: ResponderFormData = {
    eventNumber: "",
    location: "",
    accidentType: "",
    equipmentUsed: "",
    injuryAndService: "",
    receivingFacilityName: "",
    receivingStaffName: "",
    receivingStaffId: "",
    firstAidInitiated: "no",
    callerUsedApp: "unknown",
    feedback: {
      responseTime: "",
      serviceSatisfaction: "",
      equipment: "",
      comments: ""
    }
  }
  
  const [formData, setFormData] = useState<ResponderFormData>(initialFormData)
  const [saveSuccess, setSaveSuccess] = useState(false)
  
  // Translation helper for responder form specific texts
  const getFormText = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        emergencyReport: "Emergency report",
        completeAfterResponding: "Complete after responding to incident",
        basicInformation: "Basic information",
        eventNumber: "Event number",
        location: "Location",
        accidentType: "Accident type",
        selectAccidentType: "Select accident type",
        trafficAccident: "Traffic accident",
        burns: "Burns",
        snakeBite: "Snake bite",
        drowning: "Drowning",
        other: "Other",
        equipmentAndService: "Equipment & service",
        equipmentUsed: "Equipment used",
        injuryAndServiceDetails: "Injury & service details",
        firstAidInitiated: "First aid initiated?",
        callerUsedApp: "Caller used app?",
        receivingFacility: "Receiving facility",
        facilityName: "Facility name",
        staffName: "Staff name",
        staffId: "Staff ID",
        feedback: "Feedback",
        responseTimeRating: "Response time rating (1-5)",
        serviceSatisfaction: "Service satisfaction (1-5)",
        equipmentAdequacy: "Equipment adequacy (1-5)",
        selectRating: "Select rating",
        additionalComments: "Additional comments",
        sendReport: "Send report",
        backToHome: "Back to home",
        reportCreated: "Report created successfully",
        yes: "Yes",
        no: "No",
        unknown: "Unknown"
      },
      sw: {
        emergencyReport: "Ripoti ya dharura",
        completeAfterResponding: "Jaza baada ya kuitikia tukio",
        basicInformation: "Taarifa za msingi",
        eventNumber: "Namba ya tukio",
        location: "Mahali",
        accidentType: "Aina ya ajali",
        selectAccidentType: "Chagua aina ya ajali",
        trafficAccident: "Ajali ya barabarani",
        burns: "Kuungua",
        snakeBite: "Kuumwa na nyoka",
        drowning: "Kuzama",
        other: "Nyingine",
        equipmentAndService: "Vifaa na huduma",
        equipmentUsed: "Vifaa vilivyotumika",
        injuryAndServiceDetails: "Maelezo ya jeraha na huduma",
        firstAidInitiated: "Huduma ya kwanza ilianzishwa?",
        callerUsedApp: "Mpigaji simu alitumia programu?",
        receivingFacility: "Kituo cha mapokezi",
        facilityName: "Jina la kituo",
        staffName: "Jina la mtoa huduma",
        staffId: "Namba ya mtoa huduma",
        feedback: "Maoni",
        responseTimeRating: "Tathmini ya muda wa kuitikia (1-5)",
        serviceSatisfaction: "Kuridhika na huduma (1-5)",
        equipmentAdequacy: "Utoshelezaji wa vifaa (1-5)",
        selectRating: "Chagua tathmini",
        additionalComments: "Maoni ya ziada",
        sendReport: "Tuma ripoti",
        backToHome: "Rudi nyumbani",
        reportCreated: "Ripoti imeundwa kwa mafanikio",
        yes: "Ndio",
        no: "Hapana",
        unknown: "Sijui"
      }
    }
    return translations[language]?.[key] || translations.en[key] || key
  }
  
  // Convert form data to CSV
  const convertToCSV = (data: ResponderFormData) => {
    // Define CSV headers
    const headers = [
      "Event Number",
      "Location",
      "Accident Type",
      "Equipment Used",
      "Injury And Service",
      "Receiving Facility Name",
      "Receiving Staff Name",
      "Receiving Staff ID",
              "First aid initiated",
      "Caller Used App",
      "Response Time Rating",
      "Service Satisfaction Rating",
      "Equipment Rating",
      "Comments"
    ].join(",");
    
    // Format data values
    const values = [
      data.eventNumber,
      `"${data.location.replace(/"/g, '""')}"`,
      data.accidentType,
      `"${data.equipmentUsed.replace(/"/g, '""')}"`,
      `"${data.injuryAndService.replace(/"/g, '""')}"`,
      `"${data.receivingFacilityName.replace(/"/g, '""')}"`,
      `"${data.receivingStaffName.replace(/"/g, '""')}"`,
      data.receivingStaffId,
      data.firstAidInitiated,
      data.callerUsedApp,
      data.feedback.responseTime,
      data.feedback.serviceSatisfaction,
      data.feedback.equipment,
      `"${data.feedback.comments.replace(/"/g, '""')}"`
    ].join(",");
    
    return `${headers}\n${values}`;
  };
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    if (name.includes(".")) {
      // Handle nested properties (for feedback object)
      const [parent, child] = name.split(".")
      
      if (parent === "feedback") {
        setFormData(prev => ({
          ...prev,
          feedback: {
            ...prev.feedback,
            [child]: value
          }
        }))
      }
    } else {
      // Handle top-level properties
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }
  
  // Handle radio button changes
  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle sending report
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.eventNumber) {
      alert(tString("pleaseEnterEventNumber"))
      return
    }
    
    // Convert form data to CSV
    const csvData = convertToCSV(formData);
    const csvBlob = new Blob([csvData], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);
    
    // Create a hidden download link
    const hiddenElement = document.createElement('a');
    hiddenElement.href = csvUrl;
    hiddenElement.target = '_blank';
    hiddenElement.download = `Emergency_Report_${formData.eventNumber}.csv`;
    
    // Get accident type label for the email
    const accidentTypeLabels: Record<string, string> = {
      "traffic": tString("trafficAccident"),
      "burn": tString("burns"),
      "snakeBite": tString("snakeBite"),
      "drowning": tString("drowning"),
      "other": tString("other")
    };
    const accidentTypeLabel = accidentTypeLabels[formData.accidentType] || tString("notSpecified");
    
    // Create more detailed email content
    const subject = encodeURIComponent(`${tString("emergencyReport")} #${formData.eventNumber} - ${accidentTypeLabel}`);
    const bodyContent = [
      `${tString("emergencyReport")} ${tString("for")} ${tString("event")} #${formData.eventNumber}`,
      "",
      `${tString("accidentType")}: ${accidentTypeLabel}`,
      `${tString("location")}: ${formData.location || tString("notSpecified")}`,
      `${tString("firstAidInitiated")}: ${formData.firstAidInitiated === "yes" ? tString("yes") : tString("no")}`,
      `${tString("equipmentUsed")}: ${formData.equipmentUsed ? formData.equipmentUsed.substring(0, 50) + (formData.equipmentUsed.length > 50 ? "..." : "") : tString("notSpecified")}`,
      "",
      tString("csvAttachmentMessage"),
      "",
      tString("automatedMessage")
    ].join("\n");
    
    const body = encodeURIComponent(bodyContent);
    
    // Placeholder recipient email that will be changed later
    const recipient = "emergency-reports@example.org";
    
    // Open email client with pre-filled data
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Trigger download of CSV file first
    hiddenElement.click();
    
    // Show success message
    setSaveSuccess(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  }
  
  return (
    <div className="max-w-md mx-auto px-4">
      <BackButton />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{getFormText("emergencyReport")}</h1>
            <p className="text-gray-300">{getFormText("completeAfterResponding")}</p>
          </div>
        </div>
      </div>
      
      {saveSuccess && (
        <div className="mb-6 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-4">
          <div className="text-green-200 font-medium">
            {getFormText("reportCreated")} #{formData.eventNumber}
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">{getFormText("basicInformation")}</h2>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="eventNumber" className="block text-sm font-medium text-gray-300">
                {getFormText("eventNumber")} *
              </label>
              <Input
                id="eventNumber"
                name="eventNumber"
                value={formData.eventNumber}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium text-gray-300">
                {tString("location")}
              </label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
              />
            </div>
          
            <div className="space-y-2">
              <label htmlFor="accidentType" className="block text-sm font-medium text-gray-300">
                {getFormText("accidentType")}
              </label>
              <select
                id="accidentType"
                name="accidentType"
                value={formData.accidentType}
                onChange={handleChange}
                className="w-full h-10 rounded-md border bg-white/10 border-white/20 text-white px-3 py-2 text-sm focus:border-white/40"
              >
                <option value="" className="text-gray-800">{getFormText("selectAccidentType")}</option>
                <option value="traffic" className="text-gray-800">{getFormText("trafficAccident")}</option>
                <option value="burn" className="text-gray-800">{getFormText("burns")}</option>
                <option value="snakeBite" className="text-gray-800">{getFormText("snakeBite")}</option>
                <option value="drowning" className="text-gray-800">{getFormText("drowning")}</option>
                <option value="other" className="text-gray-800">{getFormText("other")}</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Equipment and Service */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">{getFormText("equipmentAndService")}</h2>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="equipmentUsed" className="block text-sm font-medium text-gray-300">
                {getFormText("equipmentUsed")}
              </label>
              <textarea
                id="equipmentUsed"
                name="equipmentUsed"
                value={formData.equipmentUsed}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-md border bg-white/10 border-white/20 text-white placeholder:text-gray-400 px-3 py-2 text-sm focus:border-white/40"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="injuryAndService" className="block text-sm font-medium text-gray-300">
                {getFormText("injuryAndServiceDetails")}
              </label>
              <textarea
                id="injuryAndService"
                name="injuryAndService"
                value={formData.injuryAndService}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-md border bg-white/10 border-white/20 text-white placeholder:text-gray-400 px-3 py-2 text-sm focus:border-white/40"
              />
            </div>
            
            <div className="space-y-3">
              <p className="block text-sm font-medium text-gray-300">{getFormText("firstAidInitiated")}</p>
              <div className="flex space-x-4">
                <label className="flex items-center text-white">
                  <input
                    type="radio"
                    name="firstAidInitiated"
                    value="yes"
                    checked={formData.firstAidInitiated === "yes"}
                    onChange={() => handleRadioChange("firstAidInitiated", "yes")}
                    className="mr-2 accent-blue-500"
                  />
                  {getFormText("yes")}
                </label>
                <label className="flex items-center text-white">
                  <input
                    type="radio"
                    name="firstAidInitiated"
                    value="no"
                    checked={formData.firstAidInitiated === "no"}
                    onChange={() => handleRadioChange("firstAidInitiated", "no")}
                    className="mr-2 accent-blue-500"
                  />
                  {getFormText("no")}
                </label>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="block text-sm font-medium text-gray-300">{getFormText("callerUsedApp")}</p>
              <div className="flex space-x-4">
                <label className="flex items-center text-white">
                  <input
                    type="radio"
                    name="callerUsedApp"
                    value="yes"
                    checked={formData.callerUsedApp === "yes"}
                    onChange={() => handleRadioChange("callerUsedApp", "yes")}
                    className="mr-2 accent-blue-500"
                  />
                  {getFormText("yes")}
                </label>
                <label className="flex items-center text-white">
                  <input
                    type="radio"
                    name="callerUsedApp"
                    value="no"
                    checked={formData.callerUsedApp === "no"}
                    onChange={() => handleRadioChange("callerUsedApp", "no")}
                    className="mr-2 accent-blue-500"
                  />
                  {getFormText("no")}
                </label>
                <label className="flex items-center text-white">
                  <input
                    type="radio"
                    name="callerUsedApp"
                    value="unknown"
                    checked={formData.callerUsedApp === "unknown"}
                    onChange={() => handleRadioChange("callerUsedApp", "unknown")}
                    className="mr-2 accent-blue-500"
                  />
                  {getFormText("unknown")}
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Receiving Facility */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Building className="w-4 h-4 text-white" />
            </div>
                        <h2 className="text-lg font-semibold text-white">{getFormText("receivingFacility")}</h2>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="receivingFacilityName" className="block text-sm font-medium text-gray-300">
                {getFormText("facilityName")}
              </label>
              <Input
                id="receivingFacilityName"
                name="receivingFacilityName"
                value={formData.receivingFacilityName}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="receivingStaffName" className="block text-sm font-medium text-gray-300">
                {getFormText("staffName")}
              </label>
              <Input
                id="receivingStaffName"
                name="receivingStaffName"
                value={formData.receivingStaffName}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="receivingStaffId" className="block text-sm font-medium text-gray-300">
                {getFormText("staffId")}
              </label>
              <Input
                id="receivingStaffId"
                name="receivingStaffId"
                value={formData.receivingStaffId}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
              />
            </div>
          </div>
        </div>
        
        {/* Feedback */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">{getFormText("feedback")}</h2>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="responseTime" className="block text-sm font-medium text-gray-300">
                {getFormText("responseTimeRating")}
              </label>
              <select
                id="responseTime"
                name="responseTime"
                value={formData.feedback.responseTime}
                onChange={handleChange}
                className="w-full h-10 rounded-md border bg-white/10 border-white/20 text-white px-3 py-2 text-sm focus:border-white/40"
              >
                <option value="" className="text-gray-800">{getFormText("selectRating")}</option>
                <option value="1" className="text-gray-800">1 - {tString("verySlow")}</option>
                <option value="2" className="text-gray-800">2 - {tString("slow")}</option>
                <option value="3" className="text-gray-800">3 - {tString("average")}</option>
                <option value="4" className="text-gray-800">4 - {tString("fast")}</option>
                <option value="5" className="text-gray-800">5 - {tString("veryFast")}</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="serviceSatisfaction" className="block text-sm font-medium text-gray-300">
                {getFormText("serviceSatisfaction")}
              </label>
              <select
                id="serviceSatisfaction"
                name="serviceSatisfaction"
                value={formData.feedback.serviceSatisfaction}
                onChange={handleChange}
                className="w-full h-10 rounded-md border bg-white/10 border-white/20 text-white px-3 py-2 text-sm focus:border-white/40"
              >
                <option value="" className="text-gray-800">{getFormText("selectRating")}</option>
                <option value="1" className="text-gray-800">1 - {tString("veryDissatisfied")}</option>
                <option value="2" className="text-gray-800">2 - {tString("dissatisfied")}</option>
                <option value="3" className="text-gray-800">3 - {tString("neutral")}</option>
                <option value="4" className="text-gray-800">4 - {tString("satisfied")}</option>
                <option value="5" className="text-gray-800">5 - {tString("verySatisfied")}</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="equipment" className="block text-sm font-medium text-gray-300">
                {getFormText("equipmentAdequacy")}
              </label>
              <select
                id="equipment"
                name="equipment"
                value={formData.feedback.equipment}
                onChange={handleChange}
                className="w-full h-10 rounded-md border bg-white/10 border-white/20 text-white px-3 py-2 text-sm focus:border-white/40"
              >
                <option value="" className="text-gray-800">{getFormText("selectRating")}</option>
                <option value="1" className="text-gray-800">1 - {tString("veryInadequate")}</option>
                <option value="2" className="text-gray-800">2 - {tString("inadequate")}</option>
                <option value="3" className="text-gray-800">3 - {tString("adequate")}</option>
                <option value="4" className="text-gray-800">4 - {tString("good")}</option>
                <option value="5" className="text-gray-800">5 - {tString("excellent")}</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="comments" className="block text-sm font-medium text-gray-300">
                {getFormText("additionalComments")}
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.feedback.comments}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-md border bg-white/10 border-white/20 text-white placeholder:text-gray-400 px-3 py-2 text-sm focus:border-white/40"
              />
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Button 
            type="submit" 
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-lg"
          >
            <Send className="w-4 h-4 mr-2" />
            {getFormText("sendReport")}
          </Button>
          
          <Button
            variant="outline"
            asChild
            className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 font-medium py-3 rounded-xl shadow-lg"
          >
            <Link href="/">
              {getFormText("backToHome")}
            </Link>
          </Button>
        </div>
      </form>
    </div>
  )
} 