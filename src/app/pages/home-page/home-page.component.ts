import { AfterViewInit, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';

import { SeoService } from '../../core/seo/seo.service';

interface ProjectCard {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  asset: string;
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
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 10 8-6 8 6v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/></svg>
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
        <section id="home" data-section="home" class="hero-section">
          <div class="hero-copy">
            <div class="section-kicker"><span></span> FULL-STACK JAVA & ANGULAR ENGINEER <i></i></div>

            <h1>M1RIX</h1>

            <p class="hero-lead">
              I build digital products from<br />
              <strong>backend logic</strong> to <strong>polished interfaces.</strong>
            </p>

            <div class="hero-stack" aria-label="Primary technology stack">
              <span class="tech-pill"><b class="tech-logo angular-logo" aria-hidden="true">A</b>Angular</span>
              <span class="tech-pill"><b class="tech-logo spring-logo" aria-hidden="true">S</b>Spring</span>
              <span class="tech-pill"><b class="tech-logo postgres-logo" aria-hidden="true">P</b>PostgreSQL</span>
              <span class="tech-pill more-pill">+ Java</span>
            </div>

            <div class="hero-actions">
              <a class="primary-button" href="#projects">View my work <span>↗</span></a>
              <a class="scroll-hint" href="#projects">Scroll to explore<span class="scroll-arc" aria-hidden="true"></span></a>
            </div>
          </div>

          <div class="hero-art" aria-hidden="true">
            <img src="/portfolio-v2/hero-space.webp" alt="" />
          </div>
        </section>

        <section id="projects" data-section="projects" class="projects-section">
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

                <div class="project-preview">
                  <img [src]="project.asset" alt="" loading="lazy" />
                </div>

                <a class="project-hit-area" href="#contact" [attr.aria-label]="'Discuss ' + project.title"></a>
              </article>
            }
          </div>

          <div class="project-position" aria-hidden="true"><span></span></div>
        </section>

        <div class="about-stack-grid">
          <section id="about" data-section="about" class="about-section">
            <div class="section-kicker"><span></span> ABOUT ME <i></i></div>

            <h2>
              I’m a full-stack developer<br />
              who loves building <em>useful,</em><br />
              scalable and clean software.
            </h2>

            <p>
              I work with Java & Spring on the backend and Angular on the frontend. I enjoy designing systems,
              writing clean code and turning complex ideas into products.
            </p>

            <div class="about-metrics" aria-label="Core engineering focus">
              <div><strong>Java</strong><span>Backend systems</span></div>
              <div><strong>Angular</strong><span>Product interfaces</span></div>
              <div><strong>SQL</strong><span>Data-first thinking</span></div>
            </div>

            <a class="primary-button" href="#stack">More about me <span>↗</span></a>
          </section>

          <section id="stack" data-section="stack" class="stack-section">
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

            <div class="code-card" aria-label="Java code sample">
              <div class="code-dot"></div>
              <pre><code><span>public class</span> Developer &#123;
  String name = <b>"M1RIX"</b>;
  String stack = <b>"Java, Spring, Angular, PostgreSQL"</b>;

  <span>void</span> build() &#123;
    <i>// Turning ideas into real products 🚀</i>
  &#125;
&#125;</code></pre>
            </div>
          </section>
        </div>

        <section id="contact" data-section="contact" class="contact-section">
          <div class="contact-copy">
            <div class="section-kicker"><span></span> LET'S CONNECT <i></i></div>

            <h2>Have a <em>project</em> in mind?<br />Let’s build something amazing together.</h2>

            <div class="contact-actions">
              <a class="primary-button" href="mailto:hello@mirix.uz">Send a message <span>↗</span></a>
              <a class="social-button" href="https://github.com/M1rix" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
              <a class="social-button" href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">TG</a>
              <a class="social-button" href="#" aria-label="LinkedIn">in</a>
              <a class="social-button" href="mailto:hello@mirix.uz" aria-label="Email">✉</a>
            </div>
          </div>

          <img class="footer-art" src="/portfolio-v2/footer-rock.webp" alt="" aria-hidden="true" />

          <footer class="footer-row"><span>© 2026 M1RIX. All rights reserved.</span></footer>
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

  readonly projects: ProjectCard[] = [
    {
      index: '01',
      title: 'Reportix',
      subtitle: 'Angular · Spring Boot · PostgreSQL',
      description: 'Advanced reporting platform with dashboards, filters and real-time insights.',
      asset: '/portfolio-v2/reportix.webp',
      tone: 'dark',
    },
    {
      index: '02',
      title: 'Restaurant OS',
      subtitle: 'Angular · Spring Boot · PostgreSQL',
      description: 'Restaurant management system for staff, reservations, floor planning and operations.',
      asset: '/portfolio-v2/restaurant-os.webp',
      tone: 'light',
    },
    {
      index: '03',
      title: 'PUNCTRA',
      subtitle: 'Angular PWA · Spring · PostgreSQL',
      description: 'Geofence-based attendance with location-aware workflows, live maps and operational reporting.',
      asset: '/portfolio-v2/punctra.webp',
      tone: 'dark',
    },
    {
      index: '04',
      title: 'Team DevKit',
      subtitle: 'Angular · Spring Boot · PostgreSQL',
      description: 'Developer productivity tools, setup flows and internal engineering workspace.',
      asset: '/portfolio-v2/team-devkit.webp',
      tone: 'light',
    },
  ];

  readonly frontendStack: StackItem[] = [
    { label: 'Angular', mark: 'A', tone: '#ef3340' },
    { label: 'TypeScript', mark: 'TS', tone: '#3178c6' },
    { label: 'RxJS', mark: 'Rx', tone: '#d81b60' },
    { label: 'HTML5', mark: 'H', tone: '#e34f26' },
    { label: 'SCSS', mark: 'S', tone: '#c6538c' },
    { label: 'Tailwind CSS', mark: 'T', tone: '#06b6d4' },
  ];

  readonly backendStack: StackItem[] = [
    { label: 'Java', mark: 'J', tone: '#ea7e20' },
    { label: 'Spring Boot', mark: 'S', tone: '#6db33f' },
    { label: 'Spring Security', mark: 'S', tone: '#55a630' },
    { label: 'JPA / Hibernate', mark: 'H', tone: '#59666c' },
    { label: 'REST API', mark: 'R', tone: '#4d8d64' },
  ];

  readonly platformStack: StackItem[] = [
    { label: 'PostgreSQL', mark: 'P', tone: '#336791' },
    { label: 'Redis', mark: 'R', tone: '#dc382d' },
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
