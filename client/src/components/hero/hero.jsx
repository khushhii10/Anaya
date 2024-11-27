import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import {NavLink} from 'react-router-dom'


const images = [
  { url: "https://t3.ftcdn.net/jpg/06/64/36/56/360_F_664365620_eGm4Qp7OhVkYltslzOSi4SnpJWJLTmne.jpg" },
  { url: "https://i.ytimg.com/vi/xDAuWErAy1c/maxresdefault.jpg" },
  { url: "https://m.economictimes.com/thumb/msid-83958385,width-1200,height-900,resizemode-4,imgsize-316001/1.jpg" },
  { url: "https://t3.ftcdn.net/jpg/01/19/83/98/360_F_119839864_zO6SgHpnl0qCKxYbJ3BlbAR9RkqKxXkn.jpg" },
];



function Hero() {  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <SimpleImageSlider
        padding={0}
        margin={0}
        width={"100%"}
        height={"100%"}
        images={images}
        showBullets={true}
        showNavs={true}
      >
        {/* Optional: Adjust this based on whether your slider supports children */}
      </SimpleImageSlider>

      <div style={{
        position: 'absolute',
        top: '113px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 1,
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '80px',
          fontWeight: '600',
          margin: '0',
        }}>
          Bringing smile to millions
        </h1>
        <div style={{ marginTop: '20px' }}>
          <button style={{
            marginTop: '10px',

            padding: '14px 25px',
            borderRadius: '30px',
            fontSize: 'large',
            cursor: 'pointer',
            border: 0,
            outline: 0,
            background: 'none',
            color: 'white',
            border: '3px solid blue'
          }}>
            <NavLink to='/help'> Donate Now </NavLink>
            </button>
          <button style={{
            marginTop: '10px',
            padding: '14px 25px',
            marginLeft: '20px',
            borderRadius: '30px',
            fontSize: 'large',
            cursor: 'pointer',
            border: 0,
            outline: 0,
            background: 'none',
            color: 'white',
            border: '3px solid blue'
          }} >
           <NavLink to='/VideoPlayer'> Watch Video </NavLink> </button>
        </div>
      </div>
    </div>
  )

}

export default Hero;
