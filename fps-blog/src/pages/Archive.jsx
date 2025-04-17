import React from 'react';

const Archive = () => {
  return (
    <div className="archive">
      <h1>Archive</h1>
      <div className="archive-filters">
        <select>
          <option value="">Select Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
        <select>
          <option value="">Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          {/* ... other months ... */}
        </select>
      </div>
      <div className="archive-content">
        <div className="yearly-archive">
          <h2>2024</h2>
          <div className="monthly-archive">
            {/* Monthly articles will be mapped here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive; 