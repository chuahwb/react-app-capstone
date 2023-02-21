import React from 'react'
import '../App.css'
import chefA from '../assets/MarioandAdrianA.jpg'
import chefB from '../assets/restaurantchefB.jpg'

const AboutSection = () => {
    return (
        <div className='section-about' id='about'>
            <div className='wrapper'>
                <div className='section-about-main'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We believe in warm hospitality and that good food should be shared. Our menu is created with a focus on cooking with intention & instinct. It`s contemporary and honest cooking, inspired by the joys of comfort food.</p>
                    <img src={chefB} alt='chefB' className='chefB' />
                    <img src={chefA} alt='chefA' className='chefA' />
                </div>
            </div>
        </div>
    )
}

export default AboutSection