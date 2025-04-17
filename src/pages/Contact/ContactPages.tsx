import React, { useState } from 'react';
import './ContactPage.css';
import PageHero from '../../components/PageHero';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemleri buraya gelecek
    alert('Mesajınız gönderildi!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="team-page">
      <PageHero 
        title="İletişim" 
        subtitle="Bize ulaşın ve proje hakkında bilgi alın " 
        background="team"
      />
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>İletişim Bilgileri</h2>
              
              <div className="info-item">
                <h3>Adres</h3>
                <p>Üniversite Mahallesi, Teknoloji Caddesi No:123, Kadıköy/İstanbul</p>
              </div>
              
              <div className="info-item">
                <h3>Email</h3>
                <p>info@dunyakisifi.com</p>
              </div>
              
              <div className="info-item">
                <h3>Telefon</h3>
                <p>+90 555 123 45 67</p>
              </div>
            </div>

            <div className="contact-form">
              <h2>Mesaj Gönderin</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Adınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Adresiniz</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;