"use client"

import Link from "next/link"
import { ArrowRight, Phone, Book, FileText, Navigation, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

export default function Home() {
  const { tString } = useLanguage()
  const [location, setLocation] = useState<{
    address: string;
    latitude: number;
    longitude: number;
    loading: boolean;
    error: string | null;
    enabled: boolean;
  }>({
    address: "",
    latitude: 0,
    longitude: 0,
    loading: false,
    error: null,
    enabled: false
  })

  const handleLocationToggle = () => {
    if (location.enabled) {
      // Disable location
      setLocation(prev => ({ ...prev, enabled: false, address: "", latitude: 0, longitude: 0, error: null }))
    } else {
      // Enable location
      setLocation(prev => ({ ...prev, enabled: true, loading: true, error: null }))
      
      if (!navigator.geolocation) {
        setLocation(prev => ({
          ...prev,
          loading: false,
          enabled: false,
          error: "Geolocation is not supported by your browser"
        }))
        return
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            )
            const data = await response.json()

            setLocation(prev => ({
              ...prev,
              address: data.display_name,
              latitude,
              longitude,
              loading: false,
              error: null,
            }))
          } catch {
            setLocation(prev => ({
              ...prev,
              loading: false,
              error: "Failed to get address information",
            }))
          }
        },
        (error) => {
          let errorMessage = "Failed to get your location. Please try again."
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location permission denied."
              break
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable."
              break
            case error.TIMEOUT:
              errorMessage = "The request to get user location timed out."
              break
          }
          setLocation(prev => ({
            ...prev,
            loading: false,
            enabled: false,
            error: errorMessage,
          }))
        },
      )
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 space-y-6">
      {/* Emergency Call Section */}
      <a
        href="tel:0800750112"
        className="block bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-[1.02] group pulse-emergency touch-target tap-highlight-none"
        onClick={() => {
          if (navigator.vibrate) navigator.vibrate([200, 100, 200])
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-200">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-2xl font-bold">{tString("emergency")}</h2>
              <div className="text-white text-xl font-bold tracking-wider mt-2">0800 750 112</div>
            </div>
          </div>
        </div>
      </a>

      {/* Emergency Guides Section */}
      <Link
        href="/guide"
        className="block bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-[1.02] touch-target tap-highlight-none"
        onClick={() => {
          if (navigator.vibrate) navigator.vibrate(50)
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Book className="w-8 h-8 text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-2xl font-bold">{tString("guide")}</h2>
              <p className="text-indigo-100 text-sm mt-1">{tString("quickReference")}</p>
            </div>
          </div>
          <ArrowRight className="w-6 h-6 text-white" />
        </div>
      </Link>

      {/* Emergency Services Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-white mb-4">
          <Users className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold">{tString("emergencyServices")}</h3>
        </div>

        {/* Responder Form */}
        <Link
          href="/responder-form"
          className="block bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-200 touch-target tap-highlight-none"
          onClick={() => {
            if (navigator.vibrate) navigator.vibrate(30)
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">{tString("responderForm")}</h3>
                <p className="text-gray-300 text-sm">{tString("submitEmergencyReports")}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        {/* My Location */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <h3 className="text-lg font-semibold">{tString("location")}</h3>
                <p className="text-gray-300 text-sm">{tString("getAddressAndCoordinates")}</p>
              </div>
            </div>
            <button 
              onClick={handleLocationToggle}
              disabled={location.loading}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                location.enabled
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              } ${location.loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {location.loading ? "..." : location.enabled ? tString("disable") : tString("enable")}
            </button>
          </div>

          {location.enabled && (
            <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              {location.error ? (
                <p className="text-red-300 text-sm">{location.error}</p>
              ) : location.address ? (
                <div className="space-y-2">
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{tString("address")}</h4>
                    <p className="text-gray-300 text-sm">{location.address}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{tString("coordinates")}</h4>
                    <p className="text-gray-300 text-sm">
                      LAT: {location.latitude.toFixed(6)}<br />
                      LONG: {location.longitude.toFixed(6)}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-300 text-sm">{tString("fetchingAddress")}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

