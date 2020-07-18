import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './index.css';
import base from '../../base';
import LoginForm from '../../components/LoginForm';

function Login({ history }) {
    const _onLogin = useCallback(async ({ email, password }) => {
        try {
            await base.auth().signInWithEmailAndPassword(email, password);
            history.push('/');
        } catch(err) {
            console.log(err);
        }
    }, [history]);

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="flex-wrapper">
                    <div className="content">
                        Hi
                    </div>
                    <div className="content">
                        <h2>Member Login</h2>
                        <LoginForm onLogin={_onLogin} />
                    </div>
                </div>
                <Link to="/signup">Create Your Account</Link>
            </div>
        </div>
    )
}

export default withRouter(Login);