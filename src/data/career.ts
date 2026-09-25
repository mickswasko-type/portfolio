export interface Role {
  org: string;
  title: string;
  dates: string;
  /** Short label for the timeline column. */
  years: string;
  summary: string;
  points: string[];
  /** Full resume bullets, used on /resume/ and in the PDF. */
  bullets: string[];
}

export const career: Role[] = [
  {
    org: 'Park & Battery',
    title: 'Director of Content',
    dates: 'May 2024 – Feb. 2026',
    years: '2024–26',
    summary:
      'Led content strategy and execution for clients across healthcare, AI and technology, fintech, and professional services.',
    points: [
      'Drove messaging and campaign content for major health plan product launches, including sales enablement built for the buying committee.',
      'Built content strategy and editorial infrastructure for an emerging medical category from the ground up — research, messaging, taxonomy, governance, and execution.',
      'Authored the agency’s internal white paper on AI adoption and helped shape its view on generative search.',
      'Managed and mentored a two-person writing team, including a senior writer promoted during my tenure.',
    ],
    bullets: [
      "Led content strategy and execution for clients across healthcare, AI/technology, fintech, and professional services — developing comprehensive programs, from messaging hierarchies to buying-stage content maps, tied to buyer journey stages and business and pipeline objectives",
      "Drove messaging and campaign content for major health plan product launches targeting employer and health plan buyers — influencing initial positioning and owning execution across formats and channels, including sales enablement content built for the buying committee",
      "Built content strategy and editorial infrastructure for an emerging medical category from the ground up, spanning research, messaging framework, content architecture and taxonomy, editorial calendar, governance standards, ad concepts, and execution",
      "Orchestrated website and digital content strategy for client engagements — helping shape content architecture, page hierarchy, and SEO-informed content modeling, and partnering with UX and design so structure and substance held together on the page",
      "Produced long-form thought leadership — including stakeholder-interview-driven white papers and research reports — using AI-augmented workflows to improve efficiency without sacrificing depth or voice",
      "Authored internal white paper on AI adoption for creative teams and served as early advocate and tester of emerging tools across the agency, while helping develop the agency ethos on how generative search and AI assistants are reshaping content discovery and what brands should build for it",
      "Managed and mentored two-person writer team, including a senior writer promoted during tenure; provided proactive coaching, editorial guidance, and people support beyond formal requirements",
      "Contributed creative strategy and campaign concepting to new business pitches and BD efforts",
      "Served as primary client contact — presenting strategies, facilitating feedback, and building long-term partnerships across regulated and complex industries",
    ],
  },
  {
    org: 'Walker Sands',
    title: 'Senior Writer / Associate Director, Content',
    dates: 'Nov. 2017 – May 2024',
    years: '2017–24',
    summary:
      'Campaign-ready content for SMB to Fortune 500 B2B technology companies across IT, cloud, fintech, logistics, and emerging tech.',
    points: [
      'Led data-driven programs end to end: survey design, research vendors, and the thought leadership and PR campaigns built on the findings.',
      'Among the first at the agency to put generative AI into production content workflows.',
      'Senior editor, style guide owner, and content quality lead across multiple accounts at once.',
    ],
    bullets: [
      "Developed and executed campaign-ready content for SMB to Fortune 500 B2B technology companies across IT, cloud, FinTech, logistics, and emerging tech verticals",
      "Led data-driven content programs: designed surveys, collaborated with research vendors, and translated findings into high-performing thought leadership and PR campaigns measured against demand and pipeline goals",
      "Among first at agency to integrate generative AI tools into production content workflows — built early processes for AI-augmented research, drafting, and quality review",
      "Served as senior editor, style guide owner, and content quality lead — defining editorial standards, metadata, and taxonomy conventions — across multiple client accounts simultaneously",
      "Contributed significantly to new business pitches and client upsell opportunities through strategic content proposals",
    ],
  },
  {
    org: '1871 Chicago',
    title: 'Manager of Communications',
    dates: 'Oct. 2016 – Nov. 2017',
    years: '2016–17',
    summary:
      'PR and content strategy for one of the nation’s premier tech startup incubators, working with mayors, governors, and Fortune 500 CEOs.',
    points: [],
    bullets: [
      "Led PR and content strategy for one of the nation’s premier tech startup incubators, managing communications across social and traditional media",
      "Coordinated with high-profile stakeholders including mayors, governors, and Fortune 500 CEOs",
      "Elevated the 1871 brand alongside emerging Chicago entrepreneurs and startup founders",
    ],
  },
  {
    org: 'Shedd Aquarium',
    title: 'Communications Coordinator',
    dates: 'Apr. 2015 – Oct. 2016',
    years: '2015–16',
    summary:
      'Translated science for broad public audiences, coordinating media for researchers, leadership, and animal stories. Produced three annual Impact Reports.',
    points: [],
    bullets: [
      "Coordinated media opportunities for researchers, aquarium leadership, and animal stories — translating science for broad public audiences",
      "Developed and produced three annual Shedd Aquarium Impact Reports",
      "Managed joint partnership storytelling and media relationship building",
    ],
  },
  {
    org: 'Chicago Tribune',
    title: 'Staff Reporter — RedEye & TribLocal',
    dates: 'Dec. 2008 – Apr. 2015',
    years: '2008–15',
    summary:
      'Front-page features and breaking news on Chicago politics, schools, and government. Ran social media across RedEye properties, and photographed, edited, and designed weekly print editions.',
    points: [],
    bullets: [
      "Reported, wrote, and produced front-page features and breaking news for RedEye (2011–2013) and TribLocal (2008–2011), covering Chicago politics, schools, and government",
      "Managed social media content across all RedEye properties — early-stage real-time digital audience building",
      "Photographed, wrote, edited, and designed content for weekly print editions",
    ],
  },
];

export const capabilities = [
  {
    head: 'Strategy',
    items: [
      'Content strategy & messaging hierarchies',
      'Buyer journey & buying-stage content maps',
      'Content architecture & taxonomy',
      'SEO-informed content modeling',
      'Generative search strategy',
    ],
  },
  {
    head: 'Editorial',
    items: [
      'Editorial direction & governance',
      'Long- and short-form writing',
      'Style guides & quality standards',
      'Team leadership & mentorship',
      'Client presentation',
    ],
  },
  {
    head: 'Research',
    items: [
      'Survey design & research partners',
      'Data-driven thought leadership',
      'White papers & research reports',
      'Sales enablement',
      'Earned-media campaigns',
    ],
  },
  {
    head: 'AI',
    items: [
      'AI-augmented research & drafting',
      'Workflow design & quality review',
      'AI adoption for creative teams',
      'Rapid prototypes & interactive demos',
      'Building for AI assistants & search',
    ],
  },
];

export const industries = [
  'Healthcare',
  'Life Sciences',
  'Medical Devices',
  'IT & Cloud',
  'FinTech',
  'MarTech',
  'Cybersecurity',
  'SaaS',
  'Nonprofit',
  'Government & Public Sector',
  'Education',
  'Legal',
  'Artificial Intelligence',
];

export const coreSkills = [
  'Content Strategy',
  'Editorial Direction',
  'Long & Short-Form Writing',
  'Healthcare Marketing & Regulatory Compliance',
  'B2B Buyer Journey Mapping',
  'Product Messaging & Positioning',
  'Data-Driven Campaigns & Survey Design',
  'Team Leadership & Mentorship',
  'Client Presentation & Stakeholder Management',
  'AI-Augmented Content Workflows',
  'Website & Digital Content Strategy',
  'Content Architecture & Taxonomy',
  'SEO-Informed Content Modeling',
  'Sales Enablement',
  'Content Governance & Performance Measurement',
  'Generative Search Strategy',
];

export const summary =
  'Storied newspapers. Historic aquariums. Startup incubators. Regulated healthcare systems. Burgeoning B2B brands. In a career spent at the intersection of journalism and marketing, the assignments have varied wildly — but the through-line never has. Whether it’s a front-page byline, a clinical white paper, or a product launch campaign, good content starts with an open ear and hinges on curiosity, empathy, and the discipline to get it right. I bring the instincts of a reporter, the eye of a managing editor, and the strategic fluency to align content with buyer journeys, business objectives, and brand authority, now augmented by genuine fluency in AI tools, learned through practice and applied with purpose.';
