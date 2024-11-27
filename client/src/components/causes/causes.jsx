import React from 'react'
import './causes.css'
import house from '../../assets/house-chimney.png'

const causes = () => {
  return (
    <div className='causes'>
     <div className='cause'>
        <div className='causes-caption' >
            <h2>Healthy Food</h2>
            <p>By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.</p>
            <div className='home-img'>
                <img src={house} alt='' />
            </div>
        </div>
     </div>

     <div className='cause'>
        
        <div className='causes-caption' >
            <h2>Social Awareness</h2>
            <p>We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.</p>
            <div className='home-img'>
                <img src={house} alt='' />
            </div>
        </div>
     </div>

     <div className='cause'>
      
        <div className='causes-caption' >
            <h2>Tree Plantation</h2>
            <p>Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.</p>
            <div className='home-img'>
                <img src={house} alt='' />
            </div>
        </div>
     </div>

     <div className='cause'>
      
        <div className='causes-caption' >
            <h2>Health Care</h2>
            <p>We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.</p>
            <div className='home-img'>
                <img src={house} alt='' />
            </div>
        </div>
     </div>

     <div className='cause'>
       
        <div className='causes-caption' >
            <h2>Primary Education</h2>
            <p>By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.</p>
            <div className='home-img'>
                <img src={house} alt='' />
            </div>
        </div>
     </div>

     <div className='cause'>
       
        <div className='causes-caption' >
            <h2>Social Care</h2>
            <p>Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals</p>
            <div className='home-img'>
                <img src={house} alt='' />
            </div>
        </div>
     </div>
    </div>
  )
}

export default causes;