import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';
import { FiMap, FiUser, FiAward, FiBarChart2 } from 'react-icons/fi';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FiMap className="feature-svg-icon" />,
      title: "Harita Entegrasyonu",
      description: "Google Maps API ile entegre gelişmiş harita özellikleri ve coğrafi veri görselleştirme"
    },
    {
      icon: <FiUser className="feature-svg-icon" />,
      title: "Kullanıcı Profilleri",
      description: "Kişiselleştirilmiş kullanıcı profilleri ve avatar oluşturma sistemi"
    },
    {
      icon: <FiAward className="feature-svg-icon" />,
      title: "Başarı Sistemi",
      description: "Keşiflere göre kazanılan rozetler ve başarımlar"
    },
    {
      icon: <FiBarChart2 className="feature-svg-icon" />,
      title: "Veri Analitiği",
      description: "Kullanıcı etkileşimlerini ve keşif istatistiklerini takip eden panel"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="world-explorer-features">
      <div className="world-explorer-container">
        <motion.h2 
          className="world-explorer-section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Temel Özellikler
        </motion.h2>
        
        <motion.div 
          className="world-explorer-features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="world-explorer-feature-card"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="world-explorer-feature-icon-container">
                {feature.icon}
              </div>
              <div className="world-explorer-feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="world-explorer-feature-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;