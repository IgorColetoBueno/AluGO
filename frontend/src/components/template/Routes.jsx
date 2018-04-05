import React, { Component } from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
//Components for routes
import Imoveis from './../imoveis/Imoveis';
import AnunciarForm from './../imoveis/AnunciarForm';
import SignInForm from './../users/SignInForm';
import SignUpForm from './../users/SignUpForm';
import Home from './../template/home/Home';
import Users from '../users/User';

class Routes extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Router history={hashHistory}>
                <Route path='/' component={Home}/>
                <Route path='/users' component={Users}/>
                <Route path='/imoveis/novo' component={AnunciarForm}/>
                <Redirect from="*" to="/"/>
            </Router>
         )
    }
}
 
export default Routes;