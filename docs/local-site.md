# /local services site

Three pages that sit next to the portfolio and share its fonts, colors and components:

| URL | File | What it is |
|---|---|---|
| `/local/` | `src/pages/local/index.astro` | Services landing page |
| `/local/slop-test/` | `src/pages/local/slop-test.astro` | The QR destination. Also prints to one US Letter page as the handout |
| `/local/thanks/` | `src/pages/local/thanks.astro` | Form confirmation (always `noindex`) |

**Status: designed and tested, not launched.** It lives on the `local-services` branch and has not been pushed. The site deploys from `main`, so nothing here goes public until that branch is merged.

## Before launch

Everything Mick has to supply sits in one place, `site.config.ts` under `local`:

| Setting | What to put there | If left empty |
|---|---|---|
| `launched` | `true` when going public. Removes the `noindex` tag. | Pages carry `noindex, nofollow` |
| `formEndpoint` | Formspree or Web3Forms URL. The inbox is chosen in the provider's dashboard. | The form is replaced by an email link |
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
