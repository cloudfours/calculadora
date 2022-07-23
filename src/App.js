import logo from "./logo.svg";
import "./App.css";
import freecodeCamp from "./img/FreeCodeCamp_logo.svg.png";
import Boton from "./components/boton.js";
import Pantalla from "./components/pantalla.js";
import BotonClear from "./components/botonClear.js";
import { useState } from "react";
import {evaluate} from 'mathjs'

function App() {
  const [input, setInput] = useState(" ");
  const agregarInput = (val) => {
    setInput(input + val);
  };
  const calculaResultado = ()=>{
   if(input){
    setInput(evaluate(input))
   }else{
    alert('por favor ingrese valores')
   }
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freecodeCamp}
          className="freecodecamp-log"
          alt="logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClck={agregarInput}>1</Boton>
          <Boton manejarClck={agregarInput}>2</Boton>
          <Boton manejarClck={agregarInput}>3</Boton>
          <Boton manejarClck={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClck={agregarInput}>4</Boton>
          <Boton manejarClck={agregarInput}>5</Boton>
          <Boton manejarClck={agregarInput}>6</Boton>
          <Boton manejarClck={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClck={agregarInput}>7</Boton>
          <Boton manejarClck={agregarInput}>8</Boton>
          <Boton manejarClck={agregarInput}>9</Boton>
          <Boton manejarClck={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClck={calculaResultado}>=</Boton>
          <Boton manejarClck={agregarInput}>0</Boton>
          <Boton manejarClck={agregarInput}>.</Boton>
          <Boton manejarClck={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
