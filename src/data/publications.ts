// Publications, newest first. "Xin Wang" is highlighted automatically.
// Append "†" to an author name to mark equal contribution.

export type Publication = {
  title: string;
  authors: string[];
  venue: string; // full venue line
  badge: string; // short tag, e.g. "NeurIPS 2026"
  year: number;
  status: 'published' | 'preprint' | 'submitted';
  selected?: number; // position in "Selected Publications" on the home page (1 = first)
  note?: string;
  links: { label: string; href: string }[];
};

export const ME = 'Xin Wang';

export const publications: Publication[] = [
  {
    title: 'BioBlobs: Unsupervised Discovery of Functional Substructures for Protein Function Prediction',
    authors: ['Xin Wang', 'Kaiwen Shi', 'Carlos Oliver'],
    venue: 'Advances in Neural Information Processing Systems (NeurIPS)',
    badge: 'NeurIPS 2026',
    year: 2026,
    status: 'published',
    selected: 1,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2510.01632' },
      { label: 'Code', href: 'https://github.com/OliverLaboratory/BioBlobs' },
    ],
  },
  {
    title: 'Scaffold-Aware Generative Augmentation and Reranking for Enhanced Virtual Screening',
    authors: ['Xin Wang', 'Yu Wang', 'Yunchao Liu', 'Jens Meiler', 'Tyler Derr'],
    venue: 'SIAM International Conference on Data Mining (SDM)',
    badge: 'SDM 2026',
    year: 2026,
    status: 'published',
    selected: 4,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2510.16306' },
      { label: 'Code', href: 'https://github.com/xwang112358/ScaffAug' },
    ],
  },
  {
    title: 'Benchmarking AI Agents for Addressing Scientific Challenges Across Scales',
    authors: [
      'Tianyu Liu†', 'Xin Wang†', 'Antonia Panescu†', 'Lisa Xinyi Chen', 'Wenxin Long', 'Xinyu Wei', 'Yueqian Jing',
      'Ziyao Zeng', 'Jihang Chen', 'Sihan Jiang', 'Ziqing Wang', 'Siyi Gu', 'Siyu Chen', 'Xinyang Hu', 'Haoran Shao',
      'Leqi Xu', 'Wangjie Zheng', 'Zhiyuan Cao', 'Ada Fang', 'Botao Yu', 'Kunyang Sun', 'Rex Ying', 'Arman Cohan',
      'Qingyu Chen', 'Lingzhou Xue', 'Kaize Ding', 'Yuanqi Du', 'Wengong Jin', 'Zhuoran Yang', 'Marinka Zitnik',
      'James Zou', 'Hua Xu', 'Hongyu Zhao',
    ],
    venue: 'Submitted to Nature',
    badge: 'Preprint',
    year: 2026,
    status: 'submitted',
    selected: 2,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2606.12736' },
      { label: 'Project', href: 'https://sciagentarena.github.io/' },
      { label: 'Code', href: 'https://github.com/HelloWorldLTY/SciAgentArena' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/iLOVE2D/SciAgentArena' },
    ],
  },
  {
    title: 'AI Scientists in Health: Trustworthy Agentic AI for Scientific Inquiry',
    authors: [
      'Qingyu Chen', 'Xin Wang', 'Rong Zhou', 'Hyunjae Kim', 'Shuai Wang', 'Wenjun Zhao', 'Tianyu Liu', 'Irbaz Riaz',
      'Lifang He', 'Yize Zhao', 'Carlos Oliver', 'Gunjan Tiyyagura', 'Mark Iscoe', 'Fares Alahdab', 'Hongyu Zhao',
      'Hua Xu', 'Zhiyong Lu',
    ],
    venue: 'Submitted to Nature Biomedical Engineering',
    badge: 'Preprint',
    year: 2026,
    status: 'submitted',
    selected: 3,
    links: [{ label: 'SSRN', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6889798' }],
  },
  {
    title: 'Validation and Analysis of 12,000 AI-driven CAR-T Designs in the Bits to Binders Competitions',
    authors: [
      'Clayton W. Kosonocky', 'Alex M. Abel', 'Aaron L. Feller', 'Amanda E. Cifuentes Rieffer', 'Phillip R. Woolley',
      'Jakub Lála', 'Daryl R. Barth', 'Tynan Gardner', 'Bits to Binders Competitors', 'Stephen C. Ekker',
      'Andrew D. Ellington', 'Wesley A. Wierson', 'Edward M. Marcotte',
    ],
    venue: 'bioRxiv',
    badge: 'Preprint',
    year: 2026,
    status: 'preprint',
    note: 'Consortium author (Bits to Binders Competitors)',
    links: [{ label: 'bioRxiv', href: 'https://doi.org/10.64898/2026.03.03.709355' }],
  },
  {
    title: 'WelQrate: Defining the Gold Standard in Small Molecule Drug Discovery Benchmarking',
    authors: [
      'Yunchao Liu†', 'Ha Dong†', 'Xin Wang†', 'Rocco Moretti', 'Yu Wang', 'Zhaoqian Su', 'Jiawei Gu',
      'Bobby Bodenheimer', 'Charles David Weaver', 'Jens Meiler', 'Tyler Derr',
    ],
    venue: 'Advances in Neural Information Processing Systems 37, Datasets and Benchmarks Track (NeurIPS)',
    badge: 'NeurIPS 2024',
    year: 2024,
    status: 'published',
    selected: 5,
    links: [
      { label: 'Paper', href: 'https://proceedings.neurips.cc/paper_files/paper/2024/hash/5f2f8305cd1c5be7e8319aea306388ce-Abstract-Datasets_and_Benchmarks_Track.html' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2411.09820' },
      { label: 'Website', href: 'http://www.welqrate.org/' },
      { label: 'Code', href: 'https://github.com/xwang112358/WelQrate' },
      { label: 'PyPI', href: 'https://pypi.org/project/welqrate/' },
    ],
  },
  {
    title: 'Topology-aware Retrieval Augmentation for Text Generation',
    authors: [
      'Yu Wang', 'Nedim Lipka', 'Ruiyi Zhang', 'Alexa Siu', 'Yuying Zhao', 'Bo Ni', 'Xin Wang', 'Ryan Rossi', 'Tyler Derr',
    ],
    venue: 'ACM International Conference on Information and Knowledge Management (CIKM)',
    badge: 'CIKM 2024',
    year: 2024,
    status: 'published',
    links: [
      { label: 'Paper', href: 'https://dl.acm.org/doi/10.1145/3627673.3679746' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2405.17602' },
    ],
  },
];
