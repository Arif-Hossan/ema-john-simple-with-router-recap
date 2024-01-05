import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const [error,setError] = useState('')
    const handleLogin = event => {
        event.preventDefault();
        const form  = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        logIn(email,password)
        .then(result => {
            // console.log("logged in successfully" );
            form.reset();
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form onSubmit={handleLogin} action="">
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='Email'  required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder='Password'  required/>
                </div>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John ? <Link to='/signup'>Create New Account</Link></small></p>
            <p><small>{error}</small></p>
        </div>
    );
};

export default Login;