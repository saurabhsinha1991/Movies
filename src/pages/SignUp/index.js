import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import SignUpForm from '../../components/SignUpForm';
import base from '../../base';

function SignUp({ history }) {
    const _onSignUp = useCallback(async ({ email, password }) => {
            try {
                await base.auth().createUserWithEmailAndPassword(
                    email,
                    password
                ).then(() => {
                    history.push('/');
                });
                debugger;
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
                        <h2>Sign Up</h2>
                        <SignUpForm onSignUp={_onSignUp} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SignUp);