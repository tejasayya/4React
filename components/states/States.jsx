import React, { useState } from 'react';
import './States.css';

function States() {
  console.log('window.models.states', window.models.states);
  const states = window.models.states(); 

  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  let filteredStates = states.filter(state => state.toLowerCase().includes(filter));
  filteredStates.sort((a, b) => a.localeCompare(b));

  const statesList = filteredStates.map((state, index) => (
    <li key={index}>{state}</li>
  ));

  return (
    <div>
      <label htmlFor="filter">Input:</label>
      <input type="text" id="filter" name="filter" value={filter} onChange={handleFilterChange}/>
      <ul>
        {statesList}
      </ul>
    </div>
  );
}

export default States;
