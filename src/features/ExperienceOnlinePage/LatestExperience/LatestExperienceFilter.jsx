import React from "react";
import Slider from "react-slick";
import { NextButton, PrevButton } from "../../../components/UI/PrevNextButton";
import "./LatestExperienceFilter.scss";

const default_option = ["Ngày", "Quy mô nhóm", "Bộ lọc khác"];
const categories = [
  "Thích hợp cho nhóm",
  "Phù hợp với gia đình",
  "Động vật",
  "Nghệ thuật và viết lách",
  "Làm bánh",
  "Nấu ăn",
  "Khiêu vũ",
  "Đồ uống",
  "Giải trí",
  "Giải trí",
  "Thể dục thể hình",
  "Lịch sử và văn hóa",
  "Ảo thuật",
  "Âm nhạc",
  "Tác động xã hội",
  "Chăm sóc sức khỏe",
  "Vận động viên Olympic & vận động viên Paralympic",
];

const LatestExperienceFilter = () => {
  const setting = {
   className : "latest-filter__slider",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [{
      breakpoint: 745,
      settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 0,
      }
    }]
  };

  return (
    <div className="latest-filter">
      <div className="latest-filter__option">
        {default_option.map((item, index) => (
          <button key={`latest-btn-${index}`} className="latest-filter__button">
            {item}
          </button>
        ))}
      </div>
      <div className="latest-filter__slide-wrap">
        <Slider {...setting}>
          {categories.map((item, index) => (
            <div key={`category${index}`} className="latest-filter__category">
              <div>{item}</div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default LatestExperienceFilter;
