import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);

        if(email === 'admin@gmail.com' && password === '12345'){
            navigate('/dashboard');
        } else{
            alert('Invalid credentials');
        }
    };

    return(

        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' value={email} id='email' autoComplete='email' onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" placeholder='Password' value={password} id='password' onChange={(e) => setPassword(e.target.value)} required/>
                <button type='submit'>Login</button> <br /><br />
                <a className="forgot-password" id='forgotPassword' href="#" target="_blank" rel="noopener noreferrer">Forgot Password?</a>
                <a className="register-link" id='registerLink' href="#" target="_blank" rel="noopener noreferrer">Register</a>
            </form>
        </div>
    );
};

export default Login;