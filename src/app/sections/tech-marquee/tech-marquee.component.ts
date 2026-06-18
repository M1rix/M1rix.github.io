import { Component, computed, signal } from '@angular/core';

import { stackGroups, technologies } from '../../core/content/portfolio-content';

@Component({
  selector: 'mx-tech-marquee',
  standalone: true,
  styleUrl: './tech-marquee.component.scss',
  template: `
    <section class="section tech-section" aria-labelledby="stack-title">
      <div class="marquee" aria-label="Technology stack">
        <div class="track">
          @for (technology of marqueeItems(); track technology + $index) {
            <span>{{ technology }}</span>
          }
        </div>
      </div>

      <div class="mx-container stack-block">
        <div class="section-heading">
          <p class="eyebrow">Engineering toolkit</p>
          <h2 id="stack-title">Built around production systems.</h2>
          <p>
            I build full-stack business systems with Java/Spring on the backend, Angular on the frontend,
            PostgreSQL for relational data, and Docker plus observability tooling for production readiness.
          </p>
        </div>

        <div class="stack-grid">
          @for (group of stackGroups; track group.title) {
            <article class="stack-card" [class.secondary]="group.secondary">
              <h3>{{ group.title }}</h3>
              <div>
                @for (item of group.items; track item) {
                  <span class="chip">{{ item }}</span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class TechMarqueeComponent {
  private readonly baseTechnologies = signal(technologies);
  readonly marqueeItems = computed(() => [...this.baseTechnologies(), ...this.baseTechnologies()]);
  readonly stackGroups = stackGroups;
}
