import React, { useEffect, useRef, useState } from "react";
import StarIcon from "../UI/StarIcon";
import AbsoluteHeartBtn from "../UI/AbsoluteHeartBtn";
import useConvertNumber from "../../custom-hooks/useConvertNumber";
import {useTransition, animated} from "react-spring";
import useViewPort from "../../custom-hooks/useViewPort";
import "./TourItem.scss";

const TourItem = ({ data, isExperienceTour}) => {
  const thumbnailRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const [hover, setHover] = useState(false);
  const [imgCounter, setImgCounter] = useState(0);
  const {isSmall} = useViewPort();

  const handleMouseOver = () => {
    if (isSmall) return;
    if (isExperienceTour) {
      setHover(true);
      return
    }

    setPlayVideo(true);
  };

  const handleMouseOut = () => {
    if (isSmall) return;
    if (isExperienceTour) {
      setHover(false);
      setImgCounter(0);
      return
    }
    setPlayVideo(false);
  };

  useEffect(() => {    
    if (!window.matchMedia('(hover: hover)').matches) return;

    thumbnailRef.current.addEventListener("mouseover", handleMouseOver);
    thumbnailRef.current.addEventListener("mouseout", handleMouseOut);

    return () => {
      thumbnailRef.current.removeEventListener("mouseover", handleMouseOver);
      thumbnailRef.current.removeEventListener("mouseout", handleMouseOut);
    };
    
  }, []);

  useEffect( () => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    if (!isExperienceTour || !hover || isSmall) return;
    let counter = 0

    const interval = setInterval ( () => {
      if (counter >= data.image.length - 1){
        counter = 0;
        setImgCounter(counter)
      }
      else {
        counter += 1;
        setImgCounter(counter)

      }
    }, 1500)

    return () => clearInterval(interval);
  }, [hover])

  const convertedRate = useConvertNumber(data.rating.rate);
  const convertedLocation = data.location && data.location.slice(
    data.location.lastIndexOf(",") + 1
  );

  const transitions = useTransition(imgCounter, {
    from: { transform: 'scale(1)' },
    enter: { transform: 'scale(1.3)' },
    config : {duration: 200},
  })

  return (
    <div className="tour-item">
      <div className="tour-item__thumbnail" ref={thumbnailRef}>
        {!playVideo ? (
         transitions( (styles,index) => 
            <animated.img style={hover ? styles : null} src={!isExperienceTour ? data.image : data.image[index]}  className="tour-item__img tour-item__thumbnail--visual" />)
        ) : (
          <video  
            className="tour-item__video tour-item__thumbnail--visual"
            muted
            autoPlay
            loop
            preload="true"
          >
            <source src={data.video} type="video/mp4" />
          </video>
        )}
        <AbsoluteHeartBtn />
      </div>

      <main>
        <div className="tour-item__info">
          <StarIcon />
          <span className="tour-item__info--rate">{convertedRate}</span>
          <span className="tour-item__info--quantity">
            ({data.rating.quantity})
          </span>
          {convertedLocation && <span className="tour-item__info--location">
            {convertedLocation}
          </span>}
        </div>
        <h4 className="tour-item__name">{data.name}</h4>
        <div className="tour-item__price">
          <span className="u-bold">Từ {data.price}</span> <span>/người</span>
        </div>
      </main>
    </div>
  );
};

export default TourItem;
