export type ProjectAccent = 'gold' | 'blue' | 'green' | 'slate' | 'violet' | 'orange';

export interface ProjectItem {
  name: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  accent: ProjectAccent;
}
