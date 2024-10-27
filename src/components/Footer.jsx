import React from 'react';
import '../components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
