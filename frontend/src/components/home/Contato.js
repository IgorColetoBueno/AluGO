import React, { Component } from 'react'
class Contato extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <h2 className="section-heading">Entre em contato!</h2>
                            <hr className="primary" />
                            <p>O feedback com os nossos clientes é de extrema importância, por isso, esperamos
                o seu contato!</p>
                        </div>
                        <div className="col-lg-2 col-lg-offset-2 text-center">
                            <a href="https://facebook.com/Teste">
                                <i className="fa fa-facebook fa-3x wow bounceIn" data-wow-delay=".1s" />
                                <p>Teste</p>
                            </a>
                        </div>
                        <div className="col-lg-2 col-lg-offset-1 text-center">
                            <a href="mailto:contato@alugo.online">
                                <i className="fa fa-envelope-o fa-3x wow bounceIn" data-wow-delay=".1s" />
                                <p>contato@alugo.online</p>
                            </a>
                        </div>
                        <div className="col-lg-2 col-lg-offset-1 text-center">
                            <a href="https://instagram.com/teste">
                                <i className="fa fa-instagram fa-3x wow bounceIn" data-wow-delay=".1s" />
                                <p>teste</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Contato;