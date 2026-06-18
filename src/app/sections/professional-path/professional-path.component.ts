import { Component } from '@angular/core';

import { professionalPath } from '../../core/content/portfolio-content';

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
        @for (item of professionalPath; track item.title) {
          <article class="timeline-item reveal-item">
            <div class="timeline-meta">
              <time>{{ item.date }}</time>
              @if (item.badge) {
                <span>{{ item.badge }}</span>
              }
            </div>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              @if (item.linkLabel && item.linkUrl) {
                <a [href]="item.linkUrl">{{ item.linkLabel }}</a>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProfessionalPathComponent {
  readonly professionalPath = professionalPath;
}
