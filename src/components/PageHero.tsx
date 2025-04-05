import React from 'react';
import './PageHero.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  background?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, background = 'default' }) => {
  const heroClass = `hero-${background}`;
  
  return (
    <section className={`page-hero ${heroClass}`}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;