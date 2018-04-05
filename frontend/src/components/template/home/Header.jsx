import React, { Component } from 'react';
import logo from '../../../assets/images/logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="menu cid-qIEZHIfjGn" id="menu1-e">
                <nav id="alugo-navbar" className="navbar beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </button>
                    <div className="menu-logo">
                        <div className="navbar-brand">
                            <span className="navbar-logo">
                                <a href="/">
                                    <img src={logo} alt="AluGO" />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                            <li className="nav-item">
                                <a className="nav-link link text-black h5" href="/imoveis">
                                    <span className="mbr-iconfont mbr-iconfont-btn" />
                                    Imóveis</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link text-black h5" href="/imoveis/filtrar">
                                    <span className="mbr-iconfont mbr-iconfont-btn" />
                                    Filtrar</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        )
    }
}
export default Header;