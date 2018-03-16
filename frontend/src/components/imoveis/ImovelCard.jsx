import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { Col } from 'reactstrap';

class ImovelCard extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                id: this.props.imovel.id,
                image: this.props.imovel.image,
                title: this.props.imovel.title,
                subtitle: this.props.imovel.subtitle
            }
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        window.location.href = "/imoveis/" + this.state.id;
    }

    render() {
        return (
            <Col lg="4" sm="1">
                <Card onClick={this.onClick}>
                    <CardImg top width="100%" src={this.state.image} alt="Imóvel" />
                    <CardTitle>{this.state.title}</CardTitle>
                    <CardSubtitle>{this.state.subtitle}</CardSubtitle>
                </Card>
            </Col>
        )
    }
}

export default ImovelCard;