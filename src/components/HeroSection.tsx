import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/images/hero-bg.jpg';
import './HeroSection.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <Link to={ctaLink} className="hero-cta">
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;