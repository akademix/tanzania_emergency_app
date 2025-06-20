import { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Emergency Guides | First aid app",
  description: "Quick access to essential first aid guides for emergency situations"
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width", 
  initialScale: 1,
  maximumScale: 1,
}

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 