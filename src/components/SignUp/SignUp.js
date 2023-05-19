import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type='name' name='name' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' name='confirm' required></input>
                </div>
                <input className='btn-submit' type='submit' value="Login" required></input>
            </form>
            <p><small>Already have an Accout? <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default SignUp;