// @ts-nocheck
import { notFound } from 'next/navigation'
import { Metadata, Viewport } from 'next'
import { getGuideById } from '@/app/data/guides'
import { GuideContent } from '@/app/components/GuideContent'
import { BackButton } from '@/components/back-button'

// Generate metadata for the page
export async function generateMetadata(
  { params }
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
  
  // Defensively get English strings for metadata
  const titleString = guide.title && typeof guide.title === 'object' && guide.title.en 
    ? guide.title.en 
    : 'First aid guide'; // Fallback title
  const descriptionString = guide.description && typeof guide.description === 'object' && guide.description.en
    ? guide.description.en
    : 'Emergency first aid information'; // Fallback description
  
  return {
    title: `${titleString} | First aid`,
    description: descriptionString
  }
}

// Define viewport export for Next.js 15.2.0+ compatibility
export const viewport: Viewport = {
  themeColor: '#1e293b',
}

// The page component
export default async function GuidePage(
  { params }
) {
  // Next.js 15.2.0+ requires params to be awaited
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const guide = await getGuideById(slug);
  
  if (!guide) {
    notFound();
  }
  
  return (
    <div className="max-w-md mx-auto px-4">
      <BackButton />
      <GuideContent guide={guide} />
    </div>
  )
} 