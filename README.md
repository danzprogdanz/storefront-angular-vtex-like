## Updated README: Angular VTEX-like Food Delivery Store

# 🍕 Angular VTEX-like Food Delivery Store

*A food delivery storefront inspired by VTEX workflow*

## 🏁 Overview

This project is an Angular-based food delivery platform that simulates key VTEX e-commerce workflows. Currently in active development, it aims to provide a modern, scalable foundation for food delivery applications with rich features and mock API integration.

## ✨ Features (Planned/In Progress)

- **VTEX-like Workflow:** Simulating core VTEX e-commerce patterns
- **Modern UI/UX:** Responsive design with SCSS and a custom design system
- **Interactive Catalog:** Food browsing with categories and filters
- **Shopping Cart:** Full cart functionality with NgRx state management
- **Mock API Service:** MSW for API simulation during development
- **Authentication Flow:** Login/register with mock authentication
- **Performance Optimized:** Angular best practices for speed
- **Type Safety:** Full TypeScript support

## 🛠️ Tech Stack

- **Framework:** [Angular](https://angular.io/) (v19+)
- **Styling:** SCSS with custom Design System
- **State Management:** NgRx
- **API Mocking:** MSW (Mock Service Worker)
- **Type Checking:** TypeScript
- **Linting:** ESLint
- **Testing:** Jasmine/Karma (Coming soon)

## 🏗️ Project Structure

```
storefront-angular-vtex-like/
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── core/            # Core services, guards, interceptors
│   │   ├── features/        # Feature modules (auth, cart, catalog, etc.)
│   │   ├── mocks/           # MSW mock handlers and models
│   │   ├── shared/          # Shared components, store, utilities
│   │   └── styles/          # Design system (SCSS variables, mixins)
│   ├── global_styles.css
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json             # Angular configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)
- Angular CLI (v19+)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/danzprogdanz/storefront-angular-vtex-like.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm start
   ```

### Available Scripts

- `npm start`: Starts the development server
- `npm run build`: Creates a production build
- `npm run watch`: Development build with watch mode
- `npm test`: Runs tests (Coming soon)

## 🧩 Component Architecture

The project follows Atomic Design principles:

- **Atoms:** Basic UI elements (Buttons, Inputs, Typography)
- **Molecules:** Simple component groups
- **Organisms:** Complex UI sections (e.g., HeroCarousel)
- **Features:** Complete business feature modules
- **Pages:** Route components

## 📦 State Management

NgRx powers the application state with:

- Root store configuration
- Feature states for cart, auth, etc.
- Actions, reducers, and effects

## 🎨 Design System

Key design elements:

- SCSS variables for colors, typography, spacing
- Responsive mixins and breakpoints
- Component-scoped styles with BEM-like naming

## 🤝 Contributing

This project is currently in active development. Contributions will be welcome once the core architecture is stabilized. Check back soon!

---
