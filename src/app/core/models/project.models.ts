export type ProjectAccent = 'gold' | 'blue' | 'green' | 'slate' | 'violet' | 'orange';

export interface ProjectCaseStudySection {
  id: string;
  number: string;
  title: string;
  body: string[];
  visualType?: 'architecture' | 'ui-flow' | 'code' | 'metrics' | 'mockup';
}

export interface PortfolioProject {
  slug: string;
  title: string;
  year: string;
  role: string;
  promise: string;
  tags: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  sections: ProjectCaseStudySection[];
  accent: ProjectAccent;
}
