# NYXON — Minato's portfolio

Next.js (App Router) + TypeScript, no runtime dependencies beyond Next and React. System font stack, one CSS file, no backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
npm run lint       # type-check
```

Node 20+ recommended.

## Edit content

Everything lives in `src/data/content.ts`: hero, about, projects, case studies, lab, skills, process, contact.

- **WCA repository:** set `WCA_REPOSITORY_URL` to the real GitHub URL. Until then the site shows a non-clickable "Source link coming soon" label.
- **Real screenshots:** put images in `public/screenshots/` and add a `screenshot: { src, alt, width, height }` field to the project. Without it, a card shows a sketch clearly labelled "Illustrative sketch · not a screenshot".
- **Screenshot galleries:** a project with a `gallery` field (Daily Detective) shows any files named `<prefix>-1.png`, `<prefix>-2.png`, … up to 12 from its folder, e.g. `public/images/daily-detective/daily-detective-1.png`. Missing files are skipped, and the first one replaces the sketch on the home-page card.
- **APK / download buttons:** a project with a `download` field shows its button only if the file exists. Nyxon Shield expects `public/downloads/nyxon-shield.apk`. For a large APK, upload it to a GitHub Release instead and set `download.href` to that `https://` URL.
- **Statuses:** `Completed`, `Delivered`, `Launched`, `Deployed`, `In Development`, `Working MVP`, `Prototype`, `Concept`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repo. Framework is auto-detected as Next.js; no settings needed.
3. Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) so Open Graph and sitemap URLs use your real domain.
4. Deploy. Every push to `main` redeploys.

## Structure

- `src/app/` — layout, home page, `projects/[slug]` case studies, OG image, icon, sitemap
- `src/components/` — Nav, Hero, Avatar, Wordmark, ProjectCard, ProjectVisual, Sections, StatusBadge, RevealObserver
- `src/app/globals.css` — all styling and design tokens

## Real screenshots

Nothing on the site is shown as a real screenshot unless the file exists. Until then each card shows a sketch labelled "Illustrative sketch · not a screenshot".

- **Websites** (Shira Import, Incognito Guard site, Nyxon Launcher site): run `npm i --no-save playwright && npx playwright install chromium && node scripts/capture-site-screenshots.mjs` on your own computer. It saves `shira-import.jpg`, `incognito-guard-site.jpg` and `nyxon-launcher-site.jpg` into `public/screenshots/`.
- **Apps** (take these from the apps themselves; png, jpg or webp, up to 12 each):
  `wca-1.png`, `nyxon-shield-1.png`, `nyxon-launcher-1.png`, `incognito-guard-1.png`, `studynyx-1.png` in `public/screenshots/`, and `daily-detective-1.png` in `public/images/daily-detective/`.
  An app screenshot takes priority over a website screenshot on the home-page card.

## Personal claims

`site.novelsClaim` in `src/data/content.ts` controls the "author with more than 15 novels" line in About and in the site description. Set it to `""` to remove it everywhere.
