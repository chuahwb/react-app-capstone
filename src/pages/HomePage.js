import React from 'react'
import HeroSection from '../components/HeroSection'
import MenuSection from '../components/MenuSection'
import TestimonialSection from '../components/TestimonialSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <main>
        <HeroSection />
        <MenuSection />
        <TestimonialSection />
        <AboutSection />
      </main>
      <Footer spa={false} />
    </>
  )
}

export default HomePage