import * as React from 'react';
import { useState } from 'react';
import './contador.css';

function GerarContador() {
  const [contador, setContador] = useState(0);
  return (
    <div class='container'>
      <p id='valorTexto'>valor: {contador}</p>
      <div class='botoes'>
        <button onClick={()=>{setContador(contador-1)}}>subtrair</button>
        <button onClick={()=>{setContador(contador-contador)}}>reiniciar</button>
        <button onClick={()=>{setContador(contador+1)}}>adicionar</button>
      </div>
    </div>
  )
}

export default function Contador(){
  return <GerarContador />
}