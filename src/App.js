import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';




function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Los Angeles Lakers',
      cor: '#c5bc5e'
    },
    {
      id: uuidv4(),
      nome: 'Boston Celtics',
      cor: '#6bb96a'
    },
    {
      id: uuidv4(),
      nome: 'Chicago Bulls',
      cor: '#a02f27'
    },
    {
      id: uuidv4(),
      nome: 'Golden State Warriors',
      cor: '#3e65da'
    },
    {
      id: uuidv4(),
      nome: 'New York Knicks',
      cor: '#e27e2c'
    },
    {
      id: uuidv4(),
      nome: 'Portland Trail Blazers',
      cor: '#ffffff'
    },
    {
      id: uuidv4(),
      nome: 'Milwaukee Bucks',
      cor: '#537b51'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lebron James',
      cargo: 'Atacante',
      imagem: '/imagens/lakers/james.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Antony Davis',
      cargo: 'Atacante',
      imagem: '/imagens/lakers/davis.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Austin Reaves',
      cargo: 'Guarda',
      imagem: '/imagens/lakers/reaves.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Dangelo Russel',
      cargo: 'Guarda',
      imagem: '/imagens/lakers/russel.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gabe Vincent',
      cargo: 'Guarda',
      imagem: '/imagens/lakers/vincent.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jrue Holiday',
      cargo: 'Guarda',
      imagem: '/imagens/celtics/holiday.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jayson Tatum',
      cargo: 'Atacante',
      imagem: '/imagens/celtics/tatum.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Al Horford',
      cargo: 'Pivô',
      imagem: '/imagens/celtics/horford.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Derrick White',
      cargo: 'Armador',
      imagem: '/imagens/celtics/white.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jaylen Brown',
      cargo: 'Ala-armador',
      imagem: '/imagens/celtics/brown.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lonzo Ball',
      cargo: 'Armador',
      imagem: '/imagens/bulls/ball.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Demar Derozan',
      cargo: 'Ala',
      imagem: '/imagens/bulls/derozan.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Zach Lavine',
      cargo: 'Ala-armador',
      imagem: '/imagens/bulls/lavine.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Nikola Vucevic',
      cargo: 'Pivô',
      imagem: '/imagens/bulls/vucevic.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Coby White',
      cargo: 'Armador',
      imagem: '/imagens/bulls/white.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Stephen Curry',
      cargo: 'Armador',
      imagem: '/imagens/warrior/curry.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Draymond Green',
      cargo: 'Ala-pivô',
      imagem: '/imagens/warrior/green.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Chris Paul',
      cargo: 'Armador',
      imagem: '/imagens/warrior/paul.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Klay Thompson',
      cargo: 'Ala-armador',
      imagem: '/imagens/warrior/thompson.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Andrew Wiggins',
      cargo: 'Ala',
      imagem: '/imagens/warrior/wiggins.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Og Anunoby',
      cargo: 'Ala',
      imagem: '/imagens/knicks/anunoby.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Bojan Bogdanovic',
      cargo: 'Ala',
      imagem: '/imagens/knicks/bog.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jalen Brunson',
      cargo: 'Armador',
      imagem: '/imagens/knicks/brunson.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Julius Randle',
      cargo: 'Ala-pivô',
      imagem: '/imagens/knicks/randle.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mitchell Robinson',
      cargo: 'Pivô',
      imagem: '/imagens/knicks/robinson.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Deandre Ayton',
      cargo: 'Pivô',
      imagem: '/imagens/blazers/ayton.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Malcolm Brogdon',
      cargo: 'Armador',
      imagem: '/imagens/blazers/brogdon.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jerami Grant',
      cargo: 'Ala',
      imagem: '/imagens/blazers/grant.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Anfernee Simons',
      cargo: 'Ala-armador',
      imagem: '/imagens/blazers/simons.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Robert Williams III',
      cargo: 'Pivô',
      imagem: '/imagens/blazers/williams.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Damian Lillard',
      cargo: 'Armador',
      imagem: '/imagens/bucks/lillard.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Giannis Antetokounmpo',
      cargo: 'Ala-pivô',
      imagem: '/imagens/bucks/giannis.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Brook Lopez',
      cargo: 'Pivô',
      imagem: '/imagens/bucks/lopez.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Khris Middleton',
      cargo: 'Ala',
      imagem: '/imagens/bucks/middleton.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Bobby Portis',
      cargo: 'Atacante',
      imagem: '/imagens/bucks/Portis.png',
      time: times[6].nome
    },

  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))

  }

  return (
    <div className="fristdiv" hex-to-rgba='0.10' >
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
      />
      <section className="times">
        <h1>Times</h1>
        {times.map((time, indice) =>
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
