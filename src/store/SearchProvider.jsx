import React, { useReducer } from "react";
import SearchContext from "./SearchContext";

const initGuest = {
    adult: 0,
    children : 0,
    baby : 0,
    pet : 0,
}

const initValue = {
  navId: "place",
  searchId: null,
  showSearchBlock: true,
  isSticky: false,
  searchValue : null,
  checkInDate: null,
  checkOutDate: null,
  guest : initGuest,
  isSubmit : false,
};

const reducer = (state, payload) => {
  if (payload.type === "SET_ACTIVE_NAV")
    return {...state,navId: payload.id };

  if (payload.type === "SHOW_SEARCH_BLOCK")
    return { ...state, showSearchBlock: true, isSticky: false };
  if (payload.type === "HIDE_SEARCH_BLOCK")
    return {...state, showSearchBlock: false, isSticky: false };
  if (payload.type === "SET_STICKY_SEARCH_BLOCK")   
    return {...state, isSticky: true };
  if (payload.type === "UNSET_STICKY_SEARCH_BLOCK")   
  return {...state, isSticky: false };

  if (payload.type === "SET_ACTIVE_SEARCH_ITEM")   
  return {...state, searchId: payload.id };
  if (payload.type === "UNSET_ACTIVE_SEARCH_ITEM")   
  return {...state, searchId: null };

  if (payload.type === "SET_CHECK_IN_DATE")   
  return {...state, checkInDate: payload.date };
  if (payload.type === "CLEAR_CHECK_IN_DATE")   
  return {...state, checkInDate: null };
  if (payload.type === "SET_CHECK_OUT_DATE")   
  return {...state, checkOutDate: payload.date };
  if (payload.type === "CLEAR_CHECK_OUT_DATE")   
    return {...state, checkOutDate: null };

  if (payload.type === "SET_GUEST_QUANTITY") 
    return {...state, guest : payload.guest }
    if (payload.type === "CLEAR_GUEST_QUANTITY") 
    return {...state, guest : initGuest }

    if (payload.type === "SET_SEARCH_VALUE") 
    return {...state, searchValue : payload.value }
    if (payload.type === "CLEAR_SEARCH_VALUE") 
    return {...state, searchValue : null }

  if (payload.type === "SUBMIT_SEARCH") 
  return {...state, isSubmit : true }
  if (payload.type === "CLEAR_SUBMIT_SEARCH") 
  return {...state, isSubmit : null }

  if (payload.type === "CLEAR_SEARCH_BLOCK_VALUE") 
  return {...initValue, isSticky: state.isSticky, showSearchBlock: state.showSearchBlock}

};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initValue);

  return (
    <SearchContext.Provider value={[state, dispatch]}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
