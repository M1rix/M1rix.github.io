import { Component } from '@angular/core';

import { about, principles } from '../../core/content/portfolio-content';

@Component({
  selector: 'mx-about',
  standalone: true,
  styleUrl: './about.component.scss',
  template: `
    <section class="section mx-container about-section" aria-labelledby="about-title">
      <div class="about-copy reveal-item">
        <p class="eyebrow">Positioning</p>
        <h2 id="about-title">Business complexity, turned into software people can operate.</h2>
        <p>{{ about.intro }}</p>
      </div>
      <article class="about-card reveal-item">
        <h3>{{ about.cardTitle }}</h3>
        <p>{{ about.cardText }}</p>
        <div class="principles">
          @for (principle of principles; track principle.title) {
            <div>
              <strong>{{ principle.title }}</strong>
              <span>{{ principle.text }}</span>
            </div>
          }
        </div>
      </article>
    </section>
  `,
})
export class AboutComponent {
  readonly about = about;
  readonly principles = principles;
}
