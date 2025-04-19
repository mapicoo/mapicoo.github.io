import React from 'react';
import './TeamMemberCard.css';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  responsibilities: string[];
  image: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  index?: number;
  isCenterCard?:boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  role, 
  responsibilities, 
  image,
  socialLinks = []
}) => {
  return (
    <div className="team-member-card">
      <div className="member-image-container">
        <img src={image} alt={name} className="member-image" />
        {socialLinks.length > 0 && (
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.platform}
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
      </div>
      
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        
        <div className="responsibilities">
          <h4>Sorumluluklar:</h4>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;