import React from "react";
import Slider from "react-slick";
import "./PlaceImageSlider.scss";

const PlaceImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };


  return (
    <div className="container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={`slider-img${index}`}>
            <img src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PlaceImageSlider;
