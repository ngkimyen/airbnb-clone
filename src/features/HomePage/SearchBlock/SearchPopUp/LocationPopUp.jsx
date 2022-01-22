import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import "./LocationPopUp.scss";

const LocationPopUp = ({isMobile}) => {
  return (
    <div className={clsx("location-popup u-pop-up", {"location-popup--mobile": isMobile})}>
      <p className="location-popup__heading">Mọi lúc, mọi nơi</p>
      <NavLink to="/airbnb-clone/flexible-finding">
        <button className="location-popup__button">
          <span className="location-popup__text u-gradient-text">Tìm kiếm linh hoạt</span>
          <video autoPlay muted className="location-popup__video" playsInline>
            <source src="./image/location-video.mp4" type="video/mp4" />
          </video>
        </button>
      </NavLink>
    </div>
  );
};

export default LocationPopUp;
