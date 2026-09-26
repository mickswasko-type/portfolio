# Mick Swasko — Portfolio

Personal portfolio site. Astro, static, deployed to GitHub Pages on every push to `main`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # outputs to dist/
```

## Where things live

| What | File |
| --- | --- |
| Project cards (copy, links, images) | `src/data/work.ts` |
| Experience, capabilities, industries | `src/data/career.ts` |
| Home page | `src/pages/index.astro` |
| Case studies | `src/pages/work/*.astro` (shared styles in `src/styles/case-study.css`) |
| Résumé page | `src/pages/resume.astro` (content from `src/data/career.ts`) |
| Résumé PDF | `public/mick-swasko-resume.pdf` |
| Site URL, email, LinkedIn | `site.config.ts` |
| Colors and type | `src/styles/global.css` |
| Images | `src/assets/work/` |

### Add a project

1. Drop images in `src/assets/work/`.
2. Import them at the top of `src/data/work.ts` and add an entry to `projects`.
   `wide: true` gives it a full-width, side-by-side card; `stage: 'dark'` puts
   photography on a dark background.

Images are resized and converted to WebP at build time, so originals can be large.

### Add a full case study

Copy `src/pages/work/love-the-solve.astro` to `src/pages/work/<slug>.astro` (served at `/work/<slug>/`),
then set `caseStudy: '<slug>'` on the project in `src/data/work.ts` so its card links there.

### Update the résumé

Edit `src/data/career.ts`, then with `npm run dev` running, regenerate the PDF:

```bash
npm run resume:pdf
```

The PDF deliberately has no phone number.

### Update the link-preview card

The image shown when the site is shared (`public/og.png`) is rendered from
`scripts/og/og.html`. Edit that page, then:

```bash
npm run og
```

The share title and description live in `site.config.ts`.

## Moving to a custom domain

Set `site` in `site.config.ts` to the domain and `base` to `'/'`, then add the domain under the repo's Settings → Pages.
