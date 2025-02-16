export const metadata = {
  title: 'Training Modules',
  description: 'Access our comprehensive training modules for first aid, CPR, and wound treatment.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#10B981', // Green color to match your theme
}

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}