import './App.css';
import CardsPeople from './Component/CardsPeople';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calendario Local!</h1>
        <hr></hr>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ2ceIQu_eT75Btgc0syTczfhK9jTIyse5PN1N-07nSaK3uMH94x9vynVi_p3zmr0v5YxJb2vTwMu5z/embed?start=false&loop=true&delayms=30000" width="960" height="569" allowFullScreen={true} webkitallowfullscreen="true" title='calendario'></iframe>
        <h3>Sobre nosotros:</h3>
        <p>
          Bienvenidos a nuestro sitio web de calendario de talleres y clases de apoyo gratuitas. 
          Nos complace ofrecer una amplia gama de actividades educativas para personas de todas 
          las edades e intereses. En nuestro calendario dinámico, encontrarás una variedad de talleres 
          y clases de apoyo emocionantes programados para el próximo mes. Nuestro espacio es un lugar
           acogedor y creativo diseñado para fomentar el aprendizaje y la colaboración.
        </p>
          <h4>Nuestros Profes!:</h4>
        <CardsPeople/>
      </header>
    </div>
  );
}

export default App;
