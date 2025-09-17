# Overview

This is a topic learning tracking application built with React, TypeScript, and Express. The app provides a gamified learning experience where users can track their progress through various educational topics with prerequisites. Topics are unlocked progressively as prerequisites are completed, and users can mark individual resources within each topic as completed. The application uses localStorage for client-side data persistence and features a modern dark theme UI with animations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with custom `useLearningProgress` hook for managing learning state
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with dark theme custom color scheme
- **Animations**: Framer Motion for smooth UI transitions and micro-interactions
- **Data Fetching**: TanStack Query (React Query) for server state management

## Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Build System**: ESBuild for production bundling
- **Development**: TSX for TypeScript execution in development
- **API Structure**: Minimal server setup with placeholder routes (currently uses localStorage)

## Data Storage Solutions
- **Client Storage**: Browser localStorage for persistence of learning progress
- **Data Schema**: Zod schemas for type-safe data validation
- **Database Ready**: Drizzle ORM configured for PostgreSQL (using Neon database)
- **Migration System**: Drizzle Kit for database schema migrations

## Authentication and Authorization
- **Current State**: No authentication implemented (client-only application)
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage (unused)

## Design Patterns and Architecture Decisions

### Component Architecture
- **Separation of Concerns**: Clear separation between UI components, business logic hooks, and data schemas
- **Shared Schema**: Common type definitions in `/shared` directory for type safety across frontend/backend
- **Custom Hooks**: Centralized state management through `useLearningProgress` hook

### Data Flow
- **Client-Side State**: Learning progress stored in localStorage for immediate persistence
- **Topic Dependencies**: Prerequisite system enforces learning path progression
- **Resource Tracking**: Individual resource completion tracking within topics

### UI/UX Decisions
- **Accessibility First**: Radix UI primitives ensure keyboard navigation and screen reader support
- **Progressive Enhancement**: Topics unlock as prerequisites are completed
- **Visual Feedback**: Different visual states for completed, available, and locked topics
- **Responsive Design**: Mobile-first approach with responsive grid layouts

# External Dependencies

## UI and Styling
- **Shadcn/ui**: Pre-built accessible React components
- **Radix UI**: Low-level UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing with Autoprefixer

## Data Management
- **Zod**: Schema validation and type inference
- **TanStack Query**: Server state management
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database

## Runtime and Build
- **React**: UI library with concurrent features
- **Express**: Web server framework
- **TSX**: TypeScript execution for Node.js
- **ESBuild**: Fast JavaScript bundler

## Optional Integrations
- **Replit Plugins**: Development environment enhancements for Replit
- **React Hook Form**: Form state management (with Hookform resolvers)
- **Date-fns**: Date manipulation utilities