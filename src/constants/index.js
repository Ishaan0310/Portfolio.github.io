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
const technologies = [
  { name: 'PostgreSQL',  icon: postgresql },
  { name: 'JavaScript',  icon: javascript },
  { name: 'React JS',    icon: reactjs    },
  { name: 'Node JS',     icon: nodejs     },
  { name: 'Git',         icon: git        },
];

// ── Experience (Timeline ordered early to latest) ───────────────────────────
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
    title:        'Citrix Technical Engineer',
    company_name: 'HCL Technologies',
    icon:         hcl,          
    iconBg:       '#FFFFFF', 
    date:         'Dec 2025 – Present',
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
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
    image: space,   
    source_code_link: 'https://github.com/Ishaan0310/Expense_tracker', 
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
    image: nyeusi,  
    source_code_link: 'https://github.com/Ishaan0310/Skill_demand', 
  },
];

export { services, technologies, experiences, projects };
