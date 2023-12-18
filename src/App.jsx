import React from 'react'
import './App.css'


import Primeiro from '../src/Basicos/Primeiro'
import ComParamentro from '../src/Basicos/ComParamentros'
import ComFilhos from '../src/Basicos/ComFilho'
import Card from './componets/leyout/Card';
import Repeticao from '../src/Basicos/Repeticao'
import Condicional from '../src/Basicos/Condicional'
import CondicionalComIf from '../src/Basicos/CondicionalComIf'
import Pai from './direta/Pai'
import Super from './indireta/super'
import Contador from './contador/contador'
import Input from './form/input'
import Mega from './mega/Mega'



export default (props) =>

    <div className="App">
          <h1>Fundamentos React</h1>


         <div className='Cards'>


         <Card title="#11 - MEGA-SENA V1" color={'black'}>
            <Mega aleatrorio={6}></Mega> 
          </Card>


         <Card title="#10 - contador" color={'red'}>
             <Contador></Contador> 
          </Card>

         <Card title="#09 - Input" color={'#2dc7ea'}>
             <Input></Input> 
          </Card>

         <Card title="#08 - Comunicação indireta" color={'#000'}>
             <Super></Super>  
          </Card>
         
         <Card title="#07 - Comunicação direta" color={'purple'}>
             <Pai sobrenome="Silva"></Pai>  
          </Card>
    
         <Card title="#06 - Condicional v2" color={'#f4b722'}>
             <CondicionalComIf numero={10}></CondicionalComIf>  
          </Card>

         <Card title="#05 - Condicional v1" color={'#dd36c0'}>
             <Condicional numero={11}></Condicional>  
          </Card>

          <Card title="#04 - Repetição"  color={'#2dc7ea'}>
             <Repeticao>
                
             </Repeticao>  
          </Card>

        <Card title="#03 - componente Com Filhos"  color={'#f4b722'}>
            <ComFilhos>
                <ul>
                    <li>Sam</li>
                    <li>Alex</li>
                    <li>Clover</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card title="#02 - Componente com Paramentro"  color={'#3be51f'}>
            <ComParamentro title="esse e o titulo" subtitle="Esse e o subtitile" />
            <ComParamentro title="Opa" subtitle="Epa" />

            
        </Card>
        <Card title="#01 -  Primeiro Componente "  color={'#dd36c0'}>
        <Primeiro />
        </Card>
         </div>
         
   
    </div>
