import React from 'react'
import Construction from '../assets/under-construction.png'

const OrderOnline = () => {
    return (
        <div className='section-orderonline'>
            <div className='wrapper'>
                <div className='orderonline-main'>
                    <h1>Under Construction</h1>
                    <img src={Construction} alt='Webpage under construction' />
                </div>
            </div>
        </div>
    )
}

export default OrderOnline