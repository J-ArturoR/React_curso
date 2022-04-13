import { render } from "@testing-library/react";
import React,{Component} from "react";

class Slider extends Component{
    render(){
        return(
            <div id="slider" className="slider-big">
                <h1>Estoy Estudiando React y esta facil de aprender </h1>
                <a href="#" className="btn-white">Practica </a>
            </div>
        );
    }
}
export default Slider;