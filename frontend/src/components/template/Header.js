import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand page-scroll" href="#page-top">
                            <img src={logo} width={60} height={20} />
                        </a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a className="page-scroll" href="#about">Sobre</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#services">Serviços</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    {/* /.navbar-collapse */}
                </div>
                {/* /.container-fluid */}
            </nav>
        )
    }
}
export default Header;