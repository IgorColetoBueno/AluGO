import React, { Component } from 'react';
import logo from './../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import Header from './../components/Header';
import Footer from './../components/Footer';

class App extends Component {
  render() {
    return (

      <div className='App'>
        <Header />
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
