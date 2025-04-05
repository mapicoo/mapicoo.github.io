import React from 'react';
import ProjectGoals from './ProjectGoals';
import PageHero from '../../components/PageHero';
import Features from './Features';
import TechnologyStack from './TechnologyStack';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="team-page">
      <PageHero 
        title="Proje Hakkında" 
        subtitle="Dünya Kaşifi'nin amacı ve özellikleri" 
        background="team"
      />
      <ProjectGoals />
      <Features />
      <TechnologyStack />
      
      <section className="documentation-preview">
        <div className="container">
          <h2 className="section-title">Dokümantasyon</h2>
          <p className="section-subtitle">
            Projenin detaylı dokümantasyonuna ulaşmak için aşağıdaki butona tıklayın.
          </p>
          <a href="/documentation" className="cta-button">
            Tüm Dokümanları Görüntüle
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;