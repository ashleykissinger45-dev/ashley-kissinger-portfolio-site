import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ImpactMetrics from '../components/ImpactMetrics';
import './Home.css';

function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('homeVisited');
    if (!hasVisited) {
      setIsFirstVisit(true);
      sessionStorage.setItem('homeVisited', 'true');
    }
  }, []);

  return (
    <div className={`home-page ${isFirstVisit ? 'first-visit' : ''}`}>
      <Hero />
      <ImpactMetrics />
    </div>
  );
}

export default Home;
