# CLAUDE.md

## Project Overview

**Learn English With Chinese (zh-en)** — A Vue 3 web app for self-directed English learning using Chinese. Provides flashcards, games, story-based learning, vocabulary exercises, image-based tools, songs, and drawing activities.

## Tech Stack

- **Framework:** Vue 3 + TypeScript + Quasar v2
- **Build:** Quasar CLI (Vite)
- **State:** Pinia
- **Routing:** Vue Router
- **Styling:** SCSS
- **APIs:** OpenAI, Firebase, Hugging Face Transformers
- **Package Manager:** Yarn

## Common Commands

```bash
yarn install      # Install dependencies
yarn dev          # Start dev server (hot-reload)
yarn build        # Production build
yarn lint         # Run ESLint
yarn format       # Run Prettier
```

## Project Structure

```
src/
  pages/        # 45+ learning module pages (Flashcards, Games, Stories, Songs, etc.)
  components/   # Reusable Vue components
  stores/       # Pinia state management
  assets/       # Data files (vocabulary, conversations, structures)
  utils/        # Utility functions
  boot/         # App initialization (Firebase, analytics, speech)
  firebase_json/ # Firebase config
public/
  images/       # Static assets including emotion images
```

## Key Conventions

- Pages are `.vue` files in `src/pages/` — each learning mode is a separate page
- Data lives in `src/assets/` as JSON or TypeScript files
- State is managed via Pinia stores in `src/stores/`
- Emotion images are in `public/images/emotions/` (48 images in `.webp` format)
- PWA support is enabled via Workbox

## Notes

- No tests are configured
- Firebase is used for backend/auth functionality
- OpenAI API is used for AI-powered learning features
