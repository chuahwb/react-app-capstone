import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Card from './Card'

const menu = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImgSrc: () => require("../assets/greek salad.jpg"),
  },
  {
    name: "Bruchetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImgSrc: () => require("../assets/bruchetta.jpg"),
  },
  {
    name: "Lemon Dessert",
    price: "$8.99",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImgSrc: () => require("../assets/lemon dessert.jpg"),
  },
]

const MenuSection = () => {
  return (
    <div className='section-menu' id='menu'>
      <div className='wrapper'>
        <div className='section-menu-header'>
          <h1 className='menu-title'>This weeks specials!</h1>
          <button className='btn order-online-btn'>
            <Link to="/order-online">Order Online</Link>
          </button>
        </div>
        <div className='section-menu-main'>
          {menu.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              description={item.description}
              imageSrc={item.getImgSrc()} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuSection