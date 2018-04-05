import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Col } from 'reactstrap'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from './Input';
import If from '../operators/If';

class FieldArray extends Component {
    constructor(){
        super(props);
    }

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert(this.props.form, this.props.field, index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove(this.props.form, this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${this.props.field}[${index}].${this.props.keyField}`} component={Input}
                        placeholder='Informe o nome' readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field name={`${this.props.field}[${index}].${this.props.valueField}`} component={Input}
                        placeholder='Descreva...' readOnly={this.props.readOnly} />
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
            <Col cols={this.props.cols}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>{this.props.keyHeader}</th>
                            <th>{this.props.valueHeader}</th>
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

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(FieldArray)