import { Component, input } from '@angular/core';

@Component({
  selector: 'mx-floating-visual-layer',
  standalone: true,
  styleUrl: './floating-visual-layer.component.scss',
  template: `
    <div class="floating-layer" [class.compact]="density() === 'compact'" aria-hidden="true">
      <span class="blob blob-a"></span>
      <span class="blob blob-b"></span>
      <span class="cube cube-a"></span>
      <span class="cube cube-b"></span>
      <span class="code-pill pill-a">Java</span>
      <span class="code-pill pill-b">Spring</span>
      <span class="code-pill pill-c">Angular</span>
      <span class="code-pill pill-d">Docker</span>
      <span class="arch-card arch-a"></span>
      <span class="arch-card arch-b"></span>
    </div>
  `,
})
export class FloatingVisualLayerComponent {
  readonly density = input<'default' | 'compact'>('default');
}
