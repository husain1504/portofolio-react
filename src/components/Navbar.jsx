import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Sun, Moon, Sparkles } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="brand" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-icon">🚀</span>
          <span className="brand-text">Uchey</span>
        </a>

        <div className="navbar-right">
          {/* Dark Mode Toggle Button */}
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-icon sun-icon">
              <Sun size={16} />
            </span>
            <span className="theme-icon moon-icon">
              <Moon size={16} />
            </span>
          </button>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#home" onClick={toggleMenu}>
                <Home className="link-icon" size={20} />
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                <User className="link-icon" size={20} />
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                <Briefcase className="link-icon" size={20} />
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                <Mail className="link-icon" size={20} />
                Contact
              </a>
            </li>
            
            {/* Dark mode toggle di mobile menu */}
            <li className="mobile-theme-toggle">
              <button 
                className="theme-toggle-mobile"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <Sun className="theme-icon" size={24} /> : <Moon className="theme-icon" size={24} />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      {isMenuOpen && (
        <div 
          className="navbar-overlay" 
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
}

export default Navbar;