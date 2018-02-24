import React, { Component } from 'react'
class Sobre extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="bg-primary" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <h2 className="section-heading">O que é <b>AluGO!</b> ?</h2>
                            <hr className="light" />
                            <p className="text-faded">AluGO! é uma plataforma que coloca o usuário no centro de uma experiência nova e interativa onde ele conta com um robô (IA) que entende suas necessidades,
                              seleciona e ranqueia os melhores imóveis, especialmente para ele. Além de todas informações, não só do imóvel, mas de toda a região, desde comentários da comunidade,
                              todas categorias de estabelecimentos próximos, até os índices de criminalidade. E para o dono,
                cuidamos da burocracia e do imóvel, garantimos o pagamento e a integridade do seu bem. </p>
                            <a href="#" className="btn btn-default btn-xl">Vem com a gente!</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Sobre;