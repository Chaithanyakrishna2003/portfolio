# Portfolio

Personal portfolio site. **Live at [chaithanyakrishnamunagala.vercel.app](https://chaithanyakrishnamunagala.vercel.app)**

Chaithanya Krishna Munagala, IIT (BHU) Varanasi, ECE 2024.

## What this is

A single self-contained HTML file with inlined CSS and JavaScript.

The page is deliberately not a static brochure: the content lives in a headless CMS, so projects,
roles, blog posts, achievements and the About copy can be added or edited without touching code
or redeploying.

## Architecture

```
index.html          the entire site: markup, styles, behaviour
assets/             profile photo, degree certificate
sanity-schemas/     content models, mirrored into the Sanity Studio project
robots.txt          crawler rules
sitemap.xml         search engine discovery
```

### Content layer

Content is served from [Sanity](https://www.sanity.io) and rendered client side. The design is
**progressive enhancement rather than replacement**: every section ships as real HTML in
`index.html`, so the page paints instantly and link preview scrapers see genuine content. The CMS
replaces a section only when its query returns rows. An empty result, a failed request or a missing
config leaves the built-in markup in place, so the site cannot blank out if the CMS is unreachable.

Five document types: `project`, `post`, `experience`, `achievement`, and a `siteText` singleton
holding the hero tagline and About prose.

Text is escaped before `**bold**` markers are converted, so CMS content can never inject markup.

### Other details

- Light and dark themes, applied pre-paint from `localStorage` or the OS preference, so there is no
  flash of the wrong theme
- Tinted surfaces use RGB channel custom properties (`rgba(var(--accent-rgb), .08)`) so every tint
  rethemes automatically
- Scroll reveals, spotlight cards and count-up statistics are scoped functions re-runnable over any
  freshly rendered subtree, so CMS-rendered cards animate like the rest
- Contact form posts to Web3Forms with a honeypot field, falling back to `mailto:` if the API fails
- `Person` structured data for search engines

## Running locally

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>. The origin must be allowlisted in the Sanity project's CORS
settings for CMS content to load, otherwise the built-in fallback content renders.

## Deploying

```bash
vercel --prod
```

Static deploy, no build step. `.vercelignore` keeps local tooling out of the published site.
