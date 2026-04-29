import React, { useState } from 'react';
import { FaChevronDown, FaStar } from 'react-icons/fa';
import { jobsData } from '../../data/jobsData';
import './JobPostingSection.css';

const JobPostingSection = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [formState, setFormState] = useState({}); // { [jobId]: { name, email, phone, coverLetter, applied } }

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleInputChange = (jobId, field, value) => {
    setFormState((prev) => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        [field]: value,
      },
    }));
  };

  const handleApply = (job) => {
    // Compose mailto link
    const form = formState[job.id] || {};
    const subject = encodeURIComponent(`Job Application: ${job.role} at ${job.company}`);
    const body = encodeURIComponent(
      `Job Role: ${job.role} at ${job.company}\n` +
      `Name: ${form.name || ''}\n` +
      `Email: ${form.email || ''}\n` +
      `Phone: ${form.phone || ''}\n` +
      `Cover Letter:\n${form.coverLetter || ''}`
    );
    window.location.href = `mailto:support@v-edu.us?subject=${subject}&body=${body}`;
    setFormState((prev) => ({
      ...prev,
      [job.id]: {
        ...prev[job.id],
        applied: true,
      },
    }));
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


            {/* EXPANDED SECTION - Enhanced Details & Apply Form */}
            {expandedId === job.id && (
              <div
                style={{
                  padding: '1.5rem',
                  background: '#f9fafb',
                  borderTop: '1px solid #e5e7eb',
                  borderRadius: '0 0 8px 8px',
                  marginBottom: '1.5rem',
                }}
              >
                {/* --- Job Details --- */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 10 }}>Description</h3>
                  <p style={{ color: '#444', marginBottom: 18 }}>{job.description}</p>

                  {job.responsibilities && job.responsibilities.length > 0 && (
                    <>
                      <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Responsibilities</h3>
                      <ul style={{ marginBottom: 18, paddingLeft: 20 }}>
                        {job.responsibilities.map((r, i) => (
                          <li key={i} style={{ marginBottom: 6, color: '#555', fontSize: '1rem' }}>{r}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {job.skills && job.skills.length > 0 && (
                    <>
                      <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Skills</h3>
                      <div style={{ marginBottom: 18 }}>
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
                              fontSize: '0.95rem',
                              color: '#1e293b',
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {job.qualifications && job.qualifications.length > 0 && (
                    <>
                      <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Qualifications</h3>
                      <ul style={{ marginBottom: 18, paddingLeft: 20 }}>
                        {job.qualifications.map((q, i) => (
                          <li key={i} style={{ marginBottom: 6, color: '#555', fontSize: '1rem' }}>{q}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {job.education && (
                    <>
                      <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Education</h3>
                      <p style={{ color: '#555', marginBottom: 0 }}>{job.education}</p>
                    </>
                  )}
                </div>

                {/* --- Apply Form --- */}
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '1.2rem 1rem',
                    maxWidth: 500,
                    margin: '0 auto',
                    boxShadow: '0 2px 8px rgba(80,120,200,0.06)',
                  }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 14, color: '#2563eb' }}>Apply for this job</h3>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      handleApply(job);
                    }}
                  >
                    <div style={{ marginBottom: 12 }}>
                      <label style={{ display: 'block', fontWeight: 500, marginBottom: 4 }}>Name<span style={{ color: '#f04a0c' }}> *</span></label>
                      <input
                        type="text"
                        required
                        value={(formState[job.id]?.name) || ''}
                        onChange={e => handleInputChange(job.id, 'name', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid #d1d5db',
                          borderRadius: 5,
                          fontSize: '1rem',
                        }}
                        disabled={formState[job.id]?.applied}
                      />
                    </div>
                    <div style={{ marginBottom: 12 }}>
                      <label style={{ display: 'block', fontWeight: 500, marginBottom: 4 }}>Email<span style={{ color: '#f04a0c' }}> *</span></label>
                      <input
                        type="email"
                        required
                        value={(formState[job.id]?.email) || ''}
                        onChange={e => handleInputChange(job.id, 'email', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid #d1d5db',
                          borderRadius: 5,
                          fontSize: '1rem',
                        }}
                        disabled={formState[job.id]?.applied}
                      />
                    </div>
                    <div style={{ marginBottom: 12 }}>
                      <label style={{ display: 'block', fontWeight: 500, marginBottom: 4 }}>Phone Number<span style={{ color: '#f04a0c' }}> *</span></label>
                      <input
                        type="tel"
                        required
                        value={(formState[job.id]?.phone) || ''}
                        onChange={e => handleInputChange(job.id, 'phone', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid #d1d5db',
                          borderRadius: 5,
                          fontSize: '1rem',
                        }}
                        disabled={formState[job.id]?.applied}
                      />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', fontWeight: 500, marginBottom: 4 }}>Cover Letter<span style={{ color: '#f04a0c' }}> *</span></label>
                      <textarea
                        required
                        rows={4}
                        value={(formState[job.id]?.coverLetter) || ''}
                        onChange={e => handleInputChange(job.id, 'coverLetter', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid #d1d5db',
                          borderRadius: 5,
                          fontSize: '1rem',
                          resize: 'vertical',
                        }}
                        disabled={formState[job.id]?.applied}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        background: formState[job.id]?.applied ? '#a7f3d0' : 'linear-gradient(90deg, #2563eb 30%, #059669 100%)',
                        color: formState[job.id]?.applied ? '#059669' : '#fff',
                        fontWeight: 700,
                        padding: '10px 0',
                        border: 'none',
                        borderRadius: 6,
                        fontSize: '1.1rem',
                        cursor: formState[job.id]?.applied ? 'not-allowed' : 'pointer',
                        transition: 'background 0.2s',
                        marginTop: 6,
                        marginBottom: 0,
                      }}
                      disabled={formState[job.id]?.applied}
                    >
                      {formState[job.id]?.applied ? 'Applied' : 'Apply'}
                    </button>
                  </form>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default JobPostingSection;