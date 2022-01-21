import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./BannerContainer.scss";
import LinkButton from './LinkButton';

const BannerContainer = ({url,cssClass, heading, headingType , btnText, btnGradient, link}) => {
   return (
      <div className={clsx ("banner-container",cssClass )} style={{backgroundImage: `url(${url})`}}>
         <h2 className={clsx("banner-container__heading", `banner-container__heading--${headingType}`)}>{heading}</h2>

         <NavLink to={link}>
            <LinkButton isGradient={btnGradient} text={btnText}/>
         </NavLink>
      </div>
   );
};

export default BannerContainer;