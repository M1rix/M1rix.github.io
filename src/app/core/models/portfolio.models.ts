export interface NavItem {
  label: string;
  href: string;
}

export interface PersonProfile {
  brand: string;
  fullName: string;
  title: string;
  location: string;
  headline: string;
  subHeadline: string;
  availability: string;
}

export interface HeroContent {
  eyebrow: string;
  headlineTop: string;
  headlineBottom: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface StackGroup {
  title: string;
  items: string[];
  secondary?: boolean;
}

export interface PrincipleItem {
  title: string;
  text: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface ContactContent {
  status: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  slotsLabel: string;
  slots: string[];
}

export interface FooterContent {
  brand: string;
  copyright: string;
  note: string;
  navigate: string[];
  follow: Array<{ label: string; href: string }>;
}
