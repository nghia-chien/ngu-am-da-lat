# Environments and Configuration

## 1. Environments

| Environment | Purpose | Expected behavior |
|---|---|---|
| Local development | Build the UI and review content on a developer machine. | Vite dev server, local static content, local public assets, browser-only interactions. |
| Preview / staging | Share a stable build with the client for feedback. | Production-like static build hosted on a preview URL; no real booking or enquiry delivery. |
| Production (future) | Public website after scope and content approval. | Only launch after contact details, media permissions, privacy requirements, and any required backend integrations have been confirmed. |

The current deliverable is local development plus a client preview. A production environment is documented as a future state, not as an existing service.

## 2. Local Setup

Assuming a React + TypeScript + Vite repository:

1. Install the Node.js version supported by the repository and use its declared package manager.
2. Install dependencies using the committed lockfile, for example `npm ci` for an npm project.
3. Start the dev server with `npm run dev`.
4. Run `npm run lint`, `npm test`, and `npm run build` using the scripts configured in `package.json`.
5. Open the local URL printed by Vite and test the main user flow at mobile and desktop widths.

These commands are expected conventions. Check the actual scripts and package manager before running them in an existing repository.

## 3. Environment Variables

Prefer storing ordinary demo content and verified public contact links in `src/data/siteContent.ts`. The demo does not need environment variables unless different preview environments genuinely require different public configuration.

If environment-specific public values are needed, provide a `.env.example` such as:

```dotenv
# Optional, public client-side configuration only
VITE_SITE_NAME="Ngủ Ấm Ở Đà Lạt"
VITE_CONTACT_PHONE=""
VITE_ZALO_URL=""
VITE_FACEBOOK_URL=""
VITE_MAPS_URL=""
```

Keep values blank until verified. Update names to match the implementation and remove unused variables. Never place private tokens, passwords, secret API keys, or backend credentials in a `VITE_` variable: Vite exposes these values to browser code.

Do not commit real `.env.local` files. Commit `.env.example` without private values, and confirm the repository's `.gitignore` excludes local environment files.

## 4. Static Asset Deployment

- All approved images and video files for the demo must be committed under `public/` or included through the agreed asset-delivery process.
- Use root-relative URLs such as `/images/hero/da-lat-stay.webp`.
- Verify that asset filename casing matches exactly; local Windows development may hide case-sensitivity issues that appear on Linux hosting.
- Check media size before deployment. Large videos can make a demo slow to load, so prefer an optimized file and poster image.
- Confirm that the selected hosting platform serves a Vite static build and supports the expected route fallback if routing is added later.

## 5. Preview Release Checklist

- [ ] Correct client-approved logo, images, and video files are included.
- [ ] No development placeholder, fake price, or unverified testimonial is visible.
- [ ] Phone/Zalo/Facebook/Maps links have been verified.
- [ ] Mobile menu, anchor navigation, gallery, and optional demo form work.
- [ ] A frontend-only form clearly states that it does not send a real enquiry.
- [ ] Build and lint complete without blocking errors.
- [ ] Preview link opens in a private/incognito window and on a mobile device.
- [ ] The client knows this is a frontend demo and which functionality is not connected.

## 6. Secrets and Privacy

The frontend demo should not collect or persist personal information beyond temporary browser state needed to demonstrate the UI. Do not add analytics or third-party tracking without approval. Any later production contact form needs an agreed data destination, privacy notice, retention rules, spam protection, and error handling.
