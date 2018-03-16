import React, { Component } from 'react';
//Home components
import Banner from './Banner';
import Sobre from './Sobre';
import Servicos from './Servicos';
// import Portfolio from './Portfolio';
import Contato from './Contato';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Banner/>
                <Sobre/>
                <Servicos/>
                {/* <Portfolio/> */}
                <Contato/>
            </div>
        )
    }
}
export default Home;