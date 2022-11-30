import React from 'react'
import "../Styles/TestimonialCardSlider.scss"

const TestimonialCard = ({
    title,
    description,
    source,
    name,
    place
}) => {
    return (
        <div className='testimonial-card'>
            <h3>{title}</h3>
            <p className='testimonial-description'>"{description}"</p>
            <p className='testimonial-source'><b>Source</b>:{source}</p>
            <hr />
            <div className="testimonial-name">{name}</div>
            <div className="testimonial-place">{place}</div>
        </div>
    )
}

export default TestimonialCard
