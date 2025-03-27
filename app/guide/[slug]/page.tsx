// @ts-nocheck
import { notFound } from 'next/navigation'
import { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { getGuideById } from '@/app/data/guides'
import { GuideContent } from '@/app/components/GuideContent'
import { BackButton } from '@/components/back-button'

// Generate metadata for the page
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  // Next.js 15.2.0+ requires params to be awaited
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const guide = await getGuideById(slug);
  
  if (!guide) {
    return {
      title: 'Guide Not Found'
    }
  }
  
  return {
    title: `${guide.title} | First Aid Guide`,
    description: guide.description
  }
}

// Define viewport export for Next.js 15.2.0+ compatibility
export const viewport: Viewport = {
  themeColor: '#4F46E5',
}

// The page component
export default async function GuidePage(
  { params }: { params: { slug: string } }
) {
  // Next.js 15.2.0+ requires params to be awaited
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const guide = await getGuideById(slug);
  
  if (!guide) {
    notFound();
  }
  
  return (
    <div className="max-w-2xl mx-auto px-4">
      <BackButton />
      <GuideContent guide={guide} />
    </div>
  )
} 