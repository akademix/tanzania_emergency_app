"use client"

import React from 'react'

interface ClientButtonProps {
  onClick: () => void
  className?: string
  children: React.ReactNode
}

export function ClientButton({ onClick, className, children }: ClientButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
} 