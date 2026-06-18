import { siteConfig } from './site-config';
import {
  ContactContent,
  FooterContent,
  HeroContent,
  NavItem,
  PortfolioProfile,
  PrincipleItem,
  StackGroup,
  StatItem,
  TestimonialItem,
  ProfessionalPathItem,
} from '../models/portfolio.models';

export const person: PortfolioProfile = {
  brand: 'Mirix',
  fullName: 'Mirshod Allaberganov',
  shortName: 'Mirix',
  title: 'Full-Stack Java & Angular Engineer',
  location: 'Tashkent, Uzbekistan',
  headline: 'systems that ship.',
  subHeadline:
    'I build reliable business web platforms with Java, Spring Framework, Angular, PostgreSQL, Docker, and production-minded engineering practices.',
  availability: 'Available for selected enterprise and product projects',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Professional path', href: '#path' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const hero: HeroContent = {
  eyebrow: 'Mirix · Full-Stack Engineering',
  headlineTop: 'systems that',
  headlineBottom: 's h i p.',
  description:
    'I turn complex business workflows into reliable web platforms with Java, Spring Framework, Angular, PostgreSQL, and production-ready delivery practices.',
  primaryCta: 'Let’s work together',
  secondaryCta: 'View full work →',
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
    'I am Mirshod Allaberganov, a full-stack engineer from Tashkent, focused on Java/Spring backend systems, Angular frontends, and production-ready business platforms.',
  cardTitle: 'Engineering that survives production pressure',
  cardText: 'Engineering that turns messy workflows into maintainable systems, clear interfaces, and observable production services.',
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
  { value: '5+', label: 'Business systems' },
  { value: '3+', label: 'Years of engineering practice' },
  { value: '10+', label: 'Production workflows improved' },
];

export const professionalPath: ProfessionalPathItem[] = [
  {
    date: 'Present',
    badge: 'Full-stack',
    title: 'Full-Stack Java & Angular Engineer',
    description:
      'Building business web platforms with Java, Spring Framework, Angular, PostgreSQL, Docker, and clean delivery practices.',
  },
  {
    date: '2026',
    badge: 'Architecture',
    title: 'JHipster + Angular Template Migration',
    description:
      'Structured a custom Angular webapp architecture around JHipster while keeping generated backend conventions maintainable.',
  },
  {
    date: '2025',
    badge: 'Product',
    title: 'Reportix Workflow System',
    description:
      'Designed and improved a reporting workflow for teams, structured daily updates, and export-ready communication.',
  },
  {
    date: 'Ongoing',
    badge: 'Growth',
    title: 'Senior Engineering Track',
    description:
      'Focused on clean architecture, DDD, system design, observability, CI/CD, and production-grade engineering discipline.',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'Mirix thinks beyond the screen. He asks about workflow, data, roles, and failure cases before writing UI.',
    name: 'Mock Product Lead',
    role: 'Enterprise Workflow Project',
  },
  {
    quote:
      'The strongest part was structure: clean pages, clear responsibilities, and implementation that the team could continue.',
    name: 'Mock Engineering Manager',
    role: 'Internal Platform',
  },
  {
    quote:
      'He connects backend constraints with frontend decisions instead of treating them as separate worlds.',
    name: 'Mock Backend Lead',
    role: 'Java/Spring System',
  },
  {
    quote:
      'The UI became easier to understand because the domain model was clarified first.',
    name: 'Mock Business Analyst',
    role: 'Operations Product',
  },
];

export const contact: ContactContent = {
  status: 'Available · Selected projects',
  title: 'Interested in building reliable software?',
  description:
    'Complex workflow, admin platform, enterprise UI, or Java/Spring system - let’s talk.',
  primaryCta: 'Start a project',
  secondaryCta: 'See recent work →',
  slotsLabel: 'project slots this quarter',
  slots: ['1', '2', '3'],
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
