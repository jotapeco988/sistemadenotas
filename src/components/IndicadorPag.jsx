import React, { useState } from "react";

export default function IndicadorPag() {

function Limpiar(){
  setidentificacion("")
  setobservacion("")
  setdefinitiva("")
  setnombre("")
  setasginatura("")
  setnota1("")
  setnota2("")
  setnota3("")

}

  const [definitiva, setdefinitiva]= useState();
  const [observacion, setobservacion]= useState();
  const [identifacion, setidentificacion]= useState();
  const [nombre, setnombre]= useState();
  const [asignatura, setasginatura]= useState();
  const [nota1, setnota1]= useState();
  const [nota2, setnota2]= useState();
  const [nota3, setnota3]= useState();

const handleSubmit = (event) =>{
  event.preventDefault();
  if(identifacion == "" || nombre == "" || asignatura == "" || nota1 == "" || nota2 == "" || nota3 == ""){
    alert("todos los campos son requeridos");
  }
  else{
    if(parseFloat(nota1)>5|| parseFloat(nota2)>5 ||parseFloat(nota3)>5){
      alert("las notas deben ser menor o igual a 5 y mahyor o igual a 0")
    }
    else{
      let valdefinitiva = Math.round ((parseFloat(nota1)*0.3)+(parseFloat(nota2)*0.35)+(parseFloat(nota3)*0.35));
      setdefinitiva(valdefinitiva)
      if(valdefinitiva>=0 && valdefinitiva<2){
        setobservacion("pierde");
      }
      else if (valdefinitiva>=2 && valdefinitiva <3){
        setobservacion("habilita")

      }
      else{
        setobservacion("gana")
      }
    }
  }

}

  return (

    <div className="container">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={ handleSubmit }>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Identificacion
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="identificacion"
              type="text"
              placeholder="identificacion"
              required
              onChange={e=>setidentificacion(e.target.value)}
              value={identifacion}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Nombre
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              type="text"
              placeholder="Nombre"
              requiered
              onChange={v=>setnombre(v.target.value)}
              value={nombre}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Asignatura
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="asignatura"
              type="text"
              placeholder="asignatura"
              onChange={c=>setasginatura(c.target.value)}
              value={asignatura}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Momento 1
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nota1"
              type="number"
              placeholder="nota1"
              onChange={x=>setnota1(x.target.value)}
              value={nota1}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Momento 2
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nota2"
              type="number"
              placeholder="nota2"
              onChange={z=>setnota2(z.target.value)}
              value={nota2}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Momento 3
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nota3"
              type="number"
              placeholder="nota3"
              onChange={q=>setnota3(q.target.value)}
              value={nota3}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              definitiva
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="definitiva"
              type="number"
              onChange={r=>setdefinitiva(r.target.value)}
              value={definitiva}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              observacion
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="observacion"
              type="text"
              placeholder="observacion"
              onChange={a=>setobservacion(a.target.value)}
              value ={observacion}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              role="tab"
              id="btn_buscar"
              class="bg-indigo-700 py-3 px-5 flex items-center justify-center text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-800 rounded "
            >
              Calcular
            </button>
            <button
              role="tab"
              id="btn_limpiar"
              class="bg-indigo-700 py-3 px-5 flex items-center justify-center text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-800 rounded "
              onClick={Limpiar}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

