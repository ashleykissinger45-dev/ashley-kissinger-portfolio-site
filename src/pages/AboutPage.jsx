import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import './Page.css';

function AboutPage() {
  return (
    <div className="page-container">
      <About />
      <Skills />
    </div>
  );
}

export default AboutPage;
