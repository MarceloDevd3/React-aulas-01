import React from 'react'
import Filho from './filho'

export default props => 

 <div>
     <Filho sobrenome={props.sobrenome}>Thiago</Filho>
     <Filho {...props} >Marcos</Filho>
     <Filho sobrenome="monke">Luffy</Filho>
 </div>