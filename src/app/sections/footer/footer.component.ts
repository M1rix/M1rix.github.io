import { Component } from '@angular/core';

import { footer, navItems } from '../../core/content/portfolio-content';

@Component({
  selector: 'mx-footer',
  standalone: true,
  styleUrl: './footer.component.scss',
  template: `
    <footer class="mx-container footer">
      <div>
        <strong>{{ footer.brand }}</strong>
        <p>I turn business complexity into products people can actually operate.</p>
      </div>
      <nav aria-label="Footer navigation">
        @for (item of navItems; track item.href) {
          <a [href]="item.href">{{ item.label }}</a>
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
