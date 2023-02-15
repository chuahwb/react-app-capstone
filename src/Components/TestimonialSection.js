import React from 'react'
import '../App.css'
import CardTestimonial from './CardTestimonial'

const testimonial = [
  {
    name: "",
    rating: 5,
    review: "Yummers! The food is simply to die for. I want to hire their decorator to furnish my house. Easily earned their 5 stars!",
    getImgSrc: () => require("../assets/avatars/avatar-1.jpg"),
  },
  {
    name: "",
    rating: 5,
    review: "It was much better than I expected. The desserts must be sprinkled with crack because I just craved for more and more. I was happy to see how clean everything was. The food was cooked to perfection. Overall experience: 5 stars.",
    getImgSrc: () => require("../assets/avatars/avatar-2.jpg"),
  },
  {
    name: "",
    rating: 4,
    review: "It was much better than I expected. The food is simply to die for. The decor was unique and incredible. I could see myself being a regular here.",
    getImgSrc: () => require("../assets/avatars/avatar-3.jpg"),
  },
  {
    name: "",
    rating: 4,
    review: "I have been here several times before. I found the ambiance to be very charming. After my meal, I was knocked into a food coma. It failed to meet the 5-star experience because the staff kept looking at me funny.",
    getImgSrc: () => require("../assets/avatars/avatar-4.jpg"),
  },
  {
    name: "",
    rating: 3,
    review: "I have been here several times before. Some of my favorite dishes are no longer available. The photos of the food were appetizing and palpable, but didn't live up to the hype. I had a satisfactory experience and will have to try it again.",
    getImgSrc: () => require("../assets/avatars/avatar-5.jpg"),
  },
  {
    name: "",
    rating: 5,
    review: "This is one of my favorite places. The food was flavorful, savory, and succulent. I want to hire their decorator to furnish my house. The waitress did an excellent job. I'd give more than 5 stars if I could!",
    getImgSrc: () => require("../assets/avatars/avatar-6.jpg"),
  },
]

const TestimonialSection = () => {
  return (
    <div className='section-testimonial' id='testimonial'>
      <div className='wrapper container-testimonial'>
        <div className='section-testimonial-header'>
          <h2>Testimonials</h2>
        </div>
        <div className='section-testimonial-main'>
          <div id='slider' className='slider-testimonial'>
            {testimonial.map((item) => (
              <CardTestimonial
                name={item.name}
                rating={item.rating}
                review={item.review}
                imgSrc={item.getImgSrc()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection