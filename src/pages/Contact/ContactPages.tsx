import React, { useState, useEffect, useRef } from 'react';
import './ContactPage.css';
import PageHero from '../../components/PageHero';
import { FiSend, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{success: boolean; message: string} | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current || isSending) return;
    
    setIsSending(true);
    setSendStatus(null);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setSendStatus({ success: true, message: 'Mesajınız başarıyla gönderildi!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Gönderim başarısız oldu');
      }
    } catch (error) {
      console.error('Gönderim hatası:', error);
      setSendStatus({ 
        success: false, 
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' 
      });
    } finally {
      setIsSending(false);
      
      // 5 saniye sonra durum mesajını temizle
      setTimeout(() => {
        setSendStatus(null);
      }, 5000);
    }
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
                  <p>Teknoloji Vadisi, İnovasyon Caddesi No:42, İstanbul</p>
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
                  <p>iletisim@dunyakisifi.com</p>
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
              
              {sendStatus && (
                <motion.div 
                  className={`neon-alert ${sendStatus.success ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {sendStatus.message}
                </motion.div>
              )}
              
              <motion.form 
                ref={formRef}
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
                  disabled={isSending}
                >
                  {isSending ? (
                    'Gönderiliyor...'
                  ) : (
                    <>
                      <FiSend className="submit-icon" />
                      Gönder
                      <span className="neon-btn-effect"></span>
                    </>
                  )}
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