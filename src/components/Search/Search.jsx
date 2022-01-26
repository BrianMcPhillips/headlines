import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, handleSearch, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-control">Search</label>
      <input 
        type="text"
        id="text-control"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button data-testid="search-button">Find Articles</button>
    </form>
  </div>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Search;
