# Physics Wallah Course Platform

A modern, responsive course platform built with Next.js, TypeScript, and Tailwind CSS, replicating the Physics Wallah course interface.

## Features

- 🎨 Modern, responsive design
- 🔧 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS
- 🧩 Reusable components with shadcn/ui
- 📱 Mobile-first responsive design
- ⚡ Fast and optimized performance
- 🎯 SEO-friendly structure

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** React Icons + Lucide React
- **State Management:** React Hooks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
3. Run the development server
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
src/
├── app/                 # Next.js app directory
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── layout/         # Layout components
│   └── course/         # Course-specific components
├── data/               # Static data and configurations
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
\`\`\`

## Components

- **Header**: Navigation with dropdown menus
- **Breadcrumb**: Navigation breadcrumb trail
- **CourseHeader**: Course title and metadata
- **CourseTabs**: Tabbed navigation for course sections
- **BatchFeatures**: Pricing cards with features
- **CourseSidebar**: Course enrollment sidebar

## Customization

The project uses a modular structure making it easy to customize:

- Update course data in `src/data/course.ts`
- Modify navigation in `src/data/navigation.ts`
- Customize styling in `tailwind.config.js`
- Add new components in respective directories

## License

This project is for educational purposes.
