import "../App.css";
import Cabecalho from "./cabecalho";
import Barbie3 from "./imagem/boneca3.png";
import Barbie1 from "./imagem/boneca1.png";
import Barbie2 from "./imagem/boneca2.png";

function Sobre() {
  return (
    <div className="App">
      {/* <header className="sobre-header"> */}
      <Cabecalho />
      {/* </header> */}

      <div className="banner-sobre"></div>

      <main className="sobre-conteudo">
        <h2>Barbie - Origem</h2>
        <p>
          Barbie é uma boneca e personagem fictícia fabricada pela empresa
          estadunidense de brinquedos Mattel, Inc. e lançada em 9 de março de
          1959. A empresária Ruth Handler é creditada como a criadora da boneca
          usando uma boneca alemã chamada Bild Lilli como sua inspiração. Ruth
          Handler observou sua filha Barbara brincar com bonecas de papel e
          percebeu que ela costumava gostar de dar a elas papéis de adultos. Na
          época, a maioria das bonecas infantis eram representações de bebês.
          Percebendo que poderia haver um nicho de mercado não explorado,
          Handler sugeriu a ideia de uma boneca com corpo adulto para seu marido
          Elliot, co-fundador da empresa de brinquedos Mattel. No início, ele
          não ficou entusiasmado com a ideia, assim como os diretores da Mattel.
        </p>
        <p>
          Durante uma viagem à Alemanha em 1956 com seus filhos Barbara e
          Kenneth, Ruth Handler se deparou com uma boneca de brinquedo alemã
          chamada Bild Lilli. A boneca de figura adulta era exatamente o que
          Handler tinha em mente, então ela comprou três delas. Ela deu uma para
          a filha e levou as outras de volta para a Mattel. A boneca Lilli foi
          baseada em uma personagem popular que aparece em uma história em
          quadrinhos desenhada por Reinhard Beuthin para o jornal Bild. Lilli
          era uma loira sensual, uma garota trabalhadora que sabia o que queria
          e não hesitava em usar homens para consegui-lo. A boneca Lilli foi
          vendida pela primeira vez na Alemanha em 1955 e, embora tenha sido
          inicialmente vendida para adultos, tornou-se popular entre as crianças
          que gostavam de vesti-la com roupas disponíveis separadamente.
        </p>
        <img src={Barbie3} alt="Beneca Barbie" />
        <br /> <br />
        <h2>Barbie - Atual</h2>
        <p>
          O nome completo da Barbie é Barbara Millicent Roberts . Em uma série
          de romances publicados pela Random House na década de 1960, os nomes
          de seus pais são George e Margaret Roberts, da cidade fictícia de
          Willows, Wisconsin. Nos romances da Random House, Barbie frequentou a
          Willows High School; enquanto nos livros Generation Girl, publicados
          pela Golden Books em 1999, ela frequentou a fictícia Manhattan
          International High School na cidade de Nova York (baseada na
          Stuyvesant High School da vida real). Ela tem um relacionamento
          romântico intermitente com seu então namorado Ken (nome completo
          "Kenneth Sean Carson"), que apareceu pela primeira vez em 1961. Um
          comunicado de imprensa da Mattel em fevereiro de 2004 anunciou que
          Barbie e Ken haviam decidido se separar, mas em fevereiro de 2006,
          eles esperavam reacender seu relacionamento depois que Ken passou por
          uma repaginação. Em 2011, a Mattel lançou uma campanha para Ken
          reconquistar a afeição de Barbie. A dupla se reuniu oficialmente no
          Dia dos Namorados de 2011
        </p>
        <div className="imagens">
          <img className="barbie-boneca" src={Barbie1} alt="Boneca barbie" />
          <img src={Barbie2} alt="Boneca barbie" />
        </div>
      </main>
    </div>
  );
}

export default Sobre;
