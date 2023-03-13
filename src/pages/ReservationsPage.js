import React from 'react'
import ReservationSection from '../components/ReservationSection'
import Footer from '../components/Footer'

const ReservationsPage = () => {
  return (
    <>
      <main>
        <ReservationSection />
      </main>
      <Footer spa={true} />
    </>
  )
}

export default ReservationsPage