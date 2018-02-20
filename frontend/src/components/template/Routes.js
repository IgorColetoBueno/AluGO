import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
//Components for routes
import Imoveis from './../imoveis/Imoveis';
import Anunciar from './../imoveis/Anunciar';
import NewUser from './../users/Novo';
import Home from './../template/Home';

class Routes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/imoveis/anunciar" component={Anunciar} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/imoveis" component={Imoveis} />
                    <Route exact path="/user/new" component={NewUser} />
                    <Redirect from="*" to="/"/>
                </div>
            </Router>
        )
    }
}
export default Routes;