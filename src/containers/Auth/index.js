import React, { PropTypes, Component } from 'react';
import Login from '../../components/Login';
import { connect } from 'react-redux';
import { loginUser } from "../../actions/user";

import styles from './index.css';

export class Auth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onLogin, loginForm } = this.props;
        return (
            <div className={styles.wrapper}>
                <Login {...{ onLogin, loginForm }}/>
            </div>
        );
    }
}

const select = (state) => {
    return {
        loginForm: state.loginForm
    };
};

const mapDispatchToProps = (dispatch) => ({
    onLogin: (data) => dispatch(loginUser(data))
});

export default connect(select, mapDispatchToProps)(Auth);
