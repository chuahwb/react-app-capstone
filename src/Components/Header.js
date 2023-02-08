import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import '../App.css'

const Header = () => {
    return (
        <div className='hero'>
            <img src={logo} alt='logo' />
            <nav>
                <ul>
                    <li className="nav-item"><Link to="/" id='link'>Home</Link></li>
                    <li className="nav-item"><ScrollLink activeClass="active" smooth spy to="about">About</ScrollLink></li>
                    <li className="nav-item"><ScrollLink activeClass="active" smooth spy to="menu">Menu</ScrollLink></li>
                    <li className="nav-item"><Link to="/reservations" id='link'>Reservations</Link></li>
                    <li className="nav-item"><ScrollLink activeClass="active" smooth spy to="orderonline">Order Online</ScrollLink></li>
                    <li className="nav-item"><ScrollLink activeClass="active" smooth spy to="login">Login</ScrollLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header