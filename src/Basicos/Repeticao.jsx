import React from 'react'


import Produtos from '../data/Produtors' 

export default props => {


    function getProdutorsListItem() {
        return Produtos.map(prod => {
            return <li key={prod.id}>
            {prod.id} 
             R$ {prod.preco}</li> 
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
              {getProdutorsListItem()}
            </ul>
        </div>
    )
}