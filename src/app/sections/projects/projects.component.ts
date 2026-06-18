import { Component } from '@angular/core';

import { projects } from '../../core/content/projects-content';

@Component({
  selector: 'mx-projects',
  standalone: true,
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
        @for (project of projects; track project.name) {
          <article class="project-card" [attr.data-accent]="project.accent">
            <div class="mockup" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <div></div>
            </div>
            <div class="project-body">
              <div class="project-kicker">
                <span>{{ project.role }}</span>
                <span>{{ project.year }}</span>
              </div>
              <h3>{{ project.name }}</h3>
              <p class="tagline">{{ project.tagline }}</p>
              <p>{{ project.description }}</p>
              <div class="tags">
                @for (tag of project.tags; track tag) {
                  <span class="chip">{{ tag }}</span>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly projects = projects;
}
