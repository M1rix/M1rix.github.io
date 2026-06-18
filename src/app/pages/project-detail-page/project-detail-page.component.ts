import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { projects } from '../../core/content/projects-content';
import { siteConfig } from '../../core/content/site-config';
import { SeoService } from '../../core/seo/seo.service';
import { FooterComponent } from '../../sections/footer/footer.component';
import { NavComponent } from '../../sections/nav/nav.component';
import { ButtonLinkComponent } from '../../shared/ui/button-link/button-link.component';
import { FloatingVisualLayerComponent } from '../../shared/ui/floating-visual-layer/floating-visual-layer.component';
import { ProjectVisualComponent } from '../../shared/ui/project-visual/project-visual.component';

@Component({
  selector: 'mx-project-detail-page',
  standalone: true,
  imports: [
    RouterLink,
    NavComponent,
    FooterComponent,
    ButtonLinkComponent,
    ProjectVisualComponent,
    FloatingVisualLayerComponent,
  ],
  styleUrl: './project-detail-page.component.scss',
  template: `
    <mx-nav />
    @if (project(); as currentProject) {
      <main class="project-detail-page">
        <section class="project-hero mx-container">
          <mx-floating-visual-layer density="compact" />
          <div class="project-actions">
            <a [routerLink]="['/']" fragment="projects">← Back to selected systems</a>
            @if (currentProject.liveUrl) {
              <a [href]="currentProject.liveUrl" target="_blank" rel="noreferrer">See it live</a>
            }
          </div>

          <p class="eyebrow">CASE STUDY</p>
          <h1>{{ currentProject.title }}.</h1>
          <dl>
            <div>
              <dt>Year</dt>
              <dd>{{ currentProject.year }}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{{ currentProject.role }}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{{ currentProject.tags.join(' · ') }}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Mock case study · editable content</dd>
            </div>
          </dl>
          <p class="promise">{{ currentProject.promise }}</p>
          <mx-project-visual [project]="currentProject" />
        </section>

        <nav class="project-section-nav mx-container" aria-label="Case study sections">
          @for (section of currentProject.sections; track section.id) {
            <a [href]="'/projects/' + currentProject.slug + '#' + section.id">{{ section.title }}</a>
          }
        </nav>

        <article class="case-study mx-container">
          @for (section of currentProject.sections; track section.id) {
            <section [id]="section.id" class="case-section reveal-item">
              <div>
                <span>{{ section.number }}</span>
                <h2>{{ section.title }}</h2>
              </div>
              <div class="section-copy">
                @for (paragraph of section.body; track paragraph) {
                  <p>{{ paragraph }}</p>
                }
              </div>
              <div class="visual-note" [attr.data-type]="section.visualType">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </section>
          }
        </article>

        <section class="project-cta mx-container">
          <div>
            <p class="eyebrow">AVAILABLE FOR SERIOUS BUILDS</p>
            <h2>Want a system with this level of clarity?</h2>
          </div>
          <mx-button-link [href]="siteConfig.emailHref" variant="primary">Start a conversation</mx-button-link>
        </section>

        <section class="related mx-container" aria-labelledby="related-title">
          <div class="section-heading">
            <p class="eyebrow">Related projects</p>
            <h2 id="related-title">More selected systems.</h2>
          </div>
          <div>
            @for (item of relatedProjects(); track item.slug) {
              <a [routerLink]="['/projects', item.slug]">
                <span>{{ item.year }}</span>
                <strong>{{ item.title }}</strong>
                <small>{{ item.promise }}</small>
              </a>
            }
          </div>
        </section>
      </main>
      <mx-footer />
    }
  `,
})
export class ProjectDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  readonly siteConfig = siteConfig;
  readonly slug = signal('');

  readonly project = computed(() => projects.find((item) => item.slug === this.slug()) ?? projects[0]);
  readonly relatedProjects = computed(() => projects.filter((item) => item.slug !== this.project().slug).slice(0, 3));

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.slug.set(params.get('slug') ?? '');
      const currentProject = this.project();
      this.seo.setProjectMeta(currentProject.title, currentProject.promise, `/projects/${currentProject.slug}`);
    });
  }
}
