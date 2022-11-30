import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "../Styles/TestimonialCardSlider.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TestimonialCard from './TestimonialCard';
const TestimonialCardSlider = () => {
    const testimonials = [

        {
            id: 1,
            title: "It is going to next step of great...",
            description: "It is going to next step of great learning. Love to explore...",
            source: "Google",
            name: "Nidhi Verma",
            place: "AIST's Interns"
        },
        {
            id: 2,
            title: "Very good education institute here any...",
            description: "Very good education institute here any one can learn",
            source: "Google",
            name: "Namita Satapathy",
            place: "User AIST"
        },
        {
            id: 3,
            title: "Experience was good i made this type...",
            description: "Experience was good i made this type of project very first time lots of things i learnt while making this project.",
            source: "Feedback",
            name: "Harshit Kumar",
            place: "AIST's Interns"
        },
        {
            id: 4,
            title: "Great learning experience",
            description: "Great learning experience. Anyone can learn easily from here. #aistian",
            source: "Google",
            name: "Tech Sure",
            place: "Unknown"
        },
        {
            id: 5,
            title: "It was really a great experience...",
            description: "It was really a great experience. Learnt a lot many things. While learning from youtube I felt I got it. But only while doing the project got to know how exactly things works.",
            source: "Feedback",
            name: "Shrisha G hegde",
            place: "AIST's Interns"
        },
        {
            id: 6,
            title: "It was a good experience",
            description: "It was a good experience, I have learnt to make a product landing page. I used HTML and CSS, so It made my concept clear and I revised it.",
            source: "Feedback",
            name: "Saili Dwivedi",
            place: "AIST's Interns"
        },
        {
            id: 7,
            title: "In AIST, I joined...",
            description: "In AIST, I joined recently, At first, I was quite terrified 😰, but the trainer quickly won me over. I'm pleased with how the class went overall. At the End, this is going to be top Education Institute due to the top coordinator guidelines. Thank you AIST",
            source: "Trustpilot",
            name: "Cyrus",
            place: "Users AIST"
        },
        {
            id: 8,
            title: "I expected this school to be good for...",
            description: "I expected this school to be good for both of my son & daughters who're in class 8 and want to study programming language, so I had take admission there and AKASH INSTITUTE OF SCIENCE AND TECHNOLOGY  was fast enough to fulfill my child's requirement. Thanks for such type of teaching.",
            source: "Trustpilot",
            name: "Sai Swagat",
            place: "Users AIST"
        }
    ]
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000} stopOnHover={true} swipeable={true}>
            {
                testimonials.map((testimonial) => (
                    <div>
                        <TestimonialCard
                            key={testimonial.id}
                            title={testimonial.title}
                            description={testimonial.description}
                            source={testimonial.source}
                            name={testimonial.name}
                            place={testimonial.place}
                        />
                    </div>

                ))
            }
        </Carousel>
    )
}

export default TestimonialCardSlider
