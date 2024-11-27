import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

import './hero.css'

const images = [
  { url: "src\assets\food1.jpg" },
  { url: "../assets/food2.jpg" },
  { url: "../assets/food3.jpg" },
  { url: "../assets/Suvidhaabout.jpg" }
];

function Hero() {
  return (
    <div className='hero'>
    <div>
    <SimpleImageSlider
        width={"100%"}
        height={"90vh"}
        images={images}
        showBullets={true}
        showNavs={true}
      />



        <div className='hero-text'>
          <h1>Bringing smiles to Millions</h1>
          <div className='disflex'>
            <button>Donate Now</button>
            <button>Watch Video</button>
          </div>
        </div>
      
      
      </div>
        
      
    </div>

  )

}



export default Hero;


