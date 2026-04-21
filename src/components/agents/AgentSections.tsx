// ========== LAYER 2: AGENT PROGRAM — ALL SECTIONS (RESPONSIVE) ==========

import React from 'react';
import { Reveal, SectionLabel, SectionHeading, SectionDesc, Button, Badge } from '../shared/UI';
import {
  AGENT_OVERVIEW_CARDS, AGENT_TIERS, EVENT_CITIES,
  TARGET_REGIONS, TOOLKIT_CARDS, TIMELINE_PHASES,
  KPI_STRIP, COMP_REVENUE, COMP_EARNINGS,
} from '../../data/siteData';

// ─── HERO ───
export const AgentHero: React.FC = () => (
  <section style={{ background: '#0B1D3A', position: 'relative', overflow: 'hidden' }}>
    <style>{`
      .ag-hero-pad { padding: 80px 40px 100px; }
      .ag-metrics-row { display: flex; gap: 44px; flex-wrap: wrap; animation: fadeUp 1s ease .45s both; }
      .ag-btn-row { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 56px; }
      @media (max-width: 1024px) { .ag-hero-pad { padding: 60px 24px 80px; } }
      @media (max-width: 640px) { .ag-hero-pad { padding: 48px 16px 56px; } .ag-metrics-row { gap: 24px; } }
      @media (max-width: 480px) { .ag-btn-row { flex-direction: column; } .ag-btn-row a { width: 100%; justify-content: center; } }
    `}</style>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 60%,rgba(0,180,166,.12),transparent 55%),radial-gradient(ellipse at 85% 30%,rgba(212,168,83,.08),transparent 50%)' }} />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,180,166,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,166,.025) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
    <div className="ag-hero-pad" style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(212,168,83,.12)', border: '1px solid rgba(212,168,83,.25)', borderRadius: 100, padding: '6px 20px 6px 10px', marginBottom: 30, animation: 'fadeDown .8s ease both' }}>
        <div style={{ width: 8, height: 8, background: '#D4A853', borderRadius: '50%', animation: 'pulse-gold 2s infinite' }} />
        <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2.5, color: '#D4A853' }}>Global Agent Promotion Program</span>
      </div>
      <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(30px,5.2vw,68px)', fontWeight: 400, color: '#fff', lineHeight: 1.05, marginBottom: 22, maxWidth: 880, animation: 'fadeUp 1s ease .15s both' }}>
        Build a Business Around{' '}
        <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg,#00B4A6,#F0C060)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Medical Education</em>
      </h1>
      <p style={{ fontSize: 17, color: 'rgba(255,255,255,.55)', lineHeight: 1.75, maxWidth: 680, marginBottom: 44, animation: 'fadeUp 1s ease .3s both' }}>
        Join the Telth-U MedPass Global Agent Network. Earn commissions of 8–18% on every enrollment, access live city events across the USA and UK, and build a sustainable income stream in the booming medical education market.
      </p>
      <div className="ag-btn-row">
        <Button variant="gold" href="#ag-apply">Apply as Agent →</Button>
        <Button variant="outline" href="#ag-tiers">View Commission Structure</Button>
      </div>
      <div className="ag-metrics-row">
        {[{ val: '8–18%', lbl: 'Commission Rate' }, { val: '$250K', lbl: 'Annual Bonus Pool' }, { val: '440+', lbl: 'Agent Network' }].map((m) => (
          <div key={m.lbl}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 30, fontWeight: 700, color: '#00B4A6' }}>{m.val}</div>
            <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,.35)', marginTop: 4, fontWeight: 600 }}>{m.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── OVERVIEW ───
export const AgentOverview: React.FC = () => (
  <section id="ag-overview" style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,.05)' }}>
    <style>{`
      .ag-overview-inner { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
      .ag-overview-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; margin-bottom: 48px; }
      @media (max-width: 1024px) { .ag-overview-inner { padding: 0 24px; } }
      @media (max-width: 768px) { .ag-overview-grid { grid-template-columns: 1fr; } }
      @media (max-width: 640px) { section[id="ag-overview"] { padding: 48px 0; } .ag-overview-inner { padding: 0 16px; } }
    `}</style>
    <div className="ag-overview-inner">
      <SectionLabel>01 — Why Join the Agent Network</SectionLabel>
      <SectionHeading>Three Reasons to Join</SectionHeading>
      <div className="ag-overview-grid">
        {AGENT_OVERVIEW_CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 80}>
            <div style={{ background: '#fff', borderRadius: 16, padding: '34px 30px', border: '1px solid rgba(0,0,0,.06)', transition: 'all .35s', position: 'relative', overflow: 'hidden' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(10,14,26,.1)'; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: card.color }} />
              <img src={card.icon} style={{ width: 48, height: 48, borderRadius: 12, marginBottom: 18 }} alt="" />
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0A0E1A', marginBottom: 8 }}>{card.title}</h3>
              <p style={{ fontSize: 13, color: '#6B7890', lineHeight: 1.7 }}>{card.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' as any }}>
          <table style={{ width: '100%', minWidth: 600, background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,.06)', borderCollapse: 'separate', borderSpacing: 0 }}>
            <thead>
              <tr>{['Category', 'Program', 'Credential Levels', 'Target Audience', 'Priority'].map((h) => (
                <th key={h} style={{ background: '#0B1D3A', color: '#fff', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, padding: '14px 20px', textAlign: 'left' }}>{h}</th>
              ))}</tr>
            </thead>
            <tbody>
              {[
                { cat: 'CM', program: 'General Assisting', levels: [['teal', 'Cert'], ['gold', 'Dip']], audience: 'Care Managers', priority: ['teal', 'Med'] },
                { cat: '', program: 'Telehealth & Digital', levels: [['teal', 'Cert'], ['gold', 'Dip'], ['violet', 'PG']], audience: 'CMs, Allied', priority: ['teal', 'Med'] },
                { cat: '', program: 'Phlebotomy', levels: [['teal', 'Cert']], audience: 'Lab Techs', priority: ['gold', 'Med'] },
                { cat: '', program: 'Longevity Advisors', levels: [['teal', 'Cert'], ['gold', 'Dip'], ['violet', 'PG'], ['ember', 'Fellow']], audience: 'Wellness, CMs', priority: ['sage', 'High'] },
                { cat: 'CCM', program: 'Functional Medicine CCM', levels: [['teal', 'Cert'], ['gold', 'Dip'], ['violet', 'PG'], ['ember', 'Fellow']], audience: 'CCMs, NPs', priority: ['ember', 'Priority'] },
                { cat: '', program: 'Biomarker Certification', levels: [['teal', 'Cert'], ['gold', 'Dip'], ['violet', 'PG'], ['ember', 'Fellow']], audience: 'Lab Directors', priority: ['ember', 'Priority'] },
                { cat: 'Physicians', program: 'Functional Medicine', levels: [['teal', 'Cert'], ['gold', 'Dip'], ['violet', 'PG'], ['ember', 'Fellow']], audience: 'MDs, DOs', priority: ['ember', 'Priority'] },
                { cat: '', program: 'Longevity Medicine', levels: [['teal', 'Cert'], ['gold', 'Dip'], ['violet', 'PG'], ['ember', 'Fellow']], audience: 'Physicians', priority: ['ember', 'Priority'] },
                { cat: '', program: 'Cosmetic Dermatology', levels: [['teal', 'Cert'], ['gold', 'Dip'], ['violet', 'PG'], ['ember', 'Fellow']], audience: 'Dermatologists', priority: ['sage', 'High'] },
                { cat: 'General', program: 'AI in Healthcare', levels: [['teal', 'Cert'], ['gold', 'Dip']], audience: 'All Pros', priority: ['sage', 'High'] },
                { cat: '', program: 'P3DSC Program', levels: [['teal', 'Cert'], ['ember', 'Adv. Fellow']], audience: 'Leaders', priority: ['ember', 'Priority'] },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                  <td style={{ padding: '14px 20px', fontSize: 13, fontWeight: 600, color: '#0A0E1A', borderBottom: '1px solid rgba(0,0,0,.04)' }}>{row.cat}</td>
                  <td style={{ padding: '14px 20px', fontSize: 13, borderBottom: '1px solid rgba(0,0,0,.04)' }}>{row.program}</td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,.04)' }}><div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>{row.levels.map(([v, t]) => <Badge key={t} variant={v as any}>{t}</Badge>)}</div></td>
                  <td style={{ padding: '14px 20px', fontSize: 13, color: '#6B7890', borderBottom: '1px solid rgba(0,0,0,.04)' }}>{row.audience}</td>
                  <td style={{ padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,.04)' }}><Badge variant={row.priority[0] as any}>{row.priority[1]}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── AGENT TIERS ───
export const AgentTiers: React.FC = () => (
  <section id="ag-tiers" style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,.05)' }}>
    <style>{`
      .ag-tiers-inner { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
      .ag-tiers-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20; }
      @media (max-width: 1024px) { .ag-tiers-inner { padding: 0 24px; } .ag-tiers-grid { grid-template-columns: repeat(2,1fr); gap: 16px; } }
      @media (max-width: 640px) { section[id="ag-tiers"] { padding: 48px 0; } .ag-tiers-inner { padding: 0 16px; } .ag-tiers-grid { grid-template-columns: 1fr; } }
    `}</style>
    <div className="ag-tiers-inner">
      <SectionLabel>02 — Agent Commission Structure</SectionLabel>
      <SectionHeading>Four-Tier Agent Network</SectionHeading>
      <SectionDesc>Agents earn tiered commissions on every successful enrollment. Higher tiers unlock residual income, team bonuses, and event hosting rights.</SectionDesc>
      <Reveal>
        <div className="ag-tiers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {AGENT_TIERS.map((tier) => (
            <div key={tier.title} style={{ background: tier.featured ? 'linear-gradient(180deg,rgba(212,168,83,.04),#fff)' : '#fff', borderRadius: 16, padding: '34px 26px', border: `2px solid ${tier.featured ? '#D4A853' : 'transparent'}`, transition: 'all .35s', textAlign: 'center', position: 'relative' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(10,14,26,.15)'; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
            >
              {tier.featured && (<div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#D4A853', color: '#0A0E1A', fontSize: 9, fontWeight: 800, letterSpacing: 2, padding: '4px 14px', borderRadius: 100 }}>MOST POPULAR</div>)}
              <div style={{ width: 54, height: 54, borderRadius: '50%', margin: '0 auto 14px', background: tier.iconBg, display: 'grid', placeItems: 'center', fontSize: 24 }}>{tier.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: '#0A0E1A', marginBottom: 4 }}>{tier.title}</h3>
              <p style={{ fontSize: 11, color: '#6B7890', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 18 }}>{tier.subtitle}</p>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 34, fontWeight: 700, color: '#00B4A6', marginBottom: 4 }}>{tier.commission}</div>
              <p style={{ fontSize: 11, color: '#6B7890', marginBottom: 22 }}>{tier.commissionLabel}</p>
              <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                {tier.features.map((f) => (<li key={f} style={{ fontSize: 12, padding: '7px 0', borderBottom: '1px solid rgba(0,0,0,.04)', display: 'flex', alignItems: 'flex-start', gap: 8, color: '#2D3648' }}><span style={{ color: '#5DAE6F', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── EVENT CITIES ───
export const EventCities: React.FC = () => (
  <section id="ag-cities" style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,.05)' }}>
    <style>{`
      .ag-cities-inner { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
      .ag-cities-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 18px; }
      @media (max-width: 1200px) { .ag-cities-grid { grid-template-columns: repeat(3,1fr); } }
      @media (max-width: 1024px) { .ag-cities-inner { padding: 0 24px; } }
      @media (max-width: 768px) { .ag-cities-grid { grid-template-columns: repeat(2,1fr); } }
      @media (max-width: 640px) { section[id="ag-cities"] { padding: 48px 0; } .ag-cities-inner { padding: 0 16px; } }
      @media (max-width: 480px) { .ag-cities-grid { grid-template-columns: 1fr; } }
    `}</style>
    <div className="ag-cities-inner">
      <SectionLabel>03 — Event Cities & Calendar</SectionLabel>
      <SectionHeading>Five Cities. One Mission.</SectionHeading>
      <SectionDesc>Live admission events, educational seminars, agent meetups, and open-day experiences at premium venues.</SectionDesc>
      <Reveal>
        <div className="ag-cities-grid">
          {EVENT_CITIES.map((city) => (
            <div key={city.name} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,.06)', transition: 'all .35s' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(10,14,26,.1)'; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
            >
              <div style={{ height: 110, background: city.bg, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(10,14,26,.7))' }} />
                <img src={city.emoji} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={city.name} />
              </div>
              <div style={{ padding: 18 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A0E1A', marginBottom: 3 }}>{city.name}{city.state ? `, ${city.state}` : ''}</h3>
                <p style={{ fontSize: 11, color: '#00B4A6', fontWeight: 600, marginBottom: 10 }}>{city.dates}</p>
                <ul style={{ listStyle: 'none' }}>
                  {city.events.map((ev) => (<li key={ev} style={{ fontSize: 11, color: '#6B7890', padding: '3px 0', display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#D4A853', fontSize: 9 }}>▸</span>{ev}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── TARGET REGIONS ───
export const TargetRegions: React.FC = () => (
  <section id="ag-regions" style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,.05)' }}>
    <style>{`
      .ag-regions-inner { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
      .ag-regions-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 22px; }
      @media (max-width: 1024px) { .ag-regions-inner { padding: 0 24px; } .ag-regions-grid { grid-template-columns: repeat(2,1fr); } }
      @media (max-width: 640px) { section[id="ag-regions"] { padding: 48px 0; } .ag-regions-inner { padding: 0 16px; } }
      @media (max-width: 480px) { .ag-regions-grid { grid-template-columns: 1fr; } }
    `}</style>
    <div className="ag-regions-inner">
      <SectionLabel>04 — Target Recruitment Regions</SectionLabel>
      <SectionHeading>Four High-Growth Markets</SectionHeading>
      <SectionDesc>Strategic agent recruitment and student enrollment targeting healthcare professionals across emerging medical education markets.</SectionDesc>
      <Reveal>
        <div className="ag-regions-grid">
          {TARGET_REGIONS.map((r) => (
            <div key={r.name} style={{ background: '#fff', borderRadius: 16, padding: 30, border: '1px solid rgba(0,0,0,.06)', transition: 'all .35s' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(10,14,26,.1)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = ''; (e.currentTarget as HTMLDivElement).style.transform = ''; }}
            >
              <img src={r.flag} alt="" style={{ width: 80, height: 80, objectFit: 'cover', marginBottom: 12 }} />
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0A0E1A', marginBottom: 5 }}>{r.name}</h3>
              <p style={{ fontSize: 12, color: '#00B4A6', fontWeight: 600, marginBottom: 12, lineHeight: 1.5 }}>{r.countries}</p>
              <p style={{ fontSize: 12, color: '#6B7890', lineHeight: 1.7, marginBottom: 14 }}>{r.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[{ val: r.agents, lbl: 'Agents' }, { val: r.enrollments, lbl: 'Enrollments' }].map((s) => (
                  <div key={s.lbl} style={{ background: '#FAF8F4', borderRadius: 6, padding: 10, textAlign: 'center' }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 17, fontWeight: 700, color: '#0A0E1A' }}>{s.val}</div>
                    <div style={{ fontSize: 8, textTransform: 'uppercase', letterSpacing: 1.5, color: '#9AA0AD', fontWeight: 600, marginTop: 2 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── TOOLKIT ───
export const AgentToolkit: React.FC = () => (
  <section id="ag-toolkit" style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,.05)' }}>
    <style>{`
      .ag-toolkit-inner { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
      .ag-toolkit-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
      @media (max-width: 1024px) { .ag-toolkit-inner { padding: 0 24px; } .ag-toolkit-grid { grid-template-columns: repeat(2,1fr); } }
      @media (max-width: 640px) { section[id="ag-toolkit"] { padding: 48px 0; } .ag-toolkit-inner { padding: 0 16px; } .ag-toolkit-grid { grid-template-columns: 1fr; } }
    `}</style>
    <div className="ag-toolkit-inner">
      <SectionLabel>05 — Marketing & Promotion Toolkit</SectionLabel>
      <SectionHeading>Agent Marketing Arsenal</SectionHeading>
      <SectionDesc>Every agent receives a comprehensive, localized marketing toolkit — digital and physical — to drive enrollment.</SectionDesc>
      <Reveal>
        <div className="ag-toolkit-grid">
          {TOOLKIT_CARDS.map((card) => (
            <div key={card.title} style={{ background: '#fff', borderRadius: 16, padding: 30, border: '1px solid rgba(0,0,0,.06)', transition: 'all .35s' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(10,14,26,.1)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = ''; (e.currentTarget as HTMLDivElement).style.transform = ''; }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A0E1A', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}><span>{card.icon}</span>{card.title}</h3>
              <p style={{ fontSize: 12, color: '#6B7890', lineHeight: 1.7, marginBottom: 14 }}>{card.desc}</p>
              <ul style={{ listStyle: 'none' }}>
                {card.items.map((item) => (<li key={item} style={{ fontSize: 11, color: '#2D3648', padding: '5px 0', borderBottom: '1px solid rgba(0,0,0,.03)', display: 'flex', alignItems: 'center', gap: 7, fontWeight: 500 }}><span style={{ color: '#00B4A6', fontSize: 7 }}>✦</span>{item}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── TIMELINE ───
export const AgentTimeline: React.FC = () => (
  <section id="ag-timeline" style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,.05)' }}>
    <style>{`
      .ag-timeline-inner { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
      @media (max-width: 1024px) { .ag-timeline-inner { padding: 0 24px; } }
      @media (max-width: 640px) { section[id="ag-timeline"] { padding: 48px 0; } .ag-timeline-inner { padding: 0 16px; } }
    `}</style>
    <div className="ag-timeline-inner">
      <SectionLabel>06 — Program Timeline</SectionLabel>
      <SectionHeading>Launch to Scale: 12-Month Roadmap</SectionHeading>
      <SectionDesc>Phased approach from agent recruitment through full-scale enrollment campaigns.</SectionDesc>
      <Reveal>
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 14, width: 2, background: 'linear-gradient(180deg,#00B4A6,#D4A853,#7B6CC4,#E8625C,#5DAE6F,#4AA8D8)', borderRadius: 2 }} />
          {TIMELINE_PHASES.map((p, i) => (
            <div key={i} style={{ position: 'relative', paddingBottom: i < TIMELINE_PHASES.length - 1 ? 36 : 0 }}>
              <div style={{ position: 'absolute', left: -33, top: 4, width: 18, height: 18, borderRadius: '50%', background: p.color, border: '3px solid #FAF8F4', zIndex: 1 }} />
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 21, color: '#0A0E1A', marginBottom: 6 }}>{p.title}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── KPIs ───
export const AgentKPIs: React.FC = () => (
  <section id="ag-kpis" style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,.05)' }}>
    <style>{`
      .ag-kpi-inner { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
      .ag-kpi-strip { display: grid; grid-template-columns: repeat(6,1fr); gap: 14px; margin-bottom: 44px; }
      .ag-kpi-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
      @media (max-width: 1024px) { .ag-kpi-inner { padding: 0 24px; } .ag-kpi-strip { grid-template-columns: repeat(3,1fr); } }
      @media (max-width: 640px) { section[id="ag-kpis"] { padding: 48px 0; } .ag-kpi-inner { padding: 0 16px; } .ag-kpi-strip { grid-template-columns: repeat(2,1fr); } .ag-kpi-cards { grid-template-columns: 1fr; } }
    `}</style>
    <div className="ag-kpi-inner">
      <SectionLabel>08 — Performance Targets</SectionLabel>
      <SectionHeading>Year One KPI Dashboard</SectionHeading>
      <SectionDesc>Measurable targets tracked in real-time through the agent portal.</SectionDesc>
      <Reveal>
        <div className="ag-kpi-strip">
          {KPI_STRIP.map((k) => (
            <div key={k.lbl} style={{ background: '#fff', borderRadius: 10, padding: '22px 18px', textAlign: 'center', border: '1px solid rgba(0,0,0,.06)' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 26, fontWeight: 700, color: '#0A0E1A' }}>{k.val}</div>
              <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1.5, color: '#9AA0AD', fontWeight: 600, marginTop: 4 }}>{k.lbl}</div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="ag-kpi-cards">
          {[{ title: '💰 Revenue Per Program Level', rows: COMP_REVENUE }, { title: '🎯 Agent Earnings Potential (Annual)', rows: COMP_EARNINGS }].map((card) => (
            <div key={card.title} style={{ background: '#fff', borderRadius: 16, padding: 34, border: '1px solid rgba(0,0,0,.06)' }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0A0E1A', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>{card.title}</h3>
              {card.rows.map((row) => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid rgba(0,0,0,.04)', fontSize: 13 }}>
                  <span style={{ color: '#6B7890' }}>{row.label}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: row.hl ? '#00B4A6' : '#0A0E1A' }}>{row.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── AGENT CTA ───
export const AgentCTA: React.FC = () => (
  <div id="ag-apply" style={{ margin: '60px 0' }}>
    <style>{`
      .ag-cta-inner-pad { padding: 60px; }
      .ag-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
      @media (max-width: 1024px) { div[id="ag-apply"] > div { padding: 0 24px; } }
      @media (max-width: 768px) { .ag-cta-inner-pad { padding: 36px 24px; } div[id="ag-apply"] { margin: 36px 0; } }
      @media (max-width: 640px) { div[id="ag-apply"] > div { padding: 0 16px; } }
      @media (max-width: 480px) { .ag-cta-btns { flex-direction: column; align-items: stretch; } .ag-cta-btns a { width: 100%; justify-content: center; } }
    `}</style>
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>
      <Reveal>
        <div className="ag-cta-inner-pad" style={{ background: '#0B1D3A', borderRadius: 16, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%,rgba(0,180,166,.15),transparent 60%),radial-gradient(ellipse at 70% 50%,rgba(212,168,83,.1),transparent 60%)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(24px,3vw,38px)', color: '#fff', marginBottom: 14 }}>Join the MedPass Agent Network</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', marginBottom: 32, maxWidth: 560, marginInline: 'auto', lineHeight: 1.7 }}>
              Whether you're a healthcare professional, education consultant, institutional leader, or community organizer — there's a place for you.
            </p>
            <div className="ag-cta-btns">
              <Button variant="teal" href="#">Apply as Agent</Button>
              <Button variant="gold" href="#">Institutional Partnership</Button>
              <Button variant="ghost" href="#">Download Program Guide</Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
);
