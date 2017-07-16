import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './index.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: null,
            password: null
        };
    }

    handleClickLogin() {
        const { login, password } = this.state;
        const { onLogin } = this.props;

        onLogin({ login, password });
    }

    handleChange(field, event) {
        this.setState({ [field]: event.target.value });
    }

    render() {
        const { error } = this.props.loginForm;
        let errorMessage = null;

        if (error) {
            errorMessage = <div className={styles.error}>{ error }</div>;
        }

        return (
            <div className={styles.wrapper}>
                <Paper zDepth={1} style={{ padding: '30px' }}>
                    <div className={styles.title}>
                        Вход
                    </div>
                    <div className={styles.field} >
                        <TextField hintText="Логин" onChange={this.handleChange.bind(this, 'login')}/>
                    </div>
                    <div className={styles.field}>
                        <TextField hintText="Пароль" onChange={this.handleChange.bind(this, 'password')}/>
                    </div>

                    <div className={styles.controls}>
                        <RaisedButton label="Войти" primary={true} onClick={this.handleClickLogin.bind(this)} />
                    </div>

                    { errorMessage }
                </Paper>
            </div>
        );
    }
}
