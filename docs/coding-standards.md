# Coding Standards

## 1. General Rules

- Optimize for readability and quick, safe iteration during client feedback.
- Keep implementation consistent with the existing repository rather than introducing a second pattern for the same task.
- Use TypeScript and enable strict type-checking where the repository supports it.
- Prefer small components with one clear responsibility.
- Avoid premature abstractions and unnecessary dependencies.
- Do not leave knowingly broken links, missing media, or blocking console errors in the client demo.

## 2. Naming

| Item | Convention | Example |
|---|---|---|
| React component | PascalCase | `AccommodationCard.tsx` |
| Hook | `use` + camelCase | `useGallery.ts` |
| Function / variable | camelCase | `openGalleryItem` |
| Type / interface | PascalCase | `AccommodationItem` |
| Constant | camelCase by default; uppercase for true global constants where established | `siteContent` |
| CSS class | Follow the selected styling system consistently | Tailwind utility classes or readable kebab-case CSS classes |
| Public media filename | lowercase kebab-case | `terracotta-room-01.webp` |

Use names that describe meaning, not appearance alone. Prefer `ContactSection` over `BottomOrangeBlock`.

## 3. React Components and Types

- Use function components and typed props.
- Keep content arrays outside render functions when they are static.
- Use stable IDs as React keys; avoid array indexes when the list may reorder.
- Keep state close to the component that owns the interaction. Lift it only when multiple components need to share it.
- Do not use `any` to bypass a type error. Use a concrete type or `unknown` with safe narrowing.
- Keep business content out of deeply nested JSX; use typed data files.
- Avoid effects for values that can be calculated during render.

Example:

```tsx
type AccommodationCardProps = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function AccommodationCard({
  name,
  description,
  image,
  imageAlt,
}: AccommodationCardProps) {
  return (
    <article className="accommodation-card">
      <img src={image} alt={imageAlt} loading="lazy" />
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}
```

Adapt the class names to the repository's styling approach. The sample is illustrative, not a required final visual design.

## 4. Styling and Responsive Design

- Define brand colors and shared spacing/type tokens in one place.
- Use the approved palette: warm earth brown or terracotta, light beige, and pine green.
- Avoid scattered, nearly identical color literals across components.
- Design mobile-first; verify narrow screens before polishing wide-screen layouts.
- Prefer fluid layouts and content-driven heights over fixed dimensions that clip text.
- Provide visible focus states and sufficient text contrast.
- Do not use color as the only indicator of status or error.

Suggested initial theme tokens (final values should be reviewed visually):

```css
:root {
  --color-primary: #9b573d;
  --color-background: #f5efe4;
  --color-accent: #294b3a;
  --color-text: #2d2925;
  --color-surface: #fffaf2;
}
```

These are starting values inferred from the brief's color descriptions, not client-approved final brand specifications.

## 5. Assets and Content

- Store client-approved images and videos under `public/` using descriptive filenames.
- Reference a file as `/images/gallery/filename.webp`, not `/public/images/gallery/filename.webp`.
- Add meaningful alt text for informative images. Use `alt=""` for decorative images.
- Use a poster for video and avoid autoplay with sound.
- Do not hardcode made-up room prices, amenities, reviews, room counts, capacity, or booking availability.
- Track missing content explicitly and remove development placeholders before the final client presentation.
- Confirm usage rights before publishing photos containing identifiable people or third-party material.

## 6. Accessibility

- Use semantic HTML (`header`, `nav`, `main`, `section`, `footer`, and appropriate heading levels).
- Keep one clear page-level `h1`; use headings in a logical order.
- Ensure every interactive element can be reached and operated with a keyboard.
- Give buttons and icon-only controls accessible names.
- Associate form fields with visible labels and error messages.
- Ensure opening a gallery lightbox manages focus and supports Escape to close if implemented.
- Respect reduced-motion preferences for non-essential motion.

## 7. Links and Demo Interactions

- Use a real destination for every visible link or CTA, or label it as unavailable during development.
- Verify all phone, Zalo, Facebook, and Maps URLs before demo day.
- Use safe attributes when opening external links in a new tab.
- Do not make a frontend-only form look like a real submission. The confirmation must say that no message has been sent.
- Avoid collecting data the demo does not need.

## 8. Error Handling and Code Hygiene

- Do not ignore TypeScript, lint, or browser-console errors without documenting the reason.
- Remove unused code, dead assets, and temporary debug output before client review.
- Do not commit credentials or `.env` files containing secrets.
- Run lint, tests, and a production build before creating the preview link.
- Keep pull requests or commits focused on one coherent change where the team workflow supports it.

## 9. Definition of Done for a UI Change

A change is done when:

- The UI matches the approved requirement and brand direction.
- The content is client-confirmed or explicitly marked as pending internally.
- Responsive behavior is checked at mobile and desktop sizes.
- Keyboard/focus behavior and alt text are covered where relevant.
- Links and interactions behave as documented.
- No blocking console errors are introduced.
- Tests, lint, and production build pass, or any known blocker is clearly recorded.
