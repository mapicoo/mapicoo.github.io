import React from 'react';
import './ProjectGoals.css';

const ProjectGoals: React.FC = () => {
  return (
    <section className="project-goals">
      <div className="container">
        <h2 className="section-title">Proje Hedefleri</h2>
        
        <div className="goals-container">
          <div className="goal-item">
            <h3>Kullanıcı Deneyimi</h3>
            <ul>
              <li>Kullanıcı dostu arayüz tasarımı</li>
              <li>Kişiselleştirilebilir içerik</li>
              <li>Hızlı ve sorunsuz navigasyon</li>
            </ul>
          </div>
          
          <div className="goal-item">
            <h3>Teknolojik Hedefler</h3>
            <ul>
              <li>Flutter ile çapraz platform geliştirme</li>
              <li>Firebase entegrasyonu</li>
              <li>Harita API'leri ile entegrasyon</li>
            </ul>
          </div>
          
          <div className="goal-item">
            <h3>İş Hedefleri</h3>
            <ul>
              <li>İlk yıl 50.000 kullanıcıya ulaşmak</li>
              <li>Eğitim kurumlarıyla işbirlikleri</li>
              <li>Premium üyelik modeli geliştirmek</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGoals;