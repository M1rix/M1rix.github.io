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
          <mx-button-link [href]="siteConfig.emailHref" variant="primary">{{ hero.primaryCta }}</mx-button-link>
          <mx-button-link href="#projects">{{ hero.secondaryCta }}</mx-button-link>
        </div>
        <dl class="hero-meta" aria-label="Profile summary">
          <div>
            <dt>Engineer</dt>
            <dd>{{ person.title }}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{{ person.location }}</dd>
          </div>
        </dl>
      </div>

      <div class="identity-card reveal-item" aria-label="Mirix identity placeholder">
        <div class="grid-layer"></div>
        @for (badge of badges; track badge; let i = $index) {
          <span class="badge" [style.--i]="i">{{ badge }}</span>
        }
        <div class="portrait">
          <span>MA</span>
          <small>{{ person.availability }}</small>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  readonly hero = hero;
  readonly person = person;
  readonly siteConfig = siteConfig;
  readonly badges = ['Java', 'Spring', 'Angular', 'PostgreSQL', 'Docker'];
}
