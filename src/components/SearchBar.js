import React from 'react';

const SearchBar = ({sortValue, onSort, onFilter}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sortGroup" value="Alphabetically" checked={sortValue === "Alphabetically"} onChange={onSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sortGroup" value="Price" checked={sortValue === "Price"} onChange={onSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={onFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  )
}


export default SearchBar;
