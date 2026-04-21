// ========== LAYER 1: FOOTER (RESPONSIVE) ==========

import React from 'react';
import { FOOTER_LINKS } from '../../data/siteData';

export const Footer: React.FC = () => (
  <footer style={{ background: '#0A0E1A', padding: '70px 40px 35px' }}>
    <style>{`
      @media (max-width: 1024px) {
        .footer-outer { padding: 50px 24px 28px !important; }
        .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
      }
      @media (max-width: 640px) {
        .footer-outer { padding: 40px 16px 24px !important; }
        .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
      }
      @media (max-width: 420px) {
        .footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
    <div className="footer-outer" style={{ maxWidth: 1400, margin: '0 auto' }}>
      <div className="footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
        gap: 40, marginBottom: 50,
      }}>
        <div>
          <h4 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: '#fff', marginBottom: 14 }}>
            Telth-U MedPass
          </h4>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.35)', lineHeight: 1.8 }}>
            The academic and training division of Telth-U, delivering world-class medical education,
            professional certifications, and continuing medical education for healthcare professionals globally.
          </p>
        </div>
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h5 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#00B4A6', marginBottom: 16 }}>
              {heading}
            </h5>
            {links.map((l) => (
              <a key={l} href="#" style={{
                display: 'block', fontSize: 13, color: 'rgba(255,255,255,.4)',
                textDecoration: 'none', marginBottom: 10, transition: 'color .3s',
              }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.4)')}
              >{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom" style={{
        borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 24,
        fontSize: 11, color: 'rgba(255,255,255,.2)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      }}>
        <span>© 2026 Telth-U MedPass. All rights reserved. A division of Telth Holding Inc.</span>
        <span>Health City International LLC DBA Tech Innovators Fund</span>
      </div>
    </div>
  </footer>
);
