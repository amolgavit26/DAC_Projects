import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h4>🚗 Car Service Hub</h4>
        <p>🔧 Reliable. 💰 Affordable. ⭐ Professional Car Services You Can Trust.</p>
      </div>

      <div className="footer-section">
        <h5>🔗 Quick Links</h5>
        <ul>
          <li><a href="/about">ℹ️ About Us</a></li>
          <li><a href="/services">🛠️ Services</a></li>
          <li><a href="/contact">📞 Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h5>📬 Contact</h5>
        <p>✉️ Email: <a href="mailto:support@carservicehub.com">support@carservicehub.com</a></p>
        <p>📱 Phone: +91 98765 43210</p>
        <p>📍 Location: Mumbai, India</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2025 Car Service Hub. All rights reserved. 🚘</p>
    </div>
  </footer>
);

export default Footer;
