import React, { useState } from 'react';
import './Certifications.css';

function Certifications() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section className="certifications">
      <span className="section-label">Credentials</span>
      <h2>Certifications</h2>
      
      <div className="certification-list">
        <div className="certification-item-wrapper">
          <div 
            className={`certification-item ${showCertificate ? 'active' : ''}`}
            onClick={() => setShowCertificate(!showCertificate)}
          >
            <div className="cert-info">
              <h3>CAPM</h3>
              <p>Certified Associate in Project Management</p>
              <span className="cert-meta">Project Management Institute • Valid until Jan 2029</span>
            </div>
            <div className="cert-badge">
              <span className="badge-text">CERTIFIED</span>
            </div>
          </div>
          
          {showCertificate && (
            <div className="certificate-display">
              <img 
                src="/portfolio-site/capm-certificate.png" 
                alt="CAPM Certificate - Ashley Kissinger" 
                className="certificate-image"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
