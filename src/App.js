import './App.css';
import CardsPeople from './Component/CardsPeople.jsx';
import Horario from './Component/Horario.jsx';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className="App">
          <NavBar/>
          <center>
      <header className="App-header">
          <h1>Calendario</h1>
          <Horario></Horario>
          <h3>Sobre nosotros:</h3>
          <p>
            Bienvenidos a nuestro sitio web del calendario de talleres y clases de apoyo gratuitas. 
            Nos complace ofrecer una amplia gama de actividades educativas para personas de todas 
            las edades e intereses. En nuestro calendario dinámico, encontrarás una variedad de talleres 
            y clases de apoyo emocionantes programados para el próximo mes. Nuestro espacio es un lugar
             acogedor y creativo diseñado para fomentar el aprendizaje y la colaboración.
          </p>
            <h2>Nuestros Profes!:</h2>
          <CardsPeople/>
      </header>
          </center>
    </div>
  );
}

export default App;
