import React from 'react';
// Pastikan file 'Footer.css' ada di folder yang sama (src/components/)
// dan namanya sudah benar.
import './Footer.css'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <p className="copyright-text">
            &copy; {currentYear} [Nama Anda]. All rights reserved.
          </p>
          
          <div className="social-links">
            {/* PASTIKAN NAMA FILE DI 'src' SESUAI DENGAN FILE DI FOLDER 'public' */}
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" title="GitHub">
              {/* Pastikan '/github-logo.png' ada di folder public */}
              <img src="/github-logo.png" alt="GitHub Logo" className="social-icon" /> 
            </a>
            
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              {/* Pastikan '/linkedin-logo.png' ada di folder public */}
              <img src="/linkedin-logo.png" alt="LinkedIn Logo" className="social-icon" />
            </a>
            
            {/* Instagram sudah benar karena muncul */}
            <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" title="Instagram">
              {/* Pastikan '/2a89...jpg' ada di folder public */}
              <img src="/instagram-1-svgrepo-com.svg" alt="Instagram Logo" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

