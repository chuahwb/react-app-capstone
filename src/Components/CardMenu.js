import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

const CardMenu = ({ name, price, description, imageSrc }) => {
  return (
    <div className='card-container' key={name}>
      <div className='image-container'>
        <img src={imageSrc} alt={name} />
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h2 className='card-heading'>{name}</h2>
          <p className='card-price'>{price}</p>
        </div>
        <div className='card-body'>
          <p className='menu-item-description'>{description}</p>
        </div>
        <div className='card-footer'>
          <h3>Order a delivery</h3>
          <FontAwesomeIcon icon={faTruck} id='icon-delivery' />
        </div>
      </div>
    </div>
  )
}

export default CardMenu