import React from 'react';
import './DocumentCard.css';

interface DocumentCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ title, description, icon, link }) => {
  return (
    <a href={link} className="document-card">
      <div className="document-icon">{icon}</div>
      <div className="document-content">
        <h3 className="document-title">{title}</h3>
        <p className="document-description">{description}</p>
      </div>
    </a>
  );
};

export default DocumentCard;