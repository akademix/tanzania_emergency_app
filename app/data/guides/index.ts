/**
 * Guide Content Management System
 * 
 * This file defines the data structure and loading functions for emergency guides.
 * See /docs/GUIDE_DOCS.md for detailed instructions on adding new guides.
 */

// Types for guide data
export interface GuideData {
  id: string;         // Unique identifier, should match filename
  title: { en: string; sw: string };      // Display title of the guide
  description: { en: string; sw: string }; // Brief description shown in list and metadata
  image?: string;     // URL to guide image (can be placeholder)
  audioEnPath?: string; // Path to English audio for the title
  audioSwPath?: string; // Path to Swahili audio for the title
  descriptionAudioEnPath?: string; // Path to English audio for the description
  descriptionAudioSwPath?: string; // Path to Swahili audio for the description
  steps: GuideStep[];    // Array of step instructions for the interactive checklist
  dangerWarnings?: DangerWarning[]; // Things NOT to do (displayed in red)
  criticalSigns?: CriticalSign[]; // Important signs or notes (displayed in blue)
  additionalInfo?: AdditionalInfo; // Any additional helpful information (displayed in green)
}

// Step interface with optional video
export interface GuideStep {
  instruction: { en: string; sw: string };   // The step instruction text
  videoId?: string;      // Optional video ID that demonstrates this step
  audioEnPath?: string; // Optional path to the English audio file
  audioSwPath?: string; // Optional path to the Swahili audio file
}

// Danger warning interface with audio
export interface DangerWarning {
  en: string;
  sw: string;
  audioEnPath?: string;
  audioSwPath?: string;
}

// Critical sign interface with audio
export interface CriticalSign {
  en: string;
  sw: string;
  audioEnPath?: string;
  audioSwPath?: string;
}

// Additional info interface with audio
export interface AdditionalInfo {
  en: string;
  sw: string;
  audioEnPath?: string;
  audioSwPath?: string;
}

// Function to fetch all guides
export async function getAllGuides(): Promise<GuideData[]> {
  // MANUAL: List of guide IDs - ADD NEW GUIDES HERE
  // This approach is used because auto-discovery methods like require.context or import.meta.glob
  // aren't fully compatible with the current Next.js configuration.
  // When adding a new guide module:
  // 1. Create a new TypeScript file in this directory (e.g., new-guide.ts)
  // 2. Add the ID (filename without extension) to this array
  const guideIds = ['burns', 'traffic-accident', 'snake-bite'];
  
  try {
    // Dynamically import all guides by ID
    const guides = await Promise.all(
      guideIds.map(async (id) => {
        // Skip files starting with underscore
        if (id.startsWith('_')) return null;
        
        try {
          const guideModule = await import(`./${id}`);
          return guideModule.default;
        } catch (error) {
          console.error(`Failed to load guide ${id}:`, error);
          return null;
        }
      })
    );
    
    // Filter out any null guides (failed imports)
    return guides.filter(Boolean) as GuideData[];
  } catch (error) {
    console.error('Failed to load guides:', error);
    return [];
  }
}

// Function to fetch a guide by ID
export async function getGuideById(id: string): Promise<GuideData | undefined> {
  // Prevent importing non-guide files
  if (!id || 
      id.startsWith('_') || 
      id === 'index' || 
      id.includes('.')) { // Any file with an extension is not a valid guide ID
    return undefined;
  }
  
  try {
    const guideModule = await import(`./${id}`);
    return guideModule.default;
  } catch (error) {
    console.error(`Guide with ID ${id} not found:`, error);
    return undefined;
  }
} 