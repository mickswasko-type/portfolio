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
| Speak Up case study | `src/pages/work/speak-up.astro` |
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

Copy `src/pages/work/speak-up.astro` to `src/pages/work/<slug>.astro`. It's served at `/work/<slug>/`.

## Moving to a custom domain

Set `site` in `site.config.ts` to the domain and `base` to `'/'`, then add the domain under the repo's Settings → Pages.
