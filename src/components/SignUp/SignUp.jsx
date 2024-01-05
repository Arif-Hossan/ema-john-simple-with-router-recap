import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [error,setError] = useState('');
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email,password, confirmPassword);
        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp} action="">
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='Email' id=""  required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder='Password' id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="confirmPassword" name="confirmPassword" placeholder='Password' id="" required/>
                </div>
                <input className='submit-btn' type="submit" value="sign up" />
            </form>
            <p><small>Already have an account ? <Link to='/login'>Login</Link></small></p>
            <p><small className='error-text'>{error}</small></p>
        </div>
    );
};

export default SignUp;