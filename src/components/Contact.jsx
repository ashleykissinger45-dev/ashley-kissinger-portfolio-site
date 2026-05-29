import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const purposeOptions = [
  { value: 'Recruiter Screen', label: 'Recruiter Screen' },
  { value: 'Role Discussion', label: 'Role Discussion' },
  { value: 'PM Career Chat', label: 'PM Career Chat' },
  { value: 'Informational', label: 'Informational' },
  { value: 'Other', label: 'Other' },
];

function CustomSelect({ value, onChange, placeholder, options }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const selected = options.find(o => o.value === value);

  return (
    <div className={`custom-select${open ? ' is-open' : ''}`} ref={containerRef}>
      <button
        type="button"
        className="custom-select-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={selected ? 'cs-value' : 'cs-placeholder'}>
          {selected ? selected.label : placeholder}
        </span>
        <span className="cs-arrow">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className="custom-select-menu" role="listbox">
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={value === opt.value}
              className={`cs-option${value === opt.value ? ' is-selected' : ''}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
            >
              {opt.label}
              {value === opt.value && <span className="cs-check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const availability = [
  { day: 'Mon', slots: ['9–11am', '1–7pm'] },
  { day: 'Tue', slots: ['9–11am', '1–7pm'] },
  { day: 'Wed', slots: ['9–11am', '1–7pm'] },
  { day: 'Thu', slots: ['9–11am', '1–7pm'] },
  { day: 'Fri', slots: ['9–11am', '1–7pm'] },
  { day: 'Sat', slots: ['9–11am', '1–7pm'] },
  { day: 'Sun', slots: [] },
];

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', purpose: '', preference: '', note: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('ashleykissinger45@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // ← fill in after EmailJS setup
      'YOUR_TEMPLATE_ID',  // ← fill in after EmailJS setup
      formRef.current,
      'YOUR_PUBLIC_KEY'    // ← fill in after EmailJS setup
    ).then(() => setStatus('success')).catch(() => setStatus('error'));
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
              <p className="form-card-sub">Fill this out and I'll confirm a time within 24 hours.</p>
              <div className="form-card-avail">
                <span className="form-avail-dot" />
                <span>Available Mon – Sat &nbsp;·&nbsp; 9–11am &amp; 1–7pm &nbsp;·&nbsp; Arizona (MST)</span>
              </div>
            </div>

            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Request sent.</h3>
                <p>I'll confirm a time within 24 hours.</p>
              </div>
            ) : (
              <form ref={formRef} className="request-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Smith" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@company.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="company">Company &amp; Role <span className="label-opt">(optional)</span></label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp · Talent Acquisition" />
                  </div>
                  <div className="form-field">
                    <label>This is a…</label>
                    <CustomSelect
                      value={formData.purpose}
                      onChange={(val) => setFormData({ ...formData, purpose: val })}
                      placeholder="Select type"
                      options={purposeOptions}
                    />
                    <input type="hidden" name="purpose" value={formData.purpose} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="preference">Best times for you</label>
                    <input type="text" id="preference" name="preference" value={formData.preference} onChange={handleChange} placeholder="e.g. Tue or Thu mornings" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="note">About the role <span className="label-opt">(optional)</span></label>
                    <input type="text" id="note" name="note" value={formData.note} onChange={handleChange} placeholder="Title, team, or comp range" />
                  </div>
                </div>

                {status === 'error' && (
                  <p className="form-error">Something went wrong — email me directly instead.</p>
                )}

                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Request a Conversation →'}
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
