import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { AuthContext } from '../Context/UserContext';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;



        if (password.length < 6) {
            setError('Password should be 6 character or more.')
            return;
        }
        if (password !== confirm) {
            setError('Your password did not match')
            return;
        }
        console.log(email, password, confirm);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
    }




    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type='password' name='confirm' required></input>
                </div>
                <input className='btn-submit' type='submit' value="Login" required></input>
            </form>
            <p><small>Already have an Accout? <Link to='/login'>Login</Link></small></p>
            <p className='error-text'>{error}</p>
        </div>
    );
};

export default SignUp;