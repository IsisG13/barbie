import "../App.css";
import Cabecalho from "./cabecalho";
import BarbieKen from "./imagem/barbie&Ken.png";
import BarbieFilme from "./imagem/barbieFilme.png";

function SobreFilme() {
  return (
    <div className="App">
      <Cabecalho />

      <div className="filme-banner"></div>

      <main className="filme-container">
        <h2>Sobre o filme</h2>
        <p>
          Barbie é um filme estadunidense dos gêneros comédia e fantasia
          dirigido por Greta Gerwig, com o roteiro co-escrito com Noah Baumbach.
          O filme é baseado na franquia de bonecas Barbie, produzida pela
          empresa multinacional Mattel, sendo o primeiro filme da franquia em
          formato de live-action depois de uma série de filmes em animação
          diretos para digital video disc e séries de televisão. Estrelado por
          Margot Robbie e Ryan Gosling como Barbie e Ken, respectivamente, o
          filme ainda apresenta um elenco diverso.
        </p>

        <p>
          O desenvolvimento do filme começou originalmente em 2009 na Universal
          Pictures e depois passou para a Sony Pictures. Após várias mudanças de
          escritores e a escolha de duas atrizes diferentes para interpretar o
          personagem-título, o contrato com a Sony expirou e os direitos foram
          transferidos para a Warner Bros. Pictures. Robbie foi escalada em 2019
          e também atua como produtora pela LuckyChap Entertainment ao lado da
          Mattel Films e da Heyday Films. Gerwig foi confirmada como diretora e
          coroteirista com Baumbach em 2021. As filmagens começaram em março de
          2022 na Warner Bros. Studios, Leavesden, na Inglaterra. O
          desenvolvimento do filme começou originalmente em 2009 na Universal
          Pictures e depois passou para a Sony Pictures. Após várias mudanças de
          escritores e a escolha de duas atrizes diferentes para interpretar o
          personagem-título, o contrato com a Sony expirou e os direitos foram
          transferidos para a Warner Bros. Pictures. Robbie foi escalada em 2019
          e também atua como produtora pela LuckyChap Entertainment ao lado da
          Mattel Films e da Heyday Films. Gerwig foi confirmada como diretora e
          coroteirista com Baumbach em 2021. As filmagens começaram em março de
          2022 na Warner Bros. Studios, Leavesden, na Inglaterra.
        </p>

        <div className="imagens">
          <img src={BarbieFilme} alt="Barbie na Barbielândia" />
          <img src={BarbieKen} alt="Barbie e Ken" />
        </div>

        <p>
          A Barbie estereotipada ("Barbie") e uma grande variedade de colegas
          Barbies residem na Barbielândia, uma sociedade matriarcal onde todas
          as mulheres são autoconfiantes, autossuficientes e bem-sucedidas.
          Enquanto suas contrapartes Ken passam seus dias em atividades
          recreativas na praia, as Barbies ocupam todos os cargos importantes,
          como médicos, advogados e políticos. O Ken praiano ("Ken"), namorado
          de Barbie, só fica feliz quando está com Barbie e busca um
          relacionamento mais próximo, mas Barbie o rejeita em favor da
          independência e das amizades femininas.
        </p>

        <p>
          Durante uma festa de dança, Barbie de repente se preocupa com a
          mortalidade. No dia seguinte, ela descobre que não consegue mais
          completar sua rotina habitual e descobre que seus pés ficaram chatos e
          ela tem celulite. Barbie estranha, uma pária sábia, mas desfigurada,
          diz a ela que para curar sua doença ela deve viajar para o mundo real
          e encontrar a criança brincando com ela. Em seu caminho para o mundo
          real, Barbie encontra Ken escondido em seu conversível e
          relutantemente permite que ele se junte a ela.
        </p>
      </main>
    </div>
  );
}

export default SobreFilme;
