import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col>        
                            <span className="fa fa-5x fa-pencil"></span>                   
                            <h4>Entre em contato <br/> conosco!!</h4>
                        </Col>
                        <Col>        
                            <span className="fa fa-5x fa-pencil"></span>                   
                            <h4>Entre em contato <br/> conosco!!</h4>
                        </Col>
                        <Col>        
                            <span className="fa fa-5x fa-pencil"></span>                    
                            <h4>Entre em contato <br/> conosco!!</h4>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;