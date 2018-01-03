
import React, { Component } from 'react'
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpen: false }
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        let { isOpen } = this.state
        return (
            <header>
                <Navbar color="faded" light toggleable dark className="bg-primary navbar-expand-md">
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <NavbarBrand href="/" style={{ 'fontFamily': 'Pacifico', 'paddingLeft':'50px'}}>Alu<strong style={{ 'fontFamily': 'Roboto' }}>GO!</strong></NavbarBrand>
                    <Collapse isOpen={isOpen} navbar >
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

export default HeaderComponent;