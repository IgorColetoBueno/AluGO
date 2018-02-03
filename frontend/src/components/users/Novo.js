import React, { Component } from 'react'
import { Container, Row, Col, FormGroup } from 'reactstrap';

class Novo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Row className="text-center">
                    <Col className="col-lg-6">
                        <FormGroup className="text-center">
                            <label htmlFor="name">Nome:</label>
                            <input className="form-control" type="text" required name="name" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="username">E-mail:</label>
                            <input className="form-control" type="email" required name="username" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="password">Senha:</label>
                            <input className="form-control" type="password" required name="password" />
                        </FormGroup>
                        <button className="btn btn-success">Criar</button>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Novo;