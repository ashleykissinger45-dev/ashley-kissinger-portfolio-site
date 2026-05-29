import React, { useState, useEffect, useRef } from 'react';
import './ImpactMetrics.css';

function ImpactMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Counter = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  const metrics = [
    { value: 70, suffix: '+', label: 'Workshop Registrations' },
    { value: 200, suffix: '+', label: 'Member Accounts Managed' },
    { value: 20, suffix: '+', label: 'Events Supported' },
    { value: 4, suffix: '', label: 'Mentees Guided' }
  ];

  return (
    <section className="impact-metrics" ref={sectionRef}>
      <h2>By The Numbers</h2>
      
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-item">
            <div className="metric-value">
              <Counter end={metric.value} suffix={metric.suffix} />
            </div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImpactMetrics;
