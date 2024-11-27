import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './photos.css'
import gal1 from '../../assets/g1.jpg'
import gal2 from '../../assets/g2.jpg'
import gal4 from '../../assets/g4.jpg'
import gal5 from '../../assets/g5.jpg'
import gal6 from '../../assets/g6.jpg'

const Photos = () => {

  const [slidesToShow, setSlidesToShow] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
      if (window.innerWidth < 550) {
        setSlidesToShow(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:slidesToShow,
        slidesToScroll:slidesToShow,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "#000f38", borderRadius: "50%", padding: "30px",display:"flex",alignItems:"center",justifyContent:"center"}}
            onClick={onClick}
          >
            <i className="fas fa-chevron-right" />
          </div>
        );
      }
    
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "#000f38", borderRadius: "50%", padding: "30px",display:"flex",alignItems:"center",justifyContent:"center"}}
            onClick={onClick}
          >
            <i className="fas fa-chevron-left" />
          </div>
        );
    }

  return (
    <div className='testimonial1 container'>
      <Slider {...settings}>
      <div className='slideimg'>
          <img src={gal1} alt="Testimonial 1" />
          <h2>FREE WORKSHOPS</h2>
        </div>
        <div  className='slideimg'>
          <img src={gal2} alt="Testimonial 2" />
          <h2>BOOK DISTRIBUTION</h2>
        </div>
        <div className='slideimg'>
          <img src={gal4} alt="Testimonial 1" />
          <h2>CLOTH DISTRIBUTION</h2>
        </div>
        <div className='slideimg'>
          <img src={gal5} alt="Testimonial 2" />
          <h2>FREE EDUCATION</h2>
        </div>
        <div className='slideimg'>
          <img src={gal6} alt="Testimonial 3" />
          <h2>WOMAN'S DAY</h2>
        </div>
      </Slider>

     
    </div>
  )
}

export default Photos;