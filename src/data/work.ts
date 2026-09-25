import type { ImageMetadata } from 'astro';

import dangerousFoods1 from '../assets/work/dangerous-foods-1.jpg';
import dangerousFoods2 from '../assets/work/dangerous-foods-2.jpg';
import dangerousFoods3 from '../assets/work/dangerous-foods-3.jpg';
import jack1 from '../assets/work/jack-1.jpg';
import jack2 from '../assets/work/jack-2.jpg';
import jack3 from '../assets/work/jack-3.jpg';
import aiGuide from '../assets/work/ai-guide.jpg';
import everettes1 from '../assets/work/everettes-1.png';
import everettes2 from '../assets/work/everettes-2.png';
import kaiser1 from '../assets/work/kaiser-1.jpg';
import kaiser2 from '../assets/work/kaiser-2.jpg';
import kaiser3 from '../assets/work/kaiser-3.jpg';
import kaiser4 from '../assets/work/kaiser-4.jpg';
import sauce1 from '../assets/work/sauce-1.png';
import sauce2 from '../assets/work/sauce-2.png';
import sauce3 from '../assets/work/sauce-3.png';
import redeye1 from '../assets/work/redeye-1.png';
import redeye2 from '../assets/work/redeye-2.png';
import redeye3 from '../assets/work/redeye-3.png';
import acxiomBanner from '../assets/work/acxiom-banner.jpg';
import acxiomTablet from '../assets/work/acxiom-tablet.jpg';
import acxiomCards from '../assets/work/acxiom-cards.jpg';
import acxiomGuidelines from '../assets/work/acxiom-guidelines.jpg';
import dangerousFoodsCroc from '../assets/work/dangerous-foods-croc.jpg';

export interface Slide {
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  id: string;
  name: string;
  /** Short category line shown above the name. */
  tag: string;
  /** Filter group. */
  kind: 'Healthcare' | 'B2B tech' | 'AI & product' | 'Personal';
  summary: string;
  credit: string;
  link?: { href: string; label: string };
  /** Slug of a full case study page under /work/. */
  caseStudy?: string;
  award?: { level: string; event: string; category: string };
  slides: Slide[];
  /** Dark stage behind the images (for photography), otherwise paper. */
  stage: 'dark' | 'light';
  /** Spans both grid columns with image and text side by side. */
  wide?: boolean;
}

export const projects: Project[] = [
  {
    id: 'love-the-solve',
    name: 'Love the Solve',
    tag: 'Sales enablement · Acxiom',
    kind: 'B2B tech',
    summary:
      'Acxiom quietly powers some of the world’s best marketing — and in a market fixated on AI, hardly anyone noticed. Park & Battery rebuilt the brand around one rallying cry. My part was carrying it into the field: the sales narrative, the pitch, and the go-to-market content that gave sellers proof to put in front of buyers.',
    credit: 'Acxiom × Park & Battery · Content & sales enablement',
    caseStudy: 'love-the-solve',
    award: { level: 'Silver', event: '2026 ANA Awards', category: 'Corporate Identity Program' },
    stage: 'dark',
    wide: true,
    slides: [
      { src: acxiomBanner, alt: 'Love The Solve. The tougher, the better — launch banner and pull-up stand' },
      { src: acxiomTablet, alt: 'Light-trail brand photography: a woman working on a tablet' },
      { src: acxiomCards, alt: 'Love The Solve sales and outreach cards' },
      { src: acxiomGuidelines, alt: 'Acxiom brand guidelines spreads' },
    ],
  },
  {
    id: 'dangerous-foods',
    name: 'Dangerous Foods',
    tag: 'Healthcare creative · Thermo Fisher',
    kind: 'Healthcare',
    summary:
      'An undiagnosed food allergy is a predator hiding in plain sight. So the Park & Battery team made the metaphor literal: sushi as a coiled snake, a cheese board as a shark — a campaign built to stop a scrolling clinician in their tracks. I brought brainstorming, copywriting, and oversight on this project.',
    credit: 'Thermo Fisher × Park & Battery · Contributor',
    caseStudy: 'dangerous-foods',
    link: {
      href: 'https://parkandbattery.com/our-work-cs/dangerous-foods/',
      label: 'View case study',
    },
    stage: 'dark',
    slides: [
      { src: dangerousFoodsCroc, alt: 'Some treats turn on you — an ice cream sundae shaped like a crocodile' },
      { src: dangerousFoods1, alt: 'Sometimes dinner strikes like danger — sushi as a coiled snake' },
      { src: dangerousFoods2, alt: 'Sometimes the cheese board bites back — cheese board as a shark' },
      { src: dangerousFoods3, alt: 'Dangerous Foods campaign running on LinkedIn' },
    ],
  },
  {
    id: 'jacks-new-stack',
    name: 'Jack’s New Stack',
    tag: 'Brand voice · Enterprise tech',
    kind: 'B2B tech',
    summary:
      '1,800 franchise owners needed to understand a point-of-sale migration nobody wanted to read about — especially not in the formats Jack in the Box IT typically uses to announce change. I let AI chew through the technical spec so I could spend my time on the only hard part: making it fun.',
    credit: 'Jack in the Box · 2024 · Internal sample',
    stage: 'light',
    slides: [
      { src: jack1, alt: 'What’s Next: Key Decisions and Milestones' },
      { src: jack2, alt: 'Ingredients for Improvement — the Qu system' },
      { src: jack3, alt: 'Glossary with the Jack mascot' },
    ],
  },
  {
    id: 'leadership-in-crisis',
    name: 'Leadership in Crisis',
    tag: 'Thought leadership · Kaiser Permanente',
    kind: 'Healthcare',
    summary:
      'Nobody trains a manager for the day someone on their team loses everything. This is the playbook for that day. It was built for Kaiser Permanente on a single idea: long after the details blur, people remember how you made them feel. It covers everything from the first few minutes of a crisis to leading a team back out of one, whether it’s a natural disaster, workplace violence, or significant layoffs.',
    credit: 'Kaiser Permanente · 2025',
    link: {
      href: 'https://business.kaiserpermanente.org/content/dam/kp/ccp/documents/leading-through-disruption-playbook.pdf',
      label: 'View the playbook',
    },
    stage: 'light',
    wide: true,
    slides: [
      { src: kaiser1, alt: 'Head and Heart: Supporting your employees when they need you most' },
      { src: kaiser2, alt: 'Assessing disruptive events framework' },
      { src: kaiser3, alt: 'Stages: Safety and Basic needs' },
      { src: kaiser4, alt: 'Crisis impact statistics' },
    ],
  },
  {
    id: 'ai-guide',
    name: 'A No-Bullsh*t Guide to AI & B2B Content',
    tag: 'AI enablement · Park & Battery',
    kind: 'AI & product',
    summary:
      'A field guide that gets skeptical B2B marketers to actually use AI. We poked holes in the dread first, then handed over real prompts and workflows. The result? Peers who said, “AI can do that now?!”',
    credit: 'Park & Battery · 2025 · Lead writer',
    link: {
      href: 'https://parkandbattery.com/wp-content/uploads/2025/02/2025_B2BMX_AI-for-Marketers_Feb21.pdf',
      label: 'View the guide',
    },
    stage: 'dark',
    slides: [{ src: aiGuide, alt: 'A No-Bullsh*t Guide to AI and B2B Content cover' }],
  },
  {
    id: 'pick-your-method',
    name: 'Pick Your Method',
    tag: 'Interactive demo · Everette’s Coffee',
    kind: 'AI & product',
    summary:
      'John, a former agency colleague that took up coffee roasting, wanted content to keep things fresh. After some listening, what he actually needed was more interactive product information for customers and the stores he sells to. I pulled pairing logic straight from his own product notes and had a working prototype by that afternoon.',
    credit: 'Everette’s Coffee · Concept',
    stage: 'light',
    slides: [
      { src: everettes1, alt: 'Pour Over method panel with Sunbean roast pairing' },
      { src: everettes2, alt: 'Compare-all-methods table with Everette’s roast pick per method' },
    ],
  },
  {
    id: 'developer-burnout',
    name: 'Getting to the Bottom of Developer Burnout in Gaming',
    tag: 'Long-form data campaign · Sauce Labs',
    kind: 'B2B tech',
    summary:
      'A third of developers admit they’ve shipped a buggy game before it was ready. Nobody wanted to say why out loud. I designed the survey and wrote the report that got them talking — 150 developers and 500 gamers, on the pressure, burnout, and harassment behind every rushed launch. Full report, plus a companion infographic for the skimmers.',
    credit: 'Sauce Labs × Walker Sands · Survey design, lead writer',
    link: {
      href: 'https://drive.google.com/file/d/17fipRrG7-rNsTB4lH_OZ5wY881ASLxwp/view',
      label: 'View the full report',
    },
    stage: 'light',
    wide: true,
    slides: [
      {
        src: sauce1,
        alt: 'Pressure to release is a boss fight — 33% of developers say they have released a game under pressure before it’s fully debugged or ready',
      },
      { src: sauce2, alt: 'When gamers rage quit — chart of gamer reactions to bugs' },
      { src: sauce3, alt: 'Negative feedback takes its toll — chart of developer mental and physical health impacts' },
    ],
  },
  {
    id: 'red-paper-box',
    name: 'The Red Paper Box',
    tag: 'Personal project · RedEye archive',
    kind: 'Personal',
    summary:
      'I build personal projects to keep learning how dangerous I can be with the latest AI models in my hands. Recently, I built a living archive of RedEye, so dozens of former colleagues could find their old work again in one place. All of it was solo — from scraping the Internet Archive for old issues to building out special collections.',
    credit: 'Personal project · 2,304 issues',
    link: {
      href: 'https://mickswasko-type.github.io/red-paper-box/',
      label: 'Visit the archive',
    },
    stage: 'light',
    wide: true,
    slides: [
      { src: redeye1, alt: 'Chicago News Archive home — a tabloid archiving project, 2008 to 2016' },
      { src: redeye2, alt: 'Featured collections and the full archive — 2,304 issues, with RedEye front pages' },
      { src: redeye3, alt: 'On the Record: The Long March to Marriage — a curated front-page collection' },
    ],
  },
];
