import './App.css';
import CardsPeople from './Component/CardsPeople.jsx';
import Horario from './Component/Horario.jsx';
import NavBar from './Component/NavBar';
import local from './local.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
          <h1>Calendario</h1>
          <Horario></Horario>
          <center>
            <hr/>
          <div id='containerSobreNosotros'>
            <div>
          <h3 id='sobreNosotros'>Sobre nosotros:</h3>
          <p>
            Bienvenidos a nuestro sitio web del calendario de talleres y clases de apoyo gratuitas. 
            Nos complace ofrecer una amplia gama de actividades educativas para personas de todas 
            las edades e intereses. En nuestro calendario dinámico, encontrarás una variedad de talleres 
            y clases de apoyo emocionantes programados para el próximo mes. Nuestro espacio es un lugar
             acogedor y creativo diseñado para fomentar el aprendizaje y la colaboración.
          </p>
            </div>
          <img src={local} alt='local'/>
          </div>
            <h2 id='nuestrosProfes'>Nuestros Profes!:</h2>
          <CardsPeople/>
            <h2 id='informacion'>Informacion</h2>
            
          </center>
      </header>
    </div>
  );
}

export default App;
