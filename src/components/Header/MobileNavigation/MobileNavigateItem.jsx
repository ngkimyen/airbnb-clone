import clsx from 'clsx';
import React from 'react';
import "./MobileNavigateItem.scss";

const MobileNavigateItem = ({svg, heading, isStroke, isActive}) => {
   return (
      <div className={clsx("mobile-navigate-item",{"is-stroke" : isStroke, "is-active" : isActive})}>
         {svg}
         <p className="mobile-navigate-item__heading">{heading}</p>
      </div>
   );
};

export default MobileNavigateItem;