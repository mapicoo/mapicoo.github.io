import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Temel Özellikler</h2>
        
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">🗺️</div>
            <div className="feature-content">
              <h3>Harita Entegrasyonu</h3>
              <p>Google Maps API ile entegre gelişmiş harita özellikleri ve coğrafi veri görselleştirme</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">👤</div>
            <div className="feature-content">
              <h3>Kullanıcı Profilleri</h3>
              <p>Kişiselleştirilmiş kullanıcı profilleri ve avatar oluşturma sistemi</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">🏆</div>
            <div className="feature-content">
              <h3>Başarı Sistemi</h3>
              <p>Keşiflere göre kazanılan rozetler ve başarımlar</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <div className="feature-content">
              <h3>Veri Analitiği</h3>
              <p>Kullanıcı etkileşimlerini ve keşif istatistiklerini takip eden panel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;