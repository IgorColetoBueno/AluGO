import React from 'react'
import { Field, reduxForm } from 'redux-form'
import LabelAndInput from '../template/form-utils/LabelAndInput'
import { Col, Row } from 'reactstrap'

const AnunciarFirstPage = props => {
    const { onSubmit } = props
    return (
        <form onSubmit={onSubmit}>
            <Row>
                <Col md="9">
                    <Field
                        name="descricao"
                        component={LabelAndInput}
                        type="text"
                        label="Descrição: "
                        placeholder="Descreva seu imóvel" />
                </Col>
                <Col md="3">
                    <Field
                        name="valor"
                        component={LabelAndInput}
                        label="Valor: "
                        type="text"
                        placeholder="Digite o valor do aluguel"
                    />
                </Col>
            </Row>
            <div>
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
})(AnunciarFirstPage)