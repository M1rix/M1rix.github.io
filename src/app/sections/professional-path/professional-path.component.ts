import { Component } from '@angular/core';

import { path } from '../../core/content/portfolio-content';

@Component({
  selector: 'mx-professional-path',
  standalone: true,
  styleUrl: './professional-path.component.scss',
  template: `
    <section id="path" class="section mx-container" aria-labelledby="path-title">
      <div class="section-heading">
        <p class="eyebrow">My journey</p>
        <h2 id="path-title">Professional path.</h2>
      </div>
      <div class="timeline">
        @for (item of path; track item.title) {
          <article class="timeline-item">
            <time>{{ item.period }}</time>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProfessionalPathComponent {
  readonly path = path;
}
