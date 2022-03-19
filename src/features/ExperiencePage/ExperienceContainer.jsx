import React from 'react';
import TourItem from "../../components/TourItem/TourItem";
import "./ExperienceContainer.scss";
import LinkButton from "../../components/UI/LinkButton";

const ExperienceContainer = ({data}) => {
   return (
      <div className="experience-container">
         <div className="container u-padding">
            <p >{data.length} trải nghiệm</p>
            <h2 className="experience-container__heading">Trải nghiệm gần bạn</h2>
            <p className="experience-container__note">Kiểm tra lại quy định hạn chế đi lại trong đại dịch COVID-19 trước khi đặt.</p>

            <div className="experience-container__tours">

               {data.map( (item, index) => <TourItem key={`experience-${item.id}-${index}`} data={item} isExperienceTour/>)}
            </div>
            <LinkButton isDark text="Xem thêm"/>
         
         </div>
      </div>
   );
};

export default ExperienceContainer;