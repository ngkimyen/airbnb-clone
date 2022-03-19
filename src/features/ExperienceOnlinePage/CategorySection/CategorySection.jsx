import React, { useRef } from "react";
import Slider from "react-slick";
import TourItem from "../../../components/TourItem/TourItem";
import useNavigateSlider from "../../../custom-hooks/useNavigateSlider";
import SectionHeader from "../LatestExperience/SectionHeader";
import "./CategorySection.scss";

const CategorySection = ({ heading, data, id }) => {
  const settings = {
    dot: false,
    slidesToScroll: 2,
    slidesToShow: 6,
    infinite: true,
    className: "category-section__slider",
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 5,
        }
      },{
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
        }
      },{
        breakpoint: 745,
        settings: {
          slidesToShow: 2.05,
          arrows: false
        }
      }
    ]
  };
  const sectionRef = useRef();
  const { nextBtn, prevBtn, handleChange } = useNavigateSlider(sectionRef);

  return (
    <div id={id} className="category-section" ref={sectionRef}>
        <SectionHeader
          heading={heading}
          description={data.length}
          nextBtnElement={nextBtn}
          prevBtnElement={prevBtn}
          onChange={handleChange}
        />
        <Slider {...settings}>
          {data.map((item, index) => (
            <TourItem key={`${item.id}-${index}`} data={item} />
          ))}
        </Slider>

    </div>
  );
};

export default CategorySection;
