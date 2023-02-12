import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='wrapper'>
      <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
          <h1 className='hero-title'>Little Lemon</h1>
          <h2 className='hero-subtitle'>Chicago</h2>
          <p className='hero-para'>We are a family owned
            Mediterranean restaurant,
            focused on traditional
            recipes served with a modern
            twist.</p>
        </div>
        <button className='btn reserve-a-table-btn'>
          <Link to="/reservations">Reserve a Table</Link>
        </button>
        <div className='section-hero-image'></div>
      </div>
    </div>
  )
}

export default HeroSection