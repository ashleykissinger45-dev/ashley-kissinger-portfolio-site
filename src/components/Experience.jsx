import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="exp-header">
        <h2>Experience</h2>
        <p className="exp-intro">
          A season of hands-on operations, event setup, and a front-row seat to how high-achieving professionals operate.
        </p>
      </div>

      <div className="exp-card">
        <div className="exp-eyebrow">
          <span className="exp-badge">Operations &amp; Events</span>
          <span className="exp-period">May 2022 – Aug 2024 · 3 Summers</span>
        </div>

        <div className="exp-title-row">
          <h3>Member Services &amp; Pro Shop Attendant</h3>
          <p className="exp-org">Hawthorn Woods Country Club</p>
        </div>

        <p className="exp-narrative">
          Over three summers at Hawthorn Woods, I became a consistent, trusted presence at a club where Chicago-area executives unwind, close deals, and build relationships. Working directly with 200+ active members, I managed accounts, processed daily transactions, and helped support events happening on and off the course, from league nights to private member functions.
        </p>

        <div className="exp-stats">
          <div className="exp-stat">
            <span className="exp-stat-num">200+</span>
            <span className="exp-stat-label">Member Accounts</span>
          </div>
          <div className="exp-stat-divider" />
          <div className="exp-stat">
            <span className="exp-stat-num">20+</span>
            <span className="exp-stat-label">Events Supported</span>
          </div>
          <div className="exp-stat-divider" />
          <div className="exp-stat">
            <span className="exp-stat-num">100+</span>
            <span className="exp-stat-label">Daily Transactions</span>
          </div>
          <div className="exp-stat-divider" />
          <div className="exp-stat">
            <span className="exp-stat-num">3</span>
            <span className="exp-stat-label">Staff Trained</span>
          </div>
        </div>

        <div className="exp-highlights">
          <div className="exp-highlight-item">
            <span className="exp-highlight-icon">◎</span>
            <div>
              <p className="exp-highlight-title">Event Setup & Support</p>
              <p className="exp-highlight-body">Helped with setup for recurring league events and private functions, getting spaces ready and making sure things were in order before and during events.</p>
            </div>
          </div>
          <div className="exp-highlight-item">
            <span className="exp-highlight-icon">◎</span>
            <div>
              <p className="exp-highlight-title">Member Account Management</p>
              <p className="exp-highlight-body">Managed 200+ member profiles across POS, membership database, and event booking systems. Kept accurate records and handled billing, reservations, and member requests.</p>
            </div>
          </div>
          <div className="exp-highlight-item">
            <span className="exp-highlight-icon">◎</span>
            <div>
              <p className="exp-highlight-title">Team & Operations</p>
              <p className="exp-highlight-body">Assisted in onboarding and training 3 new team members on system workflows, customer service standards, and operational procedures during peak season.</p>
            </div>
          </div>
        </div>

        <div className="exp-section">
          <span className="exp-section-label">Events I Helped Support</span>
          <div className="exp-event-tags">
            {["Men's League", "Women's League", "Private Events", "Member Dinners", "Pro Shop Operations"].map(e => (
              <span key={e} className="exp-event-tag">{e}</span>
            ))}
          </div>
        </div>

        <div className="exp-networking">
          <div className="exp-networking-icon">↗</div>
          <div>
            <p className="exp-networking-title">Unexpected Networking</p>
            <p className="exp-networking-body">
              Beyond the day-to-day, this role meant constant interaction with entrepreneurs, CEOs, and business leaders who were club members. I wasn't just processing their accounts. I was learning how to communicate with confidence, present myself professionally, and build genuine connections with high-achieving people.
            </p>
          </div>
        </div>

        <div className="exp-skills-row">
          <span className="exp-skills-label">Skills Used</span>
          <div className="exp-skills">
            {['Account Management', 'POS Systems', 'Event Support', 'Client Relations', 'Team Training', 'Data Entry'].map(s => (
              <span key={s} className="exp-skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
