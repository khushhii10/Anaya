import React from 'react'
import './contact.css'
import { NavLink } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import Title from '../../components/title/title'
import Help1 from './help1'


const Contact = () => {
  return (
    <div>
    <div className='help container'>
    <div className='hero-text'>
        <h1>Help Us</h1>
        <div className='disflex'>
            <NavLink to='/'><h2>HOME</h2></NavLink>
            <h2>/</h2>
            <NavLink to='/contact'><h2>HELP</h2></NavLink>
        </div>
    </div>
    </div>
    <Title subTtile="Get In Touch" title="Contact for any query" />
    <Help1 />
   
    <Footer />
</div>
  )
}

export default Contact;