import React from 'react'
import { ImArrowUpRight2 } from 'react-icons/im'
import { Link } from 'react-router-dom'
import "../Styles/EventSlider.scss"
import EventCard from './EventCard'
const EventSlider = () => {
  return (
      <div className='event-slider-container'>
          <h1 className='event-container-heading'>Upcoming Events</h1>
          <p className='event-container-para'>AIST Meetup Events</p>
          <div className="event-slider">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
          </div>
          <Link to="/" className="all-courses-link">
              View All Events<ImArrowUpRight2 />
          </Link>
    </div>
  )
}

export default EventSlider
