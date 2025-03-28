"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Clipboard, Trash } from "lucide-react"
import Link from "next/link"

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

export default function SavedReports() {
  const { tString } = useLanguage()
  const [savedReports, setSavedReports] = useState<{key: string, data: ResponderFormData}[]>([])
  const [deleteSuccess, setDeleteSuccess] = useState(false)
  
  // Load saved reports from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const reports: {key: string, data: ResponderFormData}[] = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith("responderReport_")) {
          try {
            const data = JSON.parse(localStorage.getItem(key) || "{}") as ResponderFormData
            reports.push({ key, data })
          } catch (error) {
            console.error("Error parsing report data:", error)
          }
        }
      }
      setSavedReports(reports)
    }
  }, [deleteSuccess])
  
  // Delete a report
  const handleDelete = (key: string) => {
    if (confirm("Are you sure you want to delete this report?")) {
      localStorage.removeItem(key)
      setDeleteSuccess(!deleteSuccess) // Toggle to trigger useEffect
    }
  }
  
  // Format accident type for display
  const getAccidentTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      "traffic": "Traffic Accident",
      "burn": "Burns",
      "snakeBite": "Snake Bite",
      "drowning": "Drowning",
      "other": "Other"
    }
    return types[type] || type
  }
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Saved Emergency Reports</h1>
        <p className="text-gray-600">View and manage saved responder reports</p>
      </div>
      
      <div className="mb-6">
        <Link href="/responder-form">
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Form
          </Button>
        </Link>
      </div>
      
      {savedReports.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-lg border">
          <p className="text-gray-500 mb-4">No saved reports found</p>
          <Link href="/responder-form">
            <Button>Create New Report</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {savedReports.map(({ key, data }) => (
            <div key={key} className="bg-white rounded-lg border overflow-hidden">
              <div className="p-4 bg-blue-50 border-b flex justify-between items-center">
                <h2 className="font-semibold">
                  Event #{data.eventNumber}
                </h2>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8"
                    onClick={() => handleDelete(key)}
                  >
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p>{data.location || "Not specified"}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Accident Type</p>
                    <p>{getAccidentTypeLabel(data.accidentType) || "Not specified"}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">First Aid Initiated</p>
                    <p>{data.firstAidInitiated === "yes" ? "Yes" : "No"}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Caller Used App</p>
                    <p>{data.callerUsedApp === "unknown" ? "Unknown" : data.callerUsedApp === "yes" ? "Yes" : "No"}</p>
                  </div>
                </div>
                
                {data.equipmentUsed && (
                  <div>
                    <p className="text-sm text-gray-500">Equipment Used</p>
                    <p className="whitespace-pre-wrap">{data.equipmentUsed}</p>
                  </div>
                )}
                
                {data.injuryAndService && (
                  <div>
                    <p className="text-sm text-gray-500">Injury & Service</p>
                    <p className="whitespace-pre-wrap">{data.injuryAndService}</p>
                  </div>
                )}
                
                {data.receivingFacilityName && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    <div>
                      <p className="text-sm text-gray-500">Receiving Facility</p>
                      <p>{data.receivingFacilityName}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Receiving Staff</p>
                      <p>{data.receivingStaffName || "Not specified"} {data.receivingStaffId ? `(ID: ${data.receivingStaffId})` : ""}</p>
                    </div>
                  </div>
                )}
                
                {(data.feedback.responseTime || data.feedback.serviceSatisfaction || data.feedback.equipment || data.feedback.comments) && (
                  <div>
                    <h3 className="font-medium text-gray-700 mt-4 mb-2">Feedback</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
                      {data.feedback.responseTime && (
                        <div>
                          <p className="text-sm text-gray-500">Response Time</p>
                          <p>{data.feedback.responseTime}/5</p>
                        </div>
                      )}
                      
                      {data.feedback.serviceSatisfaction && (
                        <div>
                          <p className="text-sm text-gray-500">Service Satisfaction</p>
                          <p>{data.feedback.serviceSatisfaction}/5</p>
                        </div>
                      )}
                      
                      {data.feedback.equipment && (
                        <div>
                          <p className="text-sm text-gray-500">Equipment Adequacy</p>
                          <p>{data.feedback.equipment}/5</p>
                        </div>
                      )}
                    </div>
                    
                    {data.feedback.comments && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Comments</p>
                        <p className="whitespace-pre-wrap">{data.feedback.comments}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 