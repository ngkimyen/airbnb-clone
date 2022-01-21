import React from 'react';

const useConvertNumber = (number) => {
   const str = number.toString();

   if (str.indexOf('.') !== -1) 
      return str.replace(/\./g, ',') 
   else return str + ",0"
   
};

export default useConvertNumber;