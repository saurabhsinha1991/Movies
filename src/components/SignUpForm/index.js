import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SignUpForm({ onSignUp }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-form">
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter name"
            />
            <br />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter email"
            />
            <br />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
            />
            <br />
            <button
                onClick={() => onSignUp({ name, email, password })}
                disabled={!(name.length > 0 && email.length > 0 && password.length > 0)}
            >Sign Up</button>
        </div>
    )
}

SignUpForm.propTypes = {
    onSignUp: PropTypes.func.isRequired,
}

export default SignUpForm;