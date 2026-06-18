# Mirix Portfolio Webapp

Static-first Angular portfolio for Mirix / Mirshod Allaberganov. The current biography, project cards, timeline, and testimonials use high-quality mocked content so the site can be designed and reviewed before final copy is available.

## Run locally

```bash
npm install
npm start
```

Build for deployment:

```bash
npm run build
```

## Replace mocked content

Most editable content lives in:

```txt
src/app/core/content/portfolio-content.ts
src/app/core/content/projects-content.ts
src/app/core/content/site-config.ts
```

Update those files when real biography, project details, testimonials, links, or contact information are ready. The UI components read from typed content objects, so content changes should not require template edits.

## Deployment

The project is designed for static hosting such as Cloudflare Pages or Vercel. The default public URL placeholders use `https://mirix.uz`; update `siteConfig.siteUrl`, `public/robots.txt`, `public/sitemap.xml`, and canonical metadata when the final domain changes.
