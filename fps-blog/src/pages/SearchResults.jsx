import React from 'react';

const SearchResults = () => {
  return (
    <div className="search-results">
      <h1>Search Results</h1>
      <div className="search-filters">
        <input type="text" placeholder="Search..." />
        <select>
          <option value="all">All Categories</option>
          <option value="articles">Articles</option>
          <option value="games">Games</option>
        </select>
      </div>
      <div className="results-container">
        <p className="results-count">Showing X results for "search term"</p>
        <div className="results-list">
          {/* Search results will be mapped here */}
        </div>
      </div>
    </div>
  );
};

export default SearchResults; 