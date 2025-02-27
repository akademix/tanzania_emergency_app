"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Home } from "lucide-react"

export default function NotFound() {
  const { tString } = useLanguage()

  return (
    <div className="container max-w-md mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-8">
        <div className="bg-red-100 p-6 rounded-full">
          <span className="text-red-500 text-6xl">404</span>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">{tString("pageNotFound")}</h1>
      <p className="text-gray-600 mb-8">
        {tString("pageNotFoundDescription")}
      </p>
      
      <Link 
        href="/" 
        className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md"
      >
        <Home className="mr-2 h-5 w-5" />
        {tString("back")}
      </Link>
    </div>
  )
} 