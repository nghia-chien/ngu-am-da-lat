# Folder Structure

## 1. Recommended Structure

Use this structure for the first React + TypeScript + Vite demo. Adjust it to match the repository if a project already exists; do not move files solely to match this example.

```text
ngu-am-da-lat/
├── public/
│   ├── images/
│   │   ├── branding/
│   │   │   └── logo.svg
│   │   ├── hero/
│   │   ├── rooms/
│   │   ├── gallery/
│   │   └── location/
│   └── videos/
│       ├── hero/
│       └── gallery/
├── src/
│   ├── app/
│   │   └── App.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx
│   │   │   └── SiteFooter.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AccommodationSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── LocationSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── AccommodationCard.tsx
│   ├── data/
│   │   └── siteContent.ts
│   ├── hooks/
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── content.ts
│   ├── utils/
│   ├── test/
│   └── main.tsx
├── docs/
│   ├── project-overview.md
│   ├── architecture.md
│   ├── tech-stack.md
│   ├── coding-standards.md
│   ├── folder-structure.md
│   ├── environments.md
│   └── testing-strategy.md
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

The `docs/` location is recommended if these documents will live inside the code repository. The downloadable documentation bundle can also be kept separately and copied into `docs/` later.

## 2. Folder Responsibilities

| Path | Responsibility |
|---|---|
| `public/images/` | Static client-approved images, logos, room photos, and gallery media. |
| `public/videos/` | Approved local video files and related media. |
| `src/app/` | App-level composition and page entry components. |
| `src/components/layout/` | Site-wide elements such as header and footer. |
| `src/components/sections/` | Full-width page sections that compose smaller UI elements. |
| `src/components/ui/` | Reusable presentational elements such as buttons and cards. |
| `src/data/` | Typed static content and verified public contact destinations. |
| `src/types/` | Shared content and domain types. Keep types near their owner if they are only used once. |
| `src/hooks/` | Reusable React hooks, added only when an interaction needs them. |
| `src/styles/` | Global styles, theme tokens, and any shared styling rules. |
| `src/utils/` | Small pure helper functions, not general dumping grounds. |
| `src/test/` | Shared test setup and test utilities. Individual tests may also live beside components if that convention is chosen. |
| `docs/` | Project decisions, architecture, setup guidance, and test plan. |

## 3. Asset URL Rules

Vite serves `public/` files from the root URL:

| Repository path | Use in the browser |
|---|---|
| `public/images/branding/logo.svg` | `/images/branding/logo.svg` |
| `public/images/rooms/room-one.webp` | `/images/rooms/room-one.webp` |
| `public/videos/hero/intro.mp4` | `/videos/hero/intro.mp4` |

Never include `/public` in the URL. Keep filenames lowercase and use hyphens instead of spaces. Prefer meaningful filenames such as `wooden-room-window.webp` instead of `IMG_1234.webp`.

## 4. Keep the Structure Proportional

For this single-page demo, do not create folders for features that do not exist yet. Add dedicated folders for routes, API clients, services, or booking features only after those capabilities become part of the approved scope.
