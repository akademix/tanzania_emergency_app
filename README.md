# Tanzania emergency app
The app is designed to deliver emergency information to users across Tanzania, with the goal of improving public safety and fostering greater awareness during critical situations.

Note: The application is developed using Vercel's v0.

## Getting started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Managing video content

### Setup Git LFS

This project uses Git Large File Storage (LFS) for managing video files. Before working with videos:

1. Install Git LFS:
```bash
# On Mac
brew install git-lfs

# On Ubuntu
sudo apt install git-lfs

# On Windows (with Chocolatey)
choco install git-lfs
```

2. Initialize Git LFS in your local repository:
```bash
git lfs install
```

### Video file structure

Videos are organized in the `public/videos` directory:
```
public/videos/
├── emergency/     # Bundled emergency instruction videos
└── training/      # Training course videos
    └── downloaded/  # Storage for downloaded training content
```

### Adding new videos

1. Place your video file in the appropriate directory:
   - Emergency videos: `public/videos/emergency/`
   - Training videos: `public/videos/training/`

2. Update the video configuration in `lib/video/config.ts`:
```typescript
export const videos: Video[] = [
  {
    id: 'your-video-id',
    type: 'emergency', // or 'training'
    title: 'Video Title',
    description: 'Video description',
    duration: 120, // in seconds
    languages: ['en', 'sw'],
    path: '/videos/emergency/your-video.mp4' // for emergency videos
    // OR for training videos:
    // streamingUrl: '...',
    // downloadUrl: '/videos/training/downloaded/your-video.mp4',
    // isDownloadable: true
  },
  // ... existing videos ...
]
```

3. Commit the video file:
```bash
git add public/videos/your-video.mp4
git commit -m "Add new video: description"
git push
```

### Video guidelines

- Format: MP4
- Resolution: 720p recommended (1280x720)
- Maximum file size: 50MB per video
- Language: Include both English and Swahili versions when possible
