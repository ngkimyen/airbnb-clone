import React, { useContext } from "react";
import SearchContext from "../../../../../store/SearchContext";
import GuestItemControl from "./GuestItemControl";
import "./GuestPickerItem.scss";

const GuestPickerItem = ({ id, heading, description }) => {
  const [state, dispatch] = useContext(SearchContext);
  const { guest: guestState } = state;

   const handleClick = (e) => {
      e.preventDefault();
      
      if (guestState.adult === 0)
         if (e.target.id === "increment") return dispatch({
            type: "SET_GUEST_QUANTITY",
            guest: { ...guestState, [`${id}`] : guestState[id] + 1 , adult: 1},
            });

      if (e.target.id === "increment") {
         dispatch({
         type: "SET_GUEST_QUANTITY",
         guest: { ...guestState, [`${id}`] : guestState[id] + 1 },
         });
      } else {
      dispatch({
         type: "SET_GUEST_QUANTITY",
         guest: { ...guestState, [`${id}`] : guestState[id] - 1 },
         });
      }
   };  

  return (
    <div className="guest-item" id={id}>
      <div className="guest-item__content">
        <h3 className="guest-item__heading">{heading}</h3>
        {id === "pet" ? (
          <button className="guest-item__link">{description}</button>
        ) : (
          <h5 className="guest-item__description u-sub-heading ">
            {description}
          </h5>
        )}
      </div>

      <GuestItemControl id={id} onClick={handleClick} quantity={guestState[id]} />
    </div>
  );
};

export default GuestPickerItem;
