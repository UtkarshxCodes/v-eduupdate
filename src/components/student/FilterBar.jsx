import React from 'react';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const filters = ['All', 'Cybersecurity', 'Data'];

  return (
    <div className="flex gap-3 justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
