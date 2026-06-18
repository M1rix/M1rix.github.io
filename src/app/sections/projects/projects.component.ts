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
        <p class="eyebrow">SELECTED SYSTEMS</p>
        <h2 id="projects-title">Projects shaped around real business workflows.</h2>
        <p>
          Mocked for now. Replace with real metrics, screenshots and links after Mirix provides production details.
        </p>
      </div>

      <div class="project-grid">
        @for (project of projects; track project.slug) {
          <a class="project-card reveal-item" [routerLink]="['/projects', project.slug]">
            <span class="project-index">{{ ($index + 1).toString().padStart(2, '0') }}</span>
            <span class="project-arrow">↗</span>
            <mx-project-visual [project]="project" />
            <div class="project-body">
              <div class="project-kicker">
                <span>{{ project.role }}</span>
                <span>{{ project.year }}</span>
              </div>
              <h3>{{ project.title }}</h3>
              <p class="promise">{{ project.promise }}</p>
              <div class="tags">
                @for (tag of project.tags; track tag) {
                  <span class="chip">{{ tag }}</span>
                }
              </div>
              <strong class="case-link">View case study →</strong>
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
