import React from 'react'
import ConfirmedBooking from '../components/ConfirmedBooking'
import Footer from '../components/Footer'

const ConfirmedBookingPage = () => {
    return (
        <>
            <main>
                <ConfirmedBooking />
            </main>
            <Footer spa={true} />
        </>
    )
}

export default ConfirmedBookingPage
