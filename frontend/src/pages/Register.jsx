import React from 'react';
import '../styles/Register.css';

const Register = () => {
    return(
        <div className="register-container">
            <h1>Register</h1>
            <form>
                <input type="emil" placeholder='Email'/>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="password" placeholder='Create Password'/>
            </form>
        </div>
    );
};

export default Register;