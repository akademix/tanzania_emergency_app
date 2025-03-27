import { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Training Modules | First Aid App",
  description: "Interactive training modules to learn first aid skills"
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width", 
  initialScale: 1,
  maximumScale: 1,
}

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 