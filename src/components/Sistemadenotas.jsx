import React from "react";
import Inputs from "./Inputs";
const Sistemadenotas = () => {
  
  const Calcular =()=> {
   
    const nota1= document.getElementById("Nota 1");
    const nota2= document.getElementById("Nota 2");
    const nota3= document.getElementById("Nota 3");

    const definitiva = document.getElementById("definitiva")
    definitiva.value = (parseFloat(nota1.value)+parseFloat(nota2.value)+parseFloat(nota3.value))/3
    const observacion = document.getElementById("Observacion")

    if (definitiva.value >=1 && definitiva.value <=2){
      observacion.value = "pierde"
    }
    else if (definitiva.value >=2.1 && definitiva.value <= 3){
      observacion.value = "habilita"
    }
    else if (definitiva.value >=3.1 && definitiva.value <= 5){
      observacion.value = "gana"
    }
  }




  const LimpiarCampos =() =>{

   const allInputs= document.querySelectorAll('input');
    allInputs.forEach( input => input.value = "");
  }  

  return (
    
    <div className="flex justify-center bg-[#c41111] items-center">
      <div className="w-full max-w-[420px]">
        <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <Inputs name="identificación" type="text"></Inputs>
          <Inputs name="nombres" type="text"></Inputs>
          <Inputs name="asignatura" type="text"></Inputs>
          <Inputs  name="Nota 1" type="number"></Inputs>
          <Inputs  name="Nota 2" type="number"></Inputs>
          <Inputs  name="Nota 3" type="number"></Inputs>
          <Inputs  name="definitiva" type="number" disabled={true}></Inputs>
          <Inputs  name="Observacion" type="text" disabled={true}></Inputs>
          
          <div className="flex items-center gap-2">
            <button
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" onClick={Calcular}
            >
              Calcular
            </button>
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button" onClick={LimpiarCampos}>
              limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sistemadenotas;