import React, { forwardRef, useContext, useRef } from "react";
import {
  NextButton,
  PrevButton,
} from "../../../../../components/UI/PrevNextButton";
import {
  daysInMonth,
  day_in_week,
  handleArrangeDate,
  handleCheckEqualsDate,
  handleCheckLessDate,
  handleCompareDate,
  handleGetElement,
} from "../../../../../functions/handleDatePicker";
import SearchContext from "../../../../../store/SearchContext";
import "./Calendar.scss";
import DateItem from "./DateItem";

const Calendar = forwardRef( ({ minDate, date, checkin, checkout, onNext, onPrev} ,ref) => {
  const [state,dispatch] = useContext(SearchContext);
  const {checkInDate, checkOutDate, navId} = state;

  const checkInRef = useRef();
  const checkOutRef = useRef();

  const {monthPlus : month, year} = handleGetElement(date);

  const { quantity, firstDate } = daysInMonth(date);
  const dateArranged = handleArrangeDate(firstDate, quantity);

  const handleSelectDate = (date) => {
    
    if (handleCheckEqualsDate(date, checkInDate)) return dispatch({type: "CLEAR_CHECK_IN_DATE"});
    else if (handleCheckEqualsDate(date, checkOutDate)) return dispatch({type: "CLEAR_CHECK_OUT_DATE"})

    if (checkInDate && checkOutDate) {
      if (handleCompareDate(checkOutDate, date) && handleCompareDate(date, checkInDate)) {
        return dispatch({type: "SET_CHECK_OUT_DATE", date: date});
      } 
    }

    if (checkin)  {
      if (checkInDate) 
        if (handleCompareDate(date, checkInDate)) {
          dispatch({type: "SET_CHECK_OUT_DATE", date: date})
          return
        } 
        else {
          dispatch({type: "SET_CHECK_IN_DATE", date: date});
          dispatch({type: "CLEAR_CHECK_OUT_DATE"});
        }
        
      dispatch({type: "SET_CHECK_IN_DATE", date: date});
      navId !== "experience" && dispatch({type: "SET_ACTIVE_SEARCH_ITEM", id: "checkout-item"});
      return

    }

    if (checkout) { 
      if (!checkInDate) {
        dispatch({type: "SET_CHECK_IN_DATE", date: date});
        navId !== "experience" && dispatch({type: "SET_ACTIVE_SEARCH_ITEM", id: "checkout-item"});
        return
      } else if (handleCheckLessDate(date, checkInDate)) {
        dispatch({type: "SET_CHECK_IN_DATE", date: date});
        dispatch({type: "CLEAR_CHECK_OUT_DATE"});
        return
      } 
      dispatch({type: "SET_CHECK_OUT_DATE", date: date});
    }
  }

  const handleRemoveSelectDate = () => {
    if (checkin) dispatch({type:"CLEAR_CHECK_IN_DATE"})
    else if (checkout) dispatch({type: "CLEAR_CHECK_OUT_DATE"})
  }

  return (
    <div className="calendar ">
      <div className="calendar__header">
        {checkin ? (
          <PrevButton onClick={onPrev} />
        ) : (
          checkout && <NextButton onClick={onNext} />
        )}
        <h2 className="calendar__heading">
          tháng {month} năm {year}
        </h2>
      </div>
      <div className="calendar__container u-calendar">
        <ul className="calendar__list">
          {day_in_week.map((day) => (
            <li key={day} className="calendar__day">
              {day}
            </li>
          ))}
        </ul>
        <div className="calendar__date" ref={ref}>
          {dateArranged.map((dateText, i) => (
            <DateItem
              key={`${checkin ? "checkin" : "checkout"}-date-${i}`}
              index={i}
              text={dateText}
              date={date}
              minDate={minDate.current}
              onSelect={handleSelectDate}
              onRemove={handleRemoveSelectDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Calendar;
