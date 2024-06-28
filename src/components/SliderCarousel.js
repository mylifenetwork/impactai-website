import React from "react";
import {} from "../style/slidercarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whattheydo from "../data/whattheydo";
function SliderCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-carousel-container">
      <Slider {...settings}>
        {whattheydo.map((item) => {
          return (
            <div className="slider-card">
              <div className="slider-card-s">
                <div className="slider-card-image-container">
                  <img src={item.photo} alt="Feature" />
                </div>
                <div className="slider-card-text">
                  <h1>{item.headline}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderCarousel;
