import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { navItems } from '../../core/content/portfolio-content';
import { ThemeToggleComponent } from '../../shared/ui/theme-toggle/theme-toggle.component';

@Component({
  selector: 'mx-nav',
  standalone: true,
  imports: [RouterLink, ThemeToggleComponent],
  styleUrl: './nav.component.scss',
  template: `
    <header class="nav-shell" aria-label="Primary navigation">
      <nav class="nav-links" aria-label="Page sections">
        @for (item of navItems; track item.href) {
          <a
            [routerLink]="['/']"
            [fragment]="item.href.slice(1)"
            [class.active]="activeSection() === item.href.slice(1)"
            >{{ item.label }}</a
          >
        }
      </nav>
      <a class="availability" href="mailto:hello@mirix.uz">Available · 2026</a>
      <mx-theme-toggle />
    </header>
  `,
})
export class NavComponent implements AfterViewInit, OnDestroy {
  readonly navItems = navItems;
  readonly activeSection = signal('home');
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sectionIds = this.navItems.map((item) => item.href.slice(1));
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          this.activeSection.set(visible.target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.15, 0.4, 0.7],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        this.observer?.observe(section);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
