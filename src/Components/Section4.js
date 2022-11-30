import React from 'react'
import { ImArrowUpRight2 } from 'react-icons/im'
import { Link } from 'react-router-dom'
import "../Styles/Section4.scss"
import CourseCard from './CourseCard'
import courseImage1 from "../images/course1.png";
import courseImage2 from "../images/course2.png";

const Section4 = () => {
    return (
        <div className='feartured-courses-row'>
            <div className="featured-courses-col1">
                <h2>Featured Courses</h2>
                <p>Hand-picked Mentor and expertly crafted courses, designed for the modern students.
                </p>
                <Link to="/" className="all-courses-link all-courses-link-hover">
                    Browse All Courses <ImArrowUpRight2 />
                </Link>
            </div>
            <div className="featured-courses-col">
                <CourseCard
                    id={1}
                    image={courseImage1}
                    rating={4.3}
                    num_of_reviews={180}
                    title="Responsive Portfolio Website Using HTML, CSS & JavaScript"
                    time="1.2H"
                    level="Beginner"
                    views="1.2K+"
                    downloads="180+"
                    user="Akash Mahapatra"
                    rate="₹246"
                    free="FREE"
                />
            </div>
            <div className="featured-courses-col">
                <CourseCard
                    id={1}
                    image={courseImage2}
                    rating={4.5}
                    num_of_reviews={93}
                    title="Comming Soon 3D Template using HTML, CSS & JavaScript"
                    time="2.3H"
                    level="Intermediate"
                    views="1.2K+"
                    downloads="230+"
                    user="Aman Aggarwal"
                    rate="₹339"
                    free="FREE"
                />
            </div>
        </div>
    )
}

export default Section4
