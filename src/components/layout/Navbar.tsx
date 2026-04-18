// ========== LAYER 1: NAVIGATION ==========
// AnnouncementBar + Navbar (sticky, page-switching, dynamic links)

import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/siteData';
import type { PageKey } from '../../data/siteData';

// ---------- AnnouncementBar ----------
export const AnnouncementBar: React.FC = () => (
  <div style={{
    background: '#0A0E1A',
    color: 'rgba(255,255,255,.6)',
    fontSize: 12,
    padding: '8px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    letterSpacing: .5,
  }}>
    <span>
      <strong style={{ color: '#D4A853', fontWeight: 600 }}>New:</strong>
      {' '}2026 Cohort Enrollment Now Open — Limited Seats Available
    </span>
    <span>
      Partnerships:{' '}
      <strong style={{ color: '#D4A853', fontWeight: 600 }}>info@mytelth.com</strong>
    </span>
  </div>
);

// ---------- Logo ----------
interface LogoProps { onClick: () => void; }

const NavLogo: React.FC<LogoProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      display: 'flex', alignItems: 'center', gap: 12,
      textDecoration: 'none', color: '#fff', cursor: 'pointer',
    }}
  >
    {/* Logo mark */}
    <div style={{
      width: 40, height: 40,
      background: 'linear-gradient(135deg,#00B4A6,#008F84)',
      borderRadius: 9,
      display: 'grid', placeItems: 'center',
      fontFamily: "'Instrument Serif', serif",
      fontSize: 20, color: '#fff',
      position: 'relative',
      outline: '1px solid rgba(0,180,166,.3)',
      outlineOffset: 2,
    }}>
      T
    </div>
    {/* Logo text */}
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
      <span style={{ fontWeight: 700, fontSize: 18 }}>Telth-U MedPass</span>
      <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 3, color: '#00B4A6', fontWeight: 600 }}>
        Medical Education
      </span>
    </div>
  </div>
);

// ---------- PageTabs ----------
interface PageTabsProps { activePage: PageKey; onSwitch: (p: PageKey) => void; }

const PageTabs: React.FC<PageTabsProps> = ({ activePage, onSwitch }) => (
  <div style={{
    display: 'flex', gap: 2,
    background: 'rgba(255,255,255,.06)',
    borderRadius: 8, padding: 3,
    marginRight: 16,
  }}>
    {(['medpass', 'agents'] as PageKey[]).map((p) => (
      <button
        key={p}
        onClick={() => onSwitch(p)}
        style={{
          padding: '7px 18px', borderRadius: 6,
          fontSize: 12, fontWeight: 600,
          cursor: 'pointer', border: 'none',
          background: activePage === p ? '#00B4A6' : 'transparent',
          color: activePage === p ? '#fff' : 'rgba(255,255,255,.5)',
          transition: 'all .3s',
          textTransform: 'uppercase', letterSpacing: 1,
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {p === 'medpass' ? 'MedPass' : 'Agent Program'}
      </button>
    ))}
  </div>
);

// ---------- NavLinks ----------
interface NavLinksProps { activePage: PageKey; }

const NavLinks: React.FC<NavLinksProps> = ({ activePage }) => {
  const links = NAV_LINKS[activePage];

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ul style={{ display: 'flex', alignItems: 'center', gap: 6, listStyle: 'none' }}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            style={{
              color: link.cta ? '#0A0E1A' : 'rgba(255,255,255,.6)',
              textDecoration: 'none',
              fontSize: link.cta ? 11 : 13,
              fontWeight: link.cta ? 700 : 500,
              padding: link.cta ? '9px 20px' : '8px 14px',
              borderRadius: link.cta ? 6 : 6,
              transition: 'all .3s',
              whiteSpace: 'nowrap',
              textTransform: link.cta ? 'uppercase' : 'none',
              letterSpacing: link.cta ? 1 : 'normal',
              background: link.cta ? '#D4A853' : 'transparent',
              display: 'inline-block',
            }}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

// ---------- Navbar (main export) ----------
interface NavbarProps {
  activePage: PageKey;
  onSwitchPage: (p: PageKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onSwitchPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      id="mainNav"
      style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: 'rgba(11,29,58,.97)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(0,180,166,.12)',
        transition: 'all .4s',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,.35)' : 'none',
      }}
    >
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px', height: 68,
      }}>
        <NavLogo onClick={() => onSwitchPage('medpass')} />
        <PageTabs activePage={activePage} onSwitch={onSwitchPage} />
        <NavLinks activePage={activePage} />
      </div>
    </nav>
  );
};
