"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { tString } = useLanguage()
  
  return (
    <footer className="border-t border-white/20 bg-slate-900/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Tanzania Emergency First aid app</p>
          <p className="mt-1">
            Developed by{" "}
            <a 
              href="https://akademix.no" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              AkademiX
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
} 