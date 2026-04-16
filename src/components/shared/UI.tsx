// ========== SHARED UI COMPONENTS ==========
// Button, SectionLabel, Badge, RevealWrapper

import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

// ---- Button ----
type BtnVariant = 'teal' | 'gold' | 'outline' | 'ghost';

interface ButtonProps {
  variant?: BtnVariant;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BtnVariant, React.CSSProperties> = {
  teal:    { background: 'linear-gradient(135deg,#00B4A6,#008F84)', color: '#fff' },
  gold:    { background: 'linear-gradient(135deg,#D4A853,#F0C060)', color: '#0A0E1A' },
  outline: { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.2)' },
  ghost:   { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.2)' },
};

export const Button: React.FC<ButtonProps> = ({ variant = 'teal', href, onClick, children, className = '' }) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '14px 30px', borderRadius: 10,
    fontSize: 14, fontWeight: 700,
    textDecoration: 'none',
    transition: 'all .35s cubic-bezier(.25,.46,.45,.94)',
    cursor: 'pointer', border: 'none',
    fontFamily: "'Outfit', sans-serif",
    ...variantStyles[variant],
  };

  if (href) {
    return (
      <a href={href} style={baseStyle} className={`btn btn-${variant} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} style={baseStyle} className={`btn btn-${variant} ${className}`}>
      {children}
    </button>
  );
};

// ---- SectionLabel ----
interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, light = false }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3,
    color: light ? '#D4A853' : '#00B4A6',
    marginBottom: 14,
  }}>
    <span style={{ width: 24, height: 2, background: light ? '#D4A853' : '#00B4A6', display: 'block', flexShrink: 0 }} />
    {children}
  </div>
);

// ---- SectionHeading ----
interface SectionHeadingProps {
  children: ReactNode;
  white?: boolean;
  style?: React.CSSProperties;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, white = false, style = {} }) => (
  <h2 style={{
    fontFamily: "'Instrument Serif', serif",
    fontSize: 'clamp(28px, 3.5vw, 46px)',
    fontWeight: 400,
    color: white ? '#fff' : '#0A0E1A',
    lineHeight: 1.15,
    marginBottom: 12,
    ...style,
  }}>
    {children}
  </h2>
);

// ---- SectionDesc ----
interface SectionDescProps {
  children: ReactNode;
  white?: boolean;
  style?: React.CSSProperties;
}

export const SectionDesc: React.FC<SectionDescProps> = ({ children, white = false, style = {} }) => (
  <p style={{
    fontSize: 16, color: white ? 'rgba(255,255,255,.5)' : '#6B7890',
    lineHeight: 1.75, maxWidth: 640, marginBottom: 48,
    ...style,
  }}>
    {children}
  </p>
);

// ---- Badge ----
type BadgeVariant = 'teal' | 'gold' | 'violet' | 'ember' | 'sage';

const badgeStyles: Record<BadgeVariant, { bg: string; color: string }> = {
  teal:   { bg: 'rgba(0,180,166,.1)',   color: '#008F84' },
  gold:   { bg: 'rgba(212,168,83,.12)', color: '#B08930' },
  violet: { bg: 'rgba(123,108,196,.1)', color: '#7B6CC4' },
  ember:  { bg: 'rgba(232,98,92,.1)',   color: '#E8625C' },
  sage:   { bg: 'rgba(93,174,111,.12)', color: '#3D8A50' },
};

interface BadgeProps { variant: BadgeVariant; children: ReactNode; }

export const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  const s = badgeStyles[variant];
  return (
    <span style={{
      display: 'inline-block', padding: '3px 9px', borderRadius: 100,
      fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1,
      background: s.bg, color: s.color,
    }}>
      {children}
    </span>
  );
};

// ---- LevelTag ----
type LevelCls = 'cert' | 'dip' | 'pgdip' | 'fellow';

const levelTagStyles: Record<LevelCls, { bg: string; color: string }> = {
  cert:   { bg: 'rgba(0,180,166,.08)',   color: '#008F84' },
  dip:    { bg: 'rgba(212,168,83,.1)',   color: '#B08930' },
  pgdip:  { bg: 'rgba(123,108,196,.1)',  color: '#7B6CC4' },
  fellow: { bg: 'rgba(232,98,92,.08)',   color: '#E8625C' },
};

interface LevelTagProps { cls: string; tag: string; }

export const LevelTag: React.FC<LevelTagProps> = ({ cls, tag }) => {
  const s = levelTagStyles[cls as LevelCls] ?? { bg: '#eee', color: '#666' };
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1,
      padding: '4px 10px', borderRadius: 6,
      background: s.bg, color: s.color,
    }}>
      {tag}
    </span>
  );
};

// ---- RevealWrapper — intersection-observer fade-up ----
interface RevealProps { children: ReactNode; delay?: number; style?: React.CSSProperties; }

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, style = {} }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
};
