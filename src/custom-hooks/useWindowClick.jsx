import {useEffect } from 'react';

const useWindowClick = (handleClick, condition = false) => {

   useEffect( () => {
      window.addEventListener("click", handleClick)

      return () => window.removeEventListener("click", handleClick)
   }, [condition])

};

export default useWindowClick;