import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderOptions.scss";
import LanguageBtn from "../../UI/GlobalIcon";
import UserIcon from "../../UI/UserIcon";
import clsx from "clsx";

const HeaderOptions = ({isLight, isSticky}) => {


  return (
    <nav className={clsx("headerOptions", {"headerOptions--light": isLight || isSticky})}>
      <NavLink to="/" className="headerOptions__item headerOptions__link">
          Trở thành chủ nhà
      </NavLink>
      <NavLink to="/" className="headerOptions__item headerOptions__link">
        <div className="headerOptions__svg">
          <LanguageBtn />
        </div>
      </NavLink>
      <div className="headerOptions__item">
        <span className="headerOptions__user">
         <i className="fas fa-bars headerOptions__icon"></i>
         <div className="headerOptions__svg--user ">
            <UserIcon />
          </div>
        </span>
      </div>
    </nav>
  );
};

export default HeaderOptions;
