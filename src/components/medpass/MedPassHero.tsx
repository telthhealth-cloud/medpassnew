// ========== LAYER 2: MEDPASS — HERO (RESPONSIVE) ==========

import React from 'react';
import { Button } from '../shared/UI';
import { HERO_STATS, HERO_CARDS } from '../../data/siteData';

const Particle: React.FC<{ left: string; delay: number }> = ({ left, delay }) => (
  <div style={{
    position: 'absolute', width: 3, height: 3,
    background: '#00B4A6', borderRadius: '50%',
    left, opacity: 0,
    animation: `float-p 8s infinite ${delay}s`,
  }} />
);

const FloatingCard: React.FC<{ icon: string; title: string; desc: string; bg: string; delay: number }> = ({ icon, title, desc, bg, delay }) => (
  <div style={{
    background: 'rgba(255,255,255,.04)', backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 24,
    animation: `float-card 6s ease-in-out infinite ${delay}s`, width: 220,
  }}>
    <div style={{ width: 44, height: 44, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 14 }}>
      {icon}
    </div>
    <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{title}</h3>
    <p style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.5 }}>{desc}</p>
  </div>
);

export const MedPassHero: React.FC = () => (
  <section style={{ position: 'relative', minHeight: '100vh', background: '#0B1D3A', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    <style>{`
      .hero-section-inner {
        position: relative; z-index: 2;
        max-width: 1400px; margin: 0 auto;
        padding: 120px 40px 80px;
        display: grid; grid-template-columns: 1fr 1fr;
        gap: 80px; align-items: center; width: 100%;
      }
      .hero-right-col { animation: fadeUp 1s ease .5s both; }
      @media (max-width: 1024px) {
        .hero-section-inner { padding: 100px 24px 60px; gap: 40px; }
      }
      @media (max-width: 768px) {
        .hero-section-inner { grid-template-columns: 1fr; gap: 0; padding: 80px 16px 48px; }
        .hero-right-col { display: none; }
      }
      .hero-stats-row { display: flex; gap: 40px; margin-top: 48px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,.08); flex-wrap: wrap; }
      @media (max-width: 480px) { .hero-stats-row { gap: 24px; margin-top: 32px; } }
      .hero-btn-row { display: flex; gap: 14px; flex-wrap: wrap; }
      @media (max-width: 480px) { .hero-btn-row { flex-direction: column; } .hero-btn-row a { width: 100%; justify-content: center; } }
    `}</style>

    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%,rgba(0,180,166,.08) 0%,transparent 60%),radial-gradient(ellipse at 80% 20%,rgba(212,168,83,.06) 0%,transparent 50%)' }} />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,180,166,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,180,166,.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
    <div style={{ position: 'absolute', inset: 0 }}>
      {[{ l: '10%', d: 0 }, { l: '25%', d: 1.5 }, { l: '45%', d: 3 }, { l: '65%', d: 0.8 }, { l: '80%', d: 2.2 }, { l: '92%', d: 4 }].map((p, i) => (
        <Particle key={i} left={p.l} delay={p.d} />
      ))}
    </div>

    <div className="hero-section-inner">
      {/* LEFT */}
      <div style={{ animation: 'fadeUp 1s ease .2s both' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,180,166,.1)', border: '1px solid rgba(0,180,166,.2)',
          borderRadius: 100, padding: '6px 16px 6px 8px', marginBottom: 28,
        }}>
          <div style={{ width: 8, height: 8, background: '#00B4A6', borderRadius: '50%', animation: 'pulse-dot 2s infinite' }} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#00B4A6' }}>
            Now Enrolling — 2026 Cohort
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(30px,5vw,64px)',
          fontWeight: 400, color: '#fff', lineHeight: 1.08, marginBottom: 24,
        }}>
          Advance Your{' '}
          <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg,#00B4A6,#F0C060)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Medical Career
          </em>
          {' '}with World-Class Training
        </h1>

        <p style={{ fontSize: 17, color: 'rgba(255,255,255,.55)', lineHeight: 1.75, marginBottom: 40, maxWidth: 520 }}>
          Telth-U MedPass delivers accredited academic programs, professional certifications, and continuing medical education for healthcare professionals across four credential levels.
        </p>

        <div className="hero-btn-row">
          <Button variant="teal" href="#mp-programs">Explore Programs →</Button>
          <Button variant="outline" href="#mp-partners">Partner With Us</Button>
        </div>

        <div className="hero-stats-row">
          {HERO_STATS.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 34, fontWeight: 700, color: '#00B4A6' }}>{s.num}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', marginTop: 4, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — floating cards */}
      <div className="hero-right-col">
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1' }}>
          {HERO_CARDS.map((c, i) => {
            const positions = [
              { top: '5%', left: '0%' },
              { top: '30%', right: '30%' },
              { top: '70%', left: '20%' },
            ];
            return (
              <div key={i} style={{ position: 'absolute', ...positions[i] }}>
                <FloatingCard {...c} delay={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
