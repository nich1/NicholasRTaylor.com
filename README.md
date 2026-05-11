# NicholasRTaylor.com

Personal site and blog, built with [Next.js 14](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Framework:** Next.js 14 App Router, static + SSG routes
- **Styling:** Tailwind CSS with design tokens defined as CSS custom properties; light/dark theme switchable via `data-theme` with a `prefers-color-scheme` fallback
- **Typography:** [Geist Sans](https://vercel.com/font) for body, Geist Mono for code-adjacent labels
- **Blog:** MDX with `next-mdx-remote`, `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`, and `rehype-pretty-code` (Shiki) for dual-theme syntax highlighting
- **Extras:** dynamic `/og` image generation via `next/og`, `/rss.xml` feed, `sitemap.ts`, `robots.ts`, JSON-LD person schema

## Layout

```
src/
  app/
    layout.tsx              Root layout — fonts, metadata, theme script, skip link
    page.tsx                Home (Hero, About, Projects, Experience, Education, Contact)
    globals.css             Design tokens, base styles, Shiki dual-theme CSS
    blog/
      page.tsx              Blog index
      [slug]/page.tsx       MDX post renderer
    og/route.tsx            Dynamic OG image route (edge)
    rss.xml/route.ts        RSS 2.0 feed
    sitemap.ts, robots.ts   SEO routes
  components/               Reusable chrome — Nav, Footer, Chip, Container, etc.
  lib/
    cn.ts                   classname helper
    posts.ts                Reads content/posts/*.mdx at build time
    mdx-options.ts          remark + rehype plugin config
content/
  posts/                    Blog posts (MDX)
public/                     Static assets (project thumbnails, résumé)
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
```

## Writing a blog post

1. Add a new `.mdx` file in `content/posts/` with a slug-friendly filename.
2. Front-matter:
   ```yaml
   ---
   title: Your title
   date: 2026-05-03
   description: One-sentence summary for list / OG / RSS.
   tags:
     - some-tag
   published: true
   ---
   ```
3. Write your content below the front-matter.
4. Unpublished drafts (`published: false`) are visible in `npm run dev` but excluded from production builds, the sitemap, and the RSS feed.

## TODOs for future me

- Replace `public/Resume2025.pdf` with a current résumé; consider renaming to a stable `public/resume.pdf`.
- Update the Hero status string and About copy (search for `TODO(nick)` in `src/app/`).
- Add real project URLs to the `PROJECTS` array in `src/app/Projects.tsx`.
- Fill in current full-time role at the top of the `EXPERIENCE` array in `src/app/Experience.tsx`.
- Swap placeholder contact email in `src/app/Contact.tsx` and `src/app/rss.xml/route.ts`.
