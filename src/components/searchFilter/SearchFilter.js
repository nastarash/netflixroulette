import React from 'react';
import SearchField from '../searchField/SearchField';
import SearchButton from '../searchButton/SearchButton';

function SearchFilter() {
  return (
    <form>
      <SearchField />
      <SearchButton />
      <p>SEARCH BY</p>
      <div>
        <input
          id="toggle-on"
          className="toggle toggle-left"
          name="toggle"
          value="false"
          type="radio"
          checked
        />
        <label htmlFor="toggle-on" className="btn">
          Title
        </label>
        <input
          id="toggle-off"
          className="toggle toggle-right"
          name="toggle"
          value="true"
          type="radio"
        />
        <label htmlFor="toggle-off" className="btn">
          Genre
        </label>
      </div>
    </form>
  );
}

export default SearchFilter;
