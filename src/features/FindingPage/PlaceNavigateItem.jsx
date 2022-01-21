import clsx from "clsx";
import React from "react";
import "./PlaceNavigateItem.scss";

const PlaceNavigateItem = ({ img, content, id, navId, onClick }) => {
   return (
    <div id={id} onClick={onClick} className={clsx("places-navigate-item", { "active": id === navId })}>
      {id === navId && <img src={img} alt="navigate img" />}
      <p className="places-navigate-item__content">{content}</p>
    </div>
  );
};

export default PlaceNavigateItem;
