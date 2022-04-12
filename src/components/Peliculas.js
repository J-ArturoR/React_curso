import React,{Component} from "react";
import MensajeEstatico from "./MensajeStatico";

class Peliculas extends Component{
    render(){
        return(
            
            <div id="Mensaje">
            <h4>Soy El componente de Peliculas.</h4>
            <MensajeEstatico/>
            </div>
        );
    }
    
}
export default Peliculas;
