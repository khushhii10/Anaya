import React from 'react'
import './programs1.css'
import program1 from "../../../assets/TreePlantation.png"
import program2 from '../../../assets/Fundraising.jpg'

const eventss = () => {
  return (
    <div className='pehli'>
      <div className='programs'>
        <div className='program'>
          <img src={program1} alt='' />
          <div className='caption'>
            <h2>Tree Plantation</h2>
            <p>Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.</p>
          </div>
        </div>
        <div className='program'>
          <img src={program2} alt='' />
          <div className='caption'>
            <h2>Fundraising Events</h2>
            <p>Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default eventss;