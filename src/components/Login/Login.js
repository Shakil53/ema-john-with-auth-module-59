import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required></input>
                </div>
                <input className='btn-submit' type='submit' value="Login" required></input>
            </form>
            <p><small>New to ema john? <Link to='/signup'>Create a New Account</Link></small></p>
        </div>
    );
};

export default Login;