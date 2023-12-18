import React from 'react'

export default props => 

// props e somente leitura!!!
// props.titulo = 'Outro titulo';
<>
   <h3>{props.title}</h3>
   <p>{props.subtitle}</p> 
   <p>{Array(10).fill(1)} </p>
</>