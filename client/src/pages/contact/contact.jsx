import React from 'react'
import './contact.css'
import { NavLink } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import Title from '../../components/title/title'
import Contact1 from './contact1'

const Contact = () => {
  return (
    <div>
    <div className='contact container'>
    <div className='hero-text'>
        <h1>Contact Us</h1>
        <div className='disflex'>
            <NavLink to='/'><h2>HOME</h2></NavLink>
            <h2>/</h2>
            <NavLink to='/contact'><h2>CONTACTS</h2></NavLink>
        </div>
    </div>
    </div>
    <Title subTtile="Get In Touch" title="Contact for any query" />
    <Contact1 />
    <Footer />
</div>
  )
}

export default Contact;