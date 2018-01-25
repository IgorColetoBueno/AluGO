import React, { Component } from 'react';
import logo from './../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import Header from './../components/Header';
import Footer from './../components/Footer';
import Imoveis from './../components/imoveis/Imoveis';
import Anunciar from './../components/imoveis/Anunciar';

class App extends Component {
  render() {
    return (

      <div className='App'>
        <Header />
        <Imoveis/>
        <Footer />
        <Router>
          <div>
            <Route exact path="/imoveis/anunciar" component={Anunciar}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
