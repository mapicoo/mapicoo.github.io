import React from 'react';
import PageHero from '../../components/PageHero';
import TeamMemberCard from '../../components/TeamMemberCard';
import { teamMembers } from '../../utils/data';
import './TeamPage.css';

const TeamPage: React.FC = () => {
  // Takım üyelerini 3-3-1 düzenine göre grupla
  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3, 6);
  const lastMember = teamMembers[6];

  return (
    <div className="explorer-team-container">
      <PageHero 
        title="Keşif Ekibimiz" 
        subtitle="Dünyayı Birlikte Keşfediyoruz..." 
        background="team"
      />
      
      {/* Takım Üyeleri Bölümü */}
      <section className="explorer-team-members-section">
        <div className="explorer-team-content">
          <div className="explorer-team-header">
            <h2 className="explorer-team-title">Ekibimiz</h2>
            <p className="explorer-team-description">Haritaları şekillendiren, teknolojiyi ileri taşıyan ekip</p>
            <div className="explorer-team-divider"></div>
          </div>
          
          <div className="explorer-team-grid-wrapper">
            {/* İlk Satır (3 Kart) */}
            <div className="explorer-team-row">
              {firstRow.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  responsibilities={member.responsibilities}
                  image={member.image}
                  socialLinks={member.socialLinks}
                />
              ))}
            </div>

            {/* İkinci Satır (3 Kart) */}
            <div className="explorer-team-row">
              {secondRow.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  responsibilities={member.responsibilities}
                  image={member.image}
                  socialLinks={member.socialLinks}
                />
              ))}
            </div>

            {/* Son Üye (Tek Kart) */}
            <div className="explorer-team-single-card">
              <TeamMemberCard
                key={lastMember.id}
                name={lastMember.name}
                role={lastMember.role}
                responsibilities={lastMember.responsibilities}
                image={lastMember.image}
                socialLinks={lastMember.socialLinks}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Çalışma Prensipleri Bölümü */}
      <section className="explorer-team-principles">
        <div className="explorer-team-content">
          <div className="explorer-team-header">
            <h2 className="explorer-team-title">Çalışma Prensiplerimiz</h2>
            <p className="explorer-team-description">İşimizi şekillendiren temel değerler</p>
            <div className="explorer-team-divider"></div>
          </div>
          
          <div className="explorer-principles-grid">
            <div className="explorer-principle-card explorer-principle-card--innovation">
              <div className="principle-icon">💡</div>
              <h3>Yenilikçilik</h3>
              <p>Sınırları zorlayan çözümler üretmek için sürekli araştırıyoruz</p>
            </div>
            
            <div className="explorer-principle-card explorer-principle-card--collaboration">
              <div className="principle-icon">🤝</div>
              <h3>İşbirliği</h3>
              <p>Farklı disiplinlerin gücünü birleştiriyoruz</p>
            </div>
            
            <div className="explorer-principle-card explorer-principle-card--impact">
              <div className="principle-icon">🌍</div>
              <h3>Etki</h3>
              <p>Yaptığımız her şeyin gerçek dünyada etkisi olmasına odaklanıyoruz</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;