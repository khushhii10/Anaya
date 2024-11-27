import React from 'react'
import './college.css'
import collab1 from '../../assets/collab-1.jpg'
import collab2 from '../../assets/collab-2.jpg'
import collab3 from '../../assets/collab-3.jpg'

const College = () => {
  return (
    <div className='college'>
       <img src={collab2} alt=' ' />
        <img src={collab1} alt=' ' />
        <img src={collab3} alt=' ' />
    </div>
  )
}

export default College;
