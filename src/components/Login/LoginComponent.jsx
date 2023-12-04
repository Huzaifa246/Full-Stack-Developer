import React, { useState } from 'react';
import CommonDesign from '../commonDesign';
import './login.css';

const Login = ({ onToggleView }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleCheckboxChange = () => {
        setRememberPassword(!rememberPassword);
    };
    const handleLogin = () => {

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName
            })
        })
            .then(res => res.json())
            .then(response => {
                console.log(response, "response");
            })
            .catch(error => {
                console.error('Authentication failed:', error);
            });
    };
    return (
        <>
            <div className='display-flex'>
                <div className='common_design_main bg-color-common'>
                    <CommonDesign />
                </div>
                <div className='login-main bg-login-color'>
                    <h1 className='h1-login-style'>
                        Sign In
                    </h1>
                    <div className='input-label-main'>
                        <label className='label-style'>
                            First Name
                        </label>
                        <input
                            type="text"
                            className='input-style'
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='input-label-main'>
                        <label className='label-style'>
                            Last name
                        </label>
                        <input
                            type="text"
                            className='input-style'
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className='remember-forget-password'>
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberPassword}
                                onChange={handleCheckboxChange}
                            />
                            Remember Password
                        </label>
                        <span className='forget-typography'>Forget Password</span>
                    </div>
                    <span className='forget-typography'>Don't have an account? <a href="#" onClick={onToggleView} style={{ color: "red", textAlign: 'center' }}>SignUp</a></span>
                    <button className='submit-btn' onClick={handleLogin}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Login
