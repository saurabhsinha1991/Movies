import React from 'react';
import SignUpForm from '../../components/SignUpForm';

function SignUp() {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="flex-wrapper">
                    <div className="content">
                        Hi
                    </div>
                    <div className="content">
                        <h2>Member Login</h2>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;