import { siteConfig } from './site-config';
import {
  ContactContent,
  FooterContent,
  HeroContent,
  NavItem,
  PortfolioProfile,
  PrincipleItem,
  ProfessionalPathItem,
  StackGroup,
  StatItem,
  TestimonialItem,
} from '../models/portfolio.models';

export const person: PortfolioProfile = {
  brand: 'Mirix',
  fullName: 'Mirshod Allaberganov',
  shortName: 'Mirix',
  title: 'Full-Stack Java & Angular Engineer',
  location: 'Tashkent, Uzbekistan',
  headline: 'Engineering business systems with Java, Spring and Angular.',
  subHeadline:
    'I build production-ready web platforms, admin systems and backend-heavy products where clean architecture, stable APIs and maintainable UI matter more than decoration.',
  availability: 'Available for selected enterprise and product projects',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Professional path', href: '#path' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const hero: HeroContent = {
  eyebrow: 'MIRIX · FULL-STACK SYSTEMS ENGINEER',
  headlineTop: 'Engineering business systems',
  headlineBottom: 'with taste.',
  description:
    'I build production-ready web platforms, admin systems and backend-heavy products where clean architecture, stable APIs and maintainable UI matter more than decoration.',
  primaryCta: 'View selected systems →',
  secondaryCta: "Let's build something serious",
};

export const technologies = [
  'Java',
  'Spring Framework',
  'Spring Boot',
  'Angular',
  'TypeScript',
  'JavaScript',
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
  'jQuery Legacy',
];

export const personalStack = {
  backend: ['Java', 'Spring Framework', 'Spring Boot', 'REST APIs', 'JPA', 'Hibernate', 'Clean Architecture'],
  frontend: ['Angular', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind CSS', 'Sass', 'jQuery'],
  database: ['SQL', 'PostgreSQL', 'Relational data modeling', 'Query optimization basics'],
  platformAndTools: ['JHipster', 'Git', 'Docker', 'Prometheus', 'Grafana'],
};

export const stackGroups: StackGroup[] = [
  {
    title: 'Backend logic',
    items: ['Java', 'Spring Framework', 'Spring Boot', 'JPA', 'Hibernate', 'SQL', 'PostgreSQL'],
  },
  {
    title: 'Frontend systems',
    items: ['Angular', 'TypeScript', 'Tailwind CSS', 'Sass', 'UI architecture'],
  },
  {
    title: 'Production thinking',
    items: ['Git', 'Docker', 'Prometheus', 'Grafana', 'Release discipline'],
  },
  {
    title: 'Architecture & Delivery',
    items: ['REST APIs', 'Clean Architecture', 'JHipster', 'RBAC Workflows'],
  },
  {
    title: 'Legacy / Support Experience',
    items: ['jQuery', 'Legacy JavaScript maintenance'],
    secondary: true,
  },
];

export const about = {
  intro:
    'I connect backend complexity with interfaces people can actually use. My work sits between business logic, database design, Angular UI, integration flows and deployment discipline.',
  cardTitle: 'Systems over templates',
  cardText:
    'I care about clean boundaries, predictable APIs, maintainable screens and production visibility. The goal is not decoration; it is software that teams can operate and extend.',
};

export const principles: PrincipleItem[] = [
  { title: 'Backend logic', text: 'Java, Spring, JPA, Hibernate, SQL and PostgreSQL shaped around business rules.' },
  { title: 'Frontend systems', text: 'Angular, TypeScript, Tailwind and Sass composed into maintainable UI architecture.' },
  { title: 'Production thinking', text: 'Git, Docker, Prometheus, Grafana and release discipline treated as product work.' },
];

export const stats: StatItem[] = [
  { value: '5+', label: 'Business systems' },
  { value: '10+', label: 'Production workflows improved' },
  { value: '1', label: 'Core principle: structure before decoration' },
];

export const professionalPath: ProfessionalPathItem[] = [
  {
    date: 'Present',
    badge: 'Full-stack',
    title: 'Full-stack Java & Angular Engineer',
    description:
      'Building admin systems, backend APIs and production-ready web platforms with Java, Spring, Angular and PostgreSQL.',
  },
  {
    date: '2025',
    badge: 'Business tooling',
    title: 'Internal reporting and business tooling',
    description:
      'Designed and improved reporting workflows, export formats and internal tools focused on daily team visibility.',
  },
  {
    date: 'Earlier',
    badge: 'Foundation',
    title: 'Java/Spring + Angular foundation',
    description:
      'Built experience around Spring Framework, JPA/Hibernate, SQL, Angular, Tailwind/Sass, Git and Docker-based development.',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'Mirix thinks beyond screens. He asks where the data comes from, how the rule changes later, and how the team will maintain the feature after release.',
    name: 'Mock Product Lead',
    role: 'Placeholder testimonial',
  },
  {
    quote:
      'He is strongest when the task is not just UI, but a workflow: roles, states, backend rules and frontend clarity.',
    name: 'Mock Engineering Manager',
    role: 'Placeholder testimonial',
  },
  {
    quote:
      'Good speed, but more importantly, he cares about structure. That makes the system easier to extend.',
    name: 'Mock Backend Lead',
    role: 'Placeholder testimonial',
  },
  {
    quote:
      'The admin experience felt calmer because the domain model was clarified before the screens were polished.',
    name: 'Mock Business Analyst',
    role: 'Placeholder testimonial',
  },
];

export const contact: ContactContent = {
  status: 'AVAILABLE FOR SERIOUS BUILDS',
  title: 'Need a developer who can handle both system logic and polished UI?',
  description:
    'I can help with Java/Spring backends, Angular admin platforms, PostgreSQL data models, integrations, deployment structure and production visibility.',
  primaryCta: 'Start a conversation',
  secondaryCta: 'View selected systems →',
  slotsLabel: 'Selected projects only',
  slots: ['2026', 'Remote', 'Java · Angular · Spring'],
};

export const footer: FooterContent = {
  brand: 'MIRIX',
  copyright: '© 2026 Mirix. Built with Angular, Java discipline, and care.',
  note: '',
  navigate: ['Home', 'Projects', 'Professional path', 'Testimonials'],
  follow: [
    { label: 'GitHub', href: siteConfig.github },
    { label: 'LinkedIn', href: siteConfig.linkedin },
    { label: 'Telegram', href: siteConfig.telegram },
    { label: 'Email', href: siteConfig.emailHref },
  ],
};
