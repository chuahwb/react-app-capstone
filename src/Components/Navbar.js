import React from 'react'
import logo from '../assets/Logo.svg'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import '../App.css'

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
                <li><a href='#orderonline' className='nav-item'>Order Online</a></li>
                <li><a href='#login' className='nav-item'>Login</a></li>
            </ul>
        </nav>
    )
}

const CustomLink = ({ to, children, ...props }) => {
    const resolved = useResolvedPath(to);
    const isActive = useMatch({ path: resolved.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


export default Navbar