// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const menuItems = [
    { to: '/', label: 'Ana Sayfa' },
    { to: '/about', label: 'Ben Kimim?' },
    { to: '/skills', label: 'Neler Yapabilirim?' },
    { to: '/portfolio', label: 'Portfolyo' },
    { to: '/contact', label: 'İletişim' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          Onur<span>Dev</span>
        </Link>
        <ul className="nav-links">
          {menuItems.map(item => (
            <motion.li
              key={item.to}
              className="nav-item"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.to}>{item.label}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
