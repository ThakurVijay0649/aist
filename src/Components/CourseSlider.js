import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import "../Styles/CourseSlider.scss"
import CourseCard from './CourseCard'
import courseImage1 from "../images/course1.png";
import courseImage2 from "../images/course2.png";
import courseImage3 from "../images/course3.png";
import courseImage4 from "../images/course4.png";
import courseImage5 from "../images/course5.png";
import { Link } from 'react-router-dom';
import { ImArrowUpRight2 } from 'react-icons/im';

const CourseSlider = () => {
  const courses = [{
    id: 1,
    image: courseImage1,
    rating: 4.3,
    num_of_reviews: 180,
    title: "Responsive Portfolio Website Using HTML, CSS & JavaScript",
    time: "1.2H",
    level: "Beginner",
    views: "1.2K+",
    downloads: "180+",
    user: "Akash Mahapatra",
    rate: "₹246",
    free: "FREE"
  },
  {
    id: 2,
    image: courseImage2,
    rating: 4.5,
    num_of_reviews: 93,
    title: "Comming Soon 3D Template using HTML, CSS & JavaScript",
    time: "2.3H",
    level: "Intermediate",
    views: "1.2K+",
    downloads: "230+",
    user: "Aman Aggarwal",
    rate: "₹339",
    free: "FREE"
  },
  {
    id: 3,
    image: courseImage3,
    rating: 4.5,
    num_of_reviews: 131,
    title: "3D Flip Card Carousel on Hover using only HTML & CSS",
    time: "1.2H",
    level: "Intermediate",
    views: "500+",
    downloads: "60+",
    user: "Aman Aggarwal",
    rate: "₹79",
    free: "FREE"
  },
  {
    id: 4,
    image: courseImage4,
    rating: 4.5,
    num_of_reviews: 91,
    title: "Login form with Email & Mobile Verification using Bootstrap & HTML",
    time: "45m",
    level: "Beginner",
    views: "1.1K+",
    downloads: "90+",
    user: "Kunal",
    rate: "₹35",
    free: "FREE"
  },
  {
    id: 5,
    image: courseImage5,
    rating: 4.5,
    num_of_reviews: 72,
    title: "Glassmorphism card Carousel using HTML & CSS",
    time: "1.1H",
    level: "Intermediate",
    views: "1.3K+",
    downloads: "90+",
    user: "Saarah Sharma",
    rate: "₹79",
    free: "FREE"
  }

  ]
  return (
    <section className='aist-courses'>
      <h1>Our Most Popular Courses</h1>
      <div className='course-slider'>
          {
            courses.map(course => (
                <CourseCard
                  key={course.id}
                  image={course.image}
                  rating={course.rating}
                  num_of_reviews={course.num_of_reviews}
                  title={course.title}
                  time={course.time}
                  level={course.level}
                  views={course.views}
                  downloads={course.downloads}
                  user={course.user}
                  rate={course.rate}
                  free={course.free}
                />
            ))
          }
      </div>
      <Link to="/" className="all-courses-link">
        Browse All Courses <ImArrowUpRight2 />
      </Link>
    </section >
  )
}

export default CourseSlider
