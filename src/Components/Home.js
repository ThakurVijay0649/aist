import React from 'react'
import "../Styles/Home.scss"
import CourseSlider from './CourseSlider'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import "swiper/css";
import "swiper/css/pagination";
import Section4 from './Section4'
import TechSlider from './TechSlider'
import TestimonialSection from './TestimonialSection'
import EventSlider from './EventSlider'

const Home = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <CourseSlider />
      <Section4 />
      <TechSlider />
      <TestimonialSection />
      <EventSlider/>
    </>
  )
}

export default Home
