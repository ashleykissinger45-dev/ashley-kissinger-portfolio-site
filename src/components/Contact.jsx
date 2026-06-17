import React, { useState } from 'react';
import './Contact.css';

const FORMSPREE_ID = 'xgobaoqn'; // Formspree form ID

function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('ashleykissinger45@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-grid">

        {/* ── Left info panel ── */}
        <div className="contact-left">
          <h2>Let's<br />Connect</h2>
          <p className="contact-tagline">Open to PM roles, contract work, and feedback on this site.</p>

          <div className="contact-channels">
            <a href="https://www.linkedin.com/in/ashleykissinger" target="_blank" rel="noopener noreferrer" className="channel-card">
              <div className="channel-icon">in</div>
              <div className="channel-inner">
                <span className="channel-name">LinkedIn</span>
                <span className="channel-sub">Full career history &amp; credentials</span>
              </div>
              <span className="channel-arrow">↗</span>
            </a>
            <a href="mailto:ashleykissinger45@gmail.com" className="channel-card">
              <div className="channel-icon">@</div>
              <div className="channel-inner">
                <span className="channel-name">Email</span>
                <span className="channel-sub">
                  ashleykissinger45@gmail.com
                  <button className="email-copy-btn" onClick={copyEmail}>
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </span>
              </div>
              <span className="channel-arrow">→</span>
            </a>
            <a href="https://github.com/ashleykissinger45-dev" target="_blank" rel="noopener noreferrer" className="channel-card">
              <div className="channel-icon">&lt;/&gt;</div>
              <div className="channel-inner">
                <span className="channel-name">GitHub</span>
                <span className="channel-sub">Browse my projects</span>
              </div>
              <span className="channel-arrow">↗</span>
            </a>
          </div>

        </div>

        {/* ── Right form panel ── */}
        <div className="contact-right">
          <div className="contact-form-card">
            <div className="form-card-header">
              <p className="form-card-title">Book time to talk</p>
              <p className="form-card-sub">Available Mon–Sat · 9–11am & 1–7pm MST</p>
            </div>

            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Request sent.</h3>
                <p>I'll confirm a time within 24 hours.</p>
              </div>
            ) : (
              <form className="request-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>

                <div className="form-field">
                  <label htmlFor="company">Company / Role <span className="label-opt">(optional)</span></label>
                  <input type="text" id="company" name="company" placeholder="Company name or your role" />
                </div>

                <div className="form-field">
                  <label htmlFor="note">What would you like to discuss?</label>
                  <textarea id="note" name="note" placeholder="Brief note about the conversation..." rows="3" />
                </div>

                {status === 'error' && (
                  <p className="form-error">Something went wrong — email me directly instead.</p>
                )}

                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Request'}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
