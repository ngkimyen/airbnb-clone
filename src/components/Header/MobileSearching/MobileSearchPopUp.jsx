import React, { useEffect, useRef } from "react";
import LocationPopUp from "../../../features/HomePage/SearchBlock/SearchPopUp/LocationPopUp";
import { PrevButton } from "../../UI/PrevNextButton";
import {animated} from "react-spring";
import "./MobileSearchPopUp.scss";

const MobileSearchPopUp = ({ onClose, style }) => {
  const inputRef = useRef();

   useEffect(() => {
      inputRef.current.focus();
   }, []);

  return (
    <animated.div className="m-search-popup" style={style}>
      <div className="m-search-popup__heading">
        <PrevButton isBig onClick={onClose} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Bạn sẽ đi đâu?"
          className="m-search-popup__input"
        />
      </div>

      <LocationPopUp isMobile />
    </animated.div>
  );
};

export default MobileSearchPopUp;
