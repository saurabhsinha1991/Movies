import React, { useState, useCallback } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-form">
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
                disabled={!(email.length > 0 && password.length > 0)}
            >Login</button>
        </div>
    )
}

export default LoginForm;