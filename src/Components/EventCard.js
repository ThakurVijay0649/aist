import React from 'react'
import aws from "../images/aws.png"
import { FaCalendarCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import "../Styles/EventSlider.scss"

const EventCard = () => {
  return (
    <div className='event-card'>
      <img src={aws} alt="" />
      <div className="event-inner-info">
        <h2>AWS Builders Online Series</h2>
        <div className="event-info">
          <div>
            <FaCalendarCheck />
            <p>12th June 2021</p>
          </div>
          <div>
            <IoLocationSharp />
            <p>Online</p>
          </div>
        </div>
        <Link to="/" className="all-courses-link event-ticket-btn">
          Get Ticket
        </Link>
      </div>
    </div>
  )
}

export default EventCard
