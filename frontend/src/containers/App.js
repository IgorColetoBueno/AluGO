import React, { Component } from 'react';
import logo from './../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import Header from './../components/Header';
import Footer from './../components/Footer';
import ImovelCard from '../components/imoveis/ImovelCard';

class App extends Component {
  render() {
    var imovel =
      {
        'id': '123',
        'title': 'Teste',
        'image': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
        'subtitle': 'Teste123'
      }
    return (

      <div className='App'>
        <Header />
        <ImovelCard imovel={imovel} />
        <Footer />
        <Router>
          <div>
            <Route></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
