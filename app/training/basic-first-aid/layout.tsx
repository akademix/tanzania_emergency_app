export const metadata = {
  title: 'Basic First Aid Training',
  description: 'Learn essential first aid skills through our comprehensive video lessons.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#10B981', // Green color to match your theme
}

export default function BasicFirstAidLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}