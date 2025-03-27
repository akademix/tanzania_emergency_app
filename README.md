# First Aid App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

An emergency first aid application built with Next.js, designed to provide essential first aid training and quick access to emergency guides. This application tracks user progress through training modules and is built as a Progressive Web App (PWA) with offline capabilities.

## Features

* **First aid guides**: Access essential first aid information quickly, including guides for:
  * Basic First Aid
  * CPR (Cardiopulmonary Resuscitation)
  * Wound Treatment
* **Training modules**: Interactive training sections to learn first aid skills with video content.
* **Progress tracking**: Keeps track of completed training steps using local storage.
* **Offline support**: Key resources are cached for offline access via service workers. Includes a dedicated offline page and offline status indicator.
* **PWA ready**: Installable on devices with a web manifest and service worker setup.
* **Theming**: Supports system theme preferences and manual theme switching (light/dark mode).
* **Multilingual support**: Built-in language switching capabilities for broader accessibility.
* **Location services**: Find nearby first aid locations and emergency services.
* **Emergency contacts**: Manage and store emergency contact information locally.

## Tech stack

* **Framework**: [Next.js](https://nextjs.org/) (using React Server Components)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) with PostCSS
* **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives, potentially structured with [Shadcn UI](https://ui.shadcn.com/) conventions
* **Icons**: [Lucide React](https://lucide.dev/)
* **State Management**: React Hooks, custom hooks utilizing Local Storage
* **Linting**: ESLint
* **Image Processing**: Sharp (for icon generation script)

## Getting started

### Prerequisites

* Node.js (Version specified in `.nvmrc` if present, or check `package.json` engines if specified - currently requires Node >=14 [inferred from Tailwind dep])
* npm, yarn, pnpm, or bun

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd first-aid-app
    ```
2.  Install dependencies using your preferred package manager:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the development server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application. The page auto-updates as you edit files.

## Available scripts

* `npm run dev`: Starts the development server.
* `npm run build`: Builds the application for production.
* `npm run start`: Starts the production server.
* `npm run lint`: Runs ESLint to check for code quality issues.
* `npm run generate-icons`: Generates different icon sizes from `public/logo.svg` using Sharp.

## Deployment

This application can be deployed in multiple ways:

### Vercel platform
The application is optimized for deployment on the [Vercel Platform](https://vercel.com/). Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Docker deployment
The project includes Docker support with a `docker-entrypoint.js`. Docker deployment support is planned for future implementation.

