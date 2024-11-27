import React from 'react'
import Hero from '../components/hero/hero'
import Title from '../components/title/title'
import About from '../components/about/about'
import Testimonial from '../components/testimonials/testimonial'
import Causes from '../components/causes/causes'
import Team from '../components/team/team'
import College from '../components/college/college'
import Sustain from '../components/sustain/sustain';


import Footer from '../components/footer/footer'
import '../index.css'

const Home = () => {
  return (
    <div>

      <Hero />

      <div className='container'>
        <About />
      </div>

      <div className='container'>
        <Title subTtile="What We Do?" title="Causes for a Sustainable Future" />

        <Causes />
      </div>

      <div className='container'>
        <Sustain />
      </div>

      <div className='container'>
        <Title subTtile="Meet Our Team" title="Guys behind our charity activities" />
        <Team />
      </div>
      <div className='container'>
        <Title subTtile="Collaboration" title="Empowering Change Together: Our Collaborative Initiatives" />
        <College />
      </div>
      <div className='container'>
        <Title subTtile="Testimonial" title="What people are talking about our charity activities" />
        <Testimonial />
      </div>

      <Footer />
    </div>
  )
}

export default Home;