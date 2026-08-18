import { AfterViewInit, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';

import { SeoService } from '../../core/seo/seo.service';

interface ProjectCard {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  preview: 'aurum' | 'restaurant' | 'punctra' | 'cardmon';
  tone: 'dark' | 'light';
}

interface StackItem {
  label: string;
  mark: string;
  tone: string;
}

@Component({
  selector: 'mx-home-page',
  standalone: true,
  template: `
    <div class="portfolio-shell">
      <aside class="side-rail" aria-label="Primary navigation">
        <a class="brand-mark" href="#home" aria-label="Mirix home">M1</a>

        <nav class="rail-nav">
          <a href="#home" [class.is-active]="activeSection() === 'home'" aria-label="Home">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 10 8-6 8 6v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" /></svg>
          </a>
          <a href="#about" [class.is-active]="activeSection() === 'about'" aria-label="About">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M5.5 20c.7-4 3-6 6.5-6s5.8 2 6.5 6"/></svg>
          </a>
          <a href="#projects" [class.is-active]="activeSection() === 'projects'" aria-label="Selected work">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6-5 6 5 6M16 6l5 6-5 6M14 4l-4 16"/></svg>
          </a>
          <a href="#stack" [class.is-active]="activeSection() === 'stack'" aria-label="Tech stack">
            <svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/></svg>
          </a>
          <a href="#contact" [class.is-active]="activeSection() === 'contact'" aria-label="Contact">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
          </a>
        </nav>

        <div class="rail-progress" aria-hidden="true">
          <span [class.is-active]="activeSection() === 'home'">01</span>
          <span [class.is-active]="activeSection() === 'projects'">02</span>
          <span [class.is-active]="activeSection() === 'about' || activeSection() === 'stack'">03</span>
          <span [class.is-active]="activeSection() === 'contact'">04</span>
        </div>
      </aside>

      <main class="page-canvas">
        <section id="home" data-section="home" class="hero-section scroll-mt-8">
          <div class="hero-copy">
            <div class="section-kicker"><span></span> FULL-STACK JAVA & ANGULAR ENGINEER <i></i></div>
            <h1>M1RIX</h1>
            <p class="hero-lead">
              I build digital products from<br />
              <strong>backend logic</strong> to <strong>polished interfaces.</strong>
            </p>

            <div class="hero-stack" aria-label="Primary stack">
              <span><b class="tech-glyph angular">A</b> Angular</span>
              <span><b class="tech-glyph spring">S</b> Spring</span>
              <span><b class="tech-glyph postgres">P</b> PostgreSQL</span>
              <span class="more-chip">+ Java</span>
            </div>

            <div class="hero-actions">
              <a class="primary-button" href="#projects">View my work <span>↗</span></a>
              <a class="scroll-hint" href="#projects">Scroll to explore <span class="scroll-line"></span></a>
            </div>
          </div>

          <div class="hero-art" aria-hidden="true">
            <svg class="space-art" viewBox="0 0 620 500" role="presentation">
              <defs>
                <radialGradient id="orb" cx="34%" cy="28%" r="70%">
                  <stop offset="0" stop-color="#ffffff"/>
                  <stop offset=".24" stop-color="#d8d6ef"/>
                  <stop offset=".5" stop-color="#76758a"/>
                  <stop offset=".66" stop-color="#262632"/>
                  <stop offset=".78" stop-color="#a58cff"/>
                  <stop offset=".9" stop-color="#ffffff"/>
                  <stop offset="1" stop-color="#32323f"/>
                </radialGradient>
                <linearGradient id="rock" x1="0" x2="1" y1="0" y2="1">
                  <stop stop-color="#34343a"/>
                  <stop offset=".4" stop-color="#111115"/>
                  <stop offset="1" stop-color="#020203"/>
                </linearGradient>
                <filter id="grain"><feTurbulence baseFrequency=".8" numOctaves="3" result="n"/><feBlend in="SourceGraphic" in2="n" mode="multiply"/></filter>
                <filter id="shadow"><feDropShadow dx="-18" dy="24" stdDeviation="22" flood-color="#11111a" flood-opacity=".3"/></filter>
              </defs>
              <circle cx="455" cy="110" r="124" fill="#e8e7f2" opacity=".75"/>
              <path d="M290 228 358 144 475 145 565 215 610 312 580 418 470 462 360 438 288 360 258 287Z" fill="url(#rock)" filter="url(#grain)"/>
              <path d="M312 252 405 180 521 218 575 318 520 412 386 416 300 348Z" fill="#050507" opacity=".56"/>
              <circle cx="408" cy="128" r="105" fill="url(#orb)" stroke="#7164b8" stroke-width="3" filter="url(#shadow)"/>
              <circle cx="395" cy="109" r="73" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="2"/>
              <circle cx="407" cy="127" r="8" fill="#dad3ff"/>
              <path d="M382 127h50M407 102v50" stroke="#b19cff" stroke-width="1" opacity=".9"/>
              <polygon points="244,256 268,242 280,264 261,285" fill="#17171b"/>
              <polygon points="312,44 327,37 339,53 329,70 310,62" fill="#111115"/>
            </svg>
            <div class="terminal-card">
              <code>&gt; architecting solutions</code>
              <code>&gt; writing clean code</code>
              <code>&gt; solving real problems</code>
              <code class="accent">&gt; delivering value</code>
            </div>
          </div>
        </section>

        <section id="projects" data-section="projects" class="projects-section scroll-mt-8">
          <header class="section-heading-row">
            <div class="section-kicker"><span></span> SELECTED WORKS <i></i></div>
            <div class="carousel-controls" aria-hidden="true"><span>←</span><span>→</span></div>
          </header>

          <div class="project-grid">
            @for (project of projects; track project.title) {
              <article class="project-card" [class.project-card-dark]="project.tone === 'dark'">
                <div class="project-index">{{ project.index }}</div>
                <h2>{{ project.title }}</h2>
                <p class="project-subtitle">{{ project.subtitle }}</p>
                <p class="project-description">{{ project.description }}</p>

                <div class="project-preview" [class]="'project-preview preview-' + project.preview">
                  @switch (project.preview) {
                    @case ('aurum') {
                      <div class="mini-sidebar"></div>
                      <div class="mini-topbar"></div>
                      <div class="mini-stat s1"></div><div class="mini-stat s2"></div><div class="mini-stat s3"></div>
                      <div class="mini-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    }
                    @case ('restaurant') {
                      <div class="mini-menu"></div><div class="mini-toolbar"></div>
                      <div class="calendar-grid">
                        @for (item of calendarCells; track $index) { <i [class.is-marked]="$index === 6 || $index === 10 || $index === 15"></i> }
                      </div>
                    }
                    @case ('punctra') {
                      <div class="mini-map"></div><div class="map-zone"></div><div class="map-pin p1"></div><div class="map-pin p2"></div>
                    }
                    @case ('cardmon') {
                      <div class="phone phone-a"><i></i><i></i><i></i><i></i></div>
                      <div class="phone phone-b"><strong>12,540,000</strong><span>UZS</span><i></i><i></i><i></i></div>
                    }
                  }
                </div>
                <a class="project-arrow" href="#contact" [attr.aria-label]="'Discuss ' + project.title">↗</a>
              </article>
            }
          </div>
          <div class="project-position" aria-hidden="true"><span></span></div>
        </section>

        <div class="about-stack-grid">
          <section id="about" data-section="about" class="about-section scroll-mt-8">
            <div class="section-kicker"><span></span> ABOUT ME <i></i></div>
            <h2>
              I’m a full-stack developer<br />
              who loves building <em>useful,</em><br />
              scalable and clean software.
            </h2>
            <p>
              I work with Java & Spring on the backend and Angular on the frontend. I enjoy designing systems,
              writing clean code and turning complex business rules into products people can actually operate.
            </p>

            <div class="about-metrics">
              <div><strong>Java</strong><span>Backend systems</span></div>
              <div><strong>Angular</strong><span>Product interfaces</span></div>
              <div><strong>SQL</strong><span>Data-first thinking</span></div>
            </div>

            <a class="primary-button" href="#stack">Explore my stack <span>↗</span></a>
          </section>

          <section id="stack" data-section="stack" class="stack-section scroll-mt-8">
            <div class="section-kicker"><span></span> TECH STACK <i></i></div>

            <div class="stack-group">
              <h3>Frontend</h3>
              <div class="stack-items">
                @for (item of frontendStack; track item.label) {
                  <span class="stack-chip"><b [style.background]="item.tone">{{ item.mark }}</b>{{ item.label }}</span>
                }
              </div>
            </div>

            <div class="stack-group">
              <h3>Backend</h3>
              <div class="stack-items">
                @for (item of backendStack; track item.label) {
                  <span class="stack-chip"><b [style.background]="item.tone">{{ item.mark }}</b>{{ item.label }}</span>
                }
              </div>
            </div>

            <div class="stack-group">
              <h3>Database & DevOps</h3>
              <div class="stack-items">
                @for (item of platformStack; track item.label) {
                  <span class="stack-chip"><b [style.background]="item.tone">{{ item.mark }}</b>{{ item.label }}</span>
                }
              </div>
            </div>

            <div class="code-card" aria-label="Code sample">
              <div class="code-dot"></div>
              <pre><code><span>public class</span> Developer &#123;
  String name = <b>"M1RIX"</b>;
  String stack = <b>"Java, Spring, Angular, PostgreSQL"</b>;
  void build() &#123;
    <i>// Turning ideas into real products 🚀</i>
  &#125;
&#125;</code></pre>
            </div>
          </section>
        </div>

        <section id="contact" data-section="contact" class="contact-section scroll-mt-8">
          <div class="contact-copy">
            <div class="section-kicker"><span></span> LET'S CONNECT <i></i></div>
            <h2>Have a <em>project</em> in mind?<br />Let’s build something serious together.</h2>

            <div class="contact-actions">
              <a class="primary-button" href="mailto:hello@mirix.uz">Send a message <span>↗</span></a>
              <a class="social-button" href="https://github.com/M1rix" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
              <a class="social-button" href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">TG</a>
              <a class="social-button" href="#" aria-label="LinkedIn">in</a>
              <a class="social-button" href="mailto:hello@mirix.uz" aria-label="Email">✉</a>
            </div>
          </div>

          <div class="footer-rock" aria-hidden="true"></div>
          <div class="footer-terminal" aria-hidden="true"><code>$ let'sWorkTogether() &#123;<br />&nbsp;&nbsp;return success;<br />&#125;</code></div>

          <footer class="footer-row">
            <span>© 2026 M1RIX. All rights reserved.</span>
            <span>Built with <b>Angular</b>, <b>Tailwind</b> and lots of ☕</span>
          </footer>
        </section>
      </main>

      <nav class="mobile-nav" aria-label="Mobile navigation">
        <a href="#home" [class.is-active]="activeSection() === 'home'">01</a>
        <a href="#projects" [class.is-active]="activeSection() === 'projects'">02</a>
        <a href="#about" [class.is-active]="activeSection() === 'about' || activeSection() === 'stack'">03</a>
        <a href="#contact" [class.is-active]="activeSection() === 'contact'">04</a>
      </nav>
    </div>
  `,
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private observer?: IntersectionObserver;

  readonly activeSection = signal('home');
  readonly calendarCells = Array.from({ length: 18 });

  readonly projects: ProjectCard[] = [
    {
      index: '01',
      title: 'AURUM Admin',
      subtitle: 'Angular · Spring · PostgreSQL',
      description: 'Gold trading platform admin panel with live operational data, roles and controlled workflows.',
      preview: 'aurum',
      tone: 'dark',
    },
    {
      index: '02',
      title: 'Restaurant OS',
      subtitle: 'Angular · Spring · PostgreSQL',
      description: 'Restaurant management system for staff, reservations, floor planning and daily operations.',
      preview: 'restaurant',
      tone: 'light',
    },
    {
      index: '03',
      title: 'PUNCTRA',
      subtitle: 'Angular PWA · Spring · PostGIS',
      description: 'Geofence-based attendance with location-aware workflows, live maps and operational reporting.',
      preview: 'punctra',
      tone: 'dark',
    },
    {
      index: '04',
      title: 'Cardmon App',
      subtitle: 'Angular · Spring · PostgreSQL',
      description: 'Personal finance app with budgets, wallets, recurring transactions and smart automation.',
      preview: 'cardmon',
      tone: 'light',
    },
  ];

  readonly frontendStack: StackItem[] = [
    { label: 'Angular', mark: 'A', tone: '#e23b52' },
    { label: 'TypeScript', mark: 'TS', tone: '#3178c6' },
    { label: 'RxJS', mark: 'Rx', tone: '#d81b60' },
    { label: 'HTML5', mark: 'H', tone: '#e34f26' },
    { label: 'CSS / Sass', mark: 'C', tone: '#5b73df' },
    { label: 'Tailwind CSS', mark: 'T', tone: '#22b8cf' },
  ];

  readonly backendStack: StackItem[] = [
    { label: 'Java', mark: 'J', tone: '#f08a24' },
    { label: 'Spring Boot', mark: 'S', tone: '#6db33f' },
    { label: 'Spring Security', mark: 'S', tone: '#55a630' },
    { label: 'JPA / Hibernate', mark: 'H', tone: '#59666c' },
    { label: 'REST API', mark: 'R', tone: '#527f56' },
  ];

  readonly platformStack: StackItem[] = [
    { label: 'PostgreSQL', mark: 'P', tone: '#336791' },
    { label: 'Redis', mark: 'R', tone: '#d82c20' },
    { label: 'Docker', mark: 'D', tone: '#2496ed' },
    { label: 'Git', mark: 'G', tone: '#f05032' },
    { label: 'Nginx', mark: 'N', tone: '#009639' },
  ];

  ngOnInit(): void {
    this.seo.setHomeMeta();
  }

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    this.observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const section = visible?.target.getAttribute('data-section');
        if (section) this.activeSection.set(section);
      },
      { rootMargin: '-24% 0px -55% 0px', threshold: [0.08, 0.2, 0.45] },
    );
    sections.forEach(section => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
