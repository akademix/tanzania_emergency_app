"use client"

import { useState, useEffect, useCallback } from "react"
import { Loader2, MapPin, Phone, Building, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function LocationCard() {
  const { tString } = useLanguage()
  const [location, setLocation] = useState({
    address: "",
    latitude: 0,
    longitude: 0,
    loading: false,
    error: null as string | null,
  })
  const [isLocationEnabled, setIsLocationEnabled] = useState(false)

  const getLocation = useCallback(() => {
    if (!isLocationEnabled) return

    setLocation((prev) => ({ ...prev, loading: true, error: null }))

    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        loading: false,
        error: "Geolocation is not supported by your browser",
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

          setLocation({
            address: data.display_name,
            latitude,
            longitude,
            loading: false,
            error: null,
          })
        } catch {
          setLocation((prev) => ({
            ...prev,
            loading: false,
            error: "Failed to get address information",
          }))
        }
      },
      () => {
        setLocation((prev) => ({
          ...prev,
          loading: false,
          error: "Failed to get your location. Please enable location services.",
        }))
      },
    )
  }, [isLocationEnabled])

  useEffect(() => {
    if (isLocationEnabled) {
      getLocation()
    }
  }, [isLocationEnabled, getLocation])

  const toggleLocation = () => {
    setIsLocationEnabled((prev) => !prev)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-blue-500">
            <MapPin className="text-blue-500" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{tString("location")}</h2>
          </div>
        </div>
        <button
          onClick={toggleLocation}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isLocationEnabled
              ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isLocationEnabled ? tString("disable") : tString("enable")}
        </button>
      </div>

      {!isLocationEnabled ? (
        <p className="text-gray-500 text-sm"></p>
      ) : location.error ? (
        <p className="text-red-500 text-sm">{location.error}</p>
      ) : (
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">{tString("address")}</h3>
            {location.loading ? (
              <div className="flex items-center gap-2 text-gray-500">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{tString("fetchingAddress")}</span>
              </div>
            ) : (
              <span className="flex items-center gap-1">
                <MapPin className="text-blue-500" />
                {location.address}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">{tString("coordinates")}</h3>
            {location.loading ? (
              <div className="flex items-center gap-2 text-gray-500">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{tString("fetchingCoordinates")}</span>
              </div>
            ) : (
              <p className="text-sm text-gray-600">
                {location.latitude !== 0 && location.longitude !== 0 ? (
                  <>
                    LAT: {location.latitude.toFixed(6)}
                    <br />
                    LONG: {location.longitude.toFixed(6)}
                  </>
                ) : (
                  tString("waitingLocation")
                )}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

