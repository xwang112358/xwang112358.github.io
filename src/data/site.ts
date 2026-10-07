// Profile, links, and short-form content shown across the site.

export const site = {
  name: 'Xin (Allen) Wang',
  shortName: 'Allen Wang',
  title: 'Ph.D. Student, Computational Biology & Bioinformatics',
  affiliation: 'Yale University',
  description:
    'Xin (Allen) Wang is a Ph.D. student at Yale University building AI systems for scientific discovery: agents for data-driven discovery, protein & RNA language models, biomolecular design, and AI agent evaluation.',
  email: 'allen.wang.xw532@yale.edu',
  cvPdf: '/files/Xin_Wang_CV.pdf',
  photo: '/images/profile.jpg',
  // Default photo; the home page's "Another cat" button swaps in photos from public/images/cats/.
  photoAlt: 'A photo of my cats',
};

export type Link = { label: string; href: string; icon: 'mail' | 'scholar' | 'github' | 'linkedin' | 'orcid' | 'cv' };

export const links: Link[] = [
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=c9z463sAAAAJ&hl=en', icon: 'scholar' },
  { label: 'GitHub', href: 'https://github.com/xwang112358', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/allen-wang-a2236b251/', icon: 'linkedin' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0001-1519-7569', icon: 'orcid' },
  { label: 'CV', href: '/cv/', icon: 'cv' },
];

export const interests = [
  {
    title: 'AI agents for scientific discovery',
    text: 'Agents for data-driven discovery, and rigorous evaluation of AI agents on real scientific tasks.',
  },
  {
    title: 'Protein & RNA language models',
    text: 'Learning representations of biomolecules from sequence and structure.',
  },
  {
    title: 'Biomolecular design',
    text: 'Generative models, including diffusion language models, for designing and optimizing biomolecules.',
  },
];

// Newest first. Dates are "YYYY-MM" and shown as "Mon YYYY".
export const news: { date: string; html: string }[] = [
  {
    date: '2026-09',
    html: '<a href="https://arxiv.org/abs/2510.01632"><em>BioBlobs: Unsupervised Discovery of Functional Substructures for Protein Function Prediction</em></a> accepted at <strong>NeurIPS 2026</strong>.',
  },
  {
    date: '2026-08',
    html: 'Gave a contributed talk on <em>Benchmarking AI Agents for Addressing Scientific Challenges Across Scales</em> at the <a href="https://ai-scientist-workshop.github.io/">AI Scientist Summer Workshop</a> (Microsoft Research New England).',
  },
  {
    date: '2026-07',
    html: '<a href="https://arxiv.org/abs/2510.16306"><em>Scaffold-Aware Generative Augmentation and Reranking for Enhanced Virtual Screening</em></a> accepted at <strong>SDM 2026</strong>.',
  },
  {
    date: '2026-06',
    html: 'Released <a href="https://arxiv.org/abs/2606.12736"><em>Benchmarking AI Agents for Addressing Scientific Challenges Across Scales</em></a> (co-first author) and <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6889798"><em>AI Scientists in Health: Trustworthy Agentic AI for Scientific Inquiry</em></a>.',
  },
  {
    date: '2025-08',
    html: 'Started my Ph.D. in Computational Biology & Bioinformatics at <strong>Yale University</strong>, advised by Dr. Qingyu Chen.',
  },
  {
    date: '2024-12',
    html: 'Presented <a href="http://www.welqrate.org/"><em>WelQrate: Defining the Gold Standard in Small Molecule Drug Discovery Benchmarking</em></a> at the <strong>NeurIPS 2024</strong> Datasets and Benchmarks Track.',
  },
];
