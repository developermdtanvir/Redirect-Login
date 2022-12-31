import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
           <div className='page-link'>
                <a href="/home">Home</a>
                <a href="/login">Login</a>
                <a href="/book">Book</a>
           </div>
        </div>
    );
};

export default Header;