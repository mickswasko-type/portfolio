// Where the site lives. If it moves to a custom domain or a
// username.github.io repo, change `site` and set `base` to '/'.
export const siteConfig = {
  site: 'https://mickswasko-type.github.io',
  base: '/portfolio',
  name: 'Mick Swasko',
  title: 'Mick Swasko — Make it make sense.',
  description:
    'Reporter by training. Strategist by trade. Writer by instinct. Healthcare, B2B tech, and the occasional Blue Line joke.',
  /** Link-preview card, rendered by `npm run og`. */
  ogImage: 'og.png',
  ogImageAlt: 'Make it make sense. Mick Swasko, former Chicago Tribune and RedEye reporter.',
  email: 'mickswasko@gmail.com',
  resumePdf: 'mick-swasko-resume.pdf',
  location: 'Lombard, Illinois',
  linkedin: 'https://www.linkedin.com/in/mick-swasko-95342512/',
  /** Traffic counting. Paste the Umami "Website ID" here to switch it on; empty = no tracking at all. */
  umamiId: 'b878e095-ab69-43ef-a1e5-67ab50b968e5',

  /** The /local services pages. See docs/local-site.md before launching. */
  local: {
    /** Flip to true when /local goes public. Until then every page carries a noindex tag. */
    launched: false,
    /** Static-form provider endpoint (Formspree, Web3Forms or similar). Empty = the form is replaced by an email link. */
    formEndpoint: '',
    /** Extra hidden fields a provider needs, e.g. { access_key: '...' } for Web3Forms. The inbox is set in the provider's dashboard, never here. */
    formFields: {} as Record<string, string>,
    /** FAQ answer for "How fast?". Empty hides that question. */
    turnaround: '',
    /** Published slides from the Helen Plum program. Empty hides the slides links. */
    slidesUrl: '',
    /** Date of the library talk, e.g. 'October 14'. Empty leaves it off the handout. */
    talkDate: '',
  },
};
