import React, {useState} from 'react';
import Sub from './sub'

export default (props) =>  {


    const [num ,setNum]= useState(0)
    const [text ,setText]= useState('valor')

    function quandoClicar(valorGerado, texto) {
     setNum(valorGerado)
     setText(texto)
    } 


    return (
        <div>
        <h4>{text} : {num}</h4>
        <Sub onClicar={quandoClicar} >Monkey</Sub>
    </div>
     )
    
}






