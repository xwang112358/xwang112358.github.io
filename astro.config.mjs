// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://xwang112358.github.io',
  // Keep source whitespace so line breaks next to inline links still render as spaces.
  compressHTML: false,
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  markdown: {
    // remark/rehype pipeline so blog posts can use $...$ / $$...$$ math (rendered with KaTeX).
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
  // Keep links to the old Jekyll site working.
  redirects: {
    '/about': '/',
    '/resume': '/cv/',
    '/year-archive': '/blog/',
    '/teaching': '/cv/',
    '/teaching/ucsb-pstat-ta': '/cv/',
    '/posts': '/blog/bits-to-binders-2024/',
    '/posts/bee': '/blog/bee-visual-acuity/',
    '/posts/UAT': '/blog/universal-approximation-theorem/',
    // Post is a draft for now; point back at /blog/molecules-as-cellular-complexes/ when it is published.
    '/posts/2023/12/cell': '/blog/',
    '/publication/2024-CIKM': '/publications/',
    '/publication/2024-NeurIPS-WelQrate': '/publications/',
  },
});
