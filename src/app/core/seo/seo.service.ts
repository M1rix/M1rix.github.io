import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { siteConfig } from '../content/site-config';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  setHomeMeta(): void {
    const pageTitle = 'Mirix | Full-Stack Java & Angular Engineer';
    const description =
      'Mirix builds full-stack business systems with Java, Spring Boot, Angular, PostgreSQL, Docker, and clean architecture.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: siteConfig.siteUrl });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }
}
