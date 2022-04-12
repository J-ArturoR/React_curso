import React,{Component} from "react";

class Componente extends Component{
    render(){
        let receta={
            nombre:'Pizza',
            ingredientes:['Tomate','Masa','Jamon'],
            calorias:400
        };
        return (
            
            <React.Fragment>
                <div className="miComponente">
            <h1>H0la esta es una receta de : {receta.nombre} </h1>
            <h2>{'Ingredientes:' + receta.ingredientes + ' | '+'Calorias:' + receta.calorias}</h2>    
            <ol>
            {
                receta.ingredientes.map((ingrediente,i)=>{
                    return(
                        <li key={i}>
                            {ingrediente}
                        </li>
                    );
                })
            }
            </ol>
            <hr/>
            </div>
            </React.Fragment>
        );
    }
}
//exportar componente
export default Componente;