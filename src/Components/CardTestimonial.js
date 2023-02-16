import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CardTestimonial = ({ name, rating, review, imgSrc }) => {
  return (
    <div className='card-testimonial' >
      <div className='testimonial-header'>
        <p className='ratings'>{rating}</p>
        <FontAwesomeIcon icon={faStar} className='ratings-icon' />
      </div>
      <div className='testimonial-content'>
        <img src={imgSrc} alt={name} className='testimonial-avatar' />
        <h3 className='testimonial-avatar-name'>{name}</h3>
        <p className='testimonial-review'>{review}</p>
      </div>
    </div>
  )
}

export default CardTestimonial