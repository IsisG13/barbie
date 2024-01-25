// Rotas.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './paginas/App';
import Sobre from './paginas/Sobre';
import SobreFilme from './paginas/SobreFilme';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/sobreFilme" element={<SobreFilme />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
