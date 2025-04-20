import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>

      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <FaMapMarkerAlt className="logo-icon" />
            <span>Mapico</span>
          </div>
          <p className="footer-mission">
            Coğrafi keşifleri eğlenceli ve interaktif hale getiren yenilikçi bir
            mobil uygulama projesi.
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/mapicoo/"
              target="blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3 className="footer-heading">Hızlı Linkler</h3>
          <ul>
            <li>
              <Link to="/">
                <span className="link-arrow">→</span> Ana Sayfa
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="link-arrow">→</span> Proje
              </Link>
            </li>
            <li>
              <Link to="/team">
                <span className="link-arrow">→</span> Ekip
              </Link>
            </li>
            <li>
              <Link to="/documentation">
                <span className="link-arrow">→</span> Dokümantasyon
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-heading">İletişim</h3>
          <ul>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:mapicosoftware@gmail.com">
                mapicosoftware@gmail.com
              </a>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <a href="tel:+905551234567">+90 555 123 45 67</a>
            </li>
          </ul>

          <div className="footer-newsletter">
            <h4>Bültenimize Kaydolun</h4>
            <form>
              <input type="email" placeholder="Email adresiniz" required />
              <button type="submit">Gönder</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Dünya Kaşifi. Tüm hakları saklıdır.
        </div>
        <div className="footer-legal">
          <a href="#">Gizlilik Politikası</a>
          <a href="#">Kullanım Şartları</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
