import React from 'react';
import { FaStar, FaChevronDown } from 'react-icons/fa';

const JobCard = ({ job, isExpanded, onToggle }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{
        maxHeight: isExpanded ? '600px' : '180px',
      }}
    >
      {/* Header - Always Visible */}
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">{job.role}</h3>
            <p className="text-sm text-gray-600">{job.company}</p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg">
            <FaStar className="text-yellow-400" size={14} />
            <span className="text-sm font-semibold text-gray-800">{job.rating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
          <span>📍 {job.location}</span>
          <span>💰 {job.salary}</span>
          <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md font-medium">
            {job.type}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700 line-clamp-2">{job.description}</p>
          <FaChevronDown
            size={18}
            className={`text-gray-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 overflow-y-auto max-h-96">
          {/* Description */}
          <div className="mb-5">
            <h4 className="font-semibold text-gray-900 mb-2">About this role</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-5">
            <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mb-5">
            <h4 className="font-semibold text-gray-900 mb-2">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4">
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export default JobCard;
