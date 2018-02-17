//Importações do React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Importações de estilos
import '../assets/web/assets/mobirise-icons-bold/mobirise-icons-bold.css'
import '../assets/web/assets/mobirise-icons/mobirise-icons.css'
import '../assets/tether/tether.min.css'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/socicon/css/styles.css'
import '../assets/dropdown/css/style.css'
import '../assets/theme/css/style.css'
import '../assets/mobirise/css/mbr-additional.css'

//Components
import Imoveis from './../components/imoveis/Imoveis';
import Anunciar from './../components/imoveis/Anunciar';
import NewUser from './../components/users/Novo';
import Home from '../components/Home';
import Header from '../components/template/Header';
import Footer from '../components/template/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Header/>
      <Home/>
      <Footer/>
        <Router>
          <div>
            <Route exact path="/imoveis/anunciar" component={Anunciar}/>
            <Route exact path="/user/new" component={NewUser}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
