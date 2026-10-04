// Copy and content for the /local pages. Lead offer is the first service (spec decision 7).
import { siteConfig } from '../../site.config';

const { turnaround } = siteConfig.local;

export const rotatingWords = ['flyers', 'websites', 'newsletters', 'social posts', 'handouts', 'emails', 'creative assists'];

/** What readers with reduced motion, screen readers and search engines get instead of the animation. */
export const staticHeadline = 'Neighborhood flyers, menus, websites, and more that make you happy.';

export const services = [
  {
    id: 'flyer',
    title: 'Fix my flyer or menu',
    lead: true,
    blurb: 'You send what you have. I return a clean, accurate, print-ready version, fact-checked.',
    includes: 'Copy, layout, one fact-check pass, two rounds of changes, a print-ready PDF, and a social-size image.',
    goodFor: 'A restaurant, shop, or event.',
    price: 'Flyers from $225 · Menus from $350',
  },
  {
    id: 'starter',
    title: 'Words that sound like you',
    tag: 'Starter pack',
    blurb: 'Up to three website pages, a Google Business Profile rewrite, and three emails.',
    goodFor: 'A business with a website nobody has touched in years.',
    price: 'From $950',
  },
  {
    id: 'monthly',
    title: 'Marketing, monthly',
    blurb: 'A steady stream of social posts, one email, and one flyer or graphic each month.',
    goodFor: 'Owners who know they should post and never do.',
    price: 'From $500 a month, month to month',
  },
];

export const steps = [
  { n: '1', head: 'Tell me what you’ve got.', body: 'A free 20-minute conversation. Bring the flyer, the website, or just the problem.' },
  { n: '2', head: 'I draft, you steer.', body: 'You see drafts early and tell me what’s right and what’s off.' },
  {
    n: '3',
    head: 'You get finished work.',
    body: 'Plus a short Slop Test check: what I verified and what to double-check.',
  },
];

export const faq = [
  {
    q: 'Do you use AI?',
    a: 'Yes, for drafts and options. Every fact, price, and word is checked by a person.',
  },
  {
    q: 'What does it cost?',
    a: 'See the starting prices above. Smaller jobs are also available hourly at $75. Every project gets a written quote first.',
  },
  // Hidden until Mick supplies real turnaround times (docs/local-site.md).
  ...(turnaround ? [{ q: 'How fast?', a: turnaround }] : []),
  {
    q: 'Do you work with nonprofits and freelancers?',
    a: 'Yes.',
  },
  {
    q: 'What if I just want the free checklist?',
    a: 'Take it. No strings.',
  },
];

/** Real quotes only. The section stays hidden while this is empty. */
export const testimonials: { quote: string; name: string; business?: string }[] = [];

export const slopQuestions = [
  'Would a regular recognize us in this?',
  'Is every word and number true?',
  'Could a competitor paste this on their site unchanged?',
];
