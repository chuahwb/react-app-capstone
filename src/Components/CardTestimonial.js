import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CardTestimonial = ({ name, rating, review, imgSrc }) => {
  return (
    <div className='card-testimonial' >
      <div className='ratings'>
        <span className='testimonial-ratings'>{rating}</span>
        <span><FontAwesomeIcon icon={faStar} className='testimonial-ratings-icon' /></span>
      </div>
      <img src={imgSrc} alt={name} className='avatar testimonial-avatar' />
      <h3 className='avatar testimonial-avatar-name'>{name}</h3>
      <p className='testimonial-review'>{review}</p>
    </div>
  )
}

export default CardTestimonial