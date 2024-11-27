import React from 'react';

import {FaFacebook as FB, FaLinkedin as Linkedin,FaInstagram as IG,FaEnvelope,FaPhoneAlt} from 'react-icons/fa'
import './footer.css'


const footer = () => {
  return (
    <div className='mainfooter'>
    <div className='footer'>
       <div className='row'>

        <div className='contact-col'>
            <h3>Anaya</h3>
            <h4>Office Headquarters -</h4>
            <ul>
                <li>Nagpur Headquarter:</li>
                <li>Anaya, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner Nagpur, Maharashtra 441102</li>
                <li>Hyderabad Headquarter:</li>
                <li>Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</li>
            </ul>
         </div>

        <div className='contact-col1'>
        <h3>Certificates</h3>
        <ul>
         <li><a href='#'>80G Certificate</a></li>
         <li><a href='#'>12A Certificate</a></li>
         <li><a href='#'>CSR Certificate</a></li>
        </ul>
        </div>

        <div className='contact-col1'>
        <h3>Useful Links</h3>
        <ul>
         <li><a href='#'>Verify Your Certificate</a></li>
         <li><a href='#'>Privacy Policy</a></li>
        </ul>
        </div>

        <div className='contact-col1'>
        <h3>Contact Us</h3>
        <ul>
        <li><FaPhoneAlt /> +91 7020044091</li>
        <li><FaEnvelope /> info@anayaorganization.org</li>
        </ul>
        <FB className='logo1' />
        <IG className='logo1'/>
        <Linkedin className='logo1'/>
        </div>

        </div>
    </div>
    <hr></hr>
    <div className='below-footer'>
      <p>© Anaya Organization, All Right Reserved.</p>
      <p style={{fontFamily:'Lucida Bright'}} >~ By Anaya</p>
    </div>
    </div>
  )
}

export default footer;