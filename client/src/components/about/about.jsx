import React from 'react'
import './about.css'
import about_img from '../../assets/food4.png'


const about = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='' className='about-img' />

      </div>
      <div className='about-right'>
        <h2 style={{ fontFamily: 'Monotype Corsiva' }}>Anaya</h2>
        <p style={{textJustify: 'auto',textAlign: 'justify'}}>Anaya is an initiative that uses technology to distribute surplus food among needy and hungry people.There are 189.2 million undernourished people in India alone. The aim was to not let anyone sleep hungry, but we knew that was far-fetched. So, we decided to at least take one tiny step towards this giant issue. 'Anaya' is our initiative for this cause.
          Anaya is our commitment towards the community to use excess cooked food to serve the underserved people. With this initiative, we help users reduce food wastage and make better and right use of their surplus food. From social events to parties organized at home, there are several instances where you have perfectly good food left with you in large quantities. However, it becomes useless by the next day or so. Instead of throwing the food away, we urge people to let the food reach the right mouths. Join hands with us today! A little thought on your part can mean the world to others!</p>


      </div>
    </div>

  )
}

export default about;