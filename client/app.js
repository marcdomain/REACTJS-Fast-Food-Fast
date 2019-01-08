import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

const App = () => (
  <div>
    <h1 className="app">Hope you work fine</h1>
    <p>Yeah! I think I'm good to go</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
