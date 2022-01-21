import clsx from "clsx";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { handleCheckEqualsDate, handleCompareDate, total_millisecond_in_day } from "../../../../../functions/handleDatePicker";
import SearchContext from "../../../../../store/SearchContext";
import "./DateItem.scss";

const DateItem = ({ text, index, minDate, date, onSelect, onRemove }) => {
  const [state] = useContext(SearchContext);
  const { checkInDate, checkOutDate } = state;

  const dateItem = text !== "" && new Date(date.getFullYear(), date.getMonth(), +text);

  const selectedClass = "date-item--selected";
  const itemClass = "date-item";
  const activeClass = "date-item--active";

  const handleSelect = (e) => {
    if (e.target.classList.contains(activeClass)) {
      onSelect(dateItem, index, itemClass, selectedClass);
    }
  };

  const onDateRange = checkInDate && checkOutDate && dateItem && handleCompareDate(dateItem, checkInDate) && handleCompareDate(checkOutDate, dateItem);
  const expired =
    text !== "" &&
    dateItem.getTime() < minDate.getTime() - total_millisecond_in_day;

  const selected = dateItem && handleCheckEqualsDate(dateItem, checkInDate, checkOutDate);

  return (
    <div
      className={clsx(itemClass, {
        [activeClass]: !expired && text !== "",
        "date-item--expired": expired,
        "date-item--selected": selected,
        "date-item--range" : onDateRange
      })}
      onClick={!expired ? handleSelect : undefined}
    >
      {text}
    </div>
  );
};

export default memo(DateItem);
