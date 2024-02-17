import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import "./styles/main.css";
import Header from "./components/header/header.jsx";
import Example from "./components/example/Example";
import States from "./components/states/States.jsx";


function App() {
  return (
    <HashRouter>
      <div className="container">
        <Header />
        <nav>
          <ul className="toolbar">
            <li><Link to="/example">Switch to Example</Link></li>
            <li><Link to="/states">Switch to States</Link></li>
          </ul>
        </nav>
        <hr />
        <Route path="/example" component={Example} />
        <Route path="/states" component={States} />
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('reactapp')
);
