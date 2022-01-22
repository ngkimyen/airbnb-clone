import React from "react";
import Slider from "react-slick";
import "./PlaceImageSlider.scss";

const PlaceImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    className: "place-image-slider",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };


  return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={`slider-img${index}`} className="slider-box">
            <img src={image} />
          </div>
        ))}
      </Slider>
  );
};

export default PlaceImageSlider;
