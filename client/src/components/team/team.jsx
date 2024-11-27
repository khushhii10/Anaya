import React, { useState } from 'react'
import './team.css'
import ReactCardFlip from 'react-card-flip'
import Shobha from '../../assets/Shobha_Motghare.jpeg'
import Payal from '../../assets/Payal_Badhe.jpg';
import Nilima from '../../assets/Nilima_Kalambe.jpg';
import Bharti from '../../assets/Bharti_Shendre.jpg'
import {FaLinkedin as LinkedIn} from 'react-icons/fa'

const Team = () => {

    const [flippedState, setFlippedState]=useState({
        card1:false,
        card2:false,
        card3:false,
        card4:false,
    });

    const flipCard=(cardKey)=>{
        setFlippedState((prevState)=>({
         ...prevState,
         [cardKey]: !prevState[cardKey],
        }));
    };


  return (
    <div className='teams'>
        <div className='team'>
             <ReactCardFlip flipDirection='horizontal' isFlipped={flippedState.card1}>
                <div className='card'  onClick={() => flipCard('card1')}>
                    <img src={Shobha} alt='' />
                </div>
                <div className='card card-back'  onClick={() => flipCard('card1')}>
                    <h3>Shobha Motghare</h3>
                    <h4>Secretary</h4>
                    <a href='https://www.linkedin.com/in/shobha-motghare-0a6a57238/' target='_blank' rel='noopener noreferrer'>
              <LinkedIn className='linkedin-icon' />
            </a>
                </div>
             </ReactCardFlip>
        </div>

        <div className='team'>
             <ReactCardFlip flipDirection='horizontal'  isFlipped={flippedState.card2}>
                <div className='card' onClick={() => flipCard('card2')}>
                <img src={Payal} alt='' />
                </div>
                <div className='card card-back' onClick={() => flipCard('card2')}>
                <h3>Payal Badhe</h3>
                <h4>President</h4>
                <a href='https://in.linkedin.com/in/payal-badhe-531756aa?trk=public_profile_browsemap-profile' target='_blank' rel='noopener noreferrer'>
              <LinkedIn className='linkedin-icon' />
            </a>
                </div>
             </ReactCardFlip>
        </div>

        <div className='team'>
             <ReactCardFlip flipDirection='horizontal' isFlipped={flippedState.card3}>
                <div className='card' onClick={() => flipCard('card3')}>
                <img src={Bharti} alt='' />
                </div>
                <div className='card card-back' onClick={() => flipCard('card3')}>
                <h3>Bharti Shendre</h3>
                <h4>Treasurer</h4>
                <a href='https://in.linkedin.com/in/bharti-shendre-6517b928a?trk=public_profile_browsemap-profile' target='_blank' rel='noopener noreferrer'>
              <LinkedIn className='linkedin-icon' />
            </a>
                </div>
             </ReactCardFlip>
        </div>

        <div className='team'>
             <ReactCardFlip flipDirection='horizontal' isFlipped={flippedState.card4}>
                <div className='card' onClick={() => flipCard('card4')}>
                <img src={Nilima} alt='' />
                </div>
                <div className='card card-back' onClick={() => flipCard('card4')}>
                <h3>Nilima Kalambe</h3>
                <h4>Advisor</h4>
                <a href='https://in.linkedin.com/in/nilima-kalambe-b275a1245?trk=public_profile_browsemap-profile' target='_blank' rel='noopener noreferrer'>
              <LinkedIn className='linkedin-icon' />
            </a>
                </div>
             </ReactCardFlip>
        </div>
    </div>
  )
}

export default Team;