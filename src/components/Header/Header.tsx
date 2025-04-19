import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isHomePage ? 'home-header' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Dünya Kaşifi Logo" className="logo" />

          <h1 className="site-title">Mapico</h1>
        </Link>
        
        <nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Proje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/team" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ekip
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/documentation" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dokümantasyon
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <button 
          className="mobile-menu-button" 
          onClick={toggleMobileMenu}
          aria-label="Mobile Menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;