import clsx from "clsx";
import React, { useContext, useEffect, useRef, useState } from "react";
import { handleGetElement } from "../../../functions/handleDatePicker";
import SearchContext from "../../../store/SearchContext";
import CloseBtn from "../../../components/UI/CloseBtn";

import "./SearchItem.scss";

const SearchItem = (props) => {
  const { id, heading, subheading, isInput, button, popup } = props;
  const [state, dispatch] = useContext(SearchContext);
  const { checkInDate, checkOutDate, guest: guestState , isSubmit, searchValue ,navId} = state;

  const inputRef = useRef();
  let description = null;
  const [inputValue, setInputValue] = useState(null);

  const handleOpenPopup = (e) => {
    dispatch({ type: "SET_ACTIVE_SEARCH_ITEM", id: id });
  };

  if (id === "checkin-item" && checkInDate) {
    const { monthPlus: month, year, date } = handleGetElement(checkInDate);
    description = `${date} th ${month}`;
  } else if (id === "checkout-item" && checkOutDate) {
    const { date, monthPlus: month } = handleGetElement(checkOutDate);
    description = `${date} th ${month}`;
  } else if (id === "guest-item" && guestState.adult !== 0) {
    const { adult, children, baby, pet } = guestState;
    description = `${adult} khách${
      children > 0 ? `, ${children} trẻ em` : ""
    } ${baby > 0 ? `, ${baby} em bé` : ""} ${
      pet > 0 ? `, ${pet} thú cưng` : ""
    }`;
  } else if (id === "join-item" && checkInDate) {
    const { monthPlus: inMonth, date: inDate } = handleGetElement(checkInDate);
    description = `${inDate} thg ${inMonth}`;

    if (checkOutDate) {
      const { monthPlus: outMonth,date: outDate } = handleGetElement(checkOutDate);
      description += ` - ${outDate} thg ${outMonth}`
    }
  }

  const handleClickCloseBtn = (e) => {
    e.preventDefault();
    if (id === "checkin-item") dispatch({ type: "CLEAR_CHECK_IN_DATE" });
    else if (id === "checkout-item") dispatch({ type: "CLEAR_CHECK_OUT_DATE" });
    else if (id === "place-item") inputRef.current.value = "";
    else if (id === "guest-item") dispatch({ type: "CLEAR_GUEST_QUANTITY"});
    else if (id === "join-item") {
      dispatch({ type: "CLEAR_CHECK_IN_DATE" });
      dispatch({ type: "CLEAR_CHECK_OUT_DATE" });
    }

  };

  const handleOnChangeInput = (e) => {
    setInputValue(e.target.value);
    dispatch({ type: "SET_SEARCH_VALUE", value: e.target.value});
  };

  useEffect( () => {
    if (id === "place-item" && isSubmit && !searchValue) {
      inputRef.current.focus();
      dispatch({ type: "SET_ACTIVE_SEARCH_ITEM", id: id})
    }

  }, [isSubmit, searchValue, navId])

  return (
    <div
      id={id}
      className={clsx("search-item", {
        ["search-item--active"]: state.searchId === id,
      })}
      onClick={handleOpenPopup}
    >
      <h4 className="search-item__heading">{heading}</h4>
      {!isInput ? (
        <h5
          className={clsx("search-item__subheading u-sub-heading", {
            "search-item__subheading--description": description,
          })}
        >
          {description ? description : subheading}
        </h5>
      ) : (
        <input
          type="text"
          placeholder={subheading}
          className="search-item__input"
          ref={inputRef}
          onChange={handleOnChangeInput}
        />
      )}
      {button && button}

      {state.searchId === id && popup}

      { ((id === "checkin-item" && checkInDate) ||
        (id === "checkout-item" && checkOutDate) ||
        (inputRef.current && inputRef.current.value !== "") ||
        inputValue ||
        guestState.adult !== 0 || (id==="join-item" && (checkInDate || checkOutDate)) ) &&
        state.searchId === id && <CloseBtn onClick={handleClickCloseBtn} positionClass = {(id === "guest-item" || id === "join-item") ? "u-right-65" : false }/>}
    </div>
  );
};

export default SearchItem;
