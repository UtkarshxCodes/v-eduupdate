import React, { useState, useMemo } from 'react';
import { jobs } from '../../data/jobs';
import JobCard from '../../components/student/JobCard';
import FilterBar from '../../components/student/FilterBar';

const JobsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Filter jobs based on category
  const filteredJobs = useMemo(() => {
    if (activeFilter === 'All') {
      return jobs;
    }
    return jobs.filter((job) => job.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Latest Jobs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your next career opportunity in <span className="font-semibold text-blue-600">Data Science</span> and <span className="font-semibold text-blue-600">Cybersecurity</span>. 30+ positions from top companies.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* Job Count */}
        <div className="mb-6 text-center">
          <p className="text-sm font-medium text-gray-600">
            Showing <span className="font-bold text-blue-600">{filteredJobs.length}</span> jobs
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isExpanded={expandedJobId === job.id}
                onToggle={() =>
                  setExpandedJobId(expandedJobId === job.id ? null : job.id)
                }
              />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-600 font-medium">No jobs found for this category.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            More positions coming soon. Check back regularly for new opportunities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
