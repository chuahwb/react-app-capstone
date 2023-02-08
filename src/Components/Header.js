import React from 'react'
import logo from '../assets/Logo.svg'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';

const Header = () => {
    return (
        <>
            <img src={logo} alt='logo' />
            <nav>
                <Link to="/" className="nav-item">Home</Link>
                <a href='#about'>About</a>
                <a href='#menu'>Menu</a>
                <Link to="/reservations" className="nav-item">Reservations</Link>
                <a href='#orderonline'>Order Online</a>
                <a href='#login'>Login</a>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/reservations' element={<BookingPage />}></Route>
            </Routes>
        </>
    )
}

export default Header