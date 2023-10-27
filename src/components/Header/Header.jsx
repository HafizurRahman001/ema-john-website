import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <div className="logo_section">
                <img src={logo} alt="" />
            </div>
            <div className="nav_content_section">
                <a href="/order">Order</a>
                <a href="/order-review">Order review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">LogIn</a>
            </div>

        </nav>
    );
};

export default Header;