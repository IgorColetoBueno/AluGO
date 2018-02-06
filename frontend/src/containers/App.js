import React, { Component } from 'react';
import logo from './../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import Imoveis from './../components/imoveis/Imoveis';
import Anunciar from './../components/imoveis/Anunciar';
import NewUser from './../components/users/Novo';
import Home from '../components/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Home/>
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
