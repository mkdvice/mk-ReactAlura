import React, { Component } from 'react';
import MinhaListaDeNotas from "./components/minhaListaDeNotas"
import FormularioCadatro from './components/FormularioCadatro';

class App extends Component {
  render(){
    return (
      <section>
        <FormularioCadatro />
        <MinhaListaDeNotas />
      </section>
    )
  }
}

export default App;
