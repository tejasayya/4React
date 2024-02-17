import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header.jsx';

import States from './components/states/States.jsx';

ReactDOM.render(
  <>
    <Header></Header>
    <States></States>
  </>,
  document.getElementById('reactapp'),
);
