import React from 'react'
import "../Styles/CourseCard.scss"
import userImg from "../images/avatars.svg"
import { AiTwotoneStar } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaEye, FaLevelUpAlt } from 'react-icons/fa';
import { ImDownload3 } from 'react-icons/im';

const CourseCard = ({
    image,
    rating,
    num_of_reviews,
    title,
    time,
    level,
    views,
    downloads,
    user,
    rate,
    free,
}) => {
    return (
            <a href='/' className='course-card'>
                <img src={image} alt="" />
                <div className="full-course-info">
                    <p className="rating">
                        <span>{rating}</span>
                        <div className="stars">
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                        </div>
                        <span className="num-of-reviews">({num_of_reviews})</span>
                    </p>
                    <h3>{title}</h3>
                    <div className="course-info">
                        <div className="icon-text">
                            <MdAccessTimeFilled />
                            <p>{time}</p>
                        </div>
                        <div className="icon-text">
                            <FaLevelUpAlt />
                            <p>{level}</p>
                        </div>
                        <div className="icon-text">
                            <FaEye />
                            <p>{views}</p>
                        </div>
                        <div className="icon-text">
                            <ImDownload3 />
                            <p>{downloads}</p>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-img-name">
                            <img src={userImg} alt="" className="user-icon" />
                            <p>{user}</p>
                        </div>
                        <div className="cost">
                            <p className='rate'>{rate}</p>
                            <p className="free">{free}</p>
                        </div>
                    </div>
                </div>
            </a>
    )
}

export default CourseCard
