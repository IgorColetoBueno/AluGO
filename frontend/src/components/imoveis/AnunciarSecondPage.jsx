import React from 'react'
import { Field, reduxForm } from 'redux-form'
import LabelAndInput from '../template/form-utils/LabelAndInput'
import { Col, Row } from 'reactstrap'

const AnunciarSecondPage = props => {
    const { onSubmit } = props
    return (
        <form onSubmit={onSubmit}>
            <Row>
                <Col>
                    <Field
                        name="endereco.cep"
                        component={LabelAndInput}
                        type="text"
                        label="CEP: "
                        placeholder="Digite o CEP, nós cuidamos do resto!" />
                </Col>
                <Col>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Field
                        name="endereco.cidade"
                        component={LabelAndInput}
                        label="Cidade: "
                        type="text"
                        placeholder="Digite o nome da cidade"
                    />
                </Col>
                <Col>
                    <Field
                        name="endereco.uf"
                        component={LabelAndInput}
                        label="UF: "
                        type="text"
                        placeholder="Digite a sigla da UF"
                    />
                </Col>
                <Col>
                    <Field
                        name="endereco.pais"
                        component={LabelAndInput}
                        label="País: "
                        type="text"
                        placeholder="Digite o nome do país"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Field
                        name="endereco.logradouro"
                        component={LabelAndInput}
                        type="text"
                        label="Logradouro: "
                        placeholder="Digite o logradouro do imóvel" />
                </Col>
                <Col>
                    <Field
                        name="endereco.bairro"
                        component={LabelAndInput}
                        label="Bairro: "
                        type="text"
                        placeholder="Digite o nome do bairro"
                    />
                </Col>
                <Col>
                    <Field
                        name="endereco.numero"
                        component={LabelAndInput}
                        label="Número: "
                        type="number"
                        placeholder="Digite o número do imóvel"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Field
                        name="endereco.complemento"
                        component={LabelAndInput}
                        label="Complemento: "
                        type="text"
                        placeholder="Digite o complemento do imóvel"
                    />
                </Col>
            </Row>
            <div>
                <button type="button" className="btn btn-primary" onClick={props.previousPage}>
                    Anterior
                </button>
                <button type="submit" className="btn btn-default">
                    Próximo
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'anunciarForm', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true
})(AnunciarSecondPage)