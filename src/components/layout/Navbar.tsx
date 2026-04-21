// ========== LAYER 1: NAVIGATION (RESPONSIVE) ==========

import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/siteData';
import type { PageKey } from '../../data/siteData';

export const AnnouncementBar: React.FC = () => (
  <div
    className="announcement-bar"
    style={{
      background: '#0A0E1A', color: 'rgba(255,255,255,.6)',
      fontSize: 12, padding: '8px 40px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: .5,
    }}
  >
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

interface LogoProps { onClick: () => void; }
const NavLogo: React.FC<LogoProps> = ({ onClick }) => (
  <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff', cursor: 'pointer' }}>
    <div style={{
      width: 40, height: 40, background: 'linear-gradient(135deg,#00B4A6,#008F84)',
      borderRadius: 9, display: 'grid', placeItems: 'center',
      fontFamily: "'Instrument Serif', serif", fontSize: 20, color: '#fff',
      outline: '1px solid rgba(0,180,166,.3)', outlineOffset: 2, flexShrink: 0,
    }}>T</div>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
      <span style={{ fontWeight: 700, fontSize: 18 }}>Telth-U MedPass</span>
      <span className="logo-subtitle" style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 3, color: '#00B4A6', fontWeight: 600 }}>Medical Education</span>
    </div>
  </div>
);

interface PageTabsProps { activePage: PageKey; onSwitch: (p: PageKey) => void; }
const PageTabs: React.FC<PageTabsProps> = ({ activePage, onSwitch }) => (
  <div className="page-tabs page-tabs-desktop">
    {(['medpass', 'agents'] as PageKey[]).map((p) => (
      <button key={p} onClick={() => onSwitch(p)} style={{
        padding: '7px 18px', borderRadius: 6, fontSize: 12, fontWeight: 600,
        cursor: 'pointer', border: 'none',
        background: activePage === p ? '#00B4A6' : 'transparent',
        color: activePage === p ? '#fff' : 'rgba(255,255,255,.5)',
        transition: 'all .3s', textTransform: 'uppercase', letterSpacing: 1,
        fontFamily: "'Outfit', sans-serif",
      }}>{p === 'medpass' ? 'MedPass' : 'Agent Program'}</button>
    ))}
  </div>
);

interface NavLinksProps { activePage: PageKey; onClose?: () => void; mobile?: boolean; }
const NavLinks: React.FC<NavLinksProps> = ({ activePage, onClose, mobile = false }) => {
  const links = NAV_LINKS[activePage];
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onClose?.();
  };
  if (mobile) {
    return (
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} style={{
              display: 'block', color: link.cta ? '#D4A853' : 'rgba(255,255,255,.7)',
              textDecoration: 'none', fontSize: 16, fontWeight: link.cta ? 700 : 500,
              padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.06)',
              textTransform: link.cta ? 'uppercase' : 'none', letterSpacing: link.cta ? 1 : 'normal',
            }}>{link.label}</a>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6, listStyle: 'none' }}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} style={{
            color: link.cta ? '#0A0E1A' : 'rgba(255,255,255,.6)', textDecoration: 'none',
            fontSize: link.cta ? 11 : 13, fontWeight: link.cta ? 700 : 500,
            padding: link.cta ? '9px 20px' : '8px 14px', borderRadius: 6, transition: 'all .3s',
            whiteSpace: 'nowrap', textTransform: link.cta ? 'uppercase' : 'none',
            letterSpacing: link.cta ? 1 : 'normal',
            background: link.cta ? '#D4A853' : 'transparent', display: 'inline-block',
          }}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
};

const HamburgerIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    {open ? (<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>) :
    (<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>)}
  </svg>
);

interface NavbarProps { activePage: PageKey; onSwitchPage: (p: PageKey) => void; }

export const Navbar: React.FC<NavbarProps> = ({ activePage, onSwitchPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth > 900) setMobileOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleSwitch = (page: PageKey) => { onSwitchPage(page); setMobileOpen(false); };

  return (
    <>
      <nav id="mainNav" style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: 'rgba(11,29,58,.97)', backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(0,180,166,.12)', transition: 'all .4s',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,.35)' : 'none',
      }}>
        <div className="nav-inner">
          <NavLogo onClick={() => handleSwitch('medpass')} />
          <PageTabs activePage={activePage} onSwitch={handleSwitch} />
          <NavLinks activePage={activePage} />
          <button className="mobile-menu-btn" onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#fff', display: 'none' }}>
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-nav-drawer${mobileOpen ? ' open' : ''}`}>
        <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8 }}>
          <HamburgerIcon open />
        </button>
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,.35)', fontWeight: 700, marginBottom: 10 }}>Switch Page</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {(['medpass', 'agents'] as PageKey[]).map((p) => (
              <button key={p} onClick={() => handleSwitch(p)} style={{
                flex: 1, padding: '10px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                cursor: 'pointer', border: 'none',
                background: activePage === p ? '#00B4A6' : 'rgba(255,255,255,.08)',
                color: activePage === p ? '#fff' : 'rgba(255,255,255,.5)',
                fontFamily: "'Outfit', sans-serif",
              }}>{p === 'medpass' ? 'MedPass' : 'Agent Program'}</button>
            ))}
          </div>
        </div>
        <NavLinks activePage={activePage} onClose={() => setMobileOpen(false)} mobile />
      </div>
    </>
  );
};
