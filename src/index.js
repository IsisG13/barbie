// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rotas from './rotas';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas/>
  </React.StrictMode>
);

reportWebVitals();
