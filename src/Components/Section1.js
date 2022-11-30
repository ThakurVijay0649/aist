import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Section1.scss"
import VidImage from "../images/vid.svg"
import image from "../images/image.svg"
import image1 from '../images/1.svg';
import image2 from '../images/2.svg';
import image3 from '../images/3.svg';

const Section1 = () => {
  return (
      <section class="home-section">
          <div class="left-home-section">
              <h1>More Than <span>60+</span></h1>
              <h1>Education Courses,</h1>
              <h1>Online Join Us Today</h1>
              <div class="join-link">
                  <Link to="/" class="get-started-link">Get Started</Link>
                  <Link to="/"><img src={VidImage} alt=""/></Link>
              </div>
              <div class="aist-info">
                  <div>
                      <img src={image1} alt=""/>
                          <p>More than 60+ courses</p>
                  </div>
                  <div>
                      <img src={image2} alt=""/>
                          <p>Over 320+ Students</p>
                  </div>
                  <div>
                      <img src={image3} alt=""/>
                          <p>Learn anything online</p>
                  </div>
              </div>
          </div>
          <div class="right-home-section"><img src={image} alt=""/></div>
      </section>
  )
}

export default Section1
