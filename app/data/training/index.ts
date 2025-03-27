/**
 * Training Content Management System
 * 
 * This file defines the data structure and loading functions for training modules.
 * Similar to the guide system, this provides a centralized way to manage training content.
 * See /docs/TRAINING_DOCS.md for detailed instructions on adding new training modules.
 */

// Types for training data
export interface Lesson {
  title: string;       // Title of the lesson
  videoId: string;     // YouTube video ID or placeholder
  description?: string; // Optional description of the lesson content
}

export interface TrainingData {
  id: string;          // Unique identifier, should match filename
  title: string;       // Display title of the training
  description: string; // Brief description shown in list and metadata
  duration: number;    // Duration in minutes
  lessons: Lesson[];   // Array of lesson objects
}

// Function to fetch all training modules
export async function getAllTrainings(): Promise<TrainingData[]> {
  // MANUAL: List of training IDs - ADD NEW TRAINING MODULES HERE
  // This approach is used because auto-discovery methods like require.context or import.meta.glob
  // aren't fully compatible with the current Next.js configuration.
  // When adding a new training module:
  // 1. Create a new TypeScript file in this directory (e.g., new-training.ts)
  // 2. Add the ID (filename without extension) to this array
  const trainingIds = ['basic-first-aid', 'cpr', 'wound-treatment', 'burn-treatment'];
  
  try {
    // Dynamically import all training modules by ID
    const trainings = await Promise.all(
      trainingIds.map(async (id) => {
        // Skip files starting with underscore
        if (id.startsWith('_')) return null;
        
        try {
          const module = await import(`./${id}`);
          return module.default;
        } catch (error) {
          console.error(`Failed to load training ${id}:`, error);
          return null;
        }
      })
    );
    
    // Filter out any null trainings (failed imports)
    return trainings.filter(Boolean) as TrainingData[];
  } catch (error) {
    console.error('Failed to load trainings:', error);
    return [];
  }
}

// Function to fetch a training by ID
export async function getTrainingById(id: string): Promise<TrainingData | undefined> {
  // Prevent importing non-training files
  if (!id || 
      id.startsWith('_') || 
      id === 'index' || 
      id.includes('.')) { // Any file with an extension is not a valid training ID
    return undefined;
  }
  
  try {
    const training = await import(`./${id}`);
    return training.default;
  } catch (error) {
    console.error(`Training with ID ${id} not found:`, error);
    return undefined;
  }
} 