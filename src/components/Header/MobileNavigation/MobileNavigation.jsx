import React, { useEffect, useRef, useState } from "react";
import {useTransition, animated} from "react-spring";
import MobileNavigateItem from "./MobileNavigateItem";
import SearchIcon from "../../UI/SearchIcon";
import UserIcon from "../../UI/UserIcon";
import HeartIcon from "../../UI/HeartIcon";
import "./MobileNavigation.scss";

const MobileNavigation = () => {
  const scroll = useRef(0);
  const [show, setShow] = useState(true);

  const transition = useTransition( show, {
      from: {y: 100, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: 100, opacity: 0},
  })

  const handleScroll = () => {

    if (window.scrollY > 80 && window.scrollY > scroll.current) {
      setShow(false);
      scroll.current = window.scrollY;
   } else if (window.scrollY < scroll.current) {
      setShow(true); 
      scroll.current = window.scrollY;
   }   

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {transition((style,item) => item && (
        <animated.div className="mobile-navigation" style={style}>
          <MobileNavigateItem
            svg={<SearchIcon />}
            heading="Khám phá"
            isStroke
            isActive
          />
          <MobileNavigateItem
            svg={<HeartIcon />}
            heading="Yêu thích"
            isStroke
          />
          <MobileNavigateItem svg={<UserIcon noFill />} heading="Đăng nhập" />
        </animated.div>
      ))}
    </>
  );
};

export default MobileNavigation;
