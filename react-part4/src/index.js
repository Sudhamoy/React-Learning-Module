import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



/* Here App.js(parent component) gets mounted inside root(DOM) while we render a browser page.(makes the value of states and props to "default" and that gets mounted inside the DOM when converting the JSX)
e.g: here App.js and Count.jsx components get mounted in the DOM*/

