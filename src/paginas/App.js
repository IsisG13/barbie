import { Link } from "react-router-dom";
import "../App.css";
import Cabecalho from "./cabecalho";
import { useState } from "react";
import Trailer from "./imagem/trailer.mp4";

function App() {
  const [trailerVisible, setTrailerVisible] = useState(false);

  const handleWatchTrailer = () => {
    setTrailerVisible(true);
  };

  return (
    <div className="App">
      <Cabecalho />
      <div className="App-banner"></div>

      <main className="App-conteudo">
        <div className="main-conteudo">
          <div className="nomes">
            <p>Greta Gerwig</p>
            <h1>Barbie</h1>
          </div>
          <p className="descricao">
            Depois de ser expulsa da Barbieland por ser uma boneca de aparência
            menos do que perfeita, Barbie parte para o mundo humano em busca da
            verdadeira felicidade.
          </p>
          <div className="botoes-conteudo">
            <a href="https://redecanais.la/barbie-legendado-2023-1080p_6d269c894.html" type="video/mp4" target="_blank">
              <button className="botao1"> ▶ Assistir agora</button>
            </a>
            {"  "} {"  "}
            <button className="botao2" onClick={handleWatchTrailer}>
              Assistir ao trailer
            </button>

          </div>
          {trailerVisible && (
            <div className="trailer-video">
              <video controls width="600" height="400">
                <source src={Trailer} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
