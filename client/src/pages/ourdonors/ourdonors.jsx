import React from 'react'
import './ourdonors.css'
import { NavLink } from 'react-router-dom'
import Title from '../../components/title/title'
import Footer from '../../components/footer/footer'
import Donorlist from './donorlist'

const Ourdonors = () => {
  return (
    <div>
    <div className='donors container'>
    <div className='hero-text'>
        <h1>Meet Our Donors</h1>
        <div className='disflex'>
            <NavLink to='/'><h2>HOME</h2></NavLink>
            <h2>/</h2>
            <NavLink to='/contact'><h2>OUR DONORS</h2></NavLink>
        </div>
    </div>
    </div>
    <Title subTtile="Every contribution brings us closer to our goals" title="Thank You For Your Contribution" />
    <Donorlist />
    <Footer/>
    </div>
  )
}

export default Ourdonors;