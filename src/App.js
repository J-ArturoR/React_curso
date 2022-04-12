import logo from './logo.svg';
import './assets/css/App.css';
//importar componente
//import Componente from './components/componente';
//import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider />
      <Sidebar/>
      <div className="center">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     
      </div>
    </div>
  );
}

export default App;
