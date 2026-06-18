import { Component } from '@angular/core';

import { stats } from '../../core/content/portfolio-content';

@Component({
  selector: 'mx-stats',
  standalone: true,
  styleUrl: './stats.component.scss',
  template: `
    <section class="mx-container stats" aria-label="Portfolio statistics">
      @for (stat of stats; track stat.label) {
        <div>
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      }
    </section>
  `,
})
export class StatsComponent {
  readonly stats = stats;
}
