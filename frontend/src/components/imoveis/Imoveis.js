import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap'

class Imoveis extends Component {
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
            <div></div>
        )
    }
}

//Mapeia o estado atual para o connect
const mapStateToProps = (state) => {
    // return {
    //     value: state.header
    // }
}

//Realiza o dispach das ações para o connect
const mapDispatchToProps = (dispatch) => {
    // return {
    //     onToggle: (value) => dispatch(HeaderActions.onToggle(value))
    // }
}

//Exporta o Counter com com os mapeamentos
// export default connect(mapStateToProps, mapDispatchToProps)(Header)