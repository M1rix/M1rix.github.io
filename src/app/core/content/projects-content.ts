import { PortfolioProject } from '../models/project.models';

const defaultCaseStudySections = (
  title: string,
  domain: string,
  visualPrefix: string,
): PortfolioProject['sections'] => [
  {
    id: 'about',
    number: '#01',
    title: 'About',
    visualType: 'mockup',
    body: [
      `The core problem behind ${title} is operational clarity. The product has to make ${domain} easier to run without hiding the real business rules behind a glossy interface.`,
      'The mocked case study is written as an editable product breakdown. Real project metrics, screenshots, and business constraints can replace this content later without changing the page structure.',
    ],
  },
  {
    id: 'architecture',
    number: '#02',
    title: 'Architecture',
    visualType: 'architecture',
    body: [
      'The architecture separates workflow responsibilities from shared reference data, keeping the UI predictable and the backend contracts explicit.',
      `${visualPrefix} favors typed boundaries, repeatable page patterns, and a clear distinction between commands, detail views, and reporting surfaces.`,
    ],
  },
  {
    id: 'ui-flow',
    number: '#03',
    title: 'UI Flow',
    visualType: 'ui-flow',
    body: [
      'The interface is shaped around the sequence of decisions an operator has to make, not around database tables.',
      'Primary actions stay close to the context they affect, while secondary information remains visible through compact cards, status pills, and stable detail regions.',
    ],
  },
  {
    id: 'data-backend',
    number: '#04',
    title: 'Data and Backend',
    visualType: 'code',
    body: [
      'The backend direction assumes Java/Spring services, PostgreSQL-backed relational data, validation at the boundary, and endpoints that can be audited and supported after release.',
      'The important product work is making states, permissions, and failure paths visible enough that support teams can understand what happened.',
    ],
  },
  {
    id: 'delivery-result',
    number: '#05',
    title: 'Delivery and Result',
    visualType: 'metrics',
    body: [
      'Delivery is designed around small, reviewable increments: usable workflows first, polish second, and instrumentation before production handoff.',
      'The intended result is a system that feels direct for operators and maintainable for engineers who have to extend it later.',
    ],
  },
];

export const projects: PortfolioProject[] = [
  {
    slug: 'hostplanner',
    title: 'Hostplanner',
    year: '2026',
    role: 'Product Architecture · Java · Angular',
    promise: 'A restaurant operations platform for reservations, tables, staff, and business workflows.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular'],
    sections: defaultCaseStudySections('Hostplanner', 'reservations, table layouts, and staff coordination', 'Hostplanner'),
    accent: 'green',
  },
  {
    slug: 'reportix',
    title: 'Reportix',
    year: '2025',
    role: 'Full-Stack Engineering',
    promise: 'A reporting workflow system for teams, daily updates, and structured export.',
    tags: ['Java', 'Spring', 'Angular', 'SQL'],
    sections: defaultCaseStudySections('Reportix', 'daily reporting, structured updates, and export-ready communication', 'Reportix'),
    accent: 'blue',
  },
  {
    slug: 'team-devkit',
    title: 'Team DevKit',
    year: '2026',
    role: 'Developer Experience · Tooling',
    promise: 'A lightweight internal toolkit for preparing team machines and development environments.',
    tags: ['Angular', 'Docker', 'DX', 'Automation'],
    sections: defaultCaseStudySections('Team DevKit', 'developer onboarding, installers, and repeatable machine setup', 'Team DevKit'),
    accent: 'slate',
  },
  {
    slug: 'jhipster-template-migration',
    title: 'JHipster Template Migration',
    year: '2026',
    role: 'Angular Migration · Architecture Cleanup',
    promise: 'A structured migration from default JHipster webapp to a custom Angular template architecture.',
    tags: ['JHipster', 'Angular', 'Tailwind CSS', 'Architecture'],
    sections: defaultCaseStudySections('JHipster Template Migration', 'generated boundaries, Angular customization, and maintainable migrations', 'JHipster migration'),
    accent: 'orange',
  },
  {
    slug: 'rift-party',
    title: 'Rift Party',
    year: '2026',
    role: 'Realtime Prototype · Game UI',
    promise: 'A short-session multiplayer browser game prototype with realtime movement and lightweight UX.',
    tags: ['Angular', 'Socket.IO', 'Game UI', 'Realtime'],
    sections: defaultCaseStudySections('Rift Party', 'realtime sessions, game UI feedback, and short-session play loops', 'Rift Party'),
    accent: 'violet',
  },
];
