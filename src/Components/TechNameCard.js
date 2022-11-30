import React from 'react'
import "../Styles/TechNameCard.scss"

const TechNameCard = ({
  name,image
}) => {
  return (
    <div className='tech-card'>
          <img src={image} alt="" />
            <h3>{name}</h3>
    </div>
  )
}

export default TechNameCard
