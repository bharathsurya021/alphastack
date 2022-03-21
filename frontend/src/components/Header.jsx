import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-brand'>
                    <Link className='logo' to="/">AlphaStack</Link>
                </div>
                <div className='navlinks-container'>
                    <Link className='nav-link' to="/about">about</Link>
                    <Link className='nav-link' to="/ourservices">our services</Link>
                    <Link className='nav-link' to="/career">career</Link>
                    <Link className='nav-link' to="/insights">insights</Link>
                    <Link className='nav-link' to="/contact">contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header