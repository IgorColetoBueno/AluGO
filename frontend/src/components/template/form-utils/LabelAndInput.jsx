import React, { Component } from 'react';
import Grid from '../layout/grid';

class LabelAndInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <div className="form-group">
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input
                        className="form-control"
                        placeholder={this.props.placeholder}
                        readOnly={this.props.readOnly}
                        type={this.props.type}
                        min={this.props.min}
                        max={this.props.max}
                        {...this.props.input} />
                </div>
            </Grid>
        )
    }
}

export default LabelAndInput;