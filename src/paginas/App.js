import "../App.css";
import Cabecalho from "./cabecalho";
// import Video from "./imagem/BRBIE2023.mp4"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Cabecalho />
      {/* </header> */}

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
            <a>
              <button className="botao1"> ▶ Assistir agora</button>
            </a>
            {"  "} {"  "}
            <a>
              <button className="botao2">Assistir ao trailer</button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
