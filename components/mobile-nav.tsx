"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Book, Phone, MoreHorizontal } from 'lucide-react'

export function MobileNav() {
  const pathname = usePathname()
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex items-center justify-around z-50">
      <Link href="/" className={`flex flex-col items-center ${pathname === '/' ? 'text-red-500' : 'text-gray-500'}`}>
        <Home size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      
      <Link href="/guide" className={`flex flex-col items-center ${pathname?.startsWith('/guide') ? 'text-red-500' : 'text-gray-500'}`}>
        <Book size={24} />
        <span className="text-xs mt-1">Guide</span>
      </Link>
      
      <Link href="/emergency" className={`flex flex-col items-center ${pathname?.startsWith('/emergency') ? 'text-red-500' : 'text-gray-500'}`}>
        <Phone size={24} />
        <span className="text-xs mt-1">Emergency</span>
      </Link>
      
      <Link href="/more" className={`flex flex-col items-center ${pathname?.startsWith('/more') ? 'text-red-500' : 'text-gray-500'}`}>
        <MoreHorizontal size={24} />
        <span className="text-xs mt-1">More</span>
      </Link>
    </div>
  )
} 