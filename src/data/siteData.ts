// ========== SITE DATA — Telth-U MedPass ==========
// All static content centralised here so components stay clean.

import india from '../../public/india.png'
import africa from '../../public/south africa.jpg'
import mena from '../../public/new-geopolitical-game-in-the-mena-region.webp'
import southasia from '../../public/southeast-asia-map-high-detailed-260nw-2684538589.webp'
import worldmap from '../../public/Worldmap.jpg'
import graduation from '../../public/graduation.avif'
import money from '../../public/money.jpg'
import losangles from '../../public/losangles.jpg'
import chicago from '../../public/chicago.jpg'
import newyork from '../../public/newyork.png'
import Uk from '../../public/Uk.png'
import washington from '../../public/washington-flag-std.jpg'


export type PageKey = 'medpass' | 'agents';

// ---------- Navigation ----------
export interface NavLink { href: string; label: string; cta?: boolean; }

export const NAV_LINKS: Record<PageKey, NavLink[]> = {
  medpass: [
    { href: '#mp-about',    label: 'About' },
    { href: '#mp-programs', label: 'Programs' },
    { href: '#mp-levels',   label: 'Credentials' },
    { href: '#mp-partners', label: 'Partners' },
    { href: '#mp-regions',  label: 'Regions' },
    { href: '#mp-contact',  label: 'Enroll Now', cta: true },
  ],
  agents: [
    { href: '#ag-overview',  label: 'Overview' },
    { href: '#ag-tiers',     label: 'Agent Tiers' },
    { href: '#ag-cities',    label: 'Events' },
    { href: '#ag-regions',   label: 'Regions' },
    { href: '#ag-toolkit',   label: 'Marketing' },
    { href: '#ag-timeline',  label: 'Timeline' },
    { href: '#ag-kpis',      label: 'KPIs' },
    { href: '#ag-apply',     label: 'Apply Now', cta: true },
  ],
};

// ---------- Hero Stats ----------
export const HERO_STATS = [
  { num: '50+', label: 'Programs' },
  { num: '4',   label: 'Credential Levels' },
  { num: '4',   label: 'Global Regions' },
];

// ---------- Hero Floating Cards ----------
export const HERO_CARDS = [
  { icon: '🩺', title: 'Care Manager Programs', desc: 'General assisting, telehealth, phlebotomy & more',  bg: 'rgba(0,180,166,0.15)' },
  { icon: '🔬', title: 'CCM Certifications',     desc: 'Functional medicine & biomarker mastery',          bg: 'rgba(212,168,83,0.15)' },
  { icon: '👨‍⚕️', title: 'Physician Fellowships',  desc: 'Longevity, cosmetic dermatology & beyond',        bg: 'rgba(123,108,196,0.15)' },
];

// ---------- About Features ----------
export const ABOUT_FEATURES = [
  'Academic Program Delivery',
  'Professional Training',
  'Continued Medical Education',
  'Licensing & Language Training',
  'Research & Development',
  'Third-Party Program Delivery',
];

// ---------- Programs ----------
export interface ProgramLevel { tag: string; cls: string; }
export interface Program { icon: string; title: string; desc: string; levels: ProgramLevel[]; bg: string; }

const L = {
  cert:   { tag: 'Certificate', cls: 'cert' },
  dip:    { tag: 'Diploma',     cls: 'dip' },
  pgdip:  { tag: 'PG Diploma',  cls: 'pgdip' },
  fellow: { tag: 'Fellowship',  cls: 'fellow' },
  aFellow:{ tag: 'Adv. Fellowship', cls: 'fellow' },
};

export const PROGRAM_TABS = [
  { id: 'cm',  label: 'Care Managers' },
  { id: 'ccm', label: 'Collaborative Care Managers' },
  { id: 'phy', label: 'Physicians' },
  { id: 'gen', label: 'General Programs' },
];

export const PROGRAMS: Record<string, Program[]> = {
  cm: [
    { icon: '🩺', title: 'General Assisting',       desc: 'Foundational clinical assisting skills for outpatient and inpatient care environments.',               bg: 'rgba(0,180,166,0.1)',   levels: [L.cert, L.dip] },
    { icon: '💻', title: 'Telehealth & Digital Health', desc: 'Remote patient care, virtual consultation management, and digital health technology platforms.',  bg: 'rgba(123,108,196,0.1)', levels: [L.cert, L.dip, L.pgdip] },
    { icon: '🩸', title: 'Phlebotomy Program',       desc: 'Blood collection, specimen handling, laboratory safety, and venipuncture technique training.',        bg: 'rgba(232,98,92,0.1)',   levels: [L.cert] },
    { icon: '✨', title: 'Cosmetology Technician',   desc: 'Aesthetic procedures, skin care treatments, cosmetic technology, and client care management.',        bg: 'rgba(212,168,83,0.1)',  levels: [L.cert, L.dip] },
    { icon: '🌿', title: 'Longevity Advisors',       desc: 'Longevity science, age management strategies, and preventive health advisory.',                        bg: 'rgba(93,174,111,0.1)',  levels: [L.cert, L.dip, L.pgdip, L.fellow] },
  ],
  ccm: [
    { icon: '🧬', title: 'Functional Medicine CCM', desc: 'Collaborative care management with specialization in functional and integrative medicine approaches.',  bg: 'rgba(0,180,166,0.1)',  levels: [L.cert, L.dip, L.pgdip, L.fellow] },
    { icon: '📊', title: 'Biomarker Certification', desc: 'Advanced diagnostic biomarker interpretation, lab analysis, and personalized health assessment protocols.', bg: 'rgba(212,168,83,0.1)', levels: [L.cert, L.dip, L.pgdip, L.fellow] },
  ],
  phy: [
    { icon: '🧬', title: 'Functional Medicine',     desc: 'Comprehensive functional medicine certification — own offerings and accredited third-party partnerships.', bg: 'rgba(0,180,166,0.1)',   levels: [L.cert, L.dip, L.pgdip, L.fellow] },
    { icon: '🌿', title: 'Longevity Medicine',       desc: 'Four-level longevity medicine pathway covering age management, regenerative science, and preventive care.', bg: 'rgba(93,174,111,0.1)', levels: [L.cert, L.dip, L.pgdip, L.fellow] },
    { icon: '💎', title: 'Cosmetic Dermatology',    desc: 'Advanced cosmetic dermatological procedures, skin rejuvenation, and aesthetic treatment protocols.',      bg: 'rgba(232,98,92,0.1)',   levels: [L.cert, L.dip, L.pgdip, L.fellow] },
    { icon: '🏥', title: 'Cosmetic Gynecology',     desc: 'Specialized cosmetic gynecology procedures, aesthetic treatments, and patient care management.',          bg: 'rgba(123,108,196,0.1)', levels: [L.cert, L.dip, L.pgdip, L.fellow] },
    { icon: '✨', title: 'Skin Care & Laser Technology', desc: 'Instrumentation, laser technology, advanced skin care science, and clinical procedure techniques.',  bg: 'rgba(212,168,83,0.1)',  levels: [L.cert, L.dip, L.pgdip, L.fellow] },
  ],
  gen: [
    { icon: '📊', title: 'Introduction to Biomarkers',  desc: 'Foundational understanding of diagnostic biomarkers, their clinical significance, and interpretation methods.', bg: 'rgba(212,168,83,0.1)',  levels: [L.cert] },
    { icon: '🤖', title: 'Intro to AI in Healthcare',   desc: 'AI fundamentals applied to clinical workflows, diagnostics, and patient care optimization.',                   bg: 'rgba(0,180,166,0.1)',   levels: [L.cert] },
    { icon: '🧠', title: 'Advanced AI in Healthcare',   desc: 'Deep learning, predictive analytics, AI-driven diagnostics, and clinical decision support.',                   bg: 'rgba(123,108,196,0.1)', levels: [L.cert, L.dip] },
    { icon: '⚛️', title: 'Quantum Health',              desc: 'Emerging quantum biology and quantum computing applications in healthcare and therapeutics.',                   bg: 'rgba(232,98,92,0.1)',   levels: [L.cert, L.dip] },
    { icon: '🔬', title: 'P3DSC Program',               desc: 'Precision, Predictive, Preventive, Digital, and Smart Care — next-generation healthcare framework.',          bg: 'rgba(93,174,111,0.1)',  levels: [L.cert, L.aFellow] },
  ],
};

// ---------- Credential Levels ----------
export const CREDENTIAL_LEVELS = [
  { num: '01', title: 'Certificate', desc: 'Core competency training and foundational knowledge assessment in your chosen specialization.', color: 'var(--teal)' },
  { num: '02', title: 'Diploma',     desc: 'In-depth study with clinical applications, case-based learning, and supervised practice hours.', color: 'var(--gold)' },
  { num: '03', title: 'PG Diploma',  desc: 'Postgraduate-level specialization with research components and advanced clinical methodology.',   color: 'var(--violet)' },
  { num: '04', title: 'Fellowship',  desc: 'Expert-level mastery with mentorship, original research, and thought leadership in your field.',  color: 'var(--ember)' },
];

// ---------- Public Regions ----------
export const PUBLIC_REGIONS = [
  { flag: '🇺🇸', name: 'United States',  desc: 'Headquarters under Health City International LLC DBA Tech Innovators Fund' },
  { flag: '🇬🇧', name: 'United Kingdom', desc: 'Operations through Telth Healthcare Pvt Ltd UK' },
  { flag: '🇦🇪', name: 'MENA Region',    desc: 'Expanding access across the Middle East & North Africa' },
  { flag: '🇮🇳', name: 'India',          desc: 'Operations through Telth Healthcare Pvt Ltd India' },
];

// ---------- Agent Overview Cards ----------
export const AGENT_OVERVIEW_CARDS = [
  { icon: money, title: 'Earn While You Impact', desc: 'Earn 8–18% commissions on every enrollment, with residual income, team overrides, and performance bonuses as you grow.',   color: 'var(--teal)' },
  { icon: worldmap, title: 'Global Network Access',  desc: 'Join a network of 440+ agents across India, Africa, Southeast Asia, and MENA — with live event access in 5 major cities.', color: 'var(--gold)' },
  { icon: graduation, title: 'Full Support System',    desc: 'Complete marketing toolkit, agent training academy, CRM access, co-branded materials, and dedicated regional support.',       color: 'var(--violet)' },
];

// ---------- Agent Tiers ----------
export interface AgentTier {
  icon: string; title: string; subtitle: string;
  commission: string; commissionLabel: string;
  features: string[]; featured?: boolean;
  iconBg: string;
}

export const AGENT_TIERS: AgentTier[] = [
  {
    icon: '🌱', title: 'Ambassador', subtitle: 'Entry Level',
    commission: '8%', commissionLabel: 'Base Commission',
    iconBg: 'rgba(0,180,166,0.1)',
    features: ['Agent training portal', 'Digital marketing kit', 'Unique referral tracking', 'Monthly payout', '1 event city access'],
  },
  {
    icon: '⭐', title: 'Regional Agent', subtitle: 'Growth Level',
    commission: '12%', commissionLabel: 'Base + 2% Team Override',
    iconBg: 'rgba(212,168,83,0.12)', featured: true,
    features: ['Everything in Ambassador', 'Recruit & manage Ambassadors', '2% override on team', 'Co-branded materials', '3 event cities', 'Quarterly bonus'],
  },
  {
    icon: '🏆', title: 'Country Director', subtitle: 'Leadership Level',
    commission: '15%', commissionLabel: 'Base + 3% Team + Residual',
    iconBg: 'rgba(123,108,196,0.1)',
    features: ['Everything in Regional', 'Country-level authority', '3% override (2 levels)', '1% renewal residual', 'All 5 cities', 'Host seminars', 'Leadership retreat'],
  },
  {
    icon: '👑', title: 'Institutional Partner', subtitle: 'Enterprise Level',
    commission: '18%', commissionLabel: 'Base + Institutional + Residual',
    iconBg: 'rgba(232,98,92,0.1)',
    features: ['Everything in Director', 'Institutional license', 'Bulk pricing', 'Co-developed curriculum', 'White-label delivery', 'Revenue share', 'Advisory board seat'],
  },
];

// ---------- Event Cities ----------
export interface EventCity {
  emoji: string; name: string; state: string; dates: string; bg: string; events: string[];
}

export const EVENT_CITIES: EventCity[] = [
  { emoji: chicago, name: 'Chicago',        state: 'IL', dates: 'Sep 15–17, 2026', bg: 'linear-gradient(135deg,#1a3a5c,#0B1D3A)', events: ['Agent Training Summit', 'Medical Professional Open Day', 'CME Preview Workshop', 'Diaspora Healthcare Mixer'] },
  { emoji: losangles, name: 'Los Angeles',     state: 'CA', dates: 'Oct 5–7, 2026',   bg: 'linear-gradient(135deg,#2a1a4c,#1a1040)', events: ['South Asian Healthcare Summit', 'Cosmetic Medicine Live Demo', 'Agent Recruitment Fair', 'Alumni Networking Reception'] },
  { emoji: newyork, name: 'New York',        state: 'NY', dates: 'Oct 20–22, 2026', bg: 'linear-gradient(135deg,#1a2a3c,#0a1828)', events: ['Flagship Admission Gala', 'AI in Healthcare Seminar', 'MENA Professionals Meetup', 'Institutional Partner Summit'] },
  { emoji: washington, name: 'Washington D.C.', state: '',   dates: 'Nov 8–10, 2026',  bg: 'linear-gradient(135deg,#2a1a2c,#1a0a20)', events: ['Healthcare Education Forum', 'African Diaspora Conference', 'Longevity Medicine Masterclass', 'NGO Partnerships'] },
  { emoji: Uk, name: 'London',         state: 'UK', dates: 'Nov 28–30, 2026', bg: 'linear-gradient(135deg,#1a2a1c,#0a1810)', events: ['UK/Europe Grand Launch', 'Functional Medicine Symposium', 'SE Asia Outreach', 'Agent Certification Ceremony'] },
];

// ---------- Target Regions ----------
export interface TargetRegion {
  flag: string; name: string; countries: string; desc: string;
  agents: string; enrollments: string;
}

export const TARGET_REGIONS: TargetRegion[] = [
  { flag: india, name: 'India',          countries: 'Delhi · Mumbai · Bangalore · Chennai · Hyderabad · Kochi', desc: 'Largest target market. Massive pool of physicians, nurses, and allied health professionals seeking international certifications.', agents: '200+', enrollments: '5K+' },
  { flag: africa, name: 'Africa',           countries: 'Nigeria · Kenya · South Africa · Ghana · Egypt · Ethiopia', desc: 'Rapidly growing healthcare workforce. Focus on English-speaking nations, diaspora communities, and digital health adoption.', agents: '100+', enrollments: '2K+' },
  { flag: southasia, name: 'Southeast Asia',   countries: 'Philippines · Indonesia · Vietnam · Thailand · Malaysia · Singapore', desc: 'High nursing/care manager export market. Strong demand for international certifications and telehealth training.', agents: '80+', enrollments: '1.5K+' },
  { flag: mena, name: 'MENA Region',     countries: 'UAE · Saudi Arabia · Qatar · Jordan · Lebanon · Oman', desc: 'Premium market — strong demand for cosmetic medicine, longevity, and functional medicine credentials.', agents: '60+', enrollments: '1K+' },
];

// ---------- Toolkit ----------
export const TOOLKIT_CARDS = [
  { icon: '📱', title: 'Digital Marketing',    desc: 'Ready-to-deploy digital assets for social, email, and web.', items: ['Social media templates (IG, FB, LinkedIn, WhatsApp)', '8-touch email drip sequences', 'Agent landing pages with tracking', 'WhatsApp/Telegram broadcast templates', 'Video scripts & B-roll library', 'Google & Meta ad creative'] },
  { icon: '📄', title: 'Print & Event Materials', desc: 'Physical collateral for events, seminars, and community outreach.', items: ['Multi-language brochures (EN, HI, AR, FR)', 'Pull-up banners & event backdrops', 'Credential pathway posters', 'Agent business cards & ID badges', 'Enrollment application packs', 'Branded merchandise'] },
  { icon: '🎯', title: 'Sales Enablement',     desc: 'Conversion tools, CRM access, and objection-handling playbooks.', items: ['Agent CRM with lead tracking', 'Program comparison matrix', 'Objection playbook (20+ scenarios)', 'ROI calculator for students', 'Alumni testimonial videos', 'Scholarship info sheets'] },
  { icon: '🌐', title: 'Regional Localization', desc: 'Market-specific content for each target region.', items: ['India: Hindi, Tamil, Telugu assets', 'Africa: French & Swahili materials', 'MENA: Arabic RTL digital assets', 'SE Asia: Tagalog & Bahasa adaptations', 'Region-specific pricing & payment plans', 'Cultural context briefings'] },
  { icon: '📊', title: 'Performance Analytics', desc: 'Real-time dashboards and reporting.', items: ['Real-time enrollment dashboard', 'Agent leaderboard & rankings', 'Conversion funnel analytics', 'Regional performance heat maps', 'Commission tracking & payouts', 'A/B test campaign results'] },
  { icon: '🎓', title: 'Agent Training Academy', desc: 'Structured onboarding and ongoing development.', items: ['5-module agent certification', 'Product knowledge deep-dives', 'Sales methodology training', 'Compliance & ethics guidelines', 'Monthly "Agent Intel" webinars', 'Peer mentorship matching'] },
];

// ---------- Timeline ----------
export const TIMELINE_PHASES = [
  { phase: 'Phase 1 · Jun–Jul 2026', title: 'Foundation & Agent Recruitment',        desc: 'Build agent portal and CRM. Recruit Country Directors for India, Nigeria, Philippines, UAE. Develop marketing collateral. Secure venue contracts.', color: 'var(--teal)' },
  { phase: 'Phase 2 · Aug 2026',     title: 'Agent Training & Certification',         desc: 'Launch Agent Training Academy. Onboard Regional Agents and Ambassadors. Begin digital pre-marketing in all four regions. Activate WhatsApp communities.', color: 'var(--gold)' },
  { phase: 'Phase 3 · Sep–Nov 2026', title: 'Live Event Circuit & Enrollment Drive',  desc: 'Five-city event tour: Chicago → Los Angeles → New York → Washington D.C. → London. 3-day programs with seminars, open days, and networking at each city.', color: 'var(--violet)' },
  { phase: 'Phase 4 · Dec 2026–Jan 2027', title: 'Post-Event Conversion & Follow-Up', desc: '8-touch email nurture sequences. Agent follow-up calls. Launch early-bird pricing for Q1 2027 cohort. Process scholarship applications.', color: 'var(--ember)' },
  { phase: 'Phase 5 · Feb–Mar 2027', title: 'Q1 Cohort Launch & Scale',               desc: 'First major cohort begins. Collect feedback and testimonials. Plan Wave 2 events. Expand agent network to secondary markets.', color: 'var(--sage)' },
  { phase: 'Phase 6 · Apr–Jun 2027', title: 'Optimization & Expansion',               desc: 'Analyze full-year KPIs. Promote top agents. Open new city chapters (Toronto, Dubai, Sydney). Launch institutional partnership track.', color: 'var(--sky)' },
];

// ---------- KPIs ----------
export const KPI_STRIP = [
  { val: '440+',  lbl: 'Total Agents' },
  { val: '9,500+', lbl: 'Enrollments' },
  { val: '$8.5M', lbl: 'Revenue Target' },
  { val: '25K+',  lbl: 'Event Attendees' },
  { val: '500K+', lbl: 'Digital Reach' },
  { val: '72%',   lbl: 'Conversion Rate' },
];

export const COMP_REVENUE = [
  { label: 'Certificate Programs',        value: '$500 – $1,200',    hl: false },
  { label: 'Diploma Programs',            value: '$1,500 – $3,000',  hl: false },
  { label: 'PG Diploma Programs',         value: '$3,500 – $6,000',  hl: false },
  { label: 'Fellowship Programs',         value: '$6,500 – $12,000', hl: false },
  { label: 'Adv. Fellowship (P3DSC)',      value: '$10,000 – $18,000', hl: true },
];

export const COMP_EARNINGS = [
  { label: 'Ambassador (20 enrollments)',       value: '$3,200 – $8,000',    hl: false },
  { label: 'Regional Agent (50 + team)',        value: '$15,000 – $35,000',  hl: false },
  { label: 'Country Director (100 + team)',     value: '$45,000 – $90,000',  hl: false },
  { label: 'Institutional Partner',            value: '$100,000+',           hl: true },
  { label: 'Top Agent Bonus Pool',             value: '$250,000 / year',     hl: true },
];

// ---------- Footer ----------
export const FOOTER_LINKS = {
  Programs: ['Care Manager', 'Collaborative Care', 'Physician Training', 'General Programs', 'CME Credits'],
  Credentials: ['Certificate', 'Diploma', 'PG Diploma', 'Fellowship'],
  'Agent Program': ['Agent Application', 'Commission Structure', 'Event Calendar', 'Marketing Toolkit'],
  Company: ['Telth Holding Inc.', 'Health City International', 'Telth Healthcare UK', 'Telth Healthcare India', 'Careers'],
};
