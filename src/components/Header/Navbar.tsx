import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Ana Sayfa
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Proje
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/team" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Ekip
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/documentation" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Dokümantasyon
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            İletişim
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;