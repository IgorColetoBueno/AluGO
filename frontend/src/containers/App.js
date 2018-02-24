//Importações do React
import React, { Component } from 'react';
//Importações de estilos
import '../assets/css/animate.min.css';
import '../assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Importações de scripts
import $ from 'jquery';
import 'popper.js'
//Components
import Routes from '../components/template/Routes';
import Header from '../components/template/Header';

class App extends Component {


  render() {
    return (
      <div className='App'>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
