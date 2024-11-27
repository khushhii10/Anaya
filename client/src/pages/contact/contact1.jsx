import React from 'react'
import './contact1.css'
import {FaEnvelope,FaAddressBook,FaPhoneAlt,FaLocationArrow} from 'react-icons/fa'

const contact1 = () => {
  return (
    <div className='contact1 container'>
    <div className='contact1-col'>
        <h3>Send us a Message</h3>
        <ul>
            <li><FaPhoneAlt />+91 7020044091</li>
            <li><FaEnvelope />info@suvidhafoundationedutech.org</li>
            <li><FaLocationArrow />Office Headquarters-</li>
            <li>Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner Nagpur, Maharashtra 441102</li>
            <li>Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</li>
        </ul>
    </div>

    <div className='contact1-col'>
    <form>
      <label>Your Name</label>
      <input type='text' name='name' placeholder='Enter Your Name' required/>
      <label>Phone Number</label>
      <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
      <label>Write Your Message Here</label>
      <textarea name='message' rows="6" placeholder='Enter you Message Here' required />
      <button type='submit' className='btn1'>Submit Now</button>
    </form>
    </div>
    </div>
  )
}

export default contact1;