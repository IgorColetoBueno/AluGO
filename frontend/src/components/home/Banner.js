import React, { Component } from 'react'
class Banner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1>Já pensou em alugar sem sair de casa?</h1>
                        <hr />
                        <p>Escolha seus filtros, encontre o melhor imóvel e tenha uma excelente experiência!</p>
                        <a href="#about" className="btn btn-primary btn-xl page-scroll">Vem com a gente!</a>
                    </div>
                </div>
            </header>
        )
    }
}
export default Banner;