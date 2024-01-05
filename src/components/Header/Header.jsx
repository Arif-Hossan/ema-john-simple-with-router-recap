import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    // console.log(user.email);
    const handleLogout = () => {
        logOut()
        .then(console.log('Logged out successfully'))
        .catch(error => console.log(error.message));
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                {user && <span className='text-white'>{user.email} <button onClick={handleLogout}> logout</button></span>  }
            </div>
        </nav>
    );
};

export default Header;