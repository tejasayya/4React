import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './styles/main.css';
import Header from './components/header/header.jsx';
import Example from './components/example/Example.jsx';
import States from './components/states/States.jsx';


function Toggle() {
  const [isToggleOn, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!isToggleOn);
  };

  return (
    <div className="container">
      <Header />
      <button onClick={handleClick}>
        {isToggleOn ? 'Switch to States' : 'Switch to Example'}
      </button>
      <hr />
      {isToggleOn ? <Example /> : <States />}
    </div>
  );
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('reactapp')
);