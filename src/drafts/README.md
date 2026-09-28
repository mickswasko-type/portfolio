# Parked pages

Finished pages that are off the site for now. Astro only builds what's in
`src/pages/`, so nothing here is published. The folder mirrors `src/pages/`,
so relative imports keep working: to bring one back, `git mv` it to the same
path under `src/pages/`, set `caseStudy` on its project in `src/data/work.ts`,
and remove its entry from `redirects` in `astro.config.mjs`.

- `work/love-the-solve.astro`: Acxiom, Love the Solve. Parked 2026-09-28; the card links to Park & Battery's case study instead.
- `work/dangerous-foods.astro`: Thermo Fisher, Dangerous Foods. Parked 2026-09-28; same.
