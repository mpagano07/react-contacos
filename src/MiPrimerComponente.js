import React, { Component } from 'react';
import './App.css';


class MiPrimerComponente extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombreComponente: 'Componente del diablo',
        };
    }

  render() {

      const { nombre, edad } = this.props;
      const { nombreComponente } = this.state;
      console.log(nombre);
      console.log(edad);
      

    return (
      <div>
           Mi nombre es {nombre} y tengo {edad} años.
           Mi componente es {nombreComponente}
      </div>
    );
  }
}

export default MiPrimerComponente;
