// ========== LAYER 2: MEDPASS SECTIONS (RESPONSIVE) ==========

import React, { useState } from 'react';
import { Reveal, SectionLabel, SectionHeading, SectionDesc, Button, LevelTag } from '../shared/UI';
import { ABOUT_FEATURES, PROGRAM_TABS, PROGRAMS, CREDENTIAL_LEVELS, PUBLIC_REGIONS } from '../../data/siteData';

const sectionStyle = (bg: string) => ({
  background: bg,
  padding: 'var(--sec-pad, 90px 40px)',
} as React.CSSProperties);

// ─── ABOUT ───
export const MedPassAbout: React.FC = () => (
  <section id="mp-about" style={{ background: '#F4F6F8' }}>
    <style>{`
      .mp-about-inner { max-width: 1400px; margin: 0 auto; padding: 90px 40px; }
      .mp-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
      .mp-features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 24px; }
      @media (max-width: 1024px) { .mp-about-inner { padding: 70px 24px; } .mp-about-grid { gap: 40px; } }
      @media (max-width: 768px) { .mp-about-inner { padding: 48px 16px; } .mp-about-grid { grid-template-columns: 1fr; } }
      @media (max-width: 480px) { .mp-features-grid { grid-template-columns: 1fr; } }
    `}</style>
    <div className="mp-about-inner">
      <SectionLabel>About Telth-U MedPass</SectionLabel>
      <SectionHeading>The Academic & Training Division of Telth-U</SectionHeading>
      <div className="mp-about-grid">
        <Reveal>
          <div style={{ background: '#0B1D3A', borderRadius: 20, padding: 40, overflow: 'hidden', minHeight: 400, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%,rgba(0,180,166,.2),transparent 60%)' }} />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '20px 0' }}>
              {[{ label: 'Telth Holding Inc.', sub: 'Parent Organization', parent: true }, { label: 'Telth-U', sub: 'Academic Programs · Professional Training · R&D · Third-Party Delivery', parent: true }].map((node) => (
                <React.Fragment key={node.label}>
                  <div style={{ background: node.parent ? 'rgba(0,180,166,.15)' : 'rgba(255,255,255,.06)', border: `1px solid ${node.parent ? 'rgba(0,180,166,.3)' : 'rgba(255,255,255,.1)'}`, borderRadius: 12, padding: '14px 24px', textAlign: 'center' }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{node.label}</h4>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', marginTop: 3 }}>{node.sub}</p>
                  </div>
                  <div style={{ width: 1, height: 18, background: 'rgba(0,180,166,.3)' }} />
                </React.Fragment>
              ))}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                {[['MedPass', 'Academic & Training'], ['CME', 'Continued Medical Ed'], ['Licensing', 'Licensing & Language']].map(([h, s]) => (
                  <div key={h} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '12px 18px', textAlign: 'center' }}>
                    <h4 style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{h}</h4>
                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,.5)', marginTop: 3 }}>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: '#0A0E1A', marginBottom: 20 }}>Where Medical Knowledge Meets Professional Growth</h3>
          <p style={{ color: '#6B7890', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>Telth-U is the education and research arm of Telth Holding Inc., responsible for academic program delivery, professional training, research & development, and third-party program facilitation.</p>
          <p style={{ color: '#6B7890', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>MedPass operates as the dedicated academic and training division within Telth-U, offering structured credential pathways for Care Managers, Collaborative Care Managers, and Physicians worldwide.</p>
          <div className="mp-features-grid">
            {ABOUT_FEATURES.map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: '#0A0E1A' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00B4A6', flexShrink: 0 }} />{f}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

// ─── PROGRAMS ───
export const MedPassPrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabKey = PROGRAM_TABS[activeTab].id;
  const programs = PROGRAMS[tabKey] ?? [];
  return (
    <section id="mp-programs" style={{ background: '#fff' }}>
      <style>{`
        .mp-programs-inner { max-width: 1400px; margin: 0 auto; padding: 90px 40px; }
        .mp-programs-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(280px,1fr)); gap: 22px; }
        @media (max-width: 1024px) { .mp-programs-inner { padding: 70px 24px; } }
        @media (max-width: 640px) { .mp-programs-inner { padding: 48px 16px; } .mp-programs-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="mp-programs-inner">
        <SectionLabel>Program Verticals</SectionLabel>
        <SectionHeading>Training Pathways for Every Healthcare Role</SectionHeading>
        <SectionDesc>MedPass delivers specialized programs across three professional verticals — each with four credential levels from foundational certification to advanced fellowship.</SectionDesc>
        <div className="tab-bar" style={{ display: 'flex', gap: 4, background: '#F4F6F8', borderRadius: 14, padding: 5, overflowX: 'auto', marginBottom: 36, WebkitOverflowScrolling: 'touch' as any, scrollbarWidth: 'none' as any }}>
          {PROGRAM_TABS.map((tab, i) => (
            <button key={tab.id} onClick={() => setActiveTab(i)} style={{
              padding: '13px 22px', borderRadius: 10, fontSize: 13, fontWeight: 600,
              cursor: 'pointer', border: 'none',
              background: activeTab === i ? '#fff' : 'transparent',
              color: activeTab === i ? '#0A0E1A' : '#6B7A8D',
              boxShadow: activeTab === i ? '0 2px 12px rgba(0,0,0,.06)' : 'none',
              transition: 'all .3s', whiteSpace: 'nowrap', fontFamily: "'Outfit', sans-serif",
            }}>{tab.label}</button>
          ))}
        </div>
        <div className="mp-programs-grid">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div style={{ background: '#fff', border: '1px solid #E8ECF0', borderRadius: 16, padding: 28, transition: 'all .35s', cursor: 'default' }}
                onMouseOver={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#00B4A6'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 40px rgba(0,180,166,.08)'; }}
                onMouseOut={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#E8ECF0'; el.style.transform = ''; el.style.boxShadow = ''; }}
              >
                <div style={{ width: 50, height: 50, borderRadius: 14, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 18 }}>{p.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0A0E1A', marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: '#6B7890', lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {p.levels.map((lv) => <LevelTag key={lv.tag} cls={lv.cls} tag={lv.tag} />)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CREDENTIALS ───
export const MedPassCredentials: React.FC = () => (
  <section id="mp-levels" style={{ background: '#0B1D3A', position: 'relative', overflow: 'hidden' }}>
    <style>{`
      .mp-cred-inner { max-width: 1400px; margin: 0 auto; position: relative; z-index: 1; padding: 90px 40px; }
      .mp-cred-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 22px; }
      @media (max-width: 1024px) { .mp-cred-inner { padding: 70px 24px; } .mp-cred-grid { grid-template-columns: repeat(2,1fr); } }
      @media (max-width: 640px) { .mp-cred-inner { padding: 48px 16px; } .mp-cred-grid { grid-template-columns: 1fr; } }
      .cred-arrow { position: absolute; right: -16px; top: 50%; transform: translateY(-50%); font-size: 18px; color: rgba(255,255,255,.15); }
      @media (max-width: 1024px) { .cred-arrow { display: none !important; } }
    `}</style>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 80%,rgba(0,180,166,.08),transparent 50%),radial-gradient(circle at 80% 20%,rgba(212,168,83,.06),transparent 50%)' }} />
    <div className="mp-cred-inner">
      <SectionLabel light>Credential Pathway</SectionLabel>
      <SectionHeading white>Four Levels of Professional Mastery</SectionHeading>
      <SectionDesc white>Each MedPass program offers a structured progression from foundational knowledge to advanced specialization and thought leadership.</SectionDesc>
      <div className="mp-cred-grid">
        {CREDENTIAL_LEVELS.map((lv, i) => (
          <Reveal key={lv.title} delay={i * 80}>
            <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 20, padding: '34px 26px', textAlign: 'center', transition: 'all .3s', position: 'relative' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,.07)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,.04)'; (e.currentTarget as HTMLDivElement).style.transform = ''; }}
            >
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 46, fontWeight: 400, marginBottom: 8, color: lv.color }}>{lv.num}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{lv.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>{lv.desc}</p>
              {i < 3 && <span className="cred-arrow">→</span>}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ─── PARTNERS ───
const PARTNERS_DATA = [
  { title: 'For Institutions', desc: 'Partner with Telth-U MedPass to expand your reach and deliver accredited programs through our global education infrastructure.', items: [{ icon: '🏛️', label: 'Medical Schools & Universities' }, { icon: '🏥', label: 'Hospitals & Clinical Training Centers' }, { icon: '🔬', label: 'Research Institutions' }, { icon: '🌐', label: 'Professional Medical Associations' }] },
  { title: 'For Individual Educators', desc: 'Bring your specialized expertise to a global audience of healthcare professionals.', items: [{ icon: '👨‍⚕️', label: 'Subject-Matter Experts & Clinicians' }, { icon: '📚', label: 'Medical Authors & Researchers' }, { icon: '🎓', label: 'CME Instructors & Trainers' }, { icon: '💡', label: 'Healthcare Technology Innovators' }] },
];

export const MedPassPartners: React.FC = () => (
  <section id="mp-partners" style={{ background: '#F4F6F8' }}>
    <style>{`
      .mp-partners-inner { max-width: 1400px; margin: 0 auto; padding: 90px 40px; }
      .mp-partners-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
      @media (max-width: 1024px) { .mp-partners-inner { padding: 70px 24px; } }
      @media (max-width: 768px) { .mp-partners-inner { padding: 48px 16px; } .mp-partners-grid { grid-template-columns: 1fr; gap: 24px; } }
    `}</style>
    <div className="mp-partners-inner">
      <SectionLabel>Partnerships</SectionLabel>
      <SectionHeading>Open Platform for Third-Party Providers</SectionHeading>
      <SectionDesc>We welcome institutions and individual educators to deliver training and academic programs through the MedPass platform.</SectionDesc>
      <div className="mp-partners-grid">
        {PARTNERS_DATA.map((box, i) => (
          <Reveal key={box.title} delay={i * 100}>
            <div style={{ background: '#fff', borderRadius: 20, padding: 36, border: '1px solid #E8ECF0' }}>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: '#0A0E1A', marginBottom: 14 }}>{box.title}</h3>
              <p style={{ fontSize: 14, color: '#6B7890', lineHeight: 1.8, marginBottom: 18 }}>{box.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {box.items.map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 16px', background: '#F4F6F8', borderRadius: 10, fontSize: 13, fontWeight: 500, color: '#0A0E1A' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,180,166,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{item.icon}</div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ─── REGIONS ───
export const MedPassRegions: React.FC = () => (
  <section id="mp-regions" style={{ background: '#fff' }}>
    <style>{`
      .mp-regions-inner { max-width: 1400px; margin: 0 auto; padding: 90px 40px; }
      .mp-regions-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 22px; }
      @media (max-width: 1024px) { .mp-regions-inner { padding: 70px 24px; } .mp-regions-grid { grid-template-columns: repeat(2,1fr); } }
      @media (max-width: 640px) { .mp-regions-inner { padding: 48px 16px; } .mp-regions-grid { grid-template-columns: repeat(2,1fr); gap: 14px; } }
      @media (max-width: 400px) { .mp-regions-grid { grid-template-columns: 1fr; } }
    `}</style>
    <div className="mp-regions-inner">
      <SectionLabel>Global Operations</SectionLabel>
      <SectionHeading>Delivering Education Across Four Regions</SectionHeading>
      <SectionDesc>Telth-U MedPass operates across the USA, United Kingdom, MENA region, and India.</SectionDesc>
      <div className="mp-regions-grid">
        {PUBLIC_REGIONS.map((r, i) => (
          <Reveal key={r.name} delay={i * 80}>
            <div style={{ background: '#F4F6F8', borderRadius: 20, padding: '34px 26px', textAlign: 'center', transition: 'all .3s', border: '2px solid transparent' }}
              onMouseOver={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#00B4A6'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 40px rgba(0,0,0,.06)'; }}
              onMouseOut={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'transparent'; el.style.transform = ''; el.style.boxShadow = ''; }}
            >
              <div style={{ fontSize: 40, marginBottom: 14 }}>{r.flag}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0A0E1A', marginBottom: 8 }}>{r.name}</h3>
              <p style={{ fontSize: 13, color: '#6B7890', lineHeight: 1.6 }}>{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA ───
export const MedPassCTA: React.FC = () => (
  <section id="mp-contact" style={{ background: '#0B1D3A', position: 'relative', overflow: 'hidden' }}>
    <style>{`
      .mp-cta-inner { max-width: 720px; margin: 0 auto; text-align: center; position: relative; z-index: 1; padding: 90px 40px; }
      .mp-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
      @media (max-width: 1024px) { .mp-cta-inner { padding: 70px 24px; } }
      @media (max-width: 640px) { .mp-cta-inner { padding: 48px 16px; } }
      @media (max-width: 480px) { .mp-cta-btns { flex-direction: column; align-items: stretch; } .mp-cta-btns a { width: 100%; justify-content: center; } }
    `}</style>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%,rgba(0,180,166,.12),transparent 60%)' }} />
    <div className="mp-cta-inner">
      <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(26px,4vw,44px)', color: '#fff', marginBottom: 18, lineHeight: 1.2 }}>
        Begin Your Professional Journey with MedPass
      </h2>
      <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', lineHeight: 1.7, marginBottom: 36 }}>
        Whether you're a Care Manager seeking certification, a physician pursuing fellowship training, or an institution looking to partner — MedPass is your gateway to medical education excellence.
      </p>
      <div className="mp-cta-btns">
        <Button variant="teal" href="#">Apply for Programs →</Button>
        <Button variant="gold" href="#">Become a Partner →</Button>
        <Button variant="outline" href="#">Request Brochure</Button>
      </div>
    </div>
  </section>
);
