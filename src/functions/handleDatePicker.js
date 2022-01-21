
export const day_in_week = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"]

export const daysInMonth =  (date)  =>  {
   const {month, year} = handleGetElement(date)
   return {
      quantity: new Date(year, month +1,0).getDate(),
      firstDate: new Date(year, month ,1).getDay()
   }
}

export const handleArrangeDate = (firstDate,quantity ) => {
   const order=[];
   let date=0;

   for (let i = 1 ; i < quantity + firstDate; i++ ) {
      if (i < firstDate) order.push('');
      else {
         date++;
         order.push(date)
      }
   }

   return order 
}

export const calculateNextMonth = (date) => {
   const {month, year} = handleGetElement(date)

   const nextMonth = month < 12 ? month + 1 : 0;
   const nextYear = month < 12 ? year : year + 1;

   return new Date(nextYear,nextMonth)
}

export const calculatePrevMonth = (date) => {
   const {month, year} = handleGetElement(date)

   const prevMonth = month > 0 ? month - 1 : 11;
   const prevYear = month > 0 ? year : year -1;

   return new Date(prevYear,prevMonth)
}

export const handleCompareDate = (date1, date2) => {
   return date1.getTime() > date2.getTime()
}

export const handleCheckLessDate = (date1, date2) => {
   return date1.getTime() < date2.getTime()

}

export const handleCheckEqualsDate = (date, checkin,checkout) => {
   if (checkin && checkout) return (checkin && date.getTime() === checkin.getTime()) ||
     (checkout && date.getTime() === checkout.getTime());

   if (checkin) return (checkin && date.getTime() === checkin.getTime())
   if (checkout) return (checkout && date.getTime() === checkout.getTime())
}

export const handleCheckDateRange = (date1, date2, max) => {
   return (handleCompareDate(date1, date2) && handleCompareDate(max, date2))
}

export const handleClearStyling = (elements, cssClass,index) => {
   elements.forEach((element,i) => i !== index && element.classList.remove(cssClass))
}

export const handleAddStyling = (elements, index, cssClass) => {
   elements.forEach((element, i) => i === index && element.classList.add(cssClass))

}


export const total_millisecond_in_day = 86400000;

export function handleGetElement(dateItem) {
   const month= dateItem.getMonth();
   const year= dateItem.getFullYear();
   const date = dateItem.getDate();

   return {
      month, year, date, monthPlus: month +1,
   }
}