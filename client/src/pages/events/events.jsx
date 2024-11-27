import React from 'react'
import './events.css'
import Title from '../../components/title/title'
import Eventss from './programs/programs1'
import Footer from '../../components/footer/footer'
import {NavLink} from  'react-router-dom'

const Events = () => {
  return (
    <div>
       <div className='events container'>
        <div className='hero-text'>
            <h1>Events</h1>
            <div className='disflex'>
            <NavLink to='/'><h2>HOME</h2></NavLink>
            <h2>/</h2>
            <NavLink to='/events'><h2>EVENTS</h2></NavLink>
            </div>
        </div>
    </div>
    <Title subTtile="Events" title="Our Charity Events: Celebrating Our Impact Together" />
    <Eventss />
    <div className='footstyle'>
    <Footer />
    </div>
    </div>
  )
}
export default Events;