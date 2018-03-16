import React, { Component } from 'react'
import { Container, Row, Col, FormGroup, Jumbotron, Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import LabelAndInput from '../template/form-utils/LabelAndInput';

class Anunciar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="nome"
                        component={LabelAndInput}
                        type="text"
                        label="Nome: "
                        placeholder="Digite seu nome" />
                    <Field
                        name="sobrenome"
                        component={LabelAndInput}
                        label="Sobrenome: "
                        type="text"
                        placeholder="Digite seu sobrenome"
                    />
                    <Field
                        name="email"
                        component={LabelAndInput}
                        label="E-mail: "
                        type="email"
                        placeholder="Digite seu e-mail"
                    />
                    <Field
                        name="password"
                        component={LabelAndInput}
                        label="Senha: "
                        type="password"
                        placeholder="Digite sua senha"
                    />
                    <Field
                        name="cpf"
                        component={LabelAndInput}
                        label="CPF: "
                        type="text"
                        placeholder="Digite seu CPF"
                    />
                </div>
                <button type="submit"    className="btn btn-primary">Criar</button>
            </form>
        )
    }
}
export default reduxForm({ form: 'anunciarForm' })(Anunciar);