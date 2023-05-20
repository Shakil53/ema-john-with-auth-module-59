import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Login = () => {

    const { singIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(error => console.error(error));


    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
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