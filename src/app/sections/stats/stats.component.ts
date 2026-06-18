import { AfterViewInit, Component, ElementRef, OnDestroy, computed, inject, signal } from '@angular/core';

import { stats } from '../../core/content/portfolio-content';

@Component({
  selector: 'mx-stats',
  standalone: true,
  styleUrl: './stats.component.scss',
  template: `
    <section class="mx-container stats" aria-label="Portfolio statistics">
      @for (stat of displayedStats(); track stat.label) {
        <div>
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      }
    </section>
  `,
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  readonly stats = stats;
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly visible = signal(false);
  private observer?: IntersectionObserver;

  readonly displayedStats = computed(() =>
    this.stats.map((stat) => ({
      ...stat,
      value: this.visible() ? stat.value : '0',
    })),
  );

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          this.visible.set(true);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
