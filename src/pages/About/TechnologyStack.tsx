import React from 'react';
import { motion } from 'framer-motion';
import './TechnologyStack.css';
import { FiSmartphone, FiDatabase, FiMap, FiServer, FiCode, FiLayout } from 'react-icons/fi';

const TechnologyStack: React.FC = () => {
  const technologies = [
    { 
      name: 'Flutter', 
      purpose: 'Çapraz platform mobil uygulama geliştirme', 
      icon: <FiSmartphone className="tech-stack-icon" />,
      color: '#02569B'
    },
    { 
      name: 'Firebase', 
      purpose: 'Backend servisleri ve veritabanı', 
      icon: <FiDatabase className="tech-stack-icon" />,
      color: '#FFCA28'
    },
    { 
      name: 'Google Maps API', 
      purpose: 'Harita ve konum servisleri', 
      icon: <FiMap className="tech-stack-icon" />,
      color: '#4285F4'
    },
    { 
      name: 'Node.js', 
      purpose: 'API geliştirme ve sunucu tarafı işlemler', 
      icon: <FiServer className="tech-stack-icon" />,
      color: '#68A063'
    },
    { 
      name: 'React', 
      purpose: 'Proje tanıtım web sitesi', 
      icon: <FiCode className="tech-stack-icon" />,
      color: '#61DAFB'
    },
    { 
      name: 'Unity', 
      purpose: 'AR Geliştirme', 
      icon: <FiLayout className="tech-stack-icon" />,
      color: '#A259FF'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container">
        <motion.h2 
          className="tech-stack-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Teknoloji Yığını
        </motion.h2>
        
        <motion.div 
          className="tech-stack-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="tech-stack-card"
              variants={item}
              whileHover={{ 
                y: -8,
                boxShadow: `0 15px 30px ${hexToRgba(tech.color, 0.15)}`
              }}
            >
              <div 
                className="tech-stack-icon-container"
                style={{ backgroundColor: hexToRgba(tech.color, 0.1) }}
              >
                {React.cloneElement(tech.icon, { 
                  style: { color: tech.color },
                  size: 28
                })}
              </div>
              <h3 className="tech-stack-name">{tech.name}</h3>
              <p className="tech-stack-purpose">{tech.purpose}</p>
              <div 
                className="tech-stack-hover-bar"
                style={{ backgroundColor: tech.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default TechnologyStack;