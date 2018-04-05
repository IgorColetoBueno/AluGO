import React, { Component } from 'react';
import { Button, Row, Container, Col, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { create, login } from '../../actions/User';
//Components
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import If from '../template/operators/If';
import Grid from '../template/layout/grid';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }
    invertForm(value) {
        this.setState({
            ...this.state,
            isLogin: value
        })
    }
    render() {
        let isLogin = this.state.isLogin;
        return (
            <div className="cid-qIEZHK1hYl mbr-fullscreen align-center">
                <Container className="align-center">
                    <Row>
                        <Grid cols="12 6 6 6">
                            <Jumbotron fluid>
                                <h2 className="display-3">Olá!</h2>
                                <p className="lead">Você já possui uma conta? Se não tem, com o <b>AluGO!</b> você cria uma em instantes!.</p>
                                <hr className="my-2" />
                                <p className="lead">
                                    <Button color="danger" onClick={() => this.invertForm(true)}>Fazer login</Button>
                                    <Button color="warning" onClick={() => this.invertForm(false)}>Criar nova conta</Button>
                                </p>
                            </Jumbotron>
                        </Grid>
                        <Grid cols="12 6 6 6">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <If test={isLogin}>
                                        <SignInForm
                                            onSubmit={this.props.login}
                                        />
                                    </If>
                                    <If test={!isLogin}>
                                        <SignUpForm
                                            onSubmit={this.props.create}
                                            invertForm={this.invertForm}
                                        />
                                    </If>
                                </div>
                            </div>
                        </Grid>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({ create, login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);