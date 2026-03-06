export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  year: string;
  role: string;
  duration: string;
  challenge: string;
  solution: string;
  outcomes: { value: string; label: string }[];
  process: { label: string; desc: string }[];
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'finova',
    title: 'Finova',
    subtitle: 'Banking App Redesign',
    description:
      'A full redesign of a consumer banking app serving 500k users. Focused on simplifying complex financial flows and improving accessibility scores by 40%.',
    tags: ['Product Design', 'UX Research', 'Figma'],
    color: '#dff0e8',
    year: '2024',
    role: 'Lead Product Designer',
    duration: '6 months',
    challenge:
      'Finova\'s legacy app had a 68% task-completion rate for core flows like transfers and bill pay — far below industry benchmarks. Users were dropping off during multi-step processes and accessibility scores were failing WCAG 2.1 AA standards.',
    solution:
      'We ran 3 rounds of usability testing with 60 participants to identify friction points, then rebuilt the entire information architecture. Complex flows were broken into single-purpose screens with clear progress indicators and contextual guidance throughout.',
    outcomes: [
      { value: '+40%', label: 'Accessibility score' },
      { value: '94%', label: 'Task completion' },
      { value: '−32%', label: 'Support tickets' },
      { value: '4.8★', label: 'App store rating' },
    ],
    process: [
      { label: 'Discovery', desc: 'Stakeholder interviews, analytics review, competitive audit' },
      { label: 'Research', desc: '3 rounds of usability testing with 60 participants' },
      { label: 'IA & Flows', desc: 'Rebuilt information architecture and core user flows' },
      { label: 'Design', desc: 'High-fidelity screens, component library, handoff' },
    ],
  },
  {
    id: 'arkh',
    title: 'Arkh',
    subtitle: 'Design System',
    description:
      'Built a comprehensive multi-brand design system from scratch — 200+ components, full token architecture, and documentation adopted by 4 product teams.',
    tags: ['Design Systems', 'Tokens', 'Documentation'],
    color: '#e8e0f0',
    year: '2023',
    role: 'Design Systems Lead',
    duration: '9 months',
    challenge:
      'Four product teams were building inconsistently, duplicating UI work, and shipping at different quality levels. There was no single source of truth for color, typography, or component patterns.',
    solution:
      'Designed and built Arkh — a multi-brand token system with 200+ Figma components mirrored in code. Worked directly with engineering to establish contribution workflows and documentation standards that teams actually use.',
    outcomes: [
      { value: '200+', label: 'Components' },
      { value: '4', label: 'Teams adopted' },
      { value: '−60%', label: 'Design-dev handoff time' },
      { value: '100%', label: 'Brand consistency' },
    ],
    process: [
      { label: 'Audit', desc: 'Catalogued 400+ existing UI patterns across 4 products' },
      { label: 'Tokens', desc: 'Built multi-brand token architecture for color, type, spacing' },
      { label: 'Components', desc: 'Designed 200+ Figma components with full variant coverage' },
      { label: 'Docs', desc: 'Usage guidelines, contribution workflow, changelog' },
    ],
  },
  {
    id: 'bloom',
    title: 'Bloom',
    subtitle: 'Health & Wellness Platform',
    description: 'End-to-end product design for a habit-tracking and coaching app.',
    tags: ['UI Design', 'Mobile', 'Branding'],
    color: '#f0e8df',
    year: '2023',
    role: 'Product Designer',
    duration: '4 months',
    challenge:
      'Bloom needed a mobile-first experience that felt warm and motivating — not clinical. Previous versions of the app had high churn after day 7 because the habit system felt rigid and punishing.',
    solution:
      'Redesigned around a flexible habit model with streak-repair mechanics and a celebration-first approach. Built a warm visual identity with soft gradients and custom illustration guidelines to differentiate from sterile wellness apps.',
    outcomes: [
      { value: '+55%', label: 'Day-30 retention' },
      { value: '−40%', label: 'Day-7 churn' },
      { value: '4.7★', label: 'App store rating' },
      { value: '2×', label: 'Session length' },
    ],
    process: [
      { label: 'Brand', desc: 'Visual identity, color system, custom illustration style' },
      { label: 'UX', desc: 'Habit model redesign, onboarding, progress mechanics' },
      { label: 'UI', desc: 'Mobile-first screens for iOS and Android' },
      { label: 'Test', desc: 'Beta testing with 200 users, 2 iteration rounds' },
    ],
  },
  {
    id: 'nord',
    title: 'Nord',
    subtitle: 'E-commerce Rebrand',
    description: 'Full visual identity refresh including packaging, web, and marketing.',
    tags: ['Branding', 'Art Direction', 'Web'],
    color: '#dfe8f0',
    year: '2022',
    role: 'Art Director',
    duration: '3 months',
    challenge:
      'Nord\'s existing brand felt dated and generic — indistinguishable from competitors. They were losing ground to newer DTC brands with stronger visual identities and needed a complete overhaul before a major product launch.',
    solution:
      'Developed a refined Scandinavian-minimalist identity system: restrained palette, editorial typography, and a modular grid that works across packaging, web, and social. Directed a 2-day photo shoot to create the hero imagery.',
    outcomes: [
      { value: '+28%', label: 'Conversion rate' },
      { value: '3×', label: 'Social engagement' },
      { value: '12', label: 'Press mentions' },
      { value: '100%', label: 'Brand refresh scope' },
    ],
    process: [
      { label: 'Strategy', desc: 'Brand positioning, competitor mapping, audience research' },
      { label: 'Identity', desc: 'Logotype, color palette, typography system' },
      { label: 'Shoot', desc: 'Art directed 2-day product photography shoot' },
      { label: 'Launch', desc: 'Web, packaging, social templates, brand guidelines' },
    ],
  },
  {
    id: 'pulse',
    title: 'Pulse',
    subtitle: 'SaaS Analytics Dashboard',
    description: 'Data-heavy dashboard design with a focus on clarity and usability.',
    tags: ['UI Design', 'Data Viz', 'Prototyping'],
    color: '#f0f0df',
    year: '2022',
    role: 'UI/UX Designer',
    duration: '5 months',
    challenge:
      'Pulse\'s power users were spending too long hunting for key metrics across a fragmented dashboard. The visualisation choices were inconsistent and often misleading, eroding trust in the product.',
    solution:
      'Designed a customisable dashboard system with a strict chart taxonomy — each data type maps to one chart type. Built a drag-and-drop widget system so users can create the view that matters to them.',
    outcomes: [
      { value: '−45%', label: 'Time to insight' },
      { value: '+33%', label: 'Feature adoption' },
      { value: '98%', label: 'User satisfaction' },
      { value: '6×', label: 'Dashboard templates' },
    ],
    process: [
      { label: 'Audit', desc: 'Heuristic evaluation, user interviews with 20 power users' },
      { label: 'Taxonomy', desc: 'Data visualisation standards and chart decision tree' },
      { label: 'Design', desc: 'Widget library, layout system, responsive breakpoints' },
      { label: 'Prototype', desc: 'Interactive prototype tested with 30 users' },
    ],
  },
  {
    id: 'cora',
    title: 'Cora',
    subtitle: 'Social Campaign',
    description: 'Art direction and motion guidelines for a global social media campaign.',
    tags: ['Art Direction', 'Motion', 'Social'],
    color: '#f0dfdf',
    year: '2021',
    role: 'Art Director',
    duration: '2 months',
    challenge:
      'Cora needed a campaign that would work across 12 markets simultaneously, with local teams adapting assets without losing visual coherence or diluting the brand message.',
    solution:
      'Created a modular campaign system: a core visual language with defined variables (color themes, type lockups, motion principles) that local teams could swap out for localisation while keeping the campaign instantly recognisable.',
    outcomes: [
      { value: '12', label: 'Markets launched' },
      { value: '4.2M', label: 'Impressions' },
      { value: '+180%', label: 'Engagement vs prior' },
      { value: '3', label: 'Industry awards' },
    ],
    process: [
      { label: 'Concept', desc: 'Campaign concept, mood boards, visual language definition' },
      { label: 'Templates', desc: 'Modular asset system for 8 formats across 4 platforms' },
      { label: 'Motion', desc: 'Animation principles and motion templates in After Effects' },
      { label: 'Handoff', desc: 'Brand guide for local market teams with usage examples' },
    ],
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return PROJECTS.find(p => p.id === id);
}

export function getNextProject(id: string): ProjectData | undefined {
  const idx = PROJECTS.findIndex(p => p.id === id);
  return PROJECTS[(idx + 1) % PROJECTS.length];
}
