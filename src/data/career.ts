export interface Role {
  org: string;
  title: string;
  dates: string;
  /** Short label for the timeline column. */
  years: string;
  summary: string;
  points: string[];
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
  },
  {
    org: '1871 Chicago',
    title: 'Manager of Communications',
    dates: 'Oct. 2016 – Nov. 2017',
    years: '2016–17',
    summary:
      'PR and content strategy for one of the nation’s premier tech startup incubators, working with mayors, governors, and Fortune 500 CEOs.',
    points: [],
  },
  {
    org: 'Shedd Aquarium',
    title: 'Communications Coordinator',
    dates: 'Apr. 2015 – Oct. 2016',
    years: '2015–16',
    summary:
      'Translated science for broad public audiences, coordinating media for researchers, leadership, and animal stories. Produced three annual Impact Reports.',
    points: [],
  },
  {
    org: 'Chicago Tribune',
    title: 'Staff Reporter — RedEye & TribLocal',
    dates: 'Dec. 2008 – Apr. 2015',
    years: '2008–15',
    summary:
      'Front-page features and breaking news on Chicago politics, schools, and government. Ran social media across RedEye properties, and photographed, edited, and designed weekly print editions.',
    points: [],
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
