import React, { useState } from 'react';

const usePickDate = () => {
   const [checkInDate, setCheckInDate] = useState(null);
   const [checkOutDate, setCheckOutDate] = useState(null);

   const handleCheckInDate = (date) => {
      setCheckInDate(date);
      setCheckOutDate(null);
    };
  
    const handleCheckOutDate = (date) => {
      setCheckOutDate(date);
    };

   return {
      checkInDate,
      handleCheckInDate,
      checkOutDate,
      handleCheckOutDate
   }
};

export default usePickDate;