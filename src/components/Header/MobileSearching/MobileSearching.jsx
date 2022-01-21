import clsx from "clsx";
import React, {useState } from "react";
import MobileSearchPopUp from "./MobileSearchPopUp";
import {useTransition, animated} from "react-spring";

import "./MobileSearching.scss";

const MobileSearching = ({ isSticky }) => {
   const [showPopUp, setShowPopUp] = useState(false);

   const transition = useTransition(showPopUp, {
      from: { y:1000, opacity: 0},
      enter: {x: 0, y:0, opacity: 1},
      leave: {y:1000, opacity: 0}
   })

   const handleClick = (e) => {
      setShowPopUp(true);
   }

   const handleClose = () => {
      setShowPopUp(false);
   }

  return (
    <div
      className={clsx("mobile-searching", {
        "mobile-searching--sticky": isSticky,
      })}
    >
      <div className="mobile-searching__wrap" onClick={handleClick}>
        <i className="fas fa-search mobile-searching__icon"></i>
        <p className="mobile-searching__text">Bạn sắp đi đâu?</p>
      </div>

      {transition((style, item) => item && <MobileSearchPopUp style={style} onClose={handleClose}/>)}
    </div>
  );
};

export default MobileSearching;
