import type { ReactNode } from 'react';
import {
  MdOutlineCloudSync,
} from 'react-icons/md';
import { FaComputer } from 'react-icons/fa6';
import { AiFillDatabase } from 'react-icons/ai';

type SkillCard = {
  icon: ReactNode;
  tier: string;
  title: string;
  desc: string;
  skills: { name: string; level: string; value: number }[];
  focus: string;
  cardBg: string;
  titleColor: string;
  textColor: string;
  progressColor: string;
};

export const skillCards: SkillCard[] = [
  {
    icon: <FaComputer />,
    tier: 'Client Tier',
    title: 'Front-End Architecture',
    desc: 'Crafting reactive, accessible interfaces that maintain smooth 60fps rendering and instant interaction feedback.',
    skills: [
      { name: 'React & Next.js', level: '95% Advanced', value: 95 },
      { name: 'TypeScript & ES6+', level: '92% Advanced', value: 92 },
      { name: 'Tailwind CSS & DaisyUI', level: '96% Mastery', value: 96 },
    ],
    focus:
      'Component modularity, tree-shaking, strict hydration safety in Next.js, and WCAG AA compliance.',
    cardBg: 'bg-brand-300',
    titleColor: 'text-brand-200',
    textColor: '',
    progressColor: 'text-brand-200',
  },
  {
    icon: <AiFillDatabase />,
    tier: 'Server Tier',
    title: 'Back-End Systems',
    desc: 'Scalable APIs, resilient database models, event pipelines, and high-concurrency microservices.',
    skills: [
      { name: 'Node.js & Express', level: '90% Advanced', value: 90 },
      { name: 'PostgreSQL & Redis', level: '88% Advanced', value: 88 },
      { name: 'Python & Django', level: '82% Mastery', value: 82 },
    ],
    focus:
      'Indexed query execution plans, connection pooling, rate-limiting, and idempotency guarantees.',
    cardBg: 'bg-brand-200',
    titleColor: 'text-brand-300',
    textColor: 'text-black',
    progressColor: 'text-brand-300',
  },
  {
    icon: <MdOutlineCloudSync />,
    tier: 'Infra Tier',
    title: 'DevOps, Cloud & Tooling',
    desc: 'Reproducible container runtimes, continuous delivery pipelines, and monitoring infrastructure.',
    skills: [
      { name: 'Docker & Containers', level: '91% Advanced', value: 91 },
      { name: 'CI/CD & GitHub Actions', level: '89% Advanced', value: 89 },
      { name: 'AWS (S3, ECS, RDS)', level: '80% Proficient', value: 80 },
    ],
    focus:
      'Zero-downtime rolling deploys, reproducible build environments, and automated regression suites.',
    cardBg: 'bg-brand-300',
    titleColor: 'text-brand-200',
    textColor: '',
    progressColor: 'text-brand-200',
  },
];

type CaseStudy = {
  category: string;
  title: string[];
  metrics: { label: string; value: string }[];
  star: { situation: string; task: string; action: string; result: string };
  stack: string[];
  note: string;
};

export const cases: CaseStudy[] = [
  {
    category: 'FinTech / B2B SaaS',
    title: ['Featured Engineering Case Studies'],
    metrics: [
      { label: 'LATENCY CUT', value: '45s to 280ms' },
      { label: 'DAU RETENTION', value: '+34%' },
      { label: 'DAILY USERS', value: '25,000+' },
      { label: 'CSAT SCORE', value: '4.9 / 5.0' },
    ],
    star: {
      situation:
        'Legacy monolithic reporting endpoint suffered from 45-second queries during market opens, driving churn across enterprise finance tiers.',
      task: 'Legacy monolithic reporting endpoint suffered from 45-second queries during market opens, driving churn across enterprise finance tiers.',
      action:
        'Legacy monolithic reporting endpoint suffered from 45-second queries during market opens, driving churn across enterprise finance tiers.',
      result:
        'Legacy monolithic reporting endpoint suffered from 45-second queries during market opens, driving churn across enterprise finance tiers.',
    },
    stack: [
      'Next.js 14',
      'TypeScript',
      'Express API',
      'Docker',
      'DaisyUI',
      'Tailwind CSS',
    ],
    note: 'Production Ready | Zero Flaky Deploys',
  },
  {
    category: 'Omnichannel Retail Tech',
    title: ['Real-Time Omnichannel Inventory &', 'Checkout Hub'],
    metrics: [
      { label: 'LAUNCH VOLUME', value: '1OOk+ Orders' },
      { label: 'SYSTEM UPTIME', value: '99.99%' },
      { label: 'SYNC DISCREPANCY', value: '0 Errors' },
      { label: 'CHECKOUT TIME', value: 'Less than 1.8 sec' },
    ],
    star: {
      situation:
        'Fast-scaling apparel merchant struggled with mismatched stock across Shopify, Amazon, and offline POS, causing overselling incidents.',
      task: 'Design a unified central hub processing incoming webhooks instantly and delivering a lightning-fast checkout UI.',
      action:
        'Engineered an event-driven Node.js bus with Redis Pub/Sub, distributed locks to prevent race conditions, and an accessible Next.js storefront.',
      result:
        'Effortlessly managed Black Friday peak of 100k+ orders without a single oversell incident and 100% data consistency.',
    },
    stack: [
      'Next.js 14',
      'TypeScript',
      'Express API',
      'Docker',
      'DaisyUI',
      'Tailwind CSS',
    ],
    note: 'Processed $4.2M in 2024',
  },
  {
    category: 'Developer Productivity',
    title: ['DevCollab:', 'Real-Time Collaborative Code Inspection'],
    metrics: [
      { label: 'PR VELOCITY', value: '-40% Cycle' },
      { label: 'ADOPTED TEAMS', value: '15+ Orgs' },
      { label: 'SYNC LATENCY', value: 'Less Than 40ms' },
      { label: 'INLINE COMMENTS', value: '250k+' },
    ],
    star: {
      situation:
        'Distributed engineering teams were suffering from disjointed code reviews, with endless Slack threads detached from git diff contexts.',
      task: 'Engineer a lightweight, in- browser collaborative workspace featuring real-time presence markers, inline thread pins, and AST syntax tree diffs.',
      action:
        'Integrated Monaco Editor with operational transform WebSocket streams, backed by Python Django asynchronous channel workers.',
      result:
        'PR turnaround compressed by 40% across pilot teams, with zero git conflict desynchronizations over 10,000 active sessions.',
    },
    stack: [
      'React Vite TS',
      'WebSockets',
      'Monaco Editor',
      'Python Django',
      'Docker',
      'Tailwind CSS',
    ],
    note: 'Featured on Hacker News Frontpage',
  },
];