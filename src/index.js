import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/bootstrap.min.css';
import './assets/css/typography.css';
import './assets/css/style.css';
import './assets/css/style-rtl.css';
import './assets/css/responsive.css';
// Import JavaScript files
import './assets/js/custom.js'; // Example for a custom JS file

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);