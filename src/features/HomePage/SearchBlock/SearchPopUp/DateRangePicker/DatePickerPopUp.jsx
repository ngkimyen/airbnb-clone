import React, { memo, useRef, useState } from "react";
import {
  calculateNextMonth,
  calculatePrevMonth,
} from "../../../../../functions/handleDatePicker";
import Calendar from "./Calendar";
import "./DatePicker.scss";

const DatePickerPopUp = () => {
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef();
  const minDate = useRef(new Date());
  const [nextDate, setNextDate] = useState(calculateNextMonth(date));

  const checkInRef = useRef();
  const checkOutRef = useRef();

  const handleNextMonth = (e) => {
    e.preventDefault();
    setDate(nextDate);
    setNextDate(calculateNextMonth(nextDate));
  };

  const handlePreviousMonth = (e) => {
    e.preventDefault();
    setDate(calculatePrevMonth(date));
    setNextDate(date);
  };


  return (
    <section className="datepicker-popup u-pop-up">
      <Calendar
        minDate={minDate}
        date={date}
        checkin
        ref={checkInRef}
        onPrev={handlePreviousMonth} 
      />
      <Calendar
        minDate={minDate}
        date={nextDate}
        checkout
        ref={checkOutRef}
        onNext={handleNextMonth}
      />
    </section>
  );
};

export default memo(DatePickerPopUp);
