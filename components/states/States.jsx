import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.models.states', window.models.states);
    const states = window.models.states(); 
    console.log(states);
  }

  render() {
    return (
      <div>
        <label htmlFor="filter">Input:</label>
        <input type="text" id="filter" name="filter"/>
        <ul>
          {window.models.states().map((state, index) => (
            <li key={index}>{state}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default States;
