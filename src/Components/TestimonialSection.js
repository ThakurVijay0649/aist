import React from 'react'
import "../Styles/TestimonialSection.scss"
import TestimonialCardSlider from './TestimonialCardSlider'
import Image1 from "../images/happystudents.svg"
import Image2 from "../images/courseView.svg"
import Image3 from "../images/fivestar.svg"
import Image4 from "../images/studentcommunity.svg"

const TestimonialSection = () => {
    return (
        <><div className="testimonial">
            <div className='testimonial-section'>
                <div className="testimonial-info">
                    <h2>People Love To Learn With AIST</h2>
                    <div className="percentage-info">
                        <div>
                            <h1>9/10</h1>
                            <p>9/10 users reported better learning outcomes.</p>
                        </div>
                        <div>
                            <h1>85%</h1>
                            <p>85% of students see their course through to completion</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slider">
                    <TestimonialCardSlider />
                </div>
            </div>
            <div className="testimonial-all-info">
                <div>
                    <h1>380+</h1>
                    <span><img src={Image1} alt="" />Happy Students</span>
                </div>
                <div>
                    <h1>8600+</h1>
                    <span><img src={Image2} alt="" />Total Course Views</span>
                </div>
                <div>
                    <h1>200+</h1>
                    <span><img src={Image3} alt="" />Five-Star Course Reviews</span>
                </div>
                <div>
                    <h1>768+</h1>
                    <span><img src={Image4} alt="" />Students Community</span>
                </div>
            </div>

        </div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1A064F" fill-opacity="1" d="M0,64L120,96C240,128,480,192,720,186.7C960,181,1200,107,1320,69.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg></>
    )
}

export default TestimonialSection
