import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = [
    {
      title: 'Project Management',
      skills: [
        {
          name: 'Stakeholder Management',
          description: 'Coordinated with university professors, external entrepreneurs, PMI chapter members, and community partners — aligning diverse stakeholders on planning, communication, and execution.',
          projects: [
            { label: 'AI Vibe Coding Workshop', href: '/work' },
            { label: 'PMI Mentorship', href: '/work#learning' },
          ]
        },
        {
          name: 'Cross-Functional Collaboration',
          description: 'Facilitated alignment across diverse teams and departments, coordinating group projects, balancing competing priorities, and maintaining clear communication throughout.',
          projects: [
            { label: 'Harvard Simulation', href: '/work' },
            { label: 'Women in Business', href: '/work' },
          ]
        },
        {
          name: 'Timeline Planning',
          description: 'Managed a 2-month planning cycle for the AI Vibe Coding Workshop; tracked milestones and deliverables for the GCU Women in Business mentorship program.',
          projects: [
            { label: 'AI Vibe Coding Workshop', href: '/work' },
          ]
        },
        {
          name: 'Budget Coordination',
          description: 'Estimated catering and venue costs for community workshop events; coordinated resource allocation and maintained budget documentation throughout the planning cycle.',
          projects: [
            { label: 'AI Vibe Coding Workshop', href: '/work' },
          ]
        },
        {
          name: 'Team Leadership',
          description: 'Co-led cross-functional team to a 1st-place finish in the Harvard Business Simulation, coordinating strategic decisions across marketing, operations, finance, and sustainability.',
          projects: [
            { label: 'Harvard Simulation', href: '/work' },
          ]
        },
        {
          name: 'Process Improvement',
          description: 'Identified and improved operational workflows; assisted in streamlining training and onboarding procedures to increase consistency and efficiency.',
          projects: [
            { label: 'Hawthorn Woods', href: '/experience' },
          ]
        },
      ]
    },
    {
      title: 'Technical & Tools',
      skills: [
        {
          name: 'Microsoft Office Suite',
          description: 'Daily use of Excel for data tracking and budgeting, PowerPoint for presentations, Word for documentation, and Outlook for stakeholder communication.',
          projects: [
            { label: 'Hawthorn Woods', href: '/experience' },
          ]
        },
        {
          name: 'Google Workspace',
          description: 'Regular use of Docs, Sheets, Drive, and Gmail for collaboration, record-keeping, and team communication across projects.',
          projects: [
            { label: 'AI Vibe Coding Workshop', href: '/work' },
          ]
        },
        {
          name: 'Salesforce CRM',
          description: 'Learned through academic coursework — familiar with CRM record management, data entry workflows, and system navigation.',
          projects: [
            { label: 'Relevant Coursework', href: '/work#coursework' },
          ]
        },
        {
          name: 'Data Entry & Reporting',
          description: 'Accurate data entry and validation across integrated systems including CRM, POS, and membership databases; compiled reports to track program outcomes and participation.',
          projects: [
            { label: 'Hawthorn Woods', href: '/experience' },
          ]
        },
        {
          name: 'Slack & Microsoft Teams',
          description: 'Used for team communication, scheduling, and cross-functional coordination in both academic and professional environments.',
          projects: [
            { label: 'AI Vibe Coding Workshop', href: '/work' },
          ]
        },
        {
          name: 'AI Tools & Technologies',
          description: 'Applied AI tools in workshop facilitation and daily professional workflows, focused on practical problem-solving applications rather than theoretical use.',
          projects: [
            { label: 'AI Vibe Coding Workshop', href: '/work' },
          ]
        },
      ]
    }
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(prev => prev?.name === skill.name ? null : skill);
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills & Competencies</h2>

      <div className="skills-grid">
        {categories.map((cat, ci) => (
          <div key={ci} className="skill-category">
            <span className="skill-category-label">{cat.title}</span>
            <div className="skill-list">
              {cat.skills.map((skill, i) => (
                <div
                  key={i}
                  className={`skill-item${selectedSkill?.name === skill.name ? ' active' : ''}`}
                  onClick={() => handleSkillClick(skill)}
                  role="button"
                  aria-pressed={selectedSkill?.name === skill.name}
                >
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
            {selectedSkill && cat.skills.some(s => s.name === selectedSkill.name) && (
              <div className="skill-description">
                <p>{selectedSkill.description}</p>
                {selectedSkill.projects && selectedSkill.projects.length > 0 && (
                  <div className="skill-used-in">
                    <span className="skill-used-label">Used in</span>
                    {selectedSkill.projects.map((proj, i) => (
                      <Link key={i} to={proj.href} className="skill-project-link">
                        {proj.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
