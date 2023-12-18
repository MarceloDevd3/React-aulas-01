import React, {useState}  from "react"

export default (props) => {

    const [valor, setValor] = useState(Array(props.aleatrorio).fill(0))

    function gerarNumeroNaoContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero)  ? gerarNumeroNaoContido(array)  : novoNumero
     }

    function gerarNum() {
        const novoArr = Array(props.aleatrorio)
        .fill(0)
        .reduce(a => [...a,gerarNumeroNaoContido(a)], [])
        .sort((a, b) => a - b)

       setValor([novoArr])
    }
     return  (
        <>
           <h3>Mega</h3>
           <h4>{valor.join(' ')}</h4>
           <button onClick={gerarNum} >Gerar Numeros</button>
        </>
     )
}