import React from "react";
import BannerContainer from "../../components/UI/BannerContainer";
import ExperienceImg from "../../assets/images/experience.jpeg";
import ExperienceOnlineImg from "../../assets/images/experience-online.jpeg";
import SectionHeading from "../../components/UI/SectionHeading";
import "./ExperienceSection.scss";
import SectionHeader from "../ExperienceOnlinePage/LatestExperience/SectionHeader";

const ExperienceSection = () => {
  return (
    <section className="u-padding experience-section u-padding-bottom-96 u-padding-top-48">
      <div className="u-wrapper">
      <SectionHeader heading="Khám phá Trải nghiệm Airbnb" isBiggestHeading cssClass="u-padding-bottom-48"/>
      <div className="experience-section__container">
      <BannerContainer
        cssClass=" u-align-left"
        heading={`Những điều
        nên trải nghiệm 
        trong chuyến đi
        của bạn`}
        headingType = "big "
        btnText="Trải nghiệm"
        link="/experience"
        url={ExperienceImg}
      />
      <BannerContainer
        cssClass=" u-align-left"
        heading={`Những điều nên 
        trải nghiệm tại nhà`}
        headingType = "big "
        btnText="Trải nghiệm trực tuyến"
        link="/experience/online"
        url={ExperienceOnlineImg}
      />
      </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
