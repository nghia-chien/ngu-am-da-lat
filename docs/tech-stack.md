# Technology Stack

## 1. Recommended Stack for Phase 1

| Layer | Recommendation | Why it fits this demo |
|---|---|---|
| UI framework | React | Component-based sections and reusable cards are straightforward to iterate on. |
| Language | TypeScript | Helps catch content-shape and prop errors while the demo changes quickly. |
| Build tool / dev server | Vite | Fast local development and a simple static production build. |
| Styling | CSS with theme variables, or Tailwind CSS if already standard in the team | Supports a responsive layout and consistent brand tokens. Choose one primary styling approach; do not mix multiple systems without a reason. |
| Icons | `lucide-react` where icons are needed | Consistent, lightweight UI icons. Prefer text labels alongside important icons. |
| Unit/component tests | Vitest + React Testing Library | Tests user-visible behavior without requiring a backend. |
| Linting | ESLint with TypeScript and React rules | Catches common errors and inconsistent patterns. |
| Formatting | Prettier | Keeps code formatting consistent across contributors. |
| Browser smoke / end-to-end tests | Playwright (optional for the first demo) | Useful for checking the primary flow at desktop and mobile viewports. |

Use the package versions approved by the repository at setup time and commit the lockfile. Do not copy version numbers from this document into `package.json` without checking compatibility.

## 2. Keep the Initial Dependency Set Small

The demo should not require:

- A database or ORM.
- An API client or data-fetching library when there are no APIs to call.
- Authentication or authorization packages.
- A global state-management library for a single landing page.
- A form library for a basic demo form unless validation complexity grows.
- A router unless the approved design requires separate routes.

Native React state and browser form validation are sufficient for simple demo-only interactions.

## 3. Asset and Media Handling

- Put logos, approved photos, posters, and video files under `public/`.
- Reference public assets by root-relative URL, such as `/images/rooms/room-one.webp`.
- Add explicit image `alt` text; use an empty alt attribute for purely decorative images.
- Use `width`/`height` or an aspect-ratio container to reduce layout shifts.
- Compress images for the intended display size. Avoid oversized original camera files in the deployed build.
- Provide a poster image for video. Use controls where needed and do not autoplay audio.
- Keep media files reasonably small and test the deployed preview on a typical mobile connection.

## 4. Data Strategy

For phase 1, use typed local content in `src/data/`. This makes it easy to adjust the homepage without creating a fake API. External destinations such as phone, Zalo, Facebook, and Maps should be centralized in one content/configuration location and verified before presentation.

Do not place credentials, API secrets, private tokens, or other sensitive values in the frontend. Any variable prefixed with `VITE_` is exposed to browser-side code after build and must be treated as public.

## 5. Suggested Scripts

Align these scripts with the actual package manager and repository conventions:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

This is a suggested shape, not a claim that these scripts already exist. Confirm the TypeScript configuration before using `tsc -b`.

## 6. Decision Rule

The best stack is the smallest one the team can maintain and the client demo requires. If the existing repository already has a working React/Vite setup, retain it rather than rebuilding the toolchain. Introduce additional libraries only to solve a concrete requirement.
