# Testing Strategy

## 1. Testing Goal

The goal is to make the client-facing frontend demo reliable, responsive, and honest about its limits. Since phase 1 has no backend, focus on rendering, navigation, local interactions, media loading, and accessibility rather than API or database tests.

## 2. Test Layers

| Layer | Tool / method | What to verify |
|---|---|---|
| Static checks | TypeScript, ESLint | Type errors, unused code, common React issues, and lint violations. |
| Unit tests | Vitest | Pure helper functions, content transformations, and small pieces of deterministic logic. |
| Component tests | React Testing Library + Vitest | Buttons, mobile navigation, accommodation cards, gallery controls, and form validation behavior. |
| End-to-end smoke tests | Playwright, if available | The main visitor flow in a real browser at desktop and mobile viewport sizes. |
| Visual / responsive review | Manual browser review | Layout, image cropping, typography, spacing, touch targets, and overflow at key widths. |
| Accessibility review | Keyboard checks and browser accessibility tools | Focus visibility, semantic headings, labels, alt text, contrast, and keyboard operation. |

Do not introduce an elaborate testing framework for logic that does not exist. Start with static checks and component tests; add end-to-end coverage if the team can maintain it.

## 3. Core Test Scenarios

### Page and content

- The page renders without an uncaught runtime error.
- The page has one clear main heading and a logical section-heading hierarchy.
- Accommodation cards and gallery items render from typed local content.
- No fabricated prices, room facts, testimonials, or availability messages are shown.
- The correct logo and approved images load from local `public/` paths.

### Navigation and CTAs

- Header links navigate to the intended page sections.
- Mobile navigation opens and closes, and selecting an item moves to the correct section.
- Each primary CTA has a valid destination or a deliberate, clearly identified demo interaction.
- Verified phone, Zalo, Facebook, and map links use the correct URLs.
- External links opened in a new tab use safe link attributes.

### Gallery and video

- Gallery images render and include suitable alt text.
- If a lightbox is implemented, it opens the selected image, closes with its close button and Escape, and supports keyboard focus.
- Videos have an appropriate poster and accessible controls where controls are shown.
- No video plays audio automatically.
- A missing media file does not break the entire page layout.

### Optional frontend-only enquiry form

- Required fields show understandable validation messages.
- Invalid input does not show a success state.
- Valid input shows an explicit demo-only confirmation.
- The UI does not claim that a message was delivered to the business.
- Form data is not sent to a backend or saved to persistent storage.

### Responsive and accessibility behavior

- No horizontal overflow at narrow mobile widths.
- Cards and buttons remain usable with touch input.
- Keyboard users can reach all interactive elements in a logical order.
- Focus state is visible, labels are associated with fields, and informative images have alt text.
- Text remains readable on the light beige background and in any colored button state.
- Reduced-motion preferences are respected where animation is used.

## 4. Browser and Viewport Matrix

At minimum, manually review:

| Target | Suggested viewport | Priority |
|---|---:|---|
| Mobile | 360 × 800 | Required |
| Large mobile | 390 × 844 | Required |
| Tablet | 768 × 1024 | Required |
| Desktop | 1440 × 900 | Required |
| Narrow desktop / laptop | 1280 × 720 | Recommended |

Test in current Chromium-based browser and at least one additional browser where available. If the client primarily uses a specific device or browser, add it to the matrix.

## 5. Example Component Test

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AccommodationCard } from "./AccommodationCard";

describe("AccommodationCard", () => {
  it("renders the accommodation name and description", () => {
    render(
      <AccommodationCard
        name="Sample room"
        description="Client-approved description"
        image="/images/rooms/sample-room.webp"
        imageAlt="Sample room interior"
      />,
    );

    expect(screen.getByRole("heading", { name: "Sample room" })).toBeTruthy();
    expect(screen.getByText("Client-approved description")).toBeTruthy();
  });
});
```

Adapt imports and assertions to the actual component markup and test configuration. This sample illustrates the approach; it is not evidence that tests are already configured.

## 6. Release Gates

Before sharing the preview link:

1. Run lint and TypeScript/build checks.
2. Run the available automated tests.
3. Exercise the main flow manually from hero to accommodation/gallery/location/contact.
4. Check the browser console and network panel for missing static assets or runtime errors.
5. Test responsive layout and keyboard navigation.
6. Confirm client-facing text does not misrepresent demo-only interactions.
7. Record any known limitation in the client handover notes.

## 7. Non-Goals for Phase 1

Do not write API contract, authentication, booking concurrency, payment, database migration, or server-side security tests until those systems have been approved and implemented. These are future testing responsibilities, not current capabilities.
