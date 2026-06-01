import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  postgresql,
  reactjs,
  nodejs,
  hcl,
  git,
  space,
  nyeusi,
  coverhunt,
  dcc,
  microverse,
} from '../assets';

export const navLinks = [
  { id: 'about',    title: 'About'    },
  { id: 'projects', title: 'Projects' },
  { id: 'contact',  title: 'Contact'  },
];

// ── Services (displayed on the About section cards) ──────────────────────────
const services = [
  { title: 'Data Analyst',    icon: frontend    },
  { title: 'Python Developer', icon: backend    },
  { title: 'BI & Reporting',  icon: ux          },
  { title: 'SQL & Databases', icon: prototyping },
];

// ── Technologies (3D spinning balls) ─────────────────────────────────────────
// NOTE: python.png and pandas.png are not bundled — to add them:
//   1. drop the PNG into src/assets/tech/
//   2. import them in src/assets/index.js
//   3. add them here
const technologies = [
  { name: 'PostgreSQL',  icon: postgresql },
  { name: 'JavaScript',  icon: javascript },
  { name: 'React JS',    icon: reactjs    },
  { name: 'Node JS',     icon: nodejs     },
  { name: 'Git',         icon: git        },
];

// ── Experience (timeline on the Work section) ─────────────────────────────────
// HCL logo: drop src/assets/company/hcl.png and swap `dcc` below for `hcl`
const experiences = [
  
  {
    title:        'Full-Stack Intern',
    company_name: 'EAIESB Software Solutions',
    icon:         coverhunt,
    iconBg:       '#333333',
    date:         '30th May 2022 – 22nd July 2022',
  },
  {
    title:        'Unleashing the Power of PWA',
    company_name: 'JETIR',
    icon:         microverse,
    iconBg:       '#333333',
    date:         'Feb 2023 – Jan 2024',
  },
  {
    title:        'Frontend Developer & Data Integration Intern',
    company_name: 'Movidu Technologies',
    icon:         microverse,
    iconBg:       '#333333',
    date:         'Feb 2024 – Jul 2024',
  },
  {
    title:        'Technical Analyst – Infrastructure Analytics',
    company_name: 'HCL Technologies',
    icon:         hcl,          
    iconBg:       '#005DAA',
    date:         'Sep 2024 – Present',
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
// Project screenshots: drop your PNGs into src/assets/projects/ and swap the
// imported image names below (e.g. import financeImg from './projects/finance-tracker.png')
const projects = [
  {
    id:          'project-1',
    name:        'Finance Variance Tracker',
    description:
      'End-to-end ETL pipeline: downloads real Kaggle expense data (1,000+ records), ' +
      'groups transactions by Category & Month, computes budget vs. actual variance, ' +
      'and flags overspend anomalies exceeding 40%. Outputs a 4-sheet Excel report ' +
      'with conditional formatting, bar charts, and color-coded anomaly rows.',
    tags: [
      { name: 'Python',   color: 'blue-text-gradient'  },
      { name: 'Pandas',   color: 'green-text-gradient' },
      { name: 'openpyxl', color: 'pink-text-gradient'  },
    ],
    image: space,   // TODO: replace with finance-tracker screenshot (see note above)
    repo:  'https://github.com/Ishaan0310/Expense_tracker',  // TODO: update with your actual repo URL
  },
  {
    id:          'project-2',
    name:        'Skill Demand Tracker',
    description:
      'Analyzed 785K+ real job postings (Google Search dataset) to identify ' +
      'top in-demand skills, salary–skill correlations, and city-level demand patterns ' +
      'for data analyst roles. Built a normalized 3-table PostgreSQL schema ' +
      'with self-joins for co-occurrence, window functions (ROW_NUMBER + PARTITION BY) ' +
      'for city rankings, and CTEs for complex aggregations.',
    tags: [
      { name: 'Python',     color: 'blue-text-gradient'  },
      { name: 'PostgreSQL', color: 'green-text-gradient' },
      { name: 'SQL',        color: 'pink-text-gradient'  },
    ],
    image: nyeusi,  // TODO: replace with skill-tracker screenshot (see note above)
    repo:  'https://github.com/Ishaan0310/Skill_demand',  // TODO: update with your actual repo URL
  },
];

export { services, technologies, experiences, projects };
