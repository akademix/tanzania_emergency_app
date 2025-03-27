# Guide Content Management

This directory contains the content for all emergency guides in the Tanzania Emergency App. The guide system is designed to be easily extensible, allowing developers to add new guides without modifying the application code.

## How It Works

- Each guide is defined in its own TypeScript file that exports a `GuideData` object
- The dynamic route `/guide/[slug]` loads the appropriate guide based on the URL
- The `GuideContent` component renders the guide with interactive features
- Progress tracking is handled automatically through the `useCompletedSteps` hook

## Adding a New Guide

Follow these steps to add a new emergency guide:

### 1. Create a new file in `app/data/guides/`

Name your file after your guide's slug (e.g., `heart-attack.ts`). The slug should be:
- All lowercase
- Use hyphens for spaces
- Brief but descriptive

### 2. Define your guide content

Use this template:

```typescript
import { GuideData } from './index';

const guide: GuideData = {
  id: 'your-guide-slug', // Must match the filename
  title: 'Your Guide Title',
  description: 'Brief description of the guide',
  image: 'https://placehold.co/800x400/YOUR_HEX_COLOR/FFFFFF?text=Your+Guide+Title',
  steps: [
    'Step 1 instruction text',
    'Step 2 instruction text',
    'Step 3 instruction text',
    // Add more steps as needed
  ],
  dangerWarnings: [
    'Warning 1',
    'Warning 2',
    // Add more warnings as needed
  ],
  criticalSigns: [
    'Critical sign 1',
    'Critical sign 2',
    // Add more critical signs as needed
  ],
  additionalInfo: 'Any additional information that may be helpful'
};

export default guide;
```

### 3. Update the guide list

In `app/data/guides/index.ts`, add your new guide's ID to the `guideIds` array:

```typescript
const guideIds = [
  'burns', 
  'traffic-accident', 
  'snake-bite', 
  'fire-emergency',
  'your-guide-slug' // Add your new guide here
];
```

### 4. Add an icon (optional)

In `app/guide/page.tsx`, add an icon mapping for your guide in the `guideIcons` object:

```typescript
const guideIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  // Existing guides...
  "your-guide-slug": { icon: <YourIcon className="w-8 h-8" />, color: "text-purple-500" },
};
```

You can import icons from `lucide-react` or any other icon library.

## Guide Data Structure

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier for the guide, must match filename |
| `title` | string | Display title for the guide |
| `description` | string | Brief description shown in list and metadata |
| `image` | string | URL for the guide image (can be placeholder) |
| `steps` | string[] | Array of step instructions |
| `dangerWarnings` | string[] | Array of warnings about what NOT to do |
| `criticalSigns` | string[] | Array of critical signs or important notes |
| `additionalInfo` | string | Additional helpful information |

## Best Practices

1. **Keep steps clear and concise**: Each step should be a single instruction or a small group of related instructions
   
2. **Use consistent formatting**: Start with action verbs, use consistent punctuation
   
3. **Consider translations**: If the app is multilingual, ensure content can be easily translated
   
4. **Use appropriate HTML**: You can include basic formatting in strings like:
   ```
   "Check for: <br />- Breathing<br />- Pulse<br />- Response"
   ```
   
5. **Test your guide**: After adding a new guide, test all features:
   - Progress tracking
   - Step completion
   - Returning user experience

## Examples

Refer to existing guides like `burns.ts`, `snake-bite.ts`, or `traffic-accident.ts` for examples of properly formatted guides. 