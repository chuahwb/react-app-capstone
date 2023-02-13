import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import restaurantFood from '../assets/restauranfood.jpg'

const HeroSection = () => {
  return (
    <div className='section-hero'>
    <div className='wrapper'>
      <div className='section-hero-data'>
        <h1 className='hero-title'>Little Lemon</h1>
        <h2 className='hero-subtitle'>Chicago</h2>
        <p className='hero-para'>We are a family owned
          Mediterranean restaurant,
          focused on traditional
          recipes served with a modern
          twist.</p>
        <button className='btn reserve-a-table-btn'>
          <Link to="/reservations">Reserve a Table</Link>
        </button>
      </div>
      <div className='section-hero-image'>
        <picture>
          <img src={restaurantFood} alt='hero-restaurant-food' className='hero-image' />
        </picture>
      </div>
    </div>
    </div>
  )
}

export default HeroSection