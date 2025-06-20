import { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, Wifi } from 'lucide-react'

// Combine all metadata into a single metadata export
export const metadata: Metadata = {
  title: 'Offline | First aid',
  description: 'You are currently offline',
  // Include theme color in the metadata
  themeColor: '#1e293b',
}

export default function OfflinePage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center">
            <AlertTriangle size={40} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-white">You&apos;re Offline</h1>
        <p className="text-gray-300 mb-8">
          You appear to be offline. Some features may be limited until you reconnect.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Wifi className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Offline Features Available</span>
            </div>
            <p className="text-gray-300 text-sm text-left">
              Essential first aid information and guides have been saved for offline use.
            </p>
          </div>
          
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
} 