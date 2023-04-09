import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Hledat film..."
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        Hledat
      </button>
    </form>
  );
};

export default SearchBar;
