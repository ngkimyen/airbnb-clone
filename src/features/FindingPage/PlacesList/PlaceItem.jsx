import React from "react";
import AbsoluteHeartBtn from "../../../components/UI/AbsoluteHeartBtn";
import PlaceImageSlider from "./PlaceImageSlider";
import "./PlaceItem.scss";

const PlaceItem = ({ data }) => {
  return (
    <div className="place-item">
      <AbsoluteHeartBtn />
      <PlaceImageSlider images={data.images}/>
      <div className="place-item__info">
        <div className="place-item__heading">
          <h4 className="place-item__location">{data.location}</h4>
          <p className="place-item__price">{data.price} / đêm</p>
        </div>
        <div className="place-item__description">
          <p className="place-item__distance">Cách {data.distance}</p>
          <p className="place-item__date">{data.date}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;
