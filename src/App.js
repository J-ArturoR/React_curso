import logo from './logo.svg';
import './assets/css/App.css';
//importar componente
import Componente from './components/componente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Pruebas from './components/Pruebas';
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="center">
        <Pruebas/>
        <Sidebar />

      </div> 
      <div className='clearfix'></div>
        <Footer />
      
      
    </div>
   
  );
}

export default App;
