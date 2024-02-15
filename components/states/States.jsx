import React, { useState } from 'react';
import './States.css';

function States() {
  console.log('window.models.states', window.models.states);
  const states = window.models.states(); 

  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  let filteredStates = states.filter(
    state => state.toLowerCase().includes(filter));
  filteredStates.sort((a, b) => a.localeCompare(b));

  const statesListItems = filteredStates.map((state, index) => (
    <li key={index} className="states-list-item">{state}</li>
  ));

  let statesList = <ul className="states-list">{statesListItems}</ul>;
  if(filteredStates.length === 0) {
    statesList = <p>No matches found</p>;
  }

  return (
    <div className="states-container">
      <div className="states-input-container">
        <label htmlFor="filter" className="states-input-label">Input:</label>
        <input type="text" id="filter" name="filter" value={filter} onChange={handleFilterChange} className="states-input" />
        <p className="states-substring">Substring: {filter}</p>
      </div>
      {statesList}
    </div>
  );
}

export default States;
