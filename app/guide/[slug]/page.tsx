import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

// Define the expected params type
type GuidePageParams = {
  params: {
    slug: string
  }
}

// Define the guide content type
type GuideContent = {
  title: string
  description: string
  content: React.ReactNode
  image?: string
}

// Map of guide slugs to their content
const guides: Record<string, GuideContent> = {
  'burns': {
    title: 'Burns Treatment',
    description: 'How to treat different types of burns',
    image: '/images/guides/burns.jpg',
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Steps for Treating Burns</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Cool the burn with lukewarm water for at least 20 minutes</li>
          <li>Remove clothing and jewelry from the burned area</li>
          <li>Cover the burn with clean bandage or dressing</li>
          <li>Seek medical help for large or deep burns</li>
        </ol>
      </div>
    )
  },
  'traffic-accident': {
    title: 'Traffic Accident Response',
    description: 'How to respond to a traffic accident',
    image: '/images/guides/traffic-accident.jpg',
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Steps for Traffic Accident Response</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Ensure your own safety first - park safely and turn on hazard lights</li>
          <li>Call emergency services (0800 750 112) immediately</li>
          <li>Do not move injured persons unless they are in immediate danger</li>
          <li>Check for consciousness and breathing of the victims</li>
          <li>Apply pressure to any bleeding wounds using clean cloth</li>
          <li>Keep injured persons warm and calm until help arrives</li>
          <li>Collect information and document the scene if possible</li>
        </ol>
      </div>
    )
  },
  'snake-bite': {
    title: 'Snake Bite Treatment',
    description: 'How to respond to a snake bite',
    image: '/images/guides/snake-bite.jpg',
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Steps for Snake Bite Treatment</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Keep the person calm and still to slow down venom spread</li>
          <li>Call emergency services (0800 750 112) immediately</li>
          <li>Remove any constricting items (jewelry, watches) from affected area</li>
          <li>Keep the bitten area below heart level</li>
          <li>Clean the wound with soap and water if available</li>
          <li>Do NOT apply a tourniquet or try to suck out the venom</li>
          <li>Try to remember or safely photograph the snake for identification</li>
        </ol>
      </div>
    )
  },
  'fire-emergency': {
    title: 'Fire Emergency Response',
    description: 'How to respond to a fire emergency',
    image: '/images/guides/fire-emergency.jpg',
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Steps for Fire Emergency Response</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Alert everyone in the area by shouting &ldquo;Fire!&rdquo;</li>
          <li>Call emergency services (0800 750 112) immediately</li>
          <li>If the fire is small and contained, use a fire extinguisher</li>
          <li>If the fire is large, evacuate immediately</li>
          <li>Stay low to avoid smoke inhalation</li>
          <li>Feel doors before opening - if hot, find another exit</li>
          <li>Once outside, stay outside and wait for emergency services</li>
        </ol>
      </div>
    )
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: GuidePageParams): Promise<Metadata> {
  const guide = guides[params.slug]
  
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

// The page component
export default function GuidePage({ params }: GuidePageParams) {
  const guide = guides[params.slug]
  
  if (!guide) {
    notFound()
  }
  
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Link href="/guide" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Guides
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
      <p className="text-gray-600 mb-6">{guide.description}</p>
      
      {guide.image && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <Image 
            src={guide.image} 
            alt={guide.title}
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      
      <div className="prose max-w-none">
        {guide.content}
      </div>
    </div>
  )
} 