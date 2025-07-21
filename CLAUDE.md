# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume website built with Next.js 15, featuring a terminal-style interface showcasing Carlos Marcial's dual career as a Full-Stack Developer and Digital Artist. The site emphasizes cyberpunk aesthetics with animated components and interactive terminal windows.

## Development Commands

**Development server:**
```bash
npm run dev  # Runs with --turbopack flag for faster builds
```

**Production build:**
```bash
npm run build
npm run start
```

**Code quality:**
```bash
npm run lint  # ESLint with Next.js config
```

## Architecture & Key Technologies

### Tech Stack
- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4 with shadcn/ui components
- **Animations:** Framer Motion for complex animations and transitions
- **Icons:** Lucide React
- **TypeScript:** Full type safety with strict configuration

### Component Architecture

The application follows a terminal-themed design pattern:

**Main Layout:** `src/app/page.tsx` orchestrates terminal sections in sequence:
- TerminalHeader → TerminalExperience → TerminalSkills → TerminalProjects → TerminalEducation → TerminalExhibitions → TerminalMedia → TerminalContact

**Key Component Categories:**
- **Terminal Components:** All start with "Terminal" prefix and follow consistent styling patterns
- **Interactive Components:** GlitchText, TypewriterText with animation effects
- **Utility Components:** TerminalWindow wrapper for consistent terminal styling

### Custom Utilities

**Animation Utilities (`src/lib/animations.ts`):** Pre-configured Framer Motion variants
**Math & Interaction Utilities (`src/lib/utils.ts`):** 
- Animation helpers: `lerp`, `clamp`, `easeInOut*` functions
- Viewport utilities: `isInViewport`, `smoothScrollTo`
- Matrix-style character generation: `getRandomMatrixChar`

### Styling Architecture
- Uses shadcn/ui configuration with "new-york" style variant
- Custom CSS variables for cyberpunk color scheme
- Path aliases configured: `@/components`, `@/lib`, `@/hooks`
- Tailwind v4 with PostCSS integration

### Animation Patterns
Components heavily use Framer Motion with:
- Consistent `initial/animate/transition` patterns
- Staggered animations for list items
- Viewport-triggered animations via `useIntersectionObserver` hook
- Custom easing functions for smooth UX

## Development Notes

- All components are client-side (`'use client'`) due to animation requirements
- Terminal aesthetic maintained through consistent color scheme and monospace fonts
- Responsive design prioritizes mobile-first approach
- Animation performance optimized with `will-change` and GPU acceleration