import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Container, Row, Col, FormGroup } from 'reactstrap'
import Card from './ImovelCard';
class Anunciar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <FormGroup>
                            <label htmlFor="Descricao">Descrição</label>
                            <textarea name="Descricao" className="form-control" type="text"></textarea>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <label htmlFor="Nome">Nome</label>
                            <input name="Nome" className="form-control" type="text" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Col>
                                <label htmlFor="Caracteristica">Característica</label>
                                <input name="Caracteristica" className="form-control" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <button id="" className="btn btn-success">Adicionar</button>
                    </Col>
                </Row>
            </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(Anunciar)