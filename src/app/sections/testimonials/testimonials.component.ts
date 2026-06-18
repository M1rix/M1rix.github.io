import { Component } from '@angular/core';

import { testimonials } from '../../core/content/portfolio-content';

@Component({
  selector: 'mx-testimonials',
  standalone: true,
  styleUrl: './testimonials.component.scss',
  template: `
    <section id="testimonials" class="section mx-container" aria-labelledby="testimonials-title">
      <div class="section-heading">
        <p class="eyebrow">Customer reviews</p>
        <h2 id="testimonials-title">What people say.</h2>
        <p>Mocked testimonials are clearly labeled and ready to replace when verified client quotes are available.</p>
      </div>
      <div class="review-grid">
        @for (testimonial of testimonials; track testimonial.name) {
          <article class="review-card">
            <p>“{{ testimonial.quote }}”</p>
            <div>
              <span>{{ initials(testimonial.name) }}</span>
              <strong>{{ testimonial.name }}</strong>
              <small>{{ testimonial.role }}</small>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  readonly testimonials = testimonials;

  initials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2);
  }
}
