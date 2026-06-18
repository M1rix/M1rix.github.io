import { Component, OnInit, inject } from '@angular/core';

import { SeoService } from '../../core/seo/seo.service';
import { AboutComponent } from '../../sections/about/about.component';
import { ContactCtaComponent } from '../../sections/contact-cta/contact-cta.component';
import { FooterComponent } from '../../sections/footer/footer.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { NavComponent } from '../../sections/nav/nav.component';
import { ProfessionalPathComponent } from '../../sections/professional-path/professional-path.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { StatsComponent } from '../../sections/stats/stats.component';
import { TechMarqueeComponent } from '../../sections/tech-marquee/tech-marquee.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';

@Component({
  selector: 'mx-home-page',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    TechMarqueeComponent,
    AboutComponent,
    ProjectsComponent,
    StatsComponent,
    ProfessionalPathComponent,
    TestimonialsComponent,
    ContactCtaComponent,
    FooterComponent,
  ],
  template: `
    <mx-nav />
    <main>
      <mx-hero />
      <mx-tech-marquee />
      <mx-about />
      <mx-projects />
      <mx-stats />
      <mx-professional-path />
      <mx-testimonials />
      <mx-contact-cta />
    </main>
    <mx-footer />
  `,
})
export class HomePageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setHomeMeta();
  }
}
