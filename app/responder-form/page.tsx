"use client"

import { useState } from "react"
// import { useRouter } from "next/navigation" // Removed useRouter
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context" // Uncommented useLanguage

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
  const { tString } = useLanguage() // Uncommented tString
  
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
      "First Aid Initiated",
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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">{tString("emergencyResponderForm")}</h1>
          <p className="text-gray-600">{tString("completeAfterResponding")}</p>
        </div>
      </div>
      
      {saveSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-100 rounded-lg text-green-700">
          {tString("reportCreatedSuccessfully")} #{formData.eventNumber}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4 p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold border-b pb-2">{tString("basicInformation")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="eventNumber" className="block text-sm font-medium">
                {tString("eventNumber")} *
              </label>
              <Input
                id="eventNumber"
                name="eventNumber"
                value={formData.eventNumber}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium">
                {tString("location")}
              </label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="accidentType" className="block text-sm font-medium">
              {tString("accidentType")}
            </label>
            <select
              id="accidentType"
              name="accidentType"
              value={formData.accidentType}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">{tString("selectAccidentType")}</option>
              <option value="traffic">{tString("trafficAccident")}</option>
              <option value="burn">{tString("burns")}</option>
              <option value="snakeBite">{tString("snakeBite")}</option>
              <option value="drowning">{tString("drowning")}</option>
              <option value="other">{tString("other")}</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-4 p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold border-b pb-2">{tString("equipmentAndService")}</h2>
          
          <div className="space-y-2">
            <label htmlFor="equipmentUsed" className="block text-sm font-medium">
              {tString("equipmentUsed")}
            </label>
            <textarea
              id="equipmentUsed"
              name="equipmentUsed"
              value={formData.equipmentUsed}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="injuryAndService" className="block text-sm font-medium">
              {tString("injuryAndService")}
            </label>
            <textarea
              id="injuryAndService"
              name="injuryAndService"
              value={formData.injuryAndService}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          
          <div className="space-y-2">
            <p className="block text-sm font-medium">{tString("firstAidInitiated")}?</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="firstAidInitiated"
                  value="yes"
                  checked={formData.firstAidInitiated === "yes"}
                  onChange={() => handleRadioChange("firstAidInitiated", "yes")}
                  className="mr-2"
                />
                {tString("yes")}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="firstAidInitiated"
                  value="no"
                  checked={formData.firstAidInitiated === "no"}
                  onChange={() => handleRadioChange("firstAidInitiated", "no")}
                  className="mr-2"
                />
                {tString("no")}
              </label>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="block text-sm font-medium">{tString("callerUsedApp")}?</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="callerUsedApp"
                  value="yes"
                  checked={formData.callerUsedApp === "yes"}
                  onChange={() => handleRadioChange("callerUsedApp", "yes")}
                  className="mr-2"
                />
                {tString("yes")}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="callerUsedApp"
                  value="no"
                  checked={formData.callerUsedApp === "no"}
                  onChange={() => handleRadioChange("callerUsedApp", "no")}
                  className="mr-2"
                />
                {tString("no")}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="callerUsedApp"
                  value="unknown"
                  checked={formData.callerUsedApp === "unknown"}
                  onChange={() => handleRadioChange("callerUsedApp", "unknown")}
                  className="mr-2"
                />
                {tString("unknown")}
              </label>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold border-b pb-2">{tString("receivingFacility")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="receivingFacilityName" className="block text-sm font-medium">
                {tString("receivingFacilityName")}
              </label>
              <Input
                id="receivingFacilityName"
                name="receivingFacilityName"
                value={formData.receivingFacilityName}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="receivingStaffName" className="block text-sm font-medium">
                {tString("receivingStaffName")}
              </label>
              <Input
                id="receivingStaffName"
                name="receivingStaffName"
                value={formData.receivingStaffName}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="receivingStaffId" className="block text-sm font-medium">
              {tString("staffId")}
            </label>
            <Input
              id="receivingStaffId"
              name="receivingStaffId"
              value={formData.receivingStaffId}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="space-y-4 p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold border-b pb-2">{tString("feedback")}</h2>
          
          <div className="space-y-2">
            <label htmlFor="feedback.responseTime" className="block text-sm font-medium">
              {tString("responseTimeRating")} (1-5)
            </label>
            <select
              id="feedback.responseTime"
              name="feedback.responseTime"
              value={formData.feedback.responseTime}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">{tString("selectRating")}</option>
              <option value="1">1 - {tString("verySlow")}</option>
              <option value="2">2 - {tString("slow")}</option>
              <option value="3">3 - {tString("average")}</option>
              <option value="4">4 - {tString("fast")}</option>
              <option value="5">5 - {tString("veryFast")}</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="feedback.serviceSatisfaction" className="block text-sm font-medium">
              {tString("serviceSatisfactionRating")} (1-5)
            </label>
            <select
              id="feedback.serviceSatisfaction"
              name="feedback.serviceSatisfaction"
              value={formData.feedback.serviceSatisfaction}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">{tString("selectRating")}</option>
              <option value="1">1 - {tString("veryDissatisfied")}</option>
              <option value="2">2 - {tString("dissatisfied")}</option>
              <option value="3">3 - {tString("neutral")}</option>
              <option value="4">4 - {tString("satisfied")}</option>
              <option value="5">5 - {tString("verySatisfied")}</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="feedback.equipment" className="block text-sm font-medium">
              {tString("equipmentAdequacyRating")} (1-5)
            </label>
            <select
              id="feedback.equipment"
              name="feedback.equipment"
              value={formData.feedback.equipment}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">{tString("selectRating")}</option>
              <option value="1">1 - {tString("veryInadequate")}</option>
              <option value="2">2 - {tString("inadequate")}</option>
              <option value="3">3 - {tString("adequate")}</option>
              <option value="4">4 - {tString("good")}</option>
              <option value="5">5 - {tString("excellent")}</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="feedback.comments" className="block text-sm font-medium">
              {tString("additionalComments")}
            </label>
            <textarea
              id="feedback.comments"
              name="feedback.comments"
              value={formData.feedback.comments}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button type="submit" className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            {tString("sendReport")}
          </Button>
          
          <Link href="/">
            <Button variant="outline">{tString("backToHome")}</Button>
          </Link>
        </div>
      </form>
    </div>
  )
} 