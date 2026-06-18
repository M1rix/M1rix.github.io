import { ProjectItem } from '../models/project.models';

export const projects: ProjectItem[] = [
  {
    name: 'Aurum Admin',
    tagline: 'Gold trading and custody operations platform.',
    description:
      'A role-based admin system for managing gold intake, reference data, compliance workflows, market controls, and operational dashboards.',
    year: '2026',
    role: 'Admin UI · Architecture · Delivery',
    tags: ['Angular', 'Spring Boot', 'JHipster', 'RBAC'],
    accent: 'gold',
  },
  {
    name: 'Reportix',
    tagline: 'Daily reporting system for real teams.',
    description:
      'A production reporting workflow where admins create projects, assign users, configure templates, and export structured updates into team channels.',
    year: '2025',
    role: 'Full-stack engineering',
    tags: ['Java', 'Angular', 'PostgreSQL', 'Telegram Export'],
    accent: 'blue',
  },
  {
    name: 'Hostplanner',
    tagline: 'Restaurant reservation and floor-management system.',
    description:
      'A multi-restaurant platform concept for zones, tables, staff roles, booking flows, and operational planning.',
    year: '2026',
    role: 'System design · Backend architecture',
    tags: ['Java 21', 'Spring Modulith', 'PostgreSQL', 'DDD'],
    accent: 'green',
  },
  {
    name: 'Team DevKit',
    tagline: 'One place to bootstrap a developer workstation.',
    description:
      'A lightweight internal tool concept for installing common development apps and giving teams a consistent onboarding experience.',
    year: '2026',
    role: 'Product design · Web UI',
    tags: ['Angular', 'Electron', 'Webapp', 'DX'],
    accent: 'slate',
  },
  {
    name: 'Rift Party',
    tagline: 'Fast multiplayer browser game prototype.',
    description:
      'A short-session multiplayer game experiment with Angular, realtime communication, and lightweight game-loop mechanics.',
    year: '2025',
    role: 'Prototype engineering',
    tags: ['Angular', 'Socket.IO', 'Node.js', 'Game UX'],
    accent: 'violet',
  },
  {
    name: 'Enterprise Admin Kit',
    tagline: 'Custom admin UI foundation for JHipster projects.',
    description:
      'A reusable frontend structure for migrating Angular templates into enterprise applications without destroying generated boundaries.',
    year: '2026',
    role: 'Frontend architecture',
    tags: ['Angular', 'Tailwind', 'JHipster', 'Architecture'],
    accent: 'orange',
  },
];
