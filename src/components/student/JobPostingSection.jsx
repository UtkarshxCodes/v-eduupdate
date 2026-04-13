import React, { useState } from 'react';
import { FaChevronDown, FaStar } from 'react-icons/fa';
import { jobsData } from '../../data/jobsData';
import './JobPostingSection.css';

const JobPostingSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      className="section__container job__container"
      id="job"
      style={{ maxWidth: '1100px', margin: '0 auto' }}
    >
      
      {/* HEADER */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
          marginTop: '1.5rem',
          width: '100%',
          maxWidth: '900px',
          marginInline: 'auto'
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 800,
            background: 'linear-gradient(90deg, #2563eb 30%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
            marginBottom: '0.8rem'
          }}
        >
          Latest & Top Job Openings
        </h2>

        <p
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
            color: '#334155',
            fontWeight: 500,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Discover exciting opportunities in Data Science, AI, Cloud, and more.
        </p>
      </div>

      {/* JOB LIST (1 per row via CSS) */}
      <div className="job__grid">
        {jobsData.map((job) => (
          <div key={job.id} className="job__card-container">

            {/* COLLAPSED CARD */}
            <div
              onClick={() => toggleExpand(job.id)}
              style={{
                padding: '1.5rem',
                cursor: 'pointer',
                borderLeft: '6px solid #2563eb',
                background: 'linear-gradient(135deg, #f8fafc 70%, #e0e7ff 100%)',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  alignItems: 'flex-start'
                }}
              >
                
                {/* LEFT CONTENT */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#2563eb', margin: 0 }}>
                    {job.company}
                  </h4>

                  <p style={{ margin: '2px 0', color: '#6b7280' }}>
                    {job.location}
                  </p>

                  <h3 style={{ margin: '8px 0 4px 0' }}>
                    {job.role}
                  </h3>

                  <p style={{ color: '#555' }}>
                    {job.description.substring(0, 90)}...
                  </p>

                  <span
                    style={{
                      color: '#059669',
                      fontWeight: '700',
                      background: '#e0f7ef',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.9rem'
                    }}
                  >
                    {job.salary}
                  </span>
                </div>

                {/* RIGHT SIDE */}
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      marginBottom: '8px'
                    }}
                  >
                    <FaStar style={{ color: '#fbbf24' }} />
                    <span style={{ fontWeight: 600 }}>{job.rating}</span>
                  </div>

                  <FaChevronDown
                    style={{
                      fontSize: '18px',
                      transition: 'transform 0.3s ease',
                      transform:
                        expandedId === job.id
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)'
                    }}
                  />
                </div>

              </div>
            </div>

            {/* EXPANDED SECTION */}
            {expandedId === job.id && (
              <div
                style={{
                  padding: '1.5rem',
                  background: '#f9fafb',
                  borderTop: '1px solid #e5e7eb',
                  borderRadius: '0 0 8px 8px'
                }}
              >

                <h4>Full Description</h4>
                <p>{job.description}</p>

                <h4>Qualifications</h4>
                <ul>
                  {job.qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>

                <h4>Responsibilities</h4>
                <ul>
                  {job.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>

                <h4>Skills</h4>
                <div style={{ marginBottom: '10px' }}>
                  {job.skills.map((s, i) => (
                    <span
                      key={i}
                      style={{
                        marginRight: '8px',
                        marginBottom: '6px',
                        display: 'inline-block',
                        background: '#dbeafe',
                        padding: '5px 10px',
                        borderRadius: '15px',
                        fontSize: '0.85rem'
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <h4>Education</h4>
                <p>{job.education}</p>

              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default JobPostingSection;