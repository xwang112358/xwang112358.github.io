# xwang112358.github.io

Personal academic website of Xin (Allen) Wang, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Editing content

| What | Where |
| --- | --- |
| Name, bio links, research interests, news | `src/data/site.ts` |
| Bio paragraphs | `src/pages/index.astro` |
| Publications (author `†` = equal contribution; `selected: <n>` shows it on the home page at position n) | `src/data/publications.ts` |
| Talks (home page) | `src/data/cv.ts` |
| CV page (embedded PDF) | `public/files/Xin_Wang_CV.pdf` |
| Blog posts (Markdown, `$…$` / `$$…$$` math via KaTeX) | `src/content/blog/*.md` |
| Images and files | `public/images/`, `public/files/` |
| Profile photo | replace `public/images/profile.jpg` (square, ≥ 352px; shown in a circle) |

The downloadable CV (`public/files/Xin_Wang_CV.pdf`) is generated from the LaTeX resume with
`python ../Xin_Wang_Resume_latex/build_cv.py`, which strips the phone number from the public copy.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it with GitHub Pages.
In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
