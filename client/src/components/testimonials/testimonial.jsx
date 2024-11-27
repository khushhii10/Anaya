import React, { useRef } from 'react'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/img1.jpg'
import user2 from '../../assets/img2.jpg'
import user3 from '../../assets/img3.jpg'
import next_icon from '../../assets/next-icon.png'
import './testimonial.css'

const Testimonial = () => {

    const slider=useRef();
    let tx=0;

   const slideForward=()=>{
    if(tx > -50){
     tx-=25;
    }
   slider.current.style.transform=`translateX(${tx}%)`
   }

   const slideBackward=()=>{
    if (tx < 0) {
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
   }

  return (
    <div className='testimonial'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user1} alt='' />
                            <div>
                                <h3>Ananya Tripathi</h3>
                            </div>
                        </div>
                        <p>Regular meeting really helped in systematic learning as well as working</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user2} alt='' />
                            <div>
                                <h3>Sanjana Tunk</h3>
                            </div>
                        </div>
                        <p>Regular meeting really helped in systematic learning as well as working</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user3} alt='' />
                            <div>
                                <h3>Manya Sahni</h3>
                            </div>
                        </div>
                        <p>Regular meeting really helped in systematic learning as well as working</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

  )
}

export default Testimonial;