import React from 'react';
import './PageHero.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  background?: 'default' | 'team' | 'documentation' | 'contact';
  ctaText?: string;
  ctaLink?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  background = 'default',
  ctaText,
  ctaLink 
}) => {
  const heroClass = `hero-${background}`;
  
  return (
    <section className={`page-hero ${heroClass}`}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        </div>
        {ctaText && (
          <a href={ctaLink} className="hero-cta">
            {ctaText}
            <span className="cta-arrow">→</span>
          </a>
        )}
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
         
        </svg>
      </div>
    </section>
  );
};

export default PageHero;