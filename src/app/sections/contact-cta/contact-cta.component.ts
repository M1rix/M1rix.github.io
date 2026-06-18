import { Component } from '@angular/core';

import { contact } from '../../core/content/portfolio-content';
import { siteConfig } from '../../core/content/site-config';
import { ButtonLinkComponent } from '../../shared/ui/button-link/button-link.component';

@Component({
  selector: 'mx-contact-cta',
  standalone: true,
  imports: [ButtonLinkComponent],
  styleUrl: './contact-cta.component.scss',
  template: `
    <section class="section mx-container" aria-labelledby="contact-title">
      <div class="contact-card">
        <div>
          <p class="eyebrow">{{ contact.status }}</p>
          <h2 id="contact-title">{{ contact.title }}</h2>
          <p>{{ contact.description }}</p>
          <div class="actions">
            <mx-button-link [href]="'mailto:' + siteConfig.email" variant="primary">{{ contact.primaryCta }}</mx-button-link>
            <mx-button-link href="#projects">{{ contact.secondaryCta }}</mx-button-link>
          </div>
        </div>
        <aside aria-label="Availability slots">
          <span>{{ contact.slotsLabel }}</span>
          <div>
            @for (slot of contact.slots; track slot; let first = $first) {
              <strong [class.open]="first">{{ slot }}</strong>
            }
          </div>
        </aside>
      </div>
    </section>
  `,
})
export class ContactCtaComponent {
  readonly contact = contact;
  readonly siteConfig = siteConfig;
}
