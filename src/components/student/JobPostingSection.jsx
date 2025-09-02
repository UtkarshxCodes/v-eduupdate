import React from 'react';
import { Link } from 'react-router-dom';
import './JobPostingSection.css';

// Utility to shuffle array
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Utility to get random hourly salary between $100 and $220
function getRandomHourlySalary() {
    return `$${Math.floor(Math.random() * (220 - 100 + 1) + 100)}/hr`;
}

const jobs = [
    {
        company: 'NVIDIA',
        location: 'USA',
        role: 'AI Research Scientist',
        description: 'Work on cutting-edge artificial intelligence research projects focused on deep learning, computer vision, and model optimization.',
        positions: '5 Positions',
        type: 'Full Time',
        salary: '$160,000/Year ($76.92/hr)',
        link: '/jobs/nvidia-ai-research-scientist',
        companyUrl: 'https://www.nvidia.com/',
    },
    {
        company: 'Tesla',
        location: 'USA',
        role: 'Embedded Systems Engineer',
        description: 'Design and develop embedded software for automotive control systems.',
        positions: '4 Positions',
        type: 'Full Time',
        salary: '$142,000/year',
        link: '/jobs/tesla-embedded-systems-engineer',
        companyUrl: 'https://www.tesla.com/',
    },
    {
        company: 'Stripe',
        location: 'Remote',
        role: 'Software Engineer, Payments',
        description: 'Build and maintain systems that power global online payments.',
        positions: '5 Positions',
        type: 'Full Time',
        salary: '$150,000/year',
        link: '/jobs/stripe-software-engineer-payments',
        companyUrl: 'https://stripe.com',
    },
    {
        company: 'Red Hat',
        location: 'USA',
        role: 'Automation Engineer',
        description: 'Develop automation solutions to streamline infrastructure operations.',
        positions: '3 Positions',
        type: 'Full Time',
        salary: '$132,000/year',
        link: '/jobs/red-hat-automation-engineer',
        companyUrl: 'https://www.redhat.com',
    },
    {
        company: 'Atlassian',
        location: 'Remote',
        role: 'Site Reliability Engineer',
        description: 'Ensure reliability and scalability of Atlassian’s services and systems.',
        positions: '4 Positions',
        type: 'Full Time',
        salary: '$144,000/year',
        link: '/jobs/atlassian-site-reliability-engineer',
        companyUrl: 'https://www.atlassian.com',
    },
    {
        company: 'Shopify',
        location: 'Canada (Remote)',
        role: 'Product Data Analyst',
        description: 'Analyze product metrics to support strategic business decisions.',
        positions: '3 Positions',
        type: 'Full Time',
        salary: '$138,000/year',
        link: '/jobs/shopify-product-data-analyst',
        companyUrl: 'https://www.shopify.com',
    },
    {
        company: 'Snap Inc.',
        location: 'USA',
        role: 'Android Developer',
        description: 'Build high-performance features for Snapchat’s Android app.',
        positions: '2 Positions',
        type: 'Full Time',
        salary: '$137,000/year',
        link: '/jobs/snap-android-developer',
        companyUrl: 'https://www.snap.com',
    },
    {
        company: 'Twilio',
        location: 'Remote',
        role: 'DevOps Engineer',
        description: 'Maintain CI/CD pipelines and automate cloud infrastructure tasks.',
        positions: '4 Positions',
        type: 'Full Time',
        salary: '$139,000/year',
        link: '/jobs/twilio-devops-engineer',
        companyUrl: 'https://www.twilio.com',
    },
    {
        company: 'Intel',
        location: 'USA',
        role: 'Systems Software Engineer',
        description: 'Develop low-level software to support next-gen hardware.',
        positions: '5 Positions',
        type: 'Full Time',
        salary: '$141,000/year',
        link: '/jobs/intel-systems-software-engineer',
        companyUrl: 'https://www.intel.com',
    },
    {
        company: 'Asana',
        location: 'USA',
        role: 'Engineering Manager',
        description: 'Lead and mentor a team of engineers to deliver scalable products.',
        positions: '2 Positions',
        type: 'Full Time',
        salary: '$160,000/year',
        link: '/jobs/asana-engineering-manager',
        companyUrl: 'https://www.asana.com',
    },
    {
        company: 'GitLab',
        location: 'Remote',
        role: 'Technical Program Manager',
        description: 'Coordinate cross-functional initiatives across engineering and product teams.',
        positions: '3 Positions',
        type: 'Full Time',
        salary: '$145,000/year',
        link: '/jobs/gitlab-technical-program-manager',
        companyUrl: 'https://about.gitlab.com',
    },
    {
        company: 'Amazon',
        location: 'USA',
        role: 'Cloud Solutions Engineer',
        description: 'Design and deploy scalable cloud solutions for enterprise clients.',
        positions: '6 Positions',
        type: 'Full Time',
        salary: '$150,000/year',
        link: '/jobs/amazon-cloud-solutions-engineer',
        companyUrl: 'https://aws.amazon.com',
    },
    {
        company: 'Google',
        location: 'USA',
        role: 'AI Product Manager',
        description: 'Lead the development of AI-driven products and features.',
        positions: '3 Positions',
        type: 'Full Time',
        salary: '$155,000/year',
        link: '/jobs/google-ai-product-manager',
        companyUrl: 'https://ai.google',
    },
    {
        company: 'Facebook',
        location: 'USA',
        role: 'Machine Learning Engineer',
        description: 'Develop machine learning models to improve user engagement.',
        positions: '4 Positions',
        type: 'Full Time',
        salary: '$145,000/year',
        link: '/jobs/facebook-machine-learning-engineer',
        companyUrl: 'https://ai.facebook.com',
    },
    {
        company: 'Netflix',
        location: 'USA',
        role: 'Data Scientist',
        description: 'Analyze data to optimize content recommendations and user experience.',
        positions: '5 Positions',
        type: 'Full Time',
        salary: '$150,000/year',
        link: '/jobs/netflix-data-scientist',
        companyUrl: 'https://www.netflix.com',
    },
    {
        company: 'Spotify',
        location: 'USA',
        role: 'Data Engineer',
        description: 'Build and maintain data pipelines for analytics and reporting.',
        positions: '3 Positions',
        type: 'Full Time',
        salary: '$145,000/year',
        link: '/jobs/spotify-data-engineer',
        companyUrl: 'https://www.spotify.com',
    },
    {
        company: 'Airbnb',
        location: 'USA',
        role: 'Machine Learning Engineer',
        description: 'Develop machine learning models to enhance user experience.',
        positions: '2 Positions',
        type: 'Full Time',
        salary: '$150,000/year',
        link: '/jobs/airbnb-machine-learning-engineer',
        companyUrl: 'https://www.airbnb.com',
    },
    {
        company: 'Adobe',
        location: 'USA',
        role: 'Frontend Engineer',
        description: 'Implement user interfaces with a focus on performance and usability.',
        positions: '4 Positions',
        type: 'Full Time',
        salary: '$135,000/year',
        link: '/jobs/adobe-frontend-engineer',
        companyUrl: 'https://www.adobe.com',
    },
    {
        company: 'Slack',
        location: 'USA',
        role: 'Backend Engineer',
        description: 'Build scalable backend services to support Slack\'s platform.',
        positions: '3 Positions',
        type: 'Full Time',
        salary: '$138,000/year',
        link: '/jobs/slack-backend-engineer',
        companyUrl: 'https://slack.com',
    },
    {
        company: 'Zoom',
        location: 'USA',
        role: 'Software Engineer',
        description: 'Develop features and improvements for Zoom\'s communication platform.',
        positions: '5 Positions',
        type: 'Full Time',
        salary: '$142,000/year',
        link: '/jobs/zoom-software-engineer',
        companyUrl: 'https://zoom.us',
    },
    {
        company: 'LinkedIn',
        location: 'USA',
        role: 'Business Intelligence Analyst',
        description: 'Provide data-driven insights to support business decisions.',
        positions: '4 Positions',
        type: 'Full Time',
        salary: '$135,000/year',
        link: '/jobs/linkedin-business-intelligence-analyst',
        companyUrl: 'https://www.linkedin.com',
    },
    {
        company: 'Dropbox',
        location: 'Remote',
        role: 'Cloud Infrastructure Engineer',
        description: 'Design and maintain scalable cloud infrastructure for Dropbox services.',
        positions: '3 Positions',
        type: 'Full Time',
        salary: '$140,000/year',
        link: '/jobs/dropbox-cloud-infrastructure-engineer',
        companyUrl: 'https://www.dropbox.com',
    },
    {
        company: 'Pinterest',
        location: 'USA',
        role: 'Data Visualization Specialist',
        description: 'Create interactive visualizations to help teams understand complex data.',
        positions: '2 Positions',
        type: 'Full Time',
        salary: '$135,000/year',
        link: '/jobs/pinterest-data-visualization-specialist',
        companyUrl: 'https://www.pinterest.com',
    },
    {
        company: 'Uber',
        location: 'USA',
        role: 'Mobile App Developer',
        description: 'Develop and optimize Uber’s mobile applications for iOS and Android.',
        positions: '4 Positions',
        type: 'Full Time',
        salary: '$145,000/year',
        link: '/jobs/uber-mobile-app-developer',
        companyUrl: 'https://www.uber.com',
    },
    {
        company: 'Twitter',
        location: 'Remote',
        role: 'Platform Engineer',
        description: 'Build and maintain scalable systems for Twitter’s platform.',
        positions: '3 Positions',
        type: 'Full Time',
        salary: '$140,000/year',
        link: '/jobs/twitter-platform-engineer',
        companyUrl: 'https://twitter.com',
    },
    {
        company: 'Salesforce',
        location: 'USA',
        role: 'CRM Solutions Architect',
        description: 'Design and implement CRM solutions for enterprise clients.',
        positions: '5 Positions',
        type: 'Full Time',
        salary: '$150,000/year',
        link: '/jobs/salesforce-crm-solutions-architect',
        companyUrl: 'https://www.salesforce.com',
    },
];

const shuffledJobs = shuffleArray(jobs);

const JobPostingSection = () => (
    <section className="section__container job__container" id="job">
        <div style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            marginTop: '1.5rem'
        }}>
            <h2
                className="job-heading"
                style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(90deg, #2563eb 30%, #059669 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem',
                    lineHeight: 1.1,
                }}
            >
                Latest & Top Job Openings
            </h2>
            <div style={{
                width: 60,
                height: 4,
                background: 'linear-gradient(90deg, #2563eb 30%, #059669 100%)',
                borderRadius: 2,
                margin: '0.5rem auto 1.2rem auto'
            }} />
            <p
                className="job-subheading"
                style={{
                    fontSize: '1.15rem',
                    color: '#334155',
                    fontWeight: 500,
                    maxWidth: 540,
                    margin: '0 auto',
                    lineHeight: 1.5,
                    letterSpacing: '0.01em'
                }}
            >
                Discover exciting new opportunities in <b style={{color:'#2563eb'}}>Data Science</b>, <b style={{color:'#059669'}}>AI</b>, <b style={{color:'#2563eb'}}>Cloud</b>, <b style={{color:'#059669'}}>Cybersecurity</b>, and more — across top companies worldwide.
            </p>
        </div>
        <div className="job__grid">
            {shuffledJobs.map((job, idx) => (
                <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    className="job__card block hover:shadow-lg transition"
                    style={{
                        borderLeft: '6px solid #2563eb',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, #f8fafc 70%, #e0e7ff 100%)'
                    }}
                >
                    {/* Company Logo or Initials */}
                    <div className="job__card__header-nologo" style={{marginBottom: '0.7rem'}}>
                        <div
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                background: '#2563eb22',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: 22,
                                color: '#2563eb',
                                marginRight: 12,
                                textTransform: 'uppercase',
                                letterSpacing: 1,
                            }}
                        >
                            {job.company[0]}
                        </div>
                        <div>
                            <h5 className="job__company">{job.company}</h5>
                            <h6 className="job__location">{job.location}</h6>
                        </div>
                    </div>
                    <h4 className="job__role">{job.role}</h4>
                    <p className="job__desc">{job.description}</p>
                    <div className="job__card__footer">
                        <span>{job.positions}</span>
                        <span>{job.type}</span>
                        <span style={{color: "#059669", background: "#e0f7ef", fontWeight: 700}}>
                            {getRandomHourlySalary()}
                        </span>
                    </div>
                    {/* Prominent Hourly Salary Badge */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 18,
                            right: 18,
                            background: 'linear-gradient(90deg, #059669 60%, #34d399 100%)',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: 18,
                            padding: '6px 18px',
                            borderRadius: 24,
                            boxShadow: '0 2px 8px #05966922',
                            letterSpacing: 1,
                        }}
                    >
                        {getRandomHourlySalary()}
                    </div>
                </a>
            ))}
        </div>
    </section>
);

export default JobPostingSection;