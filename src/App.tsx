import React, { useState } from 'react';
import type { PageKey } from './data/siteData';

import { AnnouncementBar, Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { MedPassHero } from './components/medpass/MedPassHero';
import {
  MedPassAbout,
  MedPassPrograms,
  MedPassCredentials,
  MedPassPartners,
  MedPassRegions,
  MedPassCTA,
} from './components/medpass/MedPassSections';

import {
  AgentHero,
  AgentOverview,
  AgentTiers,
  EventCities,
  TargetRegions,
  AgentToolkit,
  AgentTimeline,
  AgentKPIs,
  AgentCTA,
} from './components/agents/AgentSections';

import './styles/tokens.css';

const MedPassPage: React.FC = () => (
  <div>
    <MedPassHero />
    <MedPassAbout />
    <MedPassPrograms />
    <MedPassCredentials />
    <MedPassPartners />
    <MedPassRegions />
    <MedPassCTA />
  </div>
);

const AgentPage: React.FC = () => (
  <div>
    <AgentHero />
    <div style={{ background: '#FAF8F4' }}>
      <AgentOverview />
      <AgentTiers />
      <EventCities />
      <TargetRegions />
      <AgentToolkit />
      <AgentTimeline />
      <AgentKPIs />
      <AgentCTA />
    </div>
  </div>
);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageKey>('medpass');

  const handleSwitch = (page: PageKey) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar activePage={activePage} onSwitchPage={handleSwitch} />
      <main>
        {activePage === 'medpass' ? <MedPassPage /> : <AgentPage />}
      </main>
      <Footer />
    </>
  );
};

export default App;
