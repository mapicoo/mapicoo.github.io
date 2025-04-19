import React from 'react';
import './FeatureCard.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  accentColor = '#4361ee' 
}) => {
  return (
    <div className="feature-card" style={{ '--accent-color': accentColor } as React.CSSProperties}>
      <div className="feature-icon-container">
        <div className="feature-icon">{icon}</div>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <div className="feature-hover-effect"></div>
    </div>
  );
};

export default FeatureCard;