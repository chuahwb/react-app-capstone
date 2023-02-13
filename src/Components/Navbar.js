import React from 'react'
import logo from '../assets/Logo.svg'
import '../App.css'
import CustomLink from './CustomLink'

const Navbar = () => {
    return (
        <nav className='nav'>
            <header>
                <img src={logo} alt='nav-logo' className='nav-logo' />
            </header>
            <ul>
                <CustomLink to="/" className='nav-item'>Home</CustomLink>
                <li><a href='#about' className='nav-item'>About</a></li>
                <li><a href='#menu' className='nav-item'>Menu</a></li>
                <CustomLink to="/reservations" className='nav-item'>Reservations</CustomLink>
                <CustomLink to="/order-online" className='nav-item'>Order Online</CustomLink>
                <li><a href='#login' className='nav-item'>Login</a></li>
            </ul>
        </nav>
    )
}


export default Navbar