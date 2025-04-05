import React from 'react';
import './TechnologyStack.css';

const technologies = [
  { name: 'Flutter', purpose: 'Çapraz platform mobil uygulama geliştirme', icon: '📱' },
  { name: 'Firebase', purpose: 'Backend servisleri ve veritabanı', icon: '🔥' },
  { name: 'Google Maps API', purpose: 'Harita ve konum servisleri', icon: '🗺️' },
  { name: 'Node.js', purpose: 'API geliştirme ve sunucu tarafı işlemler', icon: '🟢' },
  { name: 'React', purpose: 'Proje tanıtım web sitesi', icon: '⚛️' },
  { name: 'Figma', purpose: 'UI/UX tasarım ve prototipleme', icon: '✏️' },
];

const TechnologyStack: React.FC = () => {
  return (
    <section className="technology-section">
      <div className="container">
        <h2 className="section-title">Teknoloji Yığını</h2>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-purpose">{tech.purpose}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;