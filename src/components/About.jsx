import React, { useState } from 'react';
import './About.css';

function About() {
  const [aiExpanded, setAiExpanded] = useState(false);
  const [openScenarios, setOpenScenarios] = useState({});
  const toggleScenario = (id) => setOpenScenarios(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="about" className="about">
      <div className="about-layout">

        {/* LEFT: profile card */}
        <div className="profile-card">
          <div className="profile-photo-wrap">
            <img
              src="/profilepic.png"
              alt="Ashley Kissinger"
              className="profile-photo"
            />
          </div>
          <div className="profile-info">
            <h3 className="profile-name">Ashley Kissinger</h3>
            <span className="about-chip">
              <span className="about-chip-dot" />
              Available June 2026
            </span>
          </div>
          <div className="glance-list">
            <div className="glance-item">
              <span className="glance-key">Seeking</span>
              <span className="glance-val">Full-time PM & AI Roles</span>
            </div>
            <div className="glance-item">
              <span className="glance-key">Location</span>
              <span className="glance-val">Phoenix, AZ · Remote OK</span>
            </div>
            <div className="glance-item">
              <span className="glance-key">Certified</span>
              <span className="glance-val">CAPM (PMI)</span>
            </div>
          </div>
        </div>

        {/* RIGHT: main content */}
        <div className="about-main">
          <h2>About Me</h2>
          
          <div className="about-paragraphs">
            <div className="about-paragraph-card">
              <p>Hi, I'm Ashley Kissinger. I'm a CAPM-certified Business Administration graduate.</p>
            </div>
            
            <div className="about-paragraph-card">
              <p>I recently coordinated an AI Coding Workshop for GCU students, managing timelines, logistics, and team alignment.</p>
            </div>
            
            <div className="about-paragraph-card">
              <p>Growing up with two software engineer parents gave me early exposure to technology, and my business studies provided the operational foundation to bridge technical and business needs.</p>
            </div>
            
            <div className="about-paragraph-card">
              <p>I'm early in my career with much to learn, but what I bring is curiosity, strong organizational skills, and ownership of the details that drive project success.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="ai-section">
        <span className="section-label">My Outlook on AI</span>
        
        <div className="ai-card">
          <div className="ai-meta">
            <span className="ai-tag">Featured</span>
            <span className="ai-info">3 min read · Updated May 2026</span>
          </div>
          
          <p className="ai-intro">
            After running an AI workshop at GCU, I noticed students often see AI as a shortcut, while teachers see it as a threat. Both miss the point.
          </p>
          
          {aiExpanded && (
            <div className="ai-expanded">
              <p>My view is that AI is only as powerful as the person using it. We need people who are willing to learn and use it. Those who don't will fall behind because the world doesn't slow down.</p>
              <p>What stood out most was seeing students be curious about it. That curiosity is what actually makes AI useful.</p>
              <p>The real question isn't whether we should use AI, but what we're trying to solve with it. Used well, it helps you think faster, explore ideas, and get unstuck. Used poorly, it replaces thinking.</p>
              <p>In project management, I see it the same way: it's not about replacing work, but focusing on what actually matters.</p>
            </div>
          )}
          
          {!aiExpanded && (
            <button className="ai-expand" onClick={() => setAiExpanded(true)}>
              Read full article
            </button>
          )}
        </div>
        
        <div className="tech-note">
          <span className="tech-label">Beyond PM</span>
          <p className="tech-text">
            I'm also learning web development through The Odin Project because I believe the best project managers understand what they're managing. Knowing how software gets built changes the questions I ask and the assumptions I challenge.
          </p>
        </div>
      </div>

    </section>
  );
}

export default About;