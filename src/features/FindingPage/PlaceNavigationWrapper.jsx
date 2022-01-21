import React, {useState } from 'react';
import PlaceNavigateItem from "./PlaceNavigateItem";
import luxeImg from "../../assets/images/luxe-icon.jpeg";
import farmImg from "../../assets/images/farm-icon.jpeg";
import beachImg from "../../assets/images/beach-icon.jpeg";
import skiImg from "../../assets/images/ski-icon.jpeg";

import "./PlaceNavigationWrapper.scss";
import clsx from 'clsx';
import useScroll from '../../custom-hooks/useScroll';
import Slider from 'react-slick';

const PlaceNavigationWrapper = ({initialId, onGetData}) => {
  const [active, setActive] = useState(initialId);
  const isSticky = useScroll(80);

  const handleClick = (e) => {
    const id = e.target.closest("div").id;
    setActive(id)
    onGetData(id)
  }

  const settings = {
    infinite: true,
    speed: 300,
    arrow: false,
    infinite: false,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  }

   return (
      <div className={clsx("places-navigation__wrapper", {"sticky": isSticky})}>
        <Slider {...settings}>
          <PlaceNavigateItem navId={active} id="farm_place" content="Trang trại" img={farmImg}  onClick={handleClick}/>
          <PlaceNavigateItem navId={active} id="luxe_place" content="Luxe" img={luxeImg}  onClick={handleClick}/>
          <PlaceNavigateItem navId={active} id="beach_place" content="Hướng biển" img={beachImg}  onClick={handleClick}/>
          <PlaceNavigateItem navId={active} id="ski_place" content="Đường trượt tuyết thẳng tới chỗ ở" img={skiImg}  onClick={handleClick}/>
        </Slider>
    </div>
   );
};

export default PlaceNavigationWrapper;