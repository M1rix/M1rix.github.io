import { PortfolioProject } from '../models/project.models';

const defaultCaseStudySections = (
  title: string,
  domain: string,
  visualPrefix: string,
): PortfolioProject['sections'] => [
  {
    id: 'overview',
    number: '#01',
    title: 'Overview',
    visualType: 'mockup',
    body: [
      `The main challenge behind ${title} is keeping ${domain} clear while the domain rules stay strict.`,
      'This placeholder case study is structured for later replacement with real metrics, screenshots, links and implementation notes.',
    ],
  },
  {
    id: 'problem',
    number: '#02',
    title: 'Problem',
    visualType: 'metrics',
    body: [
      'Business systems usually fail when screens are designed before the workflow is understood. The product has to reveal states, permissions and next actions without turning into a maze.',
      `${visualPrefix} is framed around workflow clarity first: what changed, who can act, what data matters, and what needs audit visibility.`,
    ],
  },
  {
    id: 'architecture',
    number: '#03',
    title: 'Architecture',
    visualType: 'architecture',
    body: [
      'The architecture separates workflow responsibilities from shared reference data, keeping backend contracts explicit and the Angular UI predictable.',
      'The direction favors Java/Spring services, relational data, typed frontend boundaries and deployment patterns that remain understandable after release.',
    ],
  },
  {
    id: 'ui-flow',
    number: '#04',
    title: 'UI flow',
    visualType: 'ui-flow',
    body: [
      'The interface follows the sequence of operator decisions instead of mirroring database tables. Primary actions stay close to context, and secondary information remains visible through compact cards and status surfaces.',
      'The result is a calmer admin experience: fewer hidden steps, fewer ambiguous states and less support friction.',
    ],
  },
  {
    id: 'result',
    number: '#05',
    title: 'Result',
    visualType: 'code',
    body: [
      'Delivery is designed around small, reviewable increments: usable workflow first, polish second, and observability before production handoff.',
      'The intended outcome is a system that feels premium for operators because it is structurally clear for engineers.',
    ],
  },
];

export const projects: PortfolioProject[] = [
  {
    slug: 'reportix',
    title: 'Reportix',
    year: '2025',
    role: 'Product builder / system designer',
    promise: 'Internal reporting system for structured team updates, project visibility and Telegram-ready report exports.',
    tags: ['Java', 'Spring', 'Angular', 'SQL', 'Git'],
    sections: defaultCaseStudySections('Reportix', 'daily reporting, project visibility and export-ready communication', 'Reportix'),
    accent: 'blue',
  },
  {
    slug: 'hostplanner',
    title: 'Hostplanner',
    year: '2026',
    role: 'Architecture and domain modeling',
    promise: 'Restaurant reservation and floor-management concept with business profiles, staff roles and table planning.',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Angular'],
    sections: defaultCaseStudySections('Hostplanner', 'reservations, table planning and staff coordination', 'Hostplanner'),
    accent: 'green',
  },
  {
    slug: 'team-devkit',
    title: 'Team DevKit',
    year: '2026',
    role: 'Product idea / frontend implementation',
    promise: 'Developer onboarding utility concept for preparing team workstations with common engineering tools.',
    tags: ['Angular', 'Electron/Web', 'Docker', 'Tooling'],
    sections: defaultCaseStudySections('Team DevKit', 'developer onboarding, installers and repeatable workstation setup', 'Team DevKit'),
    accent: 'slate',
  },
  {
    slug: 'jhipster-template-migration',
    title: 'JHipster Template Migration',
    year: '2026',
    role: 'Angular migration / architecture cleanup',
    promise: 'Structured migration from default JHipster webapp to a custom Angular template architecture.',
    tags: ['JHipster', 'Angular', 'Tailwind CSS', 'Architecture'],
    sections: defaultCaseStudySections('JHipster Template Migration', 'generated boundaries, custom Angular structure and maintainable migrations', 'JHipster migration'),
    accent: 'orange',
  },
  {
    slug: 'rift-party',
    title: 'Rift Party',
    year: '2026',
    role: 'Realtime prototype / game UI',
    promise: 'Short-session multiplayer browser game prototype with realtime movement and lightweight UX.',
    tags: ['Angular', 'Socket.IO', 'Game UI', 'Realtime'],
    sections: defaultCaseStudySections('Rift Party', 'realtime sessions, game UI feedback and short-session play loops', 'Rift Party'),
    accent: 'violet',
  },
];
