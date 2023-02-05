import React from 'react'
import logo from '../images/Logo.svg'
import './styles/header.css'

const Header = () => {
  return (
    <header>
        <img src={logo} alt='logo' />
    </header>
  )
}

export default Header