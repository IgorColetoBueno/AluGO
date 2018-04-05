import React, { Component } from 'react'
import { Container, Row, Col, FormGroup, Jumbotron, Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import LabelAndInput from '../template/form-utils/LabelAndInput';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <Row>
                    <Col md="12">
                        <Field
                            name="nome"
                            component={LabelAndInput}
                            type="text"
                            label="Nome: "
                            placeholder="Digite seu nome" />
                    </Col>
                    <Col md="12">
                        <Field
                            name="sobrenome"
                            component={LabelAndInput}
                            label="Sobrenome: "
                            type="text"
                            placeholder="Digite seu sobrenome"
                        />
                    </Col>
                    <Col md="12">
                        <Field
                            name="email"
                            component={LabelAndInput}
                            label="E-mail: "
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                    </Col>
                    <Col md="12">
                        <Field
                            name="password"
                            component={LabelAndInput}
                            label="Senha: "
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </Col>
                    <Col md="12">
                        <Field
                            name="cpf"
                            component={LabelAndInput}
                            label="CPF: "
                            type="text"
                            placeholder="Digite seu CPF"
                        />
                    </Col>

                </Row>
                <button type="submit" onClick={() => this.props.invertForm} className="btn btn-primary">Criar</button>
            </form>
        )
    }
}
export default reduxForm({ form: 'signUpForm' })(SignUpForm);