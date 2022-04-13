import React,{Component} from "react";
import Componente from "./componente";
import Peliculas from "./Peliculas";
class Pruebas extends Component{
    render(){
        return(
            <section id='content'>

            <p>
              Perfecto termine el primer modulo .
            </p>
          <section className="componentes"> 
            <Componente/>
            <Peliculas/>
          </section>
  
          </section>
        );
    }
}

export default Pruebas;