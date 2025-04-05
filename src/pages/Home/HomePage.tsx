import React from 'react';
import HeroSection from '../../components/HeroSection';
import FeatureCard from '../../components/FeatureCard';
import { features } from '../../utils/data';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection 
        title="Dünya Kaşifi Mobil Uygulaması"
        subtitle="Dünyayı keşfetmek artık daha kolay ve eğlenceli"
        ctaText="Projeyi İncele"
        ctaLink="/about"
      />
      
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Proje Özellikleri</h2>
          <p className="section-subtitle">Dünya Kaşifi ile sunulan temel özellikler</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="project-highlights">
        <div className="container">
          <h2 className="section-title">Proje Detayları</h2>
          
          <div className="highlight-cards">
            <div className="highlight-card">
              <h3>Proje Amacı</h3>
              <p>Kullanıcıların dünyayı sanal olarak keşfetmelerini sağlamak ve coğrafi bilgiyi eğlenceli bir şekilde sunmak.</p>
            </div>
            
            <div className="highlight-card">
              <h3>Teknoloji</h3>
              <p>Flutter, Firebase, Google Maps API ve çeşitli coğrafi veri kaynakları kullanılmaktadır.</p>
            </div>
            
            <div className="highlight-card">
              <h3>Hedef Kitle</h3>
              <p>Coğrafya meraklıları, seyahat severler ve eğitim kurumları.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;