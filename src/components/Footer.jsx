import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© 2025 Onur Dev. Tüm hakları saklıdır.</p>
        <div className="social">
          <a href="https://github.com/Fengfire" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="about:blank" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="about:blank" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
