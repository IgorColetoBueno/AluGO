import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Col } from 'reactstrap'
import { Field, arrayInsert, arrayRemove, reduxForm, formValueSelector } from 'redux-form'
import Input from '../template/form-utils/Input';
import If from '../template/operators/If';

class AnunciarThirdPage extends Component {
    constructor(props) {
        super(props);
    }

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert(this.props.form, 'caracteristicas', index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove(this.props.form, 'caracteristicas', index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`caracteristicas[${index}].chave`} component={Input}
                        placeholder='Informe a característica' readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field name={`caracteristicas[${index}].valor`} component={Input}
                        placeholder='Descreva a característica' readOnly={this.props.readOnly} />
                </td>
                <td>
                    <button type='button' className='btn btn-success'
                        onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button' className='btn btn-warning'
                        onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type='button' className='btn btn-danger'
                        onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Col>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Característica</th>
                            <th>Descrição</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Col>
        )
    }
}

AnunciarThirdPage = reduxForm({
    form: 'anunciarForm', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true
})(AnunciarThirdPage)

const mapStateToProps = state => ({
    
})
const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AnunciarThirdPage)