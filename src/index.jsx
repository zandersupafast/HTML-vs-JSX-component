// index.jsx — THE ENTRY POINT
// This file runs once when the app starts. Its only job is to connect React to the HTML page.
// Think of it as the ignition key — it starts the engine, but the engine itself is App.jsx.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';          // Imports our root component
import './index.css';             // Imports global styles (resets, body, fonts)

// Find the <div id="root"> in index.html and render our App component inside it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
