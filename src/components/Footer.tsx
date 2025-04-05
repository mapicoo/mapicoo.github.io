import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Dünya Kaşifi</h3>
          <p className="footer-text">
            Coğrafi keşifleri eğlenceli ve interaktif hale getiren yenilikçi bir mobil uygulama projesi.
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Hızlı Linkler</h3>
          <ul className="footer-links">
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/about">Proje</a></li>
            <li><a href="/team">Ekip</a></li>
            <li><a href="/documentation">Dokümantasyon</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">İletişim</h3>
          <p className="footer-text">
            Email: info@dunyakisifi.com<br />
            Telefon: +90 555 123 45 67
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dünya Kaşifi. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;