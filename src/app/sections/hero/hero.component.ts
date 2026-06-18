import { Component } from '@angular/core';

import { hero, person } from '../../core/content/portfolio-content';
import { siteConfig } from '../../core/content/site-config';
import { ButtonLinkComponent } from '../../shared/ui/button-link/button-link.component';
import { FloatingVisualLayerComponent } from '../../shared/ui/floating-visual-layer/floating-visual-layer.component';

@Component({
  selector: 'mx-hero',
  standalone: true,
  imports: [ButtonLinkComponent, FloatingVisualLayerComponent],
  styleUrl: './hero.component.scss',
  template: `
    <section id="home" class="hero mx-container" aria-labelledby="hero-title">
      <mx-floating-visual-layer density="compact" />
      <div class="hero-copy">
        <p class="eyebrow">{{ hero.eyebrow }}</p>
        <h1 id="hero-title">
          <span>{{ hero.headlineTop }}</span>
          <span class="ship">{{ hero.headlineBottom }}</span>
        </h1>
        <p class="description">{{ hero.description }}</p>
        <div class="hero-actions">
          <mx-button-link href="#projects" variant="primary">{{ hero.primaryCta }}</mx-button-link>
          <mx-button-link [href]="siteConfig.emailHref">{{ hero.secondaryCta }}</mx-button-link>
        </div>
      </div>

      <div class="identity-card reveal-item" aria-label="Mirix identity placeholder">
        <div class="grid-layer"></div>
        @for (panel of panels; track panel.title) {
          <article class="system-panel">
            <span>{{ panel.kicker }}</span>
            <strong>{{ panel.title }}</strong>
            @for (line of panel.lines; track line) {
              <small>{{ line }}</small>
            }
          </article>
        }
        <div class="hero-orb">
          <span>MA</span>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  readonly hero = hero;
  readonly person = person;
  readonly siteConfig = siteConfig;
  readonly panels = [
    {
      kicker: '$ deploy mirix-platform',
      title: 'build verified',
      lines: ['docker image ready', 'observability attached'],
    },
    {
      kicker: 'Backend architecture',
      title: 'Java · Spring Boot · PostgreSQL',
      lines: ['API contracts · JPA · Hibernate'],
    },
    {
      kicker: 'Frontend system',
      title: 'Angular · Tailwind · Sass',
      lines: ['Typed UI · Responsive systems'],
    },
    {
      kicker: 'Observability',
      title: 'Prometheus → Grafana',
      lines: ['latency p95 · uptime · alerts'],
    },
  ];
}
