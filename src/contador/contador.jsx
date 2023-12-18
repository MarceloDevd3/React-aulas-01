
import  '../contador/contador.css'
import React, {Component} from 'react'



import Display from './display'
import PassoForm from './PassoForm'
import Button from './buttons'


export default class Contador extends Component {


    //() 

    /* Esse e um jeito de fazer
        constructor(props) {
        super(props) 

        this.state = {
            passo : props.passo,
            valor: 0
        }
    
    }
    */

    state = {
        passo : this.props.passo || 1,
        valor: this.props.valor || 0,
    }
  

    incrementrar = () => {
      this.setState({
        valor: this.state.valor + this.state.passo
      }) 
    }

    descrementrar = () => {
        this.setState({
            valor: this.state.valor -  this.state.passo
          }) 
    }

    mudarPasso =  (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }
    

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                {/*<div>
                <label for="passoInput">Passo:</label>
                <input id="passoInput"  type="number" value={this.state.passo} onChange={e => this.setState({passo: +e.target.value})}></input>
                </div>*/}
                
                {/*<h4>Valor: {this.state.valor}</h4>*/}
                <PassoForm passo={this.state.passo}
                 onPassoChange={this.mudarPasso} ></PassoForm>
                <Display valor={this.state.valor}></Display>
                {/*<div>
                    <button onClick={this.incrementrar}>+</button>
                    <button onClick={this.descrementrar}>-</button>
                </div>*/}

                <Button onIncrementrar={this.incrementrar} onDescrementrar={this.descrementrar}>

                </Button>
            </div>
        ) 
    } 
}
/*
passo fazer de dois jeitos
import React from 'react'


class Conatdor extends React.Component {
    
}
*/