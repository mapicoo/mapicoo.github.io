import React from 'react';
import PageHero from '../../components/PageHero';
import TeamMemberCard from '../../components/TeamMemberCard';
import { teamMembers } from '../../utils/data';
import './TeamPage.css';

const TeamPage: React.FC = () => {
  return (
    <div className="team-page">
      <PageHero 
        title="Proje Ekibimiz" 
        subtitle="Dünya Kaşifi'ni hayata geçiren yetenekli ekip" 
        background="team"
      />
      
      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
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
        </div>
      </section>
      
      <section className="team-values">
        <div className="container">
          <h2 className="section-title">Ekip Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Yenilikçilik</h3>
              <p>Sürekli olarak yeni fikirler ve çözümler üretiyoruz</p>
            </div>
            <div className="value-card">
              <h3>İşbirliği</h3>
              <p>Güçlü ekip çalışması ile daha iyi sonuçlar elde ediyoruz</p>
            </div>
            <div className="value-card">
              <h3>Kalite</h3>
              <p>En yüksek standartlarda ürünler geliştiriyoruz</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;