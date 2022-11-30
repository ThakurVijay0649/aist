import React from 'react'
import "../Styles/TechSlider.scss"
import TechNameCard from './TechNameCard'
import html from "../images/html5.png";
import css from "../images/css3.png";
import reactNative from "../images/reactJs.png";
import nodeJs from "../images/nodeJs.png";
import vueJs from "../images/vueJs.png";
import Cplus from "../images/C++.png";
import cImage from "../images/c.png";
import PythonImage from "../images/python.png";
import JavaImage from "../images/java.png";


const TechSlider = () => {
    const coursesName = [
        {
            id: 1,
            name: "HTML",
            image: html
        },
        {
            id: 2,
            name: "CSS",
            image: css
        },
        {
            id: 3,
            name: "React Native",
            image: reactNative
        },
        {
            id: 4,
            name: "Node Js",
            image: nodeJs
        },
        {
            id: 5,
            name: "Vue Js",
            image: vueJs
        },
        {
            id: 6,
            name: "C++",
            image: Cplus
        },
        {
            id: 7,
            name: "C",
            image: cImage
        },
        {
            id: 8, 
            name: "Python",
            image: PythonImage
        },
        {
            id: 9,
            name: "Java",
            image: JavaImage
        }
    ]
    return (
        <div className='tech-slider-container'>
            <h1>What will you learn</h1>
            <div className="tech-slider">
                {
                    coursesName.map((course) => (
                        <TechNameCard
                            key={course.id}
                            name={course.name}
                            image={course.image}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TechSlider
