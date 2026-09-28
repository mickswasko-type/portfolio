// @ts-check
import { defineConfig } from 'astro/config';
import { siteConfig } from './site.config';

export default defineConfig({
  site: siteConfig.site,
  base: siteConfig.base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  compressHTML: true,
  // Parked case studies (see src/drafts/README.md): old links land on the project's card.
  redirects: {
    '/work/love-the-solve': '/portfolio/#love-the-solve',
    '/work/dangerous-foods': '/portfolio/#dangerous-foods',
  },
});
