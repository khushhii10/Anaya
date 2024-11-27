import React from 'react'
import './gallery.css'
import {NavLink} from 'react-router-dom'
import Title from '../../components/title/title'
import Footer from '../../components/footer/footer'
import Photos from './photos'

const Gallery = () => {
  return (
    <div>
      <div className='gallery container'>
        <div className='hero-text'>
            <h1>Gallery</h1>
            <div className='disflex'>
            <NavLink to='/'><h2>HOME</h2></NavLink>
            <h2>/</h2>
            <NavLink to='/gallery'><h2>GALLERY</h2></NavLink>
            </div>
        </div>
    </div>
    <Title subTtile="Our Gallery" title="Moments of Impact: Capturing the Journey of Our NGO" />
    <Photos />
    <div className='mainfooter'>
    <Footer />
    </div>
    </div>
  )
}

export default Gallery;