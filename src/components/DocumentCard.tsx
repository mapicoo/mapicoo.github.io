import React from 'react';
import './DocumentCard.css';
import { FiArrowRight } from 'react-icons/fi';

interface DocumentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  accentColor?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  accentColor = '#4361ee'
}) => {
  return (
    <a 
      href={link} 
      className="doc-card"
      style={{ '--accent-color': accentColor } as React.CSSProperties}
    >
      <div className="doc-card-inner">
        <div className="doc-icon-container">
          <div className="doc-icon">{icon}</div>
        </div>
        
        <div className="doc-content">
          <h3 className="doc-title">{title}</h3>
          <p className="doc-description">{description}</p>
        </div>
        
        <div className="doc-arrow">
          <FiArrowRight className="arrow-icon" />
        </div>
        
        <div className="doc-hover-effect"></div>
      </div>
    </a>
  );
};

export default DocumentCard;