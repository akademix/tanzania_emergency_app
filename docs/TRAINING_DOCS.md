# Training Content Management

This directory contains the content for all training modules in the Tanzania Emergency App. The training system is designed to be easily extensible, allowing developers to add new training modules without modifying the application code.

## How It Works

- Each training module is defined in its own TypeScript file that exports a `TrainingData` object
- The dynamic route `/training/[slug]` loads the appropriate training content based on the URL
- The `TrainingContent` component renders the training with interactive features
- Progress tracking is handled automatically through the `useCompletedSteps` hook

## Adding a New Training Module

Follow these steps to add a new training module:

### 1. Create a new file in `app/data/training/`

Name your file after your training's slug (e.g., `first-aid-basics.ts`). The slug should be:
- All lowercase
- Use hyphens for spaces
- Brief but descriptive

### 2. Define your training content

Use this template:

```typescript
import { TrainingData } from './index';

const training: TrainingData = {
  id: 'your-training-slug', // Must match the filename
  title: 'Your Training Title',
  description: 'Brief description of the training',
  duration: 30, // Duration in minutes
  lessons: [
    {
      title: 'Lesson 1 Title',
      videoId: 'youtube-video-id', // YouTube video ID
      description: 'Description of this lesson'
    },
    {
      title: 'Lesson 2 Title',
      videoId: 'youtube-video-id-2',
      description: 'Description of this lesson'
    },
    // Add more lessons as needed
  ]
};

export default training;
```

### 3. Update the training list

In `app/data/training/index.ts`, add your new training's ID to the `trainingIds` array:

```typescript
const trainingIds = [
  'basic-first-aid', 
  'cpr', 
  'wound-treatment',
  'your-training-slug' // Add your new training here
];
```

## Training Data Structure

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier for the training, must match filename |
| `title` | string | Display title for the training |
| `description` | string | Brief description shown in list and metadata |
| `duration` | number | Estimated duration in minutes |
| `lessons` | Lesson[] | Array of lesson objects |

### Lesson Structure

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Title of the lesson |
| `videoId` | string | YouTube video ID or placeholder identifier |
| `description` | string? | Optional description of the lesson content |

## Best Practices

1. **Keep lessons focused**: Each lesson should cover a specific topic or technique
   
2. **Use high-quality videos**: Ensure videos are clear and professionally produced
   
3. **Consider translations**: If the app is multilingual, ensure content can be easily translated
   
4. **Balance lesson length**: Aim for 4-7 lessons per training module
   
5. **Test your training**: After adding a new training, test all features:
   - Progress tracking
   - Video playback
   - Returning user experience

## Examples

Refer to existing trainings like `basic-first-aid.ts`, `cpr.ts`, or `wound-treatment.ts` for examples of properly formatted training modules. 