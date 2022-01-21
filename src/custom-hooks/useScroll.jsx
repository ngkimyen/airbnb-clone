import {useEffect, useState} from 'react';

const useScroll = (length) => {
   const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > length && !sticky ) setSticky(true) ;
    if (window.scrollY <= length ) setSticky(false) ;
  }

  useEffect ( () => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return sticky
};

export default useScroll;