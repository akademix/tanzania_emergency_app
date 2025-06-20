"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { tString } = useLanguage()
  
  return (
    <footer className="border-t bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">{tString("firstAidApp")}</h3>
            <p className="text-gray-600 text-sm">
              {tString("appDescription")}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{tString("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm">
                  {tString("home")}
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-600 hover:text-blue-600 text-sm">
                  {tString("resources")}
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-gray-600 hover:text-blue-600 text-sm">
                  {tString("guide")}
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-gray-600 hover:text-blue-600 text-sm">
                  {tString("settings")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{tString("emergency")}</h3>
            <p className="text-gray-600 text-sm mb-2">
              {tString("emergencyServices")}:
            </p>
            <a 
              href="tel:0800750112" 
              className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-lg font-medium text-sm hover:bg-red-200 transition-colors"
            >
              0800750112
            </a>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Tanzania Emergency First aid app</p>
        </div>
      </div>
    </footer>
  )
} 