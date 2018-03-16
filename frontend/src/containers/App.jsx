//Importações do React
import React, { Component } from 'react';
//Importações de estilos
import '../assets/web/assets/mobirise-icons-bold/mobirise-icons-bold.css'
import '../assets/web/assets/mobirise-icons/mobirise-icons.css'
import '../assets/tether/tether.min.css'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/socicon/css/styles.css'
import '../assets/dropdown/css/style.css'
import '../assets/theme/css/style.css'
import '../assets/mobirise/css/mbr-additional.css'
//Importações de scripts
import $ from 'jquery';
import 'popper.js'
//Components
import Routes from '../components/template/Routes';
import Header from '../components/template/home/Header';
import Footer from '../components/template/home/Footer';
import Messages from '../components/template/msg/messages';
class App extends Component {


  render() {
    return (
      <div className='App'>
        <Header />
        <Routes />
        <Footer />
        <Messages/>
      </div>
    );
  }
}

export default App;
