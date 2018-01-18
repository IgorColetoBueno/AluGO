import { connect } from 'react-redux';
import HeaderActions from '../actions/Header'
import React, { Component } from 'react'
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap'
import Imoveis from './imoveis/Imoveis';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpen: false }
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar() {
        this.props.onToggle();
    }

    render() {
        return (
            <header>
                <Navbar color="faded" light toggleable dark className="bg-primary navbar-expand-md">
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <NavbarBrand href="/" style={{ 'fontFamily': 'Pacifico', 'paddingLeft': '50px' }}>Alu<strong style={{ 'fontFamily': 'Roboto' }}>GO!</strong></NavbarBrand>
                    <Collapse isOpen={this.props.value} navbar >
                        <Nav navbar>
                            <NavItem active>
                                <NavLink href="/imoveis">Imóveis</NavLink>
                            </NavItem>
                            <NavItem active>
                                <NavLink href="/anunciar">Quero anunciar</NavLink>
                            </NavItem>                            
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        )
    }
}

//Mapeia o estado atual para o connect
const mapStateToProps = (state) => {
    return {
        value: state.header
    }
}

//Realiza o dispach das ações para o connect
const mapDispatchToProps = (dispatch) => {
    return {
        onToggle: (value) => dispatch(HeaderActions.onToggle(value))
    }
}

//Exporta o Counter com com os mapeamentos
export default connect(mapStateToProps, mapDispatchToProps)(Header)