import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { projects } from '../../core/content/projects-content';
import { ProjectVisualComponent } from '../../shared/ui/project-visual/project-visual.component';

@Component({
  selector: 'mx-projects',
  standalone: true,
  imports: [RouterLink, ProjectVisualComponent],
  styleUrl: './projects.component.scss',
  template: `
    <section id="projects" class="section mx-container" aria-labelledby="projects-title">
      <div class="section-heading">
        <p class="eyebrow">Selected work</p>
        <h2 id="projects-title">Some of my projects.</h2>
        <p>
          Mocked case-study cards for now, structured so real projects can replace the data without rewriting the UI.
        </p>
      </div>

      <div class="project-grid">
        @for (project of projects; track project.slug) {
          <a class="project-card reveal-item" [routerLink]="['/projects', project.slug]">
            <mx-project-visual [project]="project" />
            <div class="project-body">
              <div class="project-kicker">
                <span>{{ project.role }}</span>
                <span>{{ project.year }}</span>
              </div>
              <p class="promise">{{ project.promise }}</p>
              <h3>{{ project.title }}</h3>
              <div class="tags">
                @for (tag of project.tags; track tag) {
                  <span class="chip">{{ tag }}</span>
                }
              </div>
            </div>
          </a>
        }
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly projects = projects;
}
