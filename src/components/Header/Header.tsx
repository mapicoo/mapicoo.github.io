import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isHomePage ? 'home-header' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/assets/logo.png" alt="Dünya Kaşifi Logo" className="logo" />
          <h1 className="site-title">Dünya Kaşifi</h1>
        </Link>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                Proje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team" className="nav-link">
                Ekip
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/documentation" className="nav-link">
                Dokümantasyon
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                İletişim
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="mobile-menu-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;