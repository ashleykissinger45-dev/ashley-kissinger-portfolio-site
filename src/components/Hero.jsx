import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'CAPM-Certified • Delivering Excellence';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="name-line">ASHLEY</span>
          <span className="name-line">KISSINGER</span>
        </h1>
        <p className="hero-tagline">
          {typedText}
          <span className="cursor">|</span>
        </p>

        <div className="currently-strip">
          <span className="currently-label">Currently</span>
          <span className="currently-items">
            <span>Open to full-time PM & AI roles</span>
            <span className="currently-dot">·</span>
            <span>GCU, B.S.</span>
            <span className="currently-dot">·</span>
            <span>Starting: The Odin Project</span>
          </span>
        </div>

        <div className="hero-video-container">
          <div className="video-wrapper" onClick={(e) => {
            const video = e.currentTarget.querySelector('video');
            const overlay = e.currentTarget.querySelector('.video-overlay');
            if (video.paused) {
              video.play();
              overlay.style.opacity = '0';
              overlay.style.pointerEvents = 'none';
            } else {
              video.pause();
              overlay.style.opacity = '1';
              overlay.style.pointerEvents = 'auto';
            }
          }}>
            <video
              className="hero-video"
              playsInline
            >
              <source src="/intro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <div className="play-button">▶</div>
              <p className="play-text">Play Now</p>
            </div>
          </div>
        </div>

        <div className="hero-cta">
          <Link to="/work" className="btn btn-primary hero-btn">
            View My Work
          </Link>
          <Link to="/contact" className="btn hero-btn">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;