import React, { useState } from "react";
import "./PlaceContainer.scss";
import PLACE_LIST from "../../store/PlaceList";
import PlaceList from "./PlacesList/PlaceList";
import PlaceNavigationWrapper from "./PlaceNavigationWrapper";

const initialId = "farm_place";

const PlacesContainer = () => {
  const [placeList, setPlaceList] = useState(PLACE_LIST[initialId]);

  const handleGetData = (id) => {
    setPlaceList(PLACE_LIST[id]);
  };

  return (
    <div  style={{background: "var(--background-color)"}}>
      <div className="container u-padding">
        <nav className="places-navigation">
          <PlaceNavigationWrapper
            initialId={initialId}
            onGetData={handleGetData}
          />
        </nav>
        <PlaceList data={placeList} />
      </div>
    </div>
  );
};

export default PlacesContainer;
