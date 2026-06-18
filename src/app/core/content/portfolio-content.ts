import { siteConfig } from './site-config';
import {
  ContactContent,
  FooterContent,
  HeroContent,
  NavItem,
  PersonProfile,
  PrincipleItem,
  StackGroup,
  StatItem,
  TestimonialItem,
  TimelineItem,
} from '../models/portfolio.models';

export const person: PersonProfile = {
  brand: 'Mirix',
  fullName: 'Mirshod Allaberganov',
  title: 'Full-Stack Java & Angular Engineer',
  location: 'Urganch, Uzbekistan',
  headline: 'systems that ship.',
  subHeadline:
    'I turn complex business workflows into reliable web platforms with Java, Spring Boot, Angular, and clean architecture.',
  availability: 'Available for selected product and enterprise projects',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Professional path', href: '#path' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const hero: HeroContent = {
  eyebrow: 'Mirix · Java / Angular / Product Engineering',
  headlineTop: 'systems that',
  headlineBottom: 's h i p.',
  description:
    'I design and build admin platforms, enterprise workflows, and production-grade web systems where architecture, UX, and delivery speed matter.',
  primaryCta: 'Let’s work together',
  secondaryCta: 'View selected work →',
};

export const technologies = [
  'Java',
  'Spring Framework',
  'Spring Boot',
  'Angular',
  'TypeScript',
  'JavaScript',
  'CSS',
  'Tailwind CSS',
  'Sass',
  'SQL',
  'JPA',
  'Hibernate',
  'PostgreSQL',
  'JHipster',
  'Git',
  'Docker',
  'Prometheus',
  'Grafana',
  'jQuery',
];

export const personalStack = {
  backend: ['Java', 'Spring Framework', 'Spring Boot', 'JPA', 'Hibernate', 'REST APIs', 'Clean Architecture'],
  frontend: ['Angular', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind CSS', 'Sass', 'jQuery'],
  database: ['SQL', 'PostgreSQL', 'Relational data modeling', 'Query optimization basics'],
  platformAndTools: ['JHipster', 'Git', 'Docker', 'Prometheus', 'Grafana'],
};

export const stackGroups: StackGroup[] = [
  {
    title: 'Backend Engineering',
    items: ['Java', 'Spring Framework', 'Spring Boot', 'REST APIs', 'Clean Architecture'],
  },
  {
    title: 'Frontend Engineering',
    items: ['Angular', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind CSS', 'Sass'],
  },
  {
    title: 'Data & Persistence',
    items: ['SQL', 'PostgreSQL', 'JPA', 'Hibernate'],
  },
  {
    title: 'DevOps & Observability',
    items: ['Git', 'Docker', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Architecture & Delivery',
    items: ['JHipster', 'Admin UI Architecture', 'RBAC Workflows'],
  },
  {
    title: 'Legacy / Support Experience',
    items: ['jQuery', 'Legacy JavaScript maintenance'],
    secondary: true,
  },
];

export const about = {
  intro:
    'I’m Mirshod Allaberganov, a full-stack engineer from Tashkent building practical software for real business operations: Java/Spring backend systems, Angular admin platforms, PostgreSQL-backed workflows, reporting flows, trading/custody platforms, and internal tools that teams actually use.',
  cardTitle: 'Engineering that survives production pressure',
  cardText:
    'My work focuses on clear domain boundaries, maintainable UI architecture, reliable APIs, and predictable delivery. I care about the boring things that make products last: validation, permissions, auditability, performance, deployment, and support.',
};

export const principles: PrincipleItem[] = [
  { title: 'Domain first', text: 'Model business flows before drawing screens or tables.' },
  { title: 'Clean delivery', text: 'Ship useful increments without turning the codebase into debt.' },
  {
    title: 'Production mindset',
    text: 'Logs, roles, audit trails, and failure paths are part of the product.',
  },
];

export const stats: StatItem[] = [
  { value: '12+', label: 'Projects and product modules' },
  { value: '5+', label: 'Years building web systems' },
  { value: '4', label: 'Main product directions' },
  { value: '1', label: 'Engineering principle: ship clean' },
];

export const path: TimelineItem[] = [
  {
    period: 'Present',
    title: 'Full-Stack Engineer · Mirix',
    description:
      'Building enterprise-grade web platforms with Java, Spring Boot, Angular, PostgreSQL, Docker, and role-based admin workflows.',
  },
  {
    period: '2026',
    title: 'Aurum Admin Platform',
    description:
      'Designing admin-side flows for gold operations, compliance, finance, market controls, support, and audit visibility.',
  },
  {
    period: '2025 - 2026',
    title: 'Angular & JHipster Architecture Work',
    description:
      'Modernizing admin UI structures, separating custom app layers, improving frontend maintainability, and preparing generated projects for real delivery.',
  },
  {
    period: '2024 - 2025',
    title: 'Reporting and Internal Tools',
    description:
      'Building production workflows for project reporting, user assignment, structured templates, and operational exports.',
  },
  {
    period: 'Earlier',
    title: 'Java Backend Foundations',
    description:
      'Developing backend discipline around persistence, API boundaries, validation, authentication, deployment, and database-driven business systems.',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'Mirix understands both the business workflow and the code. He does not just build screens - he questions the flow until it works in real operations.',
    name: 'Mock Client A',
    role: 'Operations Lead',
  },
  {
    quote:
      'The strongest part of working with him was delivery discipline. Every feature had a clear boundary, clear behavior, and fewer surprises than expected.',
    name: 'Mock Client B',
    role: 'Product Manager',
  },
  {
    quote:
      'He can move from database design to Angular UI without losing the system picture. That is rare and valuable for internal platforms.',
    name: 'Mock Client C',
    role: 'Engineering Manager',
  },
  {
    quote:
      'Fast, direct, and practical. He prefers fixing the architecture instead of hiding problems behind UI patches.',
    name: 'Mock Client D',
    role: 'Founder',
  },
  {
    quote:
      'The admin panel felt like it was designed for actual operators, not just for demo screenshots.',
    name: 'Mock Client E',
    role: 'Back Office Specialist',
  },
  {
    quote:
      'Reliable communication, clean implementation, and strong ownership from the first planning session to release.',
    name: 'Mock Client F',
    role: 'Team Lead',
  },
];

export const contact: ContactContent = {
  status: 'Available · Selected projects',
  title: 'Interested in building something reliable?',
  description:
    'I’m open to selected product, admin platform, and enterprise webapp work - especially where clean architecture and delivery discipline matter.',
  primaryCta: 'Start a project',
  secondaryCta: 'See recent work →',
  slotsLabel: 'project slots this quarter',
  slots: ['1', '2', '3'],
};

export const footer: FooterContent = {
  brand: 'MIRIX',
  copyright: '© 2026 Mirix. All rights reserved.',
  note: 'Designed and built with care.',
  navigate: ['Home', 'Projects', 'Professional path', 'Testimonials'],
  follow: [
    { label: 'GitHub', href: siteConfig.github },
    { label: 'LinkedIn', href: siteConfig.linkedin },
    { label: 'Telegram', href: siteConfig.telegram },
  ],
};
