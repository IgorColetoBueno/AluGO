import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Redirect } from 'react-router-dom';

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
        debugger;
        this.history.push("/teste");
    }

    render() {
        return (
            <div>
                <Card onClick={this.onClick}>
                    <CardImg top width="100%" src={this.state.image} alt="Imóvel" />
                    <CardBody>
                        <CardTitle>{this.state.title}</CardTitle>
                        <CardSubtitle>{this.state.subtitle}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default ImovelCard;