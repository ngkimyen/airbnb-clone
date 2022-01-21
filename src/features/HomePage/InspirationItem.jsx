import React from 'react';
import "./InspirationItem.scss";

const InspirationItem = ({data}) => {
   return (
      <div className="inspiration-item">
         <img src={data.image} className="inspiration-item__img" />
         <div className="inspiration-item__info" style={{background: data.color}}>
            <h3 className="inspiration-item__location">{data.location}</h3>
            <p className="inspiration-item__distance">Cách {data.distance}</p>
         </div>
      </div>
   );
};

export default InspirationItem;