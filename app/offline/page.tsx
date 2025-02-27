import { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

// Combine all metadata into a single metadata export
export const metadata: Metadata = {
  title: 'Offline | First Aid App',
  description: 'You are currently offline',
  // Include theme color in the metadata
  themeColor: '#3b82f6',
}

export default function OfflinePage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-6">
        <AlertTriangle size={64} className="text-yellow-500" />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">You&apos;re Offline</h1>
      <p className="text-gray-600 mb-8">
        You appear to be offline. Some features may be limited until you reconnect.
      </p>
      
      <div className="space-y-4">
        <p className="text-sm text-gray-500">
          The First Aid App has saved essential information for offline use.
        </p>
        
        <Link 
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
} 