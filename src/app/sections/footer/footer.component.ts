import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { footer, navItems } from '../../core/content/portfolio-content';

@Component({
  selector: 'mx-footer',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './footer.component.scss',
  template: `
    <footer class="mx-container footer">
      <div>
        <strong>{{ footer.brand }}</strong>
        <p>I turn business workflows into stable backend systems and clean Angular interfaces.</p>
      </div>
      <div class="stack-note">
        <span>Core stack</span>
        <p>Java · Spring · Angular · PostgreSQL · Docker</p>
      </div>
      <nav aria-label="Footer navigation">
        @for (item of navItems; track item.href) {
          <a [routerLink]="['/']" [fragment]="item.href.slice(1)">{{ item.label }}</a>
        }
      </nav>
      <div class="follow">
        @for (item of footer.follow; track item.label) {
          <a [href]="item.href">{{ item.label }}</a>
        }
      </div>
      <small>{{ footer.copyright }} {{ footer.note }}</small>
    </footer>
  `,
})
export class FooterComponent {
  readonly footer = footer;
  readonly navItems = navItems;
}
