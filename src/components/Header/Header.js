import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header-style'>
            <h1>A Fun React Todo List!</h1>
            <Link 
                className='link-style'
                
                to="/">Home
            </Link>
             | 
            <Link 
                className='link-style'
                
                to="/about">About
            </Link>
        </header>
    )
};


export default Header;
