import React, { Component } from 'react';

const SearchBar = ({ onInputChange }) => (
  <div className="search-bar">
    <input onChange={event => onInputChange(event.target.value)} />
  </div>
);

export default SearchBar;
