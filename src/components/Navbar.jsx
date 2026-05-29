import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/portfolio-site/initials.png" alt="Ashley Kissinger" className="signature-logo" />
        </Link>

        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={isActive('/') ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={isActive('/about') ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/work" 
              className={isActive('/work') ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/experience" 
              className={isActive('/experience') ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
