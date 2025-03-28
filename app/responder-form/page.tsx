"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { useLocalStorage } from "@/lib/useLocalStorage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Save, AlertCircle, ListFilter } from "lucide-react"
import Link from "next/link"

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
  const { tString } = useLanguage()
  
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
  const [savedReports, setSavedReports] = useState<string[]>([])
  const [saveSuccess, setSaveSuccess] = useState(false)
  
  // Load saved reports from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const reports: string[] = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith("responderReport_")) {
          reports.push(key.replace("responderReport_", ""))
        }
      }
      setSavedReports(reports)
    }
  }, [saveSuccess])
  
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
  
  // Save form data to localStorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.eventNumber) {
      alert("Please enter an Event Number")
      return
    }
    
    const key = `responderReport_${formData.eventNumber}`
    localStorage.setItem(key, JSON.stringify(formData))
    setSaveSuccess(true)
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
  }
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Emergency Responder Form</h1>
          <p className="text-gray-600">Complete this form after responding to an emergency call</p>
        </div>
        
        <Link href="/saved-reports">
          <Button variant="outline" className="flex items-center gap-2">
            <ListFilter className="w-4 h-4" />
            View Reports
            {savedReports.length > 0 && (
              <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {savedReports.length}
              </span>
            )}
          </Button>
        </Link>
      </div>
      
      {saveSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-100 rounded-lg text-green-700">
          Report saved successfully for Event #{formData.eventNumber}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4 p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold border-b pb-2">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="eventNumber" className="block text-sm font-medium">
                Event Number (ID Namba ya tukio) *
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
                Location (Eneo la tukio)
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
              Type of Accident (Aina ya Ajali)
            </label>
            <select
              id="accidentType"
              name="accidentType"
              value={formData.accidentType}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select accident type</option>
              <option value="traffic">Traffic Accident (Ajali ya Barabarani)</option>
              <option value="burn">Burns (Kuungua)</option>
              <option value="snakeBite">Snake Bite (Kuumwa na Nyoka)</option>
              <option value="drowning">Drowning (Kuzama)</option>
              <option value="other">Other (Nyingine)</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-4 p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold border-b pb-2">Equipment & Service</h2>
          
          <div className="space-y-2">
            <label htmlFor="equipmentUsed" className="block text-sm font-medium">
              Equipment Used (Aina ya Vifaa na Idadi)
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
              Injury & Service Provided (Jeraha & Huduma)
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
            <p className="block text-sm font-medium">First aid initiated?</p>
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
                Yes
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
                No
              </label>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="block text-sm font-medium">Caller used app?</p>
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
                Yes
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
                No
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
                Unknown
              </label>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold border-b pb-2">Receiving Facility</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="receivingFacilityName" className="block text-sm font-medium">
                Receiving Facility Name (Jina la kituo cha afya)
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
                Receiving Staff Name (Aliyempokea majeruhi)
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
              Staff ID (Namba ya mtoa huduma ya afya)
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
          <h2 className="text-lg font-semibold border-b pb-2">Feedback</h2>
          
          <div className="space-y-2">
            <label htmlFor="feedback.responseTime" className="block text-sm font-medium">
              Response Time Rating (1-5)
            </label>
            <select
              id="feedback.responseTime"
              name="feedback.responseTime"
              value={formData.feedback.responseTime}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select rating</option>
              <option value="1">1 - Very Slow</option>
              <option value="2">2 - Slow</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Fast</option>
              <option value="5">5 - Very Fast</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="feedback.serviceSatisfaction" className="block text-sm font-medium">
              Service Satisfaction Rating (1-5)
            </label>
            <select
              id="feedback.serviceSatisfaction"
              name="feedback.serviceSatisfaction"
              value={formData.feedback.serviceSatisfaction}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select rating</option>
              <option value="1">1 - Very Dissatisfied</option>
              <option value="2">2 - Dissatisfied</option>
              <option value="3">3 - Neutral</option>
              <option value="4">4 - Satisfied</option>
              <option value="5">5 - Very Satisfied</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="feedback.equipment" className="block text-sm font-medium">
              Equipment Adequacy Rating (1-5)
            </label>
            <select
              id="feedback.equipment"
              name="feedback.equipment"
              value={formData.feedback.equipment}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select rating</option>
              <option value="1">1 - Very Inadequate</option>
              <option value="2">2 - Inadequate</option>
              <option value="3">3 - Adequate</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="feedback.comments" className="block text-sm font-medium">
              Additional Comments
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
            <Save className="w-4 h-4" />
            Save Report
          </Button>
          
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </form>
    </div>
  )
} 