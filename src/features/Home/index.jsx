import React, { Component } from 'react';
import { connect } from 'react-redux'
import {login} from '../../store/reducers/authentication'

class HomeFeature extends Component {
    render() {
        const { login, isAuthenticated } = this.props;
        return (
            <div>
                <h1>Home</h1>
                {!isAuthenticated && <button onClick={login}>Login</button>}
                {isAuthenticated && `You're logged in! (sorta)`}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authentication.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeature);