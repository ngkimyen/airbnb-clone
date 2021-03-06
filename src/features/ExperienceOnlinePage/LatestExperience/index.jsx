import React, {useRef} from "react";
import Slider from "react-slick";
import experience_online_list from "../ExperienceOnline.js";
import LatestExperienceItem from "./LatestExperienceItem";
import SectionHeader from "./SectionHeader.jsx";
import useNavigateSlider from "../../../custom-hooks/useNavigateSlider.jsx";

import "./LatestExperience.scss";
import LatestExperienceFilter from "./LatestExperienceFilter.jsx";

const LatestExperience = () => {
  const data = experience_online_list.latest_gallery;
  const sectionRef = useRef();

   const {nextBtn, prevBtn, handleChange} = useNavigateSlider(sectionRef)

  const setting = {
    dots: false,
    infinite: false,
    draggable: false,
    arrow: false,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className="latest-experience" ref={sectionRef}>
      <div className="container u-padding">
        <SectionHeader
          heading="Trải nghiệm mới trong tuần này"
          isBigHeading
          nextBtnElement={nextBtn}
          prevBtnElement={prevBtn}
          onChange={handleChange}
          cssClass=""
        />
        <div className="latest-experience__slider">
          <Slider {...setting}>
          {data.map((item, index) => (
              <LatestExperienceItem
                key={`latest-${index}-${item.id}`}
                data={item}
              />
          ))}
          </Slider>
        </div>

        <LatestExperienceFilter />
        </div>
    </div>
  );
};

export default LatestExperience;
