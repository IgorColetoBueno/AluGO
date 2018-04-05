import React, { Component } from 'react'
import { Container, Row, Col, FormGroup, Jumbotron, Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextPage, previousPage, onSubmit } from '../../actions/Imoveis';
//Components
import LabelAndInput from '../template/form-utils/LabelAndInput';
import FirstPage from './AnunciarFirstPage'
import SecondPage from './AnunciarSecondPage'
import ThirdPage from './AnunciarThirdPage'

class Anunciar extends Component {
    constructor(props) {
        super(props)
    }   

    render() {
        const { onSubmit, page } = this.props;
        console.log(this.props)
        return (
            <Container>
                <fieldset>
                    <legend>Novo imóvel para aluguel</legend>
                    <hr />
                </fieldset>
                {page === 1 && <FirstPage onSubmit={this.props.nextPage} />}
                {page === 2 && (
                    <SecondPage
                        previousPage={this.props.previousPage}
                        onSubmit={this.props.nextPage}
                    />       
                )}
                {page === 3 && (
                    <ThirdPage
                        form="anunciarForm"
                        list={this.props.caracteristicas}                        
                        previousPage={this.props.previousPage}
                        onSubmit={onSubmit}
                    />
                )}
            </Container>
        )
    }
}

//Aplica ao componente o decorator do redux-form
Anunciar = reduxForm({ form: 'anunciarForm' })(Anunciar);

//Funções para o decorator do redux
const mapStateToProps = state => ({
    caracteristicas: state.imoveis.caracteristicas,
    page: state.imoveis.page
});

const mapDispatchToProps = dispatch => bindActionCreators({ nextPage, previousPage, onSubmit }, dispatch);

//Aplica o decorator do redux
export default connect(mapStateToProps, mapDispatchToProps)(Anunciar);