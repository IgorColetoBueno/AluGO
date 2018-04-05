import React, { Component } from 'react'
import { Container, Row, Col, FormGroup, Jumbotron, Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import LabelAndInput from '../template/form-utils/LabelAndInput';

class SignInForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col md="12">
                            <Field
                                name="username"
                                component={LabelAndInput}
                                type="email"
                                label="Email: "
                                placeholder="Digite o email" />
                        </Col>
                        <Col md="12">
                            <Field
                                name="password"
                                component={LabelAndInput}
                                label="Senha: "
                                type="password"
                                placeholder="Senha"
                            />
                        </Col>
                    </Row>
                </Container>
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
        )
    }
}
export default reduxForm({ form: 'signInForm' })(SignInForm);