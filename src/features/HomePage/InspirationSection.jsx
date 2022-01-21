import React, { useRef } from "react";
import Slider from "react-slick";
import SectionHeading from "../../components/UI/SectionHeading";
import SectionHeader from "../ExperienceOnlinePage/LatestExperience/SectionHeader";
import InspirationItem from "./InspirationItem";
import useNavigateSlider from "../../custom-hooks/useNavigateSlider";
import "./InspirationSection.scss";

const inspiration_content = [
  {
    location: `Thành phố 
    Móng Cái`,
    distance: "227 km",
    image:
      "https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=720",
    color: "rgb(217, 59, 48)",
  },
  {
    location: "Hà Nội",
    distance: "2 km",
    image:
      "https://a0.muscache.com/im/pictures/0d4ae5be-37d9-400c-917a-de52a034fe4c.jpg?im_w=720",
    color: "rgb(204, 45, 74)",
  },
  {
    location: `Thành phố 
    Hạ Long
    `,
    distance: "124 km",
    image:
      "https://a0.muscache.com/im/pictures/0538dab4-a0fc-4035-b6b2-40fa3532ee7b.jpg?im_w=720",
    color: "rgb(188, 26, 110)",
  },
  {
    location: "Mỹ Đình",
    distance: "8 km",
    image:
      "https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=720",
    color: "rgb(222, 49, 81)",
  },
];

const   InspirationSection = () => {
  const sectionRef = useRef();
  const { nextBtn, prevBtn, handleChange } = useNavigateSlider(
    sectionRef,
    window.innerWidth <= 950
  );

  const settings = {
    speed: 400,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section
      className="inspiration-section u-padding u-padding-top-48 u-padding-bottom-48"
      ref={sectionRef}
    >
      <SectionHeader
        heading="Cảm hứng cho chuyến đi tiếp theo của bạn"
        isBiggestHeading
        cssClass="u-padding-bottom-48"
        nextBtnElement={nextBtn}
        prevBtnElement={prevBtn}
        onChange={handleChange}
      />

      <div className="inspiration-section__list">
        <Slider {...settings}>
          {inspiration_content.map((item, index) => (
            <InspirationItem key={`inspiration-${index}`} data={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InspirationSection;
