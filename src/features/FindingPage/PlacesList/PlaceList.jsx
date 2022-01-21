import React from 'react';
import PlaceItem from './PlaceItem';
import "./PlaceList.scss";

const PlaceList = ({data}) => {
   
   return (
      <div className="places-list">
         {data.map((place, index) => <PlaceItem key={`place${index}`} data={place}/>)}
      </div>
   );
};

export default PlaceList;