import React from 'react'
import QRCODE from '../../assets/QR-Codes.png'
import './help1.css'


const help1 = () => {
  return (
    <div className='help1 container'>
    <div className='help1-col'>
        <h3>For Indian Donors</h3>
        <ul>
            <li>Bank Of Baroda</li>
            <li>City: Nagpur</li>
            <li>Contact No: +91 8010996763</li>
            <li>Account Name: Anaya Organization</li>
            <li>Anaya Account No: 97840100027609</li>
            <li>IFSC Code: BARB0DBKPAR</li>
        </ul>
    </div>

    <div className='help1-col'>
    <h4>QR Code</h4>
    <img src={QRCODE} alt='' style={{width:'250px', height:'300px'}}/>
    </div>
    </div>
  )
}

export default help1;