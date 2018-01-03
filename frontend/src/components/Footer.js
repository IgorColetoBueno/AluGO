
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <footer className="footer"
                style={{
                    'position': 'absolute',
                    'bottom': '0px',
                    'width': '100%',
                    'height': '200px',
                    'lineHeight': '60px',
                    'backgroundColor': '#f5f5f5'
                }}>
                <Container>
                    <Row>
                        <Col>
                            <FontAwesome name="pencil" size='2x'/>
                            <h4>Entre em contato conosco!!</h4>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;