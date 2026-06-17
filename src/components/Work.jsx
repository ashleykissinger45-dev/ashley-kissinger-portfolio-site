import React, { useState } from 'react';
import './Work.css';

const courses = [
  {
    num: '01',
    name: 'Production & Operations Management',
    desc: 'Covered process flow, capacity planning, and quality control. Applied lean management and workflow optimization concepts to business case scenarios focused on operational efficiency.'
  },
  {
    num: '02',
    name: 'Strategic Management',
    desc: "Explored competitive analysis, business strategy frameworks like SWOT and Porter's Five Forces, and long-term organizational planning applied to real-world business challenges."
  },
  {
    num: '03',
    name: 'Organizational Behavior & Management',
    desc: 'Studied team dynamics, leadership styles, motivation theories, and change management, examining how people and organizational structure shape business outcomes.'
  },
  {
    num: '04',
    name: 'Entrepreneurship & Innovation',
    desc: 'Applied design thinking and PM principles to build a real tool prototype, including user research, problem validation, and iterating based on stakeholder feedback.',
    featured: true
  }
];

const flipCards = [
  {
    label: 'Problem',
    back: "PMs often don't realize a team member is overloaded until deliverables slip or burnout occurs. Existing tools like Jira and Asana offer resource views, but they're not optimized for small, fast-moving teams."
  },
  {
    label: 'Solution',
    back: 'A dashboard that aggregates work metrics — sprint velocity, meeting load, task distribution — to flag capacity issues early, before they become delivery risks.'
  },
  {
    label: 'Validation',
    back: 'Consulted with an industry professional in software to identify real pain points and user needs, then developed a working concept prototype and refined the approach based on feedback.'
  }
];

function Work() {
  const [flipped, setFlipped] = useState({});
  const [openCourse, setOpenCourse] = useState(null);
  const [photosExpanded, setPhotosExpanded] = useState(false);

  const toggle = (i) => setFlipped(prev => ({ ...prev, [i]: !prev[i] }));
  const flippedCount = Object.values(flipped).filter(Boolean).length;
  const toggleCourse = (i) => setOpenCourse(prev => prev === i ? null : i);

  return (
    <>
      {/* ── 01 Featured Work ── */}
      <section id="work" className="work">
        <h2><span className="section-num">01</span>Featured Work</h2>

        <div className="work-bento">
          {/* Hero card */}
          <div className="work-item work-item--hero">
            <div className="work-hero-layout">
              <div className="work-hero-body">
                <h3>AI Vibe Coding Workshop</h3>
                <p className="work-description">Coordinated end-to-end planning and execution of a community outreach workshop, achieving 70+ registrations and 50–60 attendees through targeted outreach campaigns and promotional coordination.</p>
                <div className="work-tags">
                  <span className="work-tag">Event Coordination</span>
                  <span className="work-tag">Stakeholder Management</span>
                  <span className="work-tag">Community Outreach</span>
                </div>
                
                <div className="event-photos-section">
                  <button 
                    className="photos-toggle" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setPhotosExpanded(!photosExpanded);
                    }}
                  >
                    {photosExpanded ? 'Hide' : 'View'} Event Photos
                    <span className="toggle-icon">{photosExpanded ? '−' : '+'}</span>
                  </button>
                  
                  {photosExpanded && (
                    <div className="photos-grid">
                      <img src="/event1.jpg" alt="AI Vibe Coding Workshop" className="event-photo" />
                      <img src="/event2.jpg" alt="AI Vibe Coding Workshop" className="event-photo" />
                      <img src="/event3.jpg" alt="AI Vibe Coding Workshop" className="event-photo" />
                      <img src="/event4.jpg" alt="AI Vibe Coding Workshop" className="event-photo" />
                    </div>
                  )}
                </div>
              </div>
              <div className="work-hero-stat">
                <span className="work-stat-num">70+</span>
                <span className="work-stat-label">registrations</span>
              </div>
            </div>
            <span className="card-bg-num">01</span>
          </div>

          {/* Secondary cards */}
          <div className="work-item work-item--secondary">
            <span className="card-bg-num">02</span>
            <h3>Harvard Business Simulation</h3>
            <p className="work-description">Co-led a cross-functional team to a 1st-place finish in a competitive business strategy simulation, tracking KPIs across marketing, operations, finance, and sustainability.</p>
            <div className="work-tags">
              <span className="work-tag">Strategy</span>
              <span className="work-tag">Team Leadership</span>
            </div>
            <div className="work-result">1st Place Finish · Spring 2026</div>
          </div>

          <div className="work-item work-item--secondary">
            <span className="card-bg-num">03</span>
            <h3>GCU Women in Business</h3>
            <p className="work-description">Coordinates a structured mentorship program for 4 participants, tracking milestones, deliverables, and professional development goals to ensure effective program delivery.</p>
            <div className="work-tags">
              <span className="work-tag">Mentorship</span>
              <span className="work-tag">Program Coordination</span>
            </div>
            <div className="work-result">4 participants · Program Mentor</div>
          </div>
        </div>
      </section>

      {/* ── 02 Coursework ── */}
      <section id="coursework" className="coursework">
        <h2><span className="section-num">02</span>Coursework</h2>
        <p className="section-intro">
          Applied PM concepts through hands-on academic projects, from user research to working prototypes.
        </p>

        <div className="course-accordion">
          <div className="course-accordion-header">
            <span className="course-accordion-title">Relevant Coursework</span>
            <span className="course-accordion-sub">Grand Canyon University · B.S. Business Administration</span>
          </div>
          {courses.map((course, i) => (
            <div
              key={i}
              className={`course-row${openCourse === i ? ' course-row--open' : ''}${course.featured ? ' course-row--featured' : ''}`}
              onClick={() => toggleCourse(i)}
              role="button"
            >
              <div className="course-row-top">
                <span className="course-row-num">{course.num}</span>
                <span className="course-row-name">{course.name}</span>
                <span className="course-row-chevron">{openCourse === i ? '−' : '+'}</span>
              </div>
              {openCourse === i && (
                <div className="course-row-body">
                  <p>{course.desc}</p>
                  {course.featured && <span className="course-see-more">Featured project below ↓</span>}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="coursework-card">
          <div className="coursework-card-header">
            <div className="coursework-eyebrow">
              <span className="learning-badge learning-badge--coral">Entrepreneurship</span>
              <span className="coursework-label">Case Study</span>
            </div>
            <h3>Team Capacity Dashboard</h3>
            <span className="coursework-meta">Grand Canyon University · Entrepreneurship &amp; Innovation</span>
          </div>
          <p className="coursework-summary">
            Built a prototype PM tool to surface workload imbalances before they lead to burnout — aggregating sprint velocity, meeting load, and task distribution into a single dashboard for small teams.
          </p>
          <div className="coursework-breakdown-header">
            <span className="coursework-breakdown-label">Case Study Breakdown</span>
            <div className="coursework-progress">
              {flipCards.map((_, i) => (
                <span key={i} className={`progress-dot${flipped[i] ? ' progress-dot--active' : ''}`} />
              ))}
              <span className="coursework-counter">{flippedCount} of 3 explored</span>
            </div>
          </div>
          <div className="coursework-sections">
            {flipCards.map((card, i) => (
              <div
                key={i}
                className={`flip-card${flipped[i] ? ' is-flipped' : ''}`}
                onClick={() => toggle(i)}
                role="button"
                aria-pressed={!!flipped[i]}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <span className="flip-step">0{i + 1}</span>
                    <span className="flip-label">{card.label}</span>
                    <span className="flip-hint">tap to reveal</span>
                  </div>
                  <div className="flip-card-back">
                    <span className="flip-back-label">{card.label}</span>
                    <p>{card.back}</p>
                    <span className="flip-back-hint">tap to flip back</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="coursework-skills">
            {['Problem Discovery', 'User Research', 'Prototyping', 'Stakeholder Feedback'].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Featured Learning ── */}
      <section id="learning" className="featured-learning">
        <h2><span className="section-num">03</span>Featured Learning</h2>
        <p className="section-intro">
          Active PMI Arizona Chapter member engaged in continuous professional development — learning from practitioners, not just textbooks.
        </p>

        <div className="learning-bento">
          {/* Featured full-width PMI card */}
          <div className="learning-card learning-card--featured">
            <div className="learning-card-top">
              <h3>PMI Phoenix Chapter Mentorship</h3>
              <span className="learning-badge learning-badge--green">Active</span>
            </div>
            <ul className="learning-details learning-details--2col">
              <li>Paired with a professional PM, who is transitioning into President of the PMI Arizona Chapter, for structured mentorship</li>
              <li>Learning stakeholder leadership, program governance, and how seasoned PMs navigate complex organizations</li>
              <li>Weekly 1:1 sessions focused on career strategy, certification prep, and real-world PM practice</li>
            </ul>
            <div className="learning-result learning-result--green">
              <span className="verified-check">✓ Verified</span>
              <span>Active · Mentored by incoming PMI Arizona Chapter President</span>
            </div>
          </div>

          <div className="learning-card">
            <div className="learning-card-top">
              <h3>Global Phoenix PMI Summit</h3>
              <span className="learning-badge learning-badge--yellow">2025</span>
            </div>
            <ul className="learning-details">
              <li>Connected with 50+ practicing project managers across industries and sectors</li>
              <li>Networked with PMI board members and chapter leadership on real-world PM challenges</li>
              <li>Gained perspective on certification pathways, hybrid methodologies, and the evolving PM landscape</li>
            </ul>
            <div className="learning-result learning-result--yellow">
              <span className="verified-check">✓ Verified</span>
              <span>Attendee · 50+ professional PM connections made</span>
            </div>
          </div>

          <div className="learning-card">
            <div className="learning-card-top">
              <h3>University PM Club</h3>
              <span className="learning-badge learning-badge--lavender">Active</span>
            </div>
            <ul className="learning-details">
              <li>Active member of Grand Canyon University’s Project Management club</li>
              <li>Participated in workshops and discussions on PM frameworks, Agile, and real-world case studies</li>
              <li>Collaborated with peers pursuing PM careers across business, tech, and healthcare sectors</li>
            </ul>
            <div className="learning-result learning-result--lavender">
              <span className="verified-check">✓ Verified</span>
              <span>Active member · Grand Canyon University</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
