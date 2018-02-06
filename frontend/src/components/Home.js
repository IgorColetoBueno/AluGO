import React, { Component } from 'react'
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="cid-qIEZHK1hYl mbr-fullscreen" id="header2-f">
                <div className="container align-center">
                    <div className="row justify-content-md-center">
                        <div className="mbr-white col-md-10" style={{ "marginTop": "30px" }}>
                            <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-2">
                                Seu melhor negócio sem sair de casa!</h1>

                            <p className="mbr-text pb-3 mbr-fonts-style display-5">Com a AluGO! você será capaz de encontrar o melhor imóvel do seu jeito!</p>
                            <div className="mbr-section-btn">
                                <a className="btn btn-md btn-primary-outline display-4" href="https://mobirise.com">Quero Alugar!</a>
                                <a className="btn btn-md btn-success-outline display-4" href="https://mobirise.com">Quero Anunciar!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mbr-arrow hidden-sm-down" aria-hidden="true">
                    <a href="#next">
                        <i className="mbri-down mbr-iconfont"></i>
                    </a>
                </div>
            </section>
        )
    }
}
export default Home;