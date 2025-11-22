# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Primary Commands**:
- `pnpm install` — Install dependencies (pnpm preferred over npm per project convention)
- `pnpm dev` — Start development server at http://localhost:3000
- `pnpm build` — Production build with type-checking (run before deployment)
- `pnpm start` — Serve production build
- `pnpm lint` — Run ESLint with Next.js configuration

**Port Conflicts**: Use `pnpm dev -- --port 3001` to run on alternative port if 3000 is occupied.

## Architecture Overview

### Core Application Structure

**Next.js App Router Pattern**:
- All routes are in `src/app/` with page-based routing
- Shared layout (`src/app/layout.tsx`) provides consistent shell with sidebar navigation
- Client-side navigation handled by `src/app/components/Nav.tsx` with active state management
- Global styles in `src/app/globals.css` with CSS custom properties for theming

**Key Routes**:
- `/` (HOME) - Dashboard with user stats, progress tracking, and book recommendations
- `/reading` - Book search/info with learning flow (Word Preview → E-Book → Quiz → AI Speak)
- `/report` - Cumulative metrics, monthly charts, and historical results
- `/profile` - User information and settings (avatar feature marked as MVP-excluded)
- `/completed` - Finished books listing

### Static Prototype Nature

This is a **static prototype with mock data** for UI/UX validation:
- All book data, user stats, and progress metrics are hardcoded in component files
- No backend API integration or real data persistence
- Image sources use Unsplash via Next.js Image optimization (configured in `next.config.ts`)
- Designed for non-technical stakeholders to modify text/data directly in TSX files

### Component Organization

**Layout Structure**:
- `layout.tsx` establishes app shell: sidebar (logo, Nav, footer actions) + main content area
- Uses Geist font family (sans and mono variants) loaded via next/font/google
- Sidebar contains brand logo, navigation menu, and action buttons (학습설정, 로그아웃)

**Navigation Pattern**:
- Client component (`'use client'`) using `usePathname()` for active route detection
- Icon-based navigation with Image components (18x18 icons from `/public`)
- Active state styling via `.is-active` class applied conditionally

### Data Model Pattern

Mock data is defined as TypeScript objects at the top of page files:
```typescript
// Example from page.tsx
const recommendations = [
  { title: "...", type: "F", ar: "1.1-1.2", lexile: "30-60", words: "84", image: "..." }
]
```

Key data structures:
- Book metadata: title, type (F/NF), AR score, Lexile level, word count, cover image
- User stats: books read count, quiz accuracy, AI voice recognition count, comprehension score
- Progress tracking: level percentage, badge system (referenced but not fully implemented)

### Styling Architecture

**Global Design System** (`globals.css`):
- CSS custom properties for consistent spacing, colors, typography
- Utility classes for layout patterns (`.section-card`, `.hero-card`, `.book-card`)
- Responsive grid system for content layout
- Empty state patterns with emoji-based visual feedback

**Component-Specific Styles**:
- Page-level module CSS (e.g., `page.module.css`) for scoped styles
- BEM-like naming convention for component classes (`.sidebar__link`, `.book-card__body`)
- State-based variants (`.is-active`, `.new`)

## TypeScript Configuration

**Path Alias**: `@/*` maps to `src/*` for cleaner imports
- Import components: `import { Nav } from "@/app/components/Nav"`
- Import styles: `import "@/app/globals.css"`

**Type Safety**: Strict TypeScript enabled, React 19 with new JSX transform (`react-jsx`)

## Content Modification for Non-Developers

**Changing Text/Data**:
1. Locate the relevant page file in `src/app/[route]/page.tsx`
2. Find the mock data array at the top of the file
3. Modify strings, numbers, or object properties directly
4. Save file → browser auto-refreshes with changes

**Styling Updates**:
- Global colors/spacing: Edit `src/app/globals.css`
- Component-specific: Edit corresponding `.module.css` or inline styles

**Adding New Routes**:
1. Create `src/app/[new-route]/page.tsx`
2. Add navigation entry to `navItems` array in `src/app/components/Nav.tsx`
3. Add corresponding icon to `/public` and update `iconSrcMap`

## External Dependencies

- **Next.js 16.0.3**: App Router with React Server Components
- **React 19.2.0**: Latest React with improved JSX transform
- **Remote Images**: Configured for `images.unsplash.com` in `next.config.ts`
- **Fonts**: Geist Sans and Geist Mono via next/font/google

## Important Conventions

- Use pnpm instead of npm for package management
- Functional React components with TypeScript typing
- Route files export default component, shared components use named exports
- Client components must include `'use client'` directive when using hooks
- Image optimization via Next.js `<Image>` component (always specify width/height)
- Korean UI text for student-facing content, English for technical labels (HOME, READING, etc.)
