import React from 'react'
import "./AnnoncmentSlider.css"
import Slider from "react-slick";

const AnnoncmentSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          navs: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          navs: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          navs: false,
        }
      }
    ]
  };
  return (
    <div className="AnnoncmentSlider">
      <Slider {...settings}>
        <div>
          <h6>Annoncment strip</h6>
        </div>
        <div>
          <h6>Annoncment strip</h6>
        </div>
        <div>
          <h6>Annoncment strip</h6>
        </div>
        <div>
          <h6>Annoncment strip</h6>
        </div>
        <div>
          <h6>Annoncment strip</h6>
        </div>
        <div>
          <h6>Annoncment strip</h6>
        </div>
      </Slider>
    </div>
  );
}

export default AnnoncmentSlider
