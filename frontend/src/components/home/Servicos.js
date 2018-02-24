import React, { Component } from 'react'
class Servicos extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">O que fazemos?</h2>
                            <hr className="primary" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                                <i className="fa fa-4x fa-search wow bounceIn text-primary" />
                                <h3>Busca</h3>
                                <p className="text-muted">Busca rápida e personalizada</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                                <i className="fa fa-4x fa-home wow bounceIn text-primary" data-wow-delay=".1s" />
                                <h3>Imóveis</h3>
                                <p className="text-muted">Encontramos o imóvel ideal</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                                <i className="fa fa-4x fa-lock wow bounceIn text-primary" data-wow-delay=".2s" />
                                <h3>Segurança</h3>
                                <p className="text-muted">Mapas de criminalidade com dados atualizados</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                                <i className="fa fa-4x fa-comments-o wow bounceIn text-primary" data-wow-delay=".3s" />
                                <h3>Comunidade</h3>
                                <p className="text-muted">Feedback da comunidade que vive no local do imóvel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Servicos;