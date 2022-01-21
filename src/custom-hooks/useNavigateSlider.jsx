import React, { useEffect, useState } from 'react';

const useNavigateSlider = (parentNode, condition = false) => {
   const [nextBtn, setNextBtn] = useState();
   const [prevBtn, setPrevBtn] = useState();
   const [changed, setChanged] = useState(false);

   useEffect(() => { 
      if (parentNode.current) {
        const btnElements = parentNode.current.querySelectorAll(".slick-arrow");
         setPrevBtn(btnElements[0]);
         setNextBtn(btnElements[1]);
      }
      setChanged(false);
     }, [parentNode.current, changed, condition]);
  
     const handleChange = () => {
        setChanged(true);
     }

   return {
      nextBtn,prevBtn,handleChange
   }

};

export default useNavigateSlider;