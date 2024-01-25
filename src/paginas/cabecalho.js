// Cabecalho.js
import React from "react";
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
      <header className="App-header">
        <Link to="/">
        <h4>Studio Barbie</h4>
        </Link>

        <Link to="/sobre">
          <button className="botao">+</button>
        </Link>

        <Link to="/sobreFilme">
        <button className="botao">🎬️</button>
        </Link>
      </header>
  );
}

export default Cabecalho;
