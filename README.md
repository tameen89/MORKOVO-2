# MORKOVO Frontend

A new, responsive React + Vite frontend for MORKOVO. This project intentionally contains **frontend only**. Backend, database, admin panel and real form processing are not included yet; they can be added after client approval.

## Included
- Responsive desktop and mobile layout
- MORKOVO logo asset supplied for this project
- Dark, minimal visual direction with restrained pink accents
- Services list with subtle hover/tap interaction
- AI solutions feature section
- **Horizontal case-study carousel** with editable placeholder slots
- Subtle motion and hover feedback
- Reduced-motion accessibility support
- Contact CTA (currently opens an email draft)

## Run locally

Install Node.js (LTS), then in this project folder run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to GitHub + Vercel

1. Extract this ZIP.
2. Create a new GitHub repository, for example `morkovo-frontend`.
3. Upload the **contents** of the extracted `morkovo-frontend` folder to the repository (so `package.json` is at the repository root).
4. In Vercel, choose **Add New → Project**, import that GitHub repository.
5. Framework preset: **Vite** (Vercel usually detects it automatically).
6. Build command: `npm run build`
7. Output directory: `dist`
8. Click Deploy.

No environment variables are required for this frontend preview.

## Editing case studies later

Open `src/App.jsx` and find the `projects` array near the top. Replace the placeholder entries with client-approved:
- project title
- category
- project status/content
- cover image (add the image under `public/images/` and reference it in the project data)

The carousel is horizontal on desktop and mobile. It supports touch swipe on mobile and arrow controls.

## Important before client presentation
- The case-study tiles are clearly marked as available placeholders; they are not real client projects.
- The contact button currently opens an email draft using `hello@morkovo.com`. Replace this with the client's confirmed email/contact route before presenting if that address is not correct.
- Social profile URLs and real case-study assets can be added when provided.
- This is a frontend preview; forms are not connected to a backend yet.
