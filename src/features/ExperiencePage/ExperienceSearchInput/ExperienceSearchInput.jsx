import React from 'react';
import "./ExperienceSearchInput.scss";
import SearchBtn from "../../../components/UI/SearchBtn";

const ExperienceSearchInput = ({onClick}) => {
   return (
      <div className="experience-search" onClick={onClick}>
         <span id="experience-nearby" className="experience-search__nearby">Lân cận</span>
         <span id="experience-date"className="experience-search__date">Thêm ngày</span>
         <SearchBtn />
      </div>
   );
};

export default ExperienceSearchInput;