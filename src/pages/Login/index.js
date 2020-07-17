import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import LoginForm from '../../components/LoginForm';

function Login() {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="flex-wrapper">
                    <div className="content">
                        Hi
                    </div>
                    <div className="content">
                        <h2>Member Login</h2>
                        <LoginForm />
                    </div>
                </div>
                <Link to="/signup">Create Your Account</Link>
            </div>
        </div>
    )
}

export default Login;