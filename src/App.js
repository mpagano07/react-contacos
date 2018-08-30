import React, { Component } from 'react';
import './App.css';
import './index.css';
import usuarios from './datos';
import Usuario from './componentes/usuario';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usuarios,

    };
  }

  render() {
    const { usuarios } = this.state;
    
    return (
      <main>
        {usuarios.map( (usuario) => <Usuario datos={usuario}/>)}
      </main>

    );
  }
}  

export default App;