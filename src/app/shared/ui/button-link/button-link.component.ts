import { Component, input } from '@angular/core';

@Component({
  selector: 'mx-button-link',
  standalone: true,
  template: `
    <a class="button-link" [class.primary]="variant() === 'primary'" [href]="href()">
      <ng-content />
    </a>
  `,
})
export class ButtonLinkComponent {
  readonly href = input.required<string>();
  readonly variant = input<'primary' | 'secondary'>('secondary');
}
