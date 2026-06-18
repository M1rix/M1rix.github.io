import { Component } from '@angular/core';

import { navItems } from '../../core/content/portfolio-content';
import { siteConfig } from '../../core/content/site-config';

@Component({
  selector: 'mx-nav',
  standalone: true,
  styleUrl: './nav.component.scss',
  template: `
    <header class="nav-shell" aria-label="Primary navigation">
      <a class="brand" href="#home" aria-label="Mirix home">MIRIX</a>
      <nav class="nav-links" aria-label="Page sections">
        @for (item of navItems; track item.href) {
          <a [href]="item.href">{{ item.label }}</a>
        }
      </nav>
      <a class="nav-cta" [href]="'mailto:' + siteConfig.email">Let’s work together</a>
    </header>
  `,
})
export class NavComponent {
  readonly navItems = navItems;
  readonly siteConfig = siteConfig;
}
