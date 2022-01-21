import clsx from 'clsx';
import React, { useContext } from 'react';
import SearchBtn from '../../../components/UI/SearchBtn';
import SearchContext from '../../../store/SearchContext';
import SearchItem from './SearchItem';
import DatePickerPopUp from './SearchPopUp/DateRangePicker/DatePickerPopUp';
import GuestPickerPopUp from './SearchPopUp/GuestPickerPopUp/GuestPickerPopUp';

import LocationPopUp from './SearchPopUp/LocationPopUp';
import './SearchSection.scss';

const SearchSection = ({position, style}) => {
   const [state,dispatch] = useContext(SearchContext);

   const handleClickSearch = (e) => {
      e.preventDefault();
      dispatch({ type: "SUBMIT_SEARCH"})
   }
   return (
      <section className={clsx("search-section", {["search-section--sticky"]: state.isSticky, [position] : position})} style={style}>
         <form className={clsx("search-block", {
            ["search-block--experience"] : state.navId === "experience"
         })}>
            <SearchItem id="place-item" heading="Địa điểm" subheading="Bạn sắp đi đâu?" isInput popup={<LocationPopUp />}/>
         { state.navId === "place" && 
            <>
            <SearchItem id="checkin-item" heading="Nhận phòng" subheading="Thêm ngày"/>
            <SearchItem id="checkout-item" heading="Trả phòng" subheading="Thêm ngày"/>
            <SearchItem id="guest-item" heading="Khách" subheading="Thêm khách" popup={<GuestPickerPopUp />}/>
            <SearchBtn onClick={handleClickSearch}  isBig/>
            </> }
         { state.navId === "experience" &&  
            <>
               <SearchItem id="join-item" heading="Ngày" subheading="Thêm thời điểm bạn muốn tham gia"/> 
               <SearchBtn onClick={handleClickSearch} isBig/>
            </> }
         {(state.searchId === "checkin-item" || state.searchId === "checkout-item" || state.searchId === "join-item") && <DatePickerPopUp/>}   
         </form>
      </section>
   ); 
};

export default SearchSection;