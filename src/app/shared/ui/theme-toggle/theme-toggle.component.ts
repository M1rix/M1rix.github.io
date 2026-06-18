import { Component, inject } from '@angular/core';

import { ThemeService } from '../../../core/theme/theme.service';

@Component({
  selector: 'mx-theme-toggle',
  standalone: true,
  styleUrl: './theme-toggle.component.scss',
  template: `
    <button
      type="button"
      class="theme-toggle"
      [attr.aria-label]="theme.isDark() ? 'Switch to light theme' : 'Switch to dark theme'"
      [attr.aria-pressed]="theme.isDark()"
      (click)="theme.toggle()"
    >
      <span class="sun" aria-hidden="true"></span>
      <span class="moon" aria-hidden="true"></span>
    </button>
  `,
})
export class ThemeToggleComponent {
  readonly theme = inject(ThemeService);
}
