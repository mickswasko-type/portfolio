# /local services site

Three pages that sit next to the portfolio and share its fonts, colors and components:

| URL | File | What it is |
|---|---|---|
| `/local/` | `src/pages/local/index.astro` | Services landing page |
| `/local/slop-test/` | `src/pages/local/slop-test.astro` | The QR destination. Also prints to one US Letter page as the handout |
| `/local/thanks/` | `src/pages/local/thanks.astro` | Form confirmation (always `noindex`) |

**Status: live** (`LOCAL_MODE=live`, set 2026-10-04). The Slop Test page and everything that mentions it are off for now (`LOCAL_SLOP_TEST` unset). The contact form isn't connected yet, so the contact section shows an "Email me" button.

## The switch

One repo variable, `LOCAL_MODE`, controls whether the pages exist on the live site. Flipping it never touches a commit:

```
npm run local -- status     # what it is now
npm run local -- preview    # built and reachable by URL, hidden from search (noindex)
npm run local -- live       # built and indexable
npm run local -- off        # gone from the site
npm run local -- slop-test on|off   # the Slop Test page and every mention of it
```

Each one sets a repo variable (`LOCAL_MODE` or `LOCAL_SLOP_TEST`) and re-runs the deploy (about a minute). The portfolio's "Local services" nav link appears only while `LOCAL_MODE` is `preview` or `live`, so turning the site off removes the link too. The same thing works from the browser: GitHub repo → Settings → Secrets and variables → Actions → Variables → `LOCAL_MODE`, then Actions → "Build & deploy" → Run workflow.

How it works: the deploy workflow runs `scripts/local-prune.sh` before the build. Unless `LOCAL_MODE` is `preview` or `live`, it deletes `src/pages/local` and `public/local` from the CI checkout, so with the switch off there are no `/local` files in the site at all. Unset means off. The merged code is inert until the variable is set.

What "off" does not hide: the repo is public, so the page source, copy and prices stay readable on GitHub. Pages Cache for up to about 10 minutes after a deploy, so a just-hidden page can linger briefly. A `preview` page is `noindex`, so search engines shouldn't pick it up, but anyone with the URL can open it.

## Before launch

Everything Mick has to supply sits in one place, `site.config.ts` under `local`:

| Setting | What to put there | If left empty |
|---|---|---|
| `mode` / `launched` | Not edited by hand. Set by `LOCAL_MODE` (see above). `live` removes the `noindex` tag. | Pages carry `noindex, nofollow` |
| `formEndpoint` | Formspree or Web3Forms URL. The inbox is chosen in the provider's dashboard. Can also be set without a commit: `gh variable set LOCAL_FORM_ENDPOINT --body <url>`, then re-run the deploy. | The form is replaced by an email link |
| `formFields` | Hidden fields the provider needs, e.g. `{ access_key: '…' }` for Web3Forms | none |
| `turnaround` | The answer to "How fast?" | That FAQ question is hidden |
| `slidesUrl` | Published slides from the Helen Plum program | Slides links are hidden |
| `talkDate` | e.g. `'October 14'` | Left off the handout |

Other things to do:

1. **Prices** are in `src/data/local.ts` (`services`). Edit there.
2. **Testimonials**: add real quotes to `testimonials` in `src/data/local.ts`. The section stays hidden while the list is empty.
3. **QR code**: `npm run qr` writes `public/local/qr-slop-test.svg` and `.png` (1200px) for the closing slide. If the address changes (custom domain), run `npm run qr -- https://yourdomain.com/local/slop-test/?src=library`, then rebuild. The handout's QR uses the same SVG.
4. **Link preview**: `npm run og:local` re-renders `public/local/og.png` from `scripts/og/og-local.html`.
5. **Check first**: whether Lombard requires registration or a home-occupation permission before taking paying local clients.

## How it behaves

- **Headline**: plays through the seven words once, settles on "flyers", then stops. A Pause button sits in the flag row (WCAG 2.2.2); hovering, focusing or tapping the headline also pauses it. With reduced motion it shows the static sentence. Without JavaScript it reads "Neighborhood flyers that make you happy."
- **Email**: never in the page source. The address ships base64-encoded and is only assembled when someone hovers, focuses, touches or clicks the "email me directly" link. The shared header and footer on `/local` pages don't print it either.
- **Source tagging**: `?src=library` is stored for the session on any `/local` page and sent with the form as `source`. Umami also records the full URL, so visits by source show up there.
- **Analytics**: the same Umami script as the rest of the site, plus a `local-form-submit` event.
- **Spam**: invisible honeypot field. A filled honeypot gets the thank-you page and sends nothing.

## Testing without a form provider

`PUBLIC_LOCAL_FORM_ENDPOINT=http://localhost:4500/submit npm run build` builds with a test endpoint (no config edit needed). `npm run dev` always shows the form and pretends to send.
