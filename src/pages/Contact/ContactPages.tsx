import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import PageHero from '../../components/PageHero';
import { FiSend, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Animasyon kontrolleri
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemleri
    alert('Mesajınız gönderildi!');
    setFormData({ name: '', email: '', message: '' });
  };

  // Animasyon varyantları
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

  const formItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "backOut"
      }
    })
  };

  return (
    <div className="neon-contact">
      <PageHero 
        title="İletişim" 
        subtitle="Bize ulaşın, birlikte çalışalım" 
        background="contact"
      />
      
      <motion.section 
        className="neon-contact-content"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="neon-container">
          <div className="neon-contact-grid">
            {/* İletişim Bilgileri */}
            <motion.div 
              className="neon-contact-info"
              variants={itemVariants}
            >
              <motion.h2 
                className="neon-section-title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="neon-title-highlight">İletişim</span> Bilgileri
              </motion.h2>
              
              <motion.div 
                className="neon-info-card"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="neon-info-icon">
                  <FiMapPin className="neon-icon" />
                </div>
                <div>
                  <h3>Adres</h3>
                  <p>Fırat Üniversitesi Teknoloji Fakültesi</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="neon-info-card"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="neon-info-icon">
                  <FiMail className="neon-icon" />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>mapicosoftware@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="neon-info-card"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="neon-info-icon">
                  <FiPhone className="neon-icon" />
                </div>
                <div>
                  <h3>Telefon</h3>
                  <p>+90 555 123 45 67</p>
                </div>
              </motion.div>
            </motion.div>

            {/* İletişim Formu */}
            <motion.div 
              className="neon-contact-form"
              variants={itemVariants}
            >
              <motion.h2 
                className="neon-section-title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <span className="neon-title-highlight">Mesaj</span> Gönderin
              </motion.h2>
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="neon-form"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div 
                  className="neon-form-group"
                  variants={formItemVariants}
                  custom={0}
                >
                  <label htmlFor="name">Adınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Adınız ve soyadınız"
                  />
                </motion.div>
                
                <motion.div 
                  className="neon-form-group"
                  variants={formItemVariants}
                  custom={1}
                >
                  <label htmlFor="email">Email Adresiniz</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ornek@email.com"
                  />
                </motion.div>
                
                <motion.div 
                  className="neon-form-group"
                  variants={formItemVariants}
                  custom={2}
                >
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className="neon-submit-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  variants={formItemVariants}
                  custom={3}
                >
                  <FiSend className="submit-icon" />
                  Gönder
                  <span className="neon-btn-effect"></span>
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;